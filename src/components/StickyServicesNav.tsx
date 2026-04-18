"use client";

import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "À PROPOS", href: "#a-propos", id: "a-propos" },
  { label: "STRATÉGIE DE MARQUE", href: "#strategie", id: "strategie" },
  { label: "BRANDING", href: "#branding-naming", id: "branding-naming" },
  { label: "IMAGE", href: "#image", id: "image" },
  { label: "BRAND CONTENT", href: "#brand-content", id: "brand-content" },
  { label: "DIGITAL", href: "#digital", id: "digital" },
  { label: "SOCIAL MEDIA & INFLUENCE", href: "#social", id: "social" },
  { label: "EDITION", href: "#edition", id: "edition" },
];

export function StickyServicesNav() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        background: "rgba(10,10,10,0.4)",
        backdropFilter: "blur(24px) saturate(200%)",
        WebkitBackdropFilter: "blur(24px) saturate(200%)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 160px",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navItems.map(({ label, href, id }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={href}
                style={{
                  fontFamily: '"Din Pro", sans-serif',
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#c9a96e" : "rgba(255,255,255,0.45)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  padding: "0 15px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  height: "34px",
                  margin: "0 2px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "4px",
                  background: isActive ? "rgba(201,169,110,0.12)" : "transparent",
                  border: isActive ? "1px solid rgba(201,169,110,0.3)" : "1px solid transparent",
                  boxSizing: "border-box",
                  transition: "color 0.3s ease, background 0.3s ease",
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
