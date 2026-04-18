"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";

const dinPro = '"Din Pro", sans-serif';

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "6px",
  padding: "12px 16px",
  fontFamily: dinPro,
  fontSize: "13px",
  fontWeight: 300,
  color: "#f5f0ea",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box" as const,
};

export function DiagnosticModal() {
  const { open, setOpen } = useModal();

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "48px",
          maxWidth: "520px",
          width: "100%",
          position: "relative",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Fermeture */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "rgba(245,240,234,0.6)",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; }}
          aria-label="Fermer"
        >
          <X size={14} />
        </button>

        {/* Titre */}
        <h2
          style={{
            fontFamily: dinPro,
            fontSize: "34px",
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#f5f0ea",
            margin: "0 0 8px",
          }}
        >
          Briefer Omedia
        </h2>

        {/* Sous-titre */}
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "15px",
            color: "#c9a96e",
            margin: "0 0 36px",
          }}
        >
          Décrivez votre projet en 3 lignes.
        </p>

        {/* Formulaire */}
        <form
          onSubmit={(e) => { e.preventDefault(); setOpen(false); }}
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          <input
            type="text"
            placeholder="Votre nom"
            required
            style={inputStyle}
            onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(201,169,110,0.5)"; }}
            onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
          />
          <input
            type="email"
            placeholder="Votre email"
            required
            style={inputStyle}
            onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(201,169,110,0.5)"; }}
            onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
          />
          <input
            type="text"
            placeholder="Votre marque / maison"
            style={inputStyle}
            onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(201,169,110,0.5)"; }}
            onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
          />
          <textarea
            placeholder="Votre besoin en quelques mots…"
            rows={4}
            style={{ ...inputStyle, resize: "none" as const }}
            onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(201,169,110,0.5)"; }}
            onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
          />

          <button
            type="submit"
            className="liquid-btn-gold"
            style={{
              width: "100%",
              padding: "16px",
              fontFamily: dinPro,
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Envoyer le brief →
          </button>
        </form>

        {/* Note bas */}
        <p
          style={{
            fontFamily: dinPro,
            fontSize: "11px",
            color: "rgba(245,240,234,0.25)",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "0.5px",
          }}
        >
          Audit de votre stratégie de marque luxe en 48h
        </p>
      </div>
    </div>
  );
}
