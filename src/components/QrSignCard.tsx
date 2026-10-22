import type { ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

type QrSignCardProps = {
  title: string;
  /** Lines under the title, styled like the plant signs' tagline. */
  tagline: ReactNode;
  url: string;
  footer: string;
  /** Topic photo filling the card behind everything else. */
  backgroundSrc?: string;
  /** Optional element in the top-left corner (e.g. the station number). */
  badge?: ReactNode;
  /** Optional screen-only element (e.g. the scissors cut mark). */
  corner?: ReactNode;
  className?: string;
};

/**
 * A printable QR card styled after the estate's on-site plant signs (e.g. the
 * Ceylon Olive sign): the topic's photo full-bleed with a curved white line under
 * the header, an outlined title on a green brush stroke, a green-framed QR with the
 * logo in the middle, and a green name pill along the bottom.
 */
export function QrSignCard({ title, tagline, url, footer, backgroundSrc, badge, corner, className = "" }: QrSignCardProps) {
  return (
    <div className={`qr-sign ${className}`}>
      {backgroundSrc ? (
        <img src={backgroundSrc} alt="" aria-hidden="true" className="qr-sign-photo" />
      ) : (
        <div className="qr-sign-photo qr-sign-photo-fallback" aria-hidden="true" />
      )}

      {/* Lightly tint everything below the curve so the outlined text stays readable over any photo. */}
      <svg className="qr-sign-curve" viewBox="0 0 100 145" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="qr-sign-tint" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0f2a10" stopOpacity="0.18" />
            <stop offset="1" stopColor="#0f2a10" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path d="M0 30 C30 42 70 40 100 20 V145 H0 Z" fill="url(#qr-sign-tint)" />
        <path d="M0 30 C30 42 70 40 100 20" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="0.7" />
      </svg>

      {corner}
      {badge && <div className="qr-sign-badge">{badge}</div>}

      <div className="qr-sign-body">
        <div className="qr-sign-title-wrap">
          <span className="qr-sign-brush" aria-hidden="true" />
          <h2 className="qr-sign-title" data-long={title.length > 16 || undefined}>
            {title}
          </h2>
        </div>

        <div className="qr-sign-tagline">{tagline}</div>

        <div className="qr-sign-qr">
          <QRCodeSVG
            value={url}
            size={512}
            level="H"
            fgColor="#111"
            style={{ width: "100%", height: "auto", display: "block" }}
            imageSettings={{ src: logo, height: 104, width: 104, excavate: true }}
          />
        </div>

        <p className="qr-sign-url">{url}</p>
      </div>

      <div className="qr-sign-pill">
        <span className="qr-sign-pill-logo">
          <img src={logo} alt="" />
        </span>
        <span className="qr-sign-pill-text">{footer}</span>
      </div>
    </div>
  );
}
