"use client";

import Link from "next/link";
import { useModal } from "@/context/ModalContext";

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="#000" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#000"
      aria-hidden="true"
    >
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.105v1.561h.046c.433-.82 1.49-1.685 3.066-1.685 3.28 0 3.884 2.158 3.884 4.966v6.61zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM6.955 20.452H3.72V9h3.235v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navLinks = [
  { label: "L'AGENCE", href: "/fr/agence/" },
  { label: "TALENTS", href: "/fr/talents/" },
  { label: "MENTIONS LÉGALES", href: "/fr/mentions-legales/" },
  { label: "LE SAVOIR-FAIRE", href: "/fr/le-savoir-faire/" },
  { label: "CONTACT", href: "/fr/contact/" },
];

const dinPro = '"Din Pro", sans-serif';

export function Footer() {
  const { setOpen } = useModal();
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "60px 80px",
        display: "flex",
        alignItems: "flex-start",
        gap: "60px",
        position: "relative",
        overflow: "hidden",
        color: "#f5f0ea",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.55,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4" type="video/mp4" />
      </video>

      {/* Newsletter section */}
      <div style={{ width: "300px", flexShrink: 0, position: "relative", zIndex: 1 }}>
        <h2
          style={{
            fontFamily: dinPro,
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "3px",
            color: "#f5f0ea",
            textTransform: "uppercase",
            marginBottom: "24px",
            margin: 0,
            marginBlockEnd: "24px",
          }}
        >
          DIAGNOSTIC
        </h2>

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "14px",
            color: "rgba(245,240,234,0.55)",
            margin: "0 0 24px",
            lineHeight: 1.6,
          }}
        >
          Audit de votre stratégie de marque luxe en 48h.
        </p>

        <div style={{ marginTop: "8px" }}>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="liquid-btn-gold"
            style={{
              borderRadius: "6px",
              padding: "16px 32px",
              border: "none",
              fontFamily: dinPro,
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Demander un diagnostic gratuit →
          </button>
        </div>

        {/* Social icons */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "12px",
          }}
        >
          <a
            href="https://www.instagram.com/omediaparis/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Omedia Paris"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/omedia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Omedia"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* Middle: nav links */}
      <nav
        style={{
          width: "180px",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: dinPro,
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "rgba(245,240,234,0.6)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0ea"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,234,0.6)"; }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right: address */}
      <address
        style={{
          width: "240px",
          flexShrink: 0,
          fontFamily: dinPro,
          fontSize: "13px",
          color: "rgba(245,240,234,0.6)",
          lineHeight: 1.8,
          fontStyle: "normal",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{ margin: 0 }}>137 BOULEVARD HAUSSMANN 75008 PARIS</p>
        <a
          href="tel:+3344341040"
          style={{ color: "rgba(245,240,234,0.6)", textDecoration: "none", display: "block" }}
        >
          +33 | 44 34 10 40
        </a>
        <a
          href="mailto:contact@omedia.fr"
          style={{ color: "rgba(201,169,110,0.8)", textDecoration: "none", display: "block" }}
        >
          contact@omedia.fr
        </a>
      </address>
    </footer>
  );
}
