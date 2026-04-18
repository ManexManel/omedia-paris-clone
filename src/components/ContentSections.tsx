"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionMiniFooter } from "@/components/SectionMiniFooter";
import { useModal } from "@/context/ModalContext";

// ─── Palette cinématique ───────────────────────────────────────────────────
const DARK_BG = "#0a0a0a";
const NIGHT_BG = "#0B132B";
const WARM_WHITE = "#FAFAF8";
const BEIGE = "#F5ECD5";

const DARK_TEXT = "#f5f0ea";
const LIGHT_TEXT = "#1a1a1a";
const DARK_DIVIDER = "rgba(245,240,234,0.25)";
const LIGHT_DIVIDER = "rgba(0,0,0,0.2)";
const DARK_BODY = "rgba(245,240,234,0.72)";
const LIGHT_BODY = "#3a3a3a";

const viewportOpts = { once: true, amount: 0.15 } as const;

// ─── Composant section générique ──────────────────────────────────────────
interface SectionConfig {
  id: string;
  bg: string;
  textColor: string;
  bodyColor: string;
  dividerColor: string;
  heading: React.ReactNode;
  body: React.ReactNode;
  cta: { label: string; anchor?: string };
  image: React.ReactNode;
  services: string[];
  reverse?: boolean;
}

function ContentSection({
  id,
  bg,
  textColor,
  bodyColor,
  dividerColor,
  heading,
  body,
  cta,
  image,
  services,
  reverse = false,
}: SectionConfig) {
  const { setOpen } = useModal();

  const handleCta = () => {
    if (cta.anchor) {
      const el = document.getElementById(cta.anchor);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    setOpen(true);
  };

  const ease = "easeOut" as const;

  const textCol = (
    <div className={`w-[55%] pr-10 ${reverse ? "order-2" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOpts}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        style={{
          fontFamily: '"Din Pro", sans-serif',
          fontSize: "64px",
          fontWeight: 700,
          letterSpacing: "-1.728px",
          lineHeight: 1.05,
          color: textColor,
          margin: 0,
        }}
      >
        {heading}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOpts}
        transition={{ duration: 0.6, ease, delay: 0.15 }}
        style={{
          width: "176px",
          height: "1px",
          background: dividerColor,
          margin: "12px 0 32px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOpts}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        style={{
          fontFamily: '"Din Pro", sans-serif',
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "30px",
          color: bodyColor,
        }}
      >
        {body}
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOpts}
        transition={{ duration: 0.6, ease, delay: 0.28 }}
        onClick={handleCta}
        className="omedia-cta-link mt-10 block"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      >
        {cta.label}
      </motion.button>
    </div>
  );

  const imgCol = (
    <motion.div
      className={`w-[45%] ${reverse ? "order-1" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOpts}
      transition={{ duration: 0.8, ease, delay: 0.2 }}
    >
      {image}
    </motion.div>
  );

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOpts}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ background: bg }}
    >
      <div className="px-20 pt-20 pb-0">
        <div className="flex">
          {textCol}
          {imgCol}
        </div>
      </div>
      <SectionMiniFooter services={services} dark={bg === DARK_BG || bg === NIGHT_BG} />
    </motion.section>
  );
}

