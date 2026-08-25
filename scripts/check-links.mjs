// Dev-only tool: scans src/**/*.{ts,tsx} for hardcoded https:// URLs and
// checks each one responds. Catches stale/dead external links (maps,
// social, virtual tour embeds) that the bundler has no way to verify,
// since it only cares that local imports resolve. Not wired into
// `npm run build` or `npm run dev` — a third-party site being briefly
// down shouldn't fail a deploy. Run manually with `npm run check-links`.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = new URL("../src", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const URL_PATTERN = /https?:\/\/[^\s"'<>)]+/g;
const TIMEOUT_MS = 8000;

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectFiles(full);
      if (/\.(ts|tsx)$/.test(entry.name)) return [full];
      return [];
    })
  );
  return files.flat();
}

async function extractUrls() {
  const files = await collectFiles(SRC_DIR);
  const urls = new Set();
  for (const file of files) {
    const text = await readFile(file, "utf-8");
    for (const match of text.matchAll(URL_PATTERN)) {
      urls.add(match[0].replace(/[.,;]+$/, ""));
    }
  }
  return [...urls].sort();
}

async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: controller.signal });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    }
    return { url, ok: res.ok, status: res.status };
  } catch (err) {
    return { url, ok: false, status: null, error: err.message };
  } finally {
    clearTimeout(timer);
  }
}

const urls = await extractUrls();
if (urls.length === 0) {
  console.log("No hardcoded https:// URLs found under src/.");
  process.exit(0);
}

console.log(`Checking ${urls.length} URL(s)...\n`);
const results = await Promise.all(urls.map(checkUrl));

let hasFailure = false;
for (const result of results) {
  if (result.ok) {
    console.log(`  OK   ${result.status}  ${result.url}`);
  } else {
    hasFailure = true;
    console.log(`  FAIL ${result.status ?? "ERR"}  ${result.url}${result.error ? `  (${result.error})` : ""}`);
  }
}

console.log("");
if (hasFailure) {
  console.log("Some links failed — verify manually before assuming they're broken (some sites block HEAD/bot requests).");
  process.exit(1);
} else {
  console.log("All links responded OK.");
}
