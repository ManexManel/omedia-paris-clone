"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";

const navLinks = [
  { label: "ACCUEIL", anchor: null },
  { label: "L'AGENCE", anchor: "a-propos" },
  { label: "EXPERTISES", anchor: "strategie" },
  { label: "PROJETS", anchor: "branding-naming" },
  { label: "OMEDIATALK", anchor: "brand-content" },
  { label: "TALENTS", anchor: "social" },
  { label: "CONTACT", anchor: "edition" },
];

function scrollToAnchor(anchor: string | null) {
  if (!anchor) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setOpen } = useModal();

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300"
        style={{
          zIndex: 1000,
          height: "80px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Logo */}
        <div className="pl-10 flex items-center">
          <button
            onClick={() => { scrollToAnchor(null); setMenuOpen(false); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Accueil"
          >
            <Image
              src="/images/logo-omedia-blanc.png"
              alt="Omedia Paris"
              width={160}
              height={60}
              style={{ height: "60px", width: "auto" }}
              priority
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToAnchor(link.anchor)}
              className="text-white uppercase tracking-[2px] text-[12px] font-light hover:opacity-70 transition-opacity"
              style={{ fontFamily: "Avenir, sans-serif", background: "none", border: "none", cursor: "pointer" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Bouton Diagnostic */}
        <button
          onClick={() => setOpen(true)}
          className="hidden md:inline-flex liquid-btn"
          style={{
            fontFamily: "Avenir, sans-serif",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "9px 20px",
            cursor: "pointer",
            border: "none",
            color: "#fff",
          }}
        >
          DIAGNOSTIC
        </button>

        {/* Language Switcher */}
        <div
          className="hidden md:flex items-center gap-2 pr-10"
          style={{ fontFamily: "Avenir, sans-serif" }}
        >
          <button
            onClick={() => scrollToAnchor(null)}
            className="text-white uppercase tracking-[2px] text-[12px] font-light hover:opacity-70 transition-opacity"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            FR
          </button>
          <span className="text-white text-[12px] font-light">|</span>
          <span className="text-white uppercase tracking-[2px] text-[12px] font-light opacity-40">EN</span>
        </div>

        {/* Burger button (desktop + mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] pr-6 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          style={{ zIndex: 1001 }}
        >
          <span
            className={`block w-6 h-[1px] bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-6 h-[1px] bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1px] bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </header>

      {/* Full-screen overlay menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 998,
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
          pointerEvents: menuOpen ? "all" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            onClick={() => { scrollToAnchor(link.anchor); setMenuOpen(false); }}
            style={{
              fontFamily: '"Din Pro", sans-serif',
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              color: "#f5f0ea",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px 0",
              lineHeight: 1.1,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#c9a96e"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#f5f0ea"; }}
          >
            {link.label}
          </button>
        ))}

        {/* Diagnostic CTA in overlay */}
        <button
          onClick={() => { setOpen(true); setMenuOpen(false); }}
          className="liquid-btn-gold"
          style={{
            marginTop: "40px",
            fontFamily: '"Din Pro", sans-serif',
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "16px 36px",
            border: "none",
            cursor: "pointer",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 0.5s ease ${navLinks.length * 0.08 + 0.1}s, transform 0.5s ease ${navLinks.length * 0.08 + 0.1}s`,
          }}
        >
          DIAGNOSTIC GRATUIT →
        </button>

        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "28px",
            right: "28px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(245,240,234,0.7)",
            fontSize: "18px",
            lineHeight: 1,
          }}
          aria-label="Fermer le menu"
        >
          ✕
        </button>
      </div>
    </>
  );
}