// ─── Export principal ──────────────────────────────────────────────────────
export function ContentSections() {
  return (
    <>
      {/* 1 — À Propos — Blanc chaud */}
      <ContentSection
        id="a-propos"
        bg={WARM_WHITE}
        textColor={LIGHT_TEXT}
        bodyColor={LIGHT_BODY}
        dividerColor={LIGHT_DIVIDER}
        heading="Conjuguer luxe & créativité"
        body={
          <p style={{ margin: 0 }}>
            Nous sommes une agence conseil en communication, dédiée aux Maison de luxe.
            <br />
            Depuis 30 ans, nous accompagnons les Maisons les plus prestigieuses dans leur stratégie de marque et d&apos;image, campagnes de communication publicitaire, stratégie social media et d&apos;influence, brand content…
          </p>
        }
        cta={{ label: "À propos" }}
        image={
          <div className="relative w-full h-full min-h-[500px]">
            <Image src="/images/home202312-vis1.jpg" alt="À propos Omedia Paris" fill className="object-cover" />
          </div>
        }
        services={["CONSEIL ET PLANNING STRATÉGIQUE", "PLATEFORME DE MARQUE", "MANIFESTE"]}
      />

      {/* 2 — Stratégie — Bleu nuit */}
      <ContentSection
        id="strategie"
        bg={NIGHT_BG}
        textColor={DARK_TEXT}
        bodyColor={DARK_BODY}
        dividerColor={DARK_DIVIDER}
        heading="Conseil en stratégie de marque"
        body={
          <p style={{ margin: 0 }}>
            La stratégie de marque : un pouvoir de projection.
            <br />
            L&apos;art de faire d&apos;un territoire de marque un univers aussi singulier qu&apos;intemporel.
            <br />
            D&apos;allier vision stratégique et créativité pour lier valeurs et aspirations.
            <br />
            Omedia Paris imagine le fil rouge et l&apos;histoire qui élèveront la marque au rang d&apos;icône.
            <br />
            Artisans de l&apos;innovation, nous ciselons les idées qui transformeront son esprit en manifeste de son domaine. Et son storytelling en success story.
          </p>
        }
        cta={{ label: "Clients et stratégies" }}
        image={
          <div className="relative w-full h-full min-h-[500px]">
            <Image src="/images/home-bollinger-bw.jpg" alt="Stratégie de marque" fill className="object-cover" />
          </div>
        }
        services={[
          "CONSEIL", "PLANNING STRATÉGIQUE", "PLATEFORME DE MARQUE",
          "MANIFESTE", "TERRITOIRE D'EXPRESSION", "BRAND BOOK", "CREATIVE GUIDELINES",
        ]}
      />

      {/* 3 — Branding — Beige premium */}
      <ContentSection
        id="branding-naming"
        bg={BEIGE}
        textColor={LIGHT_TEXT}
        bodyColor={LIGHT_BODY}
        dividerColor={LIGHT_DIVIDER}
        heading="Branding et naming"
        body={
          <p style={{ margin: 0 }}>
            Imaginer une marque jamais créée. Dessiner son image, penser sa représentation.
            <br />
            Visualiser son futur. Trouver le nom évocateur qui s&apos;inscrira dans un temps long.
            <br />
            Faire résonner son storytelling sur tous les canaux d&apos;expression.
            <br />
            Pour ancrer son histoire et ses produits dans les esprits.
            <br />
            Du naming à la plateforme de marque, nos experts vous accompagnent dans la construction de votre identité et son déploiement stratégique. Nous développons la personnalité de marque qui restera en mémoire par sa force, sa beauté, sa différence.
          </p>
        }
        cta={{ label: "Notre expertise branding & naming" }}
        image={
          <div className="flex flex-col gap-2 h-full">
            <div className="relative w-full h-56"><Image src="/images/home-triptique-1-1.jpg" alt="Branding 1" fill className="object-cover" /></div>
            <div className="relative w-full h-56"><Image src="/images/home-triptique-2.jpg" alt="Branding 2" fill className="object-cover" /></div>
            <div className="relative w-full h-56"><Image src="/images/home-triptique-3.jpg" alt="Branding 3" fill className="object-cover" /></div>
          </div>
        }
        services={[
          "CRÉATION DE NOM", "ICONOGRAPHIE", "TERRITOIRE VISUEL",
          "CHARTE GRAPHIQUE", "LOGOTYPE", "OUTILS DE COMMUNICATION",
        ]}
      />

      {/* 4 — Image — Dark profond */}
      <ContentSection
        id="image"
        bg={DARK_BG}
        textColor={DARK_TEXT}
        bodyColor={DARK_BODY}
        dividerColor={DARK_DIVIDER}
        heading={<>Stratégie d&apos;image et de publicité</>}
        body={
          <p style={{ margin: 0 }}>
            Incarner la marque en une idée. Créer une image puissante, unique et singulière.
            <br />
            Développer son charisme, son aura. Montrer ce qu&apos;elle n&apos;a jamais dit.
            <br />
            Faire du produit une promesse tenue. Aligner raison d&apos;être, être et perception.
            <br />
            De la stratégie à la création, nous cultivons l&apos;excellence dans chaque détail.
            <br />
            Notre métier : sublimer l&apos;expertise d&apos;une maison par la force d&apos;une vision.
            <br />
            Donner corps aux valeurs de la marque pour décupler son pouvoir de séduction.
          </p>
        }
        cta={{ label: "Nos stratégies d'images et réalisations" }}
        reverse
        image={<></>}
        services={[
          "DIRECTION DE CRÉATION", "CRÉATION DE CONCEPT SINGULIER", "CAMPAGNE PUBLICITAIRE",
          "PRINT, TV, ONLINE", "PRODUCTION ET ACHAT D'ART", "IDENTITÉ VISUELLE", "DESIGN",
        ]}
      />

      {/* 5 — Brand Content — Blanc chaud */}
      <ContentSection
        id="brand-content"
        bg={WARM_WHITE}
        textColor={LIGHT_TEXT}
        bodyColor={LIGHT_BODY}
        dividerColor={LIGHT_DIVIDER}
        heading="Brand Content"
        body={
          <p style={{ margin: 0 }}>
            Explorer le territoire d&apos;une marque en pionnier.
            <br />
            Révéler sa singularité dans une ligne éditoriale juste et originale.
            <br />
            Enrichir son histoire, sa substance. Orchestrer sa cohérence par les idées.
            <br />
            Développer son existence par un copywriting vecteur de rêve, porteur de sens.
            <br />
            De la vision stratégique à la création, nous imaginons les contenus qui feront de votre marque une expérience unique.
          </p>
        }
        cta={{ label: "Notre expertise brand content" }}
        image={
          <div className="flex w-full mt-8">
            <div className="flex-1 relative h-72"><Image src="/images/home-triptique-4.jpg" alt="Brand Content 1" fill className="object-cover" /></div>
            <div className="flex-1 relative h-72"><Image src="/images/home-triptique-5.jpg" alt="Brand Content 2" fill className="object-cover" /></div>
            <div className="flex-1 relative h-72"><Image src="/images/home-triptique-6.jpg" alt="Brand Content 3" fill className="object-cover" /></div>
          </div>
        }
        services={[
          "STRATÉGIE DE CONTENU", "DIRECTION ARTISTIQUE", "STRATÉGIE D'ACTIVATION",
          "STORYTELLING", "PRODUCTION PHOTO", "PRODUCTION FILM",
        ]}
      />

      {/* 6 — Digital — Bleu nuit */}
      <ContentSection
        id="digital"
        bg={NIGHT_BG}
        textColor={DARK_TEXT}
        bodyColor={DARK_BODY}
        dividerColor={DARK_DIVIDER}
        heading="Plateforme digitale et site web"
        body={
          <p style={{ margin: 0 }}>
            Créer un monde virtuel, profond et singulier, intimement connecté à la réalité. Penser la navigation comme le fil d&apos;une pensée. Transformer votre Expertise en visibilité. L&apos;agence Omedia accompagne ses marques dans la création de leur plateforme web et le déploiement de leur stratégie digitale. Nous créons l&apos;expérience utilisateur inédite et intuitive, qu&apos;aucun n&apos;aura jamais vécu. Et orchestrons subtilement la présence en ligne et à l&apos;esprit, pour susciter confiance et adhésion, au-delà de la notoriété.
          </p>
        }
        cta={{ label: "Plateformes digitales et sites web luxe" }}
        image={
          <div className="relative w-full h-full min-h-[500px]">
            <Image src="/images/home-omedia-mockup.png" alt="Plateforme digitale" fill className="object-cover" />
          </div>
        }
        services={[
          "STRATÉGIE DIGITALE", "UX DESIGN", "UI DESIGN", "WEBDESIGN",
          "SITE WEB CORPORATE, PRODUIT, ÉVÉNEMENTIEL", "SITE E-COMMERCE",
          "ACQUISITION", "SEO, SEA", "MARKETPLACE", "CRM",
        ]}
      />

      {/* 7 — Social — Beige premium */}
      <ContentSection
        id="social"
        bg={BEIGE}
        textColor={LIGHT_TEXT}
        bodyColor={LIGHT_BODY}
        dividerColor={LIGHT_DIVIDER}
        heading={<>Stratégie d&apos;influence et social média</>}
        body={
          <p style={{ margin: 0 }}>
            Conjuguer affinité et proximité. Jouer la complémentarité par la co-création.
            <br />
            Nous envisageons le luxe comme une expérience esthétique, une dynamique créative, collaborative et culturelle, riche de sens et source d&apos;influence.
            <br />
            Nos ambitions : développer le sentiment d&apos;appartenance par la complicité.
            <br />
            Susciter l&apos;engagement par une connexion profonde. Cultiver la prestance de la marque, en ligne et dans le monde, à travers les ambassadeurs et médias qui la feront rayonner.
          </p>
        }
        cta={{ label: "Nos stratégies d'influence" }}
        image={
          <div className="flex flex-col gap-2 h-full">
            <div className="relative w-full h-56"><Image src="/images/omedia-swissperfection-featured.jpg" alt="Social Media 1" fill className="object-cover" /></div>
            <div className="relative w-full h-56"><Image src="/images/omedia-bollinger-plateforme-marque-print-v1.jpg" alt="Social Media 2" fill className="object-cover" /></div>
            <div className="relative w-full h-56"><Image src="/images/omedia-christofle-influence-social-media-04.jpg" alt="Social Media 3" fill className="object-cover" /></div>
          </div>
        }
        services={[
          "STRATÉGIE DIGITALE", "ACTIVATION SOCIALE",
          "MARKETING D'INFLUENCE (micro et macro)", "SOCIAL MEDIA INFLUENCE",
          "CRÉATION ET PRODUCTION DE CONTENU", "COMMUNITY MANAGEMENT", "SOCIAL ADVERTISING",
        ]}
      />

      {/* 8 — Édition — Dark profond */}
      <ContentSection
        id="edition"
        bg={DARK_BG}
        textColor={DARK_TEXT}
        bodyColor={DARK_BODY}
        dividerColor={DARK_DIVIDER}
        heading="Édition"
        body={
          <p style={{ margin: 0 }}>
            Penser le concept qui fera la différence. Trouver l&apos;angle d&apos;un autre regard.
            <br />
            Raconter une histoire, les valeurs d&apos;une maison. Faire écho à sa singularité.
            <br />
            Concevoir la forme qui donnera vie au fond. Et créer l&apos;immersion dès la couverture…
            <br />
            Notre sensibilité aux histoires de marque nous permet de les raconter avec passion, d&apos;y insuffler notre ouverture aux tendances et influences qui traversent le monde et la société.
            <br />
            Livre de marque, magazine, dossier de presse : chaque ouvrage est conçu comme un objet d&apos;art. Notre souci du détail porte autant sur la beauté de l&apos;ouvrage et la noblesse des matières que sur l&apos;éco-responsabilité des matériaux et procédés.
          </p>
        }
        cta={{ label: "Notre expertise édition" }}
        image={
          <div className="relative w-full h-full min-h-[500px]">
            <Image src="/images/home-omedia-edition.png" alt="Édition Omedia Paris" fill className="object-cover" />
          </div>
        }
        services={[
          "STRATÉGIE ÉDITORIALE", "STORYTELLING", "ICONOGRAPHIE",
          "ÉDITION DE PRESTIGE", "CONCEPTION ET RÉDACTION", "FABRICATION", "STRATÉGIE DE CONTENUS",
        ]}
      />
    </>
  );
}
