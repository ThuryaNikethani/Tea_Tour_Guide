import { useId, type ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

type QrSignCardProps = {
  title: string;
  /** Lines under the title, styled like the plant signs' tagline. */
  tagline: ReactNode;
  url: string;
  footer: string;
  /** Topic photo: shown crisp in the curved header and softened behind the rest of the card. */
  backgroundSrc?: string;
  /** Optional element in the top-left corner (e.g. the station number). */
  badge?: ReactNode;
  /** Optional screen-only element (e.g. the scissors cut mark). */
  corner?: ReactNode;
  className?: string;
};

// The header's bottom edge, in a 100-wide coordinate space (the card is 145 tall).
const HEADER_CURVE = "C72 57 30 57 0 46";

/**
 * A printable QR card styled after the estate's on-site plant signs (e.g. the
 * Ceylon Olive sign): the topic's photo shown large and clear in a curved header so
 * visitors recognise the stop at a glance, the same photo softened behind the rest,
 * an outlined title on a green brush stroke, a green-framed QR with the logo in the
 * middle, and a green name pill along the bottom.
 */
export function QrSignCard({ title, tagline, url, footer, backgroundSrc, badge, corner, className = "" }: QrSignCardProps) {
  const clipId = `qr-sign-clip-${useId().replace(/:/g, "")}`;

  return (
    <div className={`qr-sign ${className}`}>
      {backgroundSrc ? (
        <img src={backgroundSrc} alt="" aria-hidden="true" className="qr-sign-photo" />
      ) : (
        <div className="qr-sign-photo qr-sign-photo-fallback" aria-hidden="true" />
      )}
      <div className="qr-sign-tint" aria-hidden="true" />

      <svg className="qr-sign-header" viewBox="0 0 100 60" aria-hidden="true">
        <defs>
          <clipPath id={clipId}>
            <path d={`M0 0 H100 V36 ${HEADER_CURVE} Z`} />
          </clipPath>
        </defs>
        {/* Soft shadow under the header edge so the clear photo lifts off the background. */}
        <path d={`M100 36 ${HEADER_CURVE}`} fill="none" stroke="#000" strokeOpacity="0.25" strokeWidth="2.4" transform="translate(0 1)" />
        {backgroundSrc ? (
          <image href={backgroundSrc} x="0" y="0" width="100" height="60" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${clipId})`} />
        ) : (
          <rect x="0" y="0" width="100" height="60" fill="#8fc46a" clipPath={`url(#${clipId})`} />
        )}
        <path d={`M100 36 ${HEADER_CURVE}`} fill="none" stroke="#fff" strokeWidth="0.9" />
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
