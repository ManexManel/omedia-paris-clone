import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Omedia Paris — Agence conseil en Communication Luxe";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Gold grain texture via radial gradients */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(11,19,43,0.6) 0%, transparent 60%)",
          }}
        />

        {/* Top: logo text + tagline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "6px",
                color: "rgba(245,240,234,0.4)",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              OMEDIA
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "6px",
                color: "rgba(245,240,234,0.4)",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              PARIS
            </span>
          </div>

          {/* Gold pill badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              border: "1px solid rgba(201,169,110,0.3)",
              borderRadius: "100px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "3px",
                color: "#c9a96e",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              DEPUIS 1994
            </span>
          </div>
        </div>

        {/* Center: main headline */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontSize: "96px",
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 0.95,
              color: "#f5f0ea",
              fontFamily: "sans-serif",
            }}
          >
            Conjuguer
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 0.95,
              color: "#f5f0ea",
              fontFamily: "sans-serif",
            }}
          >
            luxe &amp;
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 0.95,
              color: "#c9a96e",
              fontFamily: "sans-serif",
            }}
          >
            créativité.
          </span>
        </div>

        {/* Bottom: description + gold line */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {/* Gold divider */}
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "#c9a96e",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 300,
                color: "rgba(245,240,234,0.55)",
                letterSpacing: "0.5px",
                fontFamily: "sans-serif",
              }}
            >
              Agence conseil en Communication Luxe · Paris
            </span>
          </div>

          <span
            style={{
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "2px",
              color: "rgba(245,240,234,0.25)",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            omediaparis.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
