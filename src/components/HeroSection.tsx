"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", background: "#000" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/home2024-video-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/showreel.webm" type="video/webm" />
      </video>

      {/* Calque sombre Phase 1.3 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.4)", zIndex: 1 }}
      />

      {/* Text Overlay */}
      <div className="absolute" style={{ bottom: "80px", left: "80px", zIndex: 2 }}>
        <p
          className="text-white uppercase mb-5"
          style={{
            fontFamily: "Avenir, sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            letterSpacing: "3px",
          }}
        >
          SHOWREEL Omedia Paris 24
        </p>

        <Link
          href="/fr/armanibeaute-cremanera"
          className="text-white uppercase inline-block no-underline liquid-btn"
          style={{
            fontFamily: "Avenir, sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            letterSpacing: "2px",
            padding: "12px 28px",
          }}
        >
          DÉCOUVRIR LA CAMPAGNE
        </Link>
      </div>
    </section>
  );
}
