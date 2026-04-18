"use client";

import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export interface SectionMiniFooterProps {
  services: string[];
  dark?: boolean;
}

export function SectionMiniFooter({ services, dark = false }: SectionMiniFooterProps) {
  const textColor = dark ? "rgba(245,240,234,0.55)" : "#000";
  const borderColor = dark ? "rgba(255,255,255,0.08)" : "#e5e5e5";
  const bgColor = dark ? "rgba(255,255,255,0.03)" : "#ffffff";

  const labelStyle: CSSProperties = {
    fontFamily: '"Din Pro", sans-serif',
    fontSize: "11px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "12px",
    color: dark ? "rgba(245,240,234,0.35)" : "#888",
  };

  const bodyStyle: CSSProperties = {
    fontFamily: '"Din Pro", sans-serif',
    fontSize: "13px",
    fontWeight: 400,
    color: textColor,
    lineHeight: 1.8,
    margin: 0,
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${borderColor}`,
        padding: "40px 80px",
        display: "flex",
        alignItems: "flex-start",
        gap: "40px",
        background: bgColor,
      }}
    >
      {/* Col 1 — Logo */}
      <div style={{ width: "180px", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dark ? "/images/logo-omedia-blanc.png" : "/images/logo-omedia.png"}
          alt="Omedia Paris"
          style={{ height: "40px", width: "auto" }}
        />
      </div>

      {/* Col 2 — Services en grille de cartes */}
      <div style={{ flex: 1 }}>
        <p style={labelStyle}>SERVICES</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "8px",
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service} label={service} dark={dark} />
          ))}
        </div>
      </div>

      {/* Col 3 — Adresse */}
      <div style={{ width: "180px", flexShrink: 0 }}>
        <p style={labelStyle}>ADRESSE</p>
        <p style={bodyStyle}>
          137 BOULEVARD HAUSSMANN
          <br />
          75008 PARIS
        </p>
      </div>

      {/* Col 4 — Contact */}
      <div style={{ width: "180px", flexShrink: 0 }}>
        <p style={labelStyle}>CONTACT</p>
        <p style={{ ...bodyStyle, marginBottom: "4px" }}>+33 | 44 34 10 40</p>
        <a
          href="mailto:contact@omedia.fr"
          style={{ ...bodyStyle, display: "block", textDecoration: "none", color: dark ? "#c9a96e" : "#000" }}
        >
          contact@omedia.fr
        </a>
        <div style={{ display: "flex", gap: "12px", marginTop: "12px", color: textColor }}>
          <a href="https://www.instagram.com/omediaparis" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: textColor, display: "flex" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/omedia-paris" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: textColor, display: "flex" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ── Card individuelle ── */
function ServiceCard({ label, dark }: { label: string; dark: boolean }) {
  const { setOpen } = useModal();

  const defaultBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const defaultBorder = dark ? "rgba(201,169,110,0.12)" : "rgba(0,0,0,0.08)";
  const textColor = dark ? "rgba(245,240,234,0.7)" : "#000";

  return (
    <button
      onClick={() => setOpen(true)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        background: defaultBg,
        border: `1px solid ${defaultBorder}`,
        borderRadius: "4px",
        padding: "10px 12px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        fontFamily: '"Din Pro", sans-serif',
        fontSize: "10px",
        fontWeight: 400,
        textTransform: "uppercase" as const,
        letterSpacing: "1px",
        lineHeight: 1.4,
        color: textColor,
        textAlign: "left",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "rgba(201,169,110,0.4)";
        el.style.background = "rgba(201,169,110,0.06)";
        el.style.transform = "scale(1.01)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = defaultBorder;
        el.style.background = defaultBg;
        el.style.transform = "scale(1)";
      }}
    >
      <Check size={10} style={{ color: "rgba(201,169,110,0.5)", flexShrink: 0, marginTop: "2px" }} />
      {label}
    </button>
  );
}
