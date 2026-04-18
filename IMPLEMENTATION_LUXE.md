# IMPLEMENTATION_LUXE.md
## Plan d'optimisation B2B Luxe — Omedia Paris Clone
**Tech Lead Senior Next.js + Expert CRO**

---

## PHASE 1 — Performance & Zéro Friction (HeroSection)

**Fichiers :** `src/app/globals.css`, `src/components/HeroSection.tsx`

### 1.1 Forcer le fond noir global
Dans `globals.css`, ajouter sur `html` et `body` :
```css
html, body {
  background: #000 !important;
}
```
Cela évite tout flash blanc au chargement de la page.

### 1.2 Vidéo plein écran parfaite
Dans `HeroSection.tsx`, la `<video>` doit avoir :
- `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0`
- Un `poster="/images/home2024-video-fallback.jpg"` visible instantanément
- `autoPlay muted loop playsInline`

### 1.3 Calque sombre sur la vidéo
Ajouter un `<div>` en `position: absolute; inset: 0; background: rgba(0,0,0,0.4); z-index: 1` entre la vidéo et le texte, pour faire ressortir les éléments textuels sans écraser la vidéo.

**Résultat attendu :** Aucun flash, vidéo plein écran immédiate, textes lisibles.

---

## PHASE 2 — Design Liquid Glass (Header & StickyServicesNav)

**Fichiers :** `src/components/Header.tsx`, `src/components/StickyServicesNav.tsx`

### 2.1 Header glassmorphism
Remplacer le fond solide par :
```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(16px) saturate(180%);
-webkit-backdrop-filter: blur(16px) saturate(180%);
border-bottom: 1px solid rgba(255, 255, 255, 0.15);
```
- L'effet doit être présent dès le scroll (pas seulement après 60px)
- Ajouter un reflet interne : `box-shadow: inset 0 1px 0 rgba(255,255,255,0.1)`

### 2.2 StickyServicesNav glassmorphism
Même principe :
```css
background: rgba(10, 10, 10, 0.4);
backdrop-filter: blur(24px) saturate(200%);
border-bottom: 1px solid rgba(201, 169, 110, 0.15);
```
- Lien actif : pill `background: rgba(201,169,110,0.12)` + `border: 1px solid rgba(201,169,110,0.3)`
- Lien inactif : `color: rgba(255,255,255,0.45)` avec transition 0.3s

**Résultat attendu :** Navigation premium, vitre de luxe sur fond de contenu.

---

## PHASE 3 — Cartes Dribbble Style (Services)

**Fichier :** `src/components/SectionMiniFooter.tsx`

### 3.1 Transformation en grille de cartes
Remplacer la `<ul>` plate par une `CSS Grid` :
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
gap: 8px;
```

### 3.2 Design de chaque card
```css
/* Card dark (sections sombres) */
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(201, 169, 110, 0.12);
border-radius: 4px;
padding: 10px 14px;
transition: all 0.25s ease;

/* Hover */
border-color: rgba(201, 169, 110, 0.4);
background: rgba(201, 169, 110, 0.06);
transform: scale(1.01);
```

### 3.3 Icône Lucide-react (optionnel Phase 3B)
Ajouter une icône Lucide (`Check`, `ArrowRight`, ou icône métier) à gauche du texte dans chaque card. Taille : 10px, couleur `#c9a96e` à 50% d'opacité.

**Résultat attendu :** Services visuellement différenciés, premium, scannable en 2 secondes.

---

## PHASE 4 — Tunnel B2B : Diagnostic Modal

**Fichiers :** `src/components/Footer.tsx`, `src/components/Header.tsx`, nouveau `src/components/DiagnosticModal.tsx`

### 4.1 Remplacement Newsletter → CTA Diagnostic
Dans `Footer.tsx`, remplacer le bloc newsletter (input + bouton "S'INSCRIRE") par :
```tsx
<button onClick={() => setModalOpen(true)} className="liquid-btn-gold">
  Demander un diagnostic gratuit →
</button>
<p>Audit de votre stratégie de marque luxe en 48h</p>
```

### 4.2 Bouton Diagnostic dans le Header
Dans `Header.tsx`, ajouter à droite de la nav desktop un bouton discret :
```tsx
<button onClick={() => setModalOpen(true)} className="liquid-btn">
  DIAGNOSTIC
</button>
```
Synchroniser l'état `modalOpen` via un store Zustand ou un contexte React partagé.

### 4.3 Composant DiagnosticModal.tsx
Structure du modal :
```
- Fond : fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]
- Carte centrale : bg-[#0a0a0a] border border-white/10 rounded-2xl p-12 max-w-lg
- Titre : "Briefer Omedia" (Din Pro 700, 36px, cream)
- Sous-titre : "Décrivez votre projet en 3 lignes." (italic serif, gold)
- Champs : Nom, Email, Marque, Besoin (inputs glass style)
- Bouton submit : liquid-btn-gold "Envoyer le brief"
- Fermeture : croix en haut à droite + clic sur le fond
```

### 4.4 Synchronisation état modal
Créer `src/context/ModalContext.tsx` avec :
```tsx
const ModalContext = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
}>({ open: false, setOpen: () => {} });
```
Wrapper dans `src/app/layout.tsx` pour que Header et Footer partagent le même état.

**Résultat attendu :** Chaque bouton du site déclenche le même modal de brief. Tunnel de conversion B2B complet, sans quitter la page.

---

## Ordre d'exécution recommandé

| Étape | Fichier(s) | Durée estimée | Impact |
|-------|-----------|---------------|--------|
| 1 | globals.css + HeroSection.tsx | 5 min | Flash noir éliminé |
| 2 | Header.tsx + StickyServicesNav.tsx | 10 min | Premium immédiat |
| 3 | SectionMiniFooter.tsx | 10 min | Services premium |
| 4a | Footer.tsx | 5 min | CTA conversion |
| 4b | DiagnosticModal.tsx | 20 min | Tunnel complet |
| 4c | ModalContext.tsx + layout.tsx | 10 min | Synchronisation |

**Total estimé : ~60 minutes d'implémentation (Phases 1-4)**

---

## PHASE 5 — Navigation Premium (Menu Burger & Fix 404)

**Fichiers :** `src/components/Header.tsx`

### 5.1 Problème identifié
- Le lien "ACCUEIL" (`/fr/`) et tous les liens de nav mènent à des 404 (pages inexistantes dans ce clone).
- Le hamburger mobile existe mais la nav desktop reste classique.

### 5.2 Menu Burger plein écran (overlay)
- Supprimer la nav desktop horizontale actuelle.
- Remplacer par un seul bouton burger (3 lignes → croix) visible desktop ET mobile.
- Au clic : ouvrir un overlay `fixed inset-0 z-[998]` avec fond `rgba(10,10,10,0.97)` + `backdrop-blur-md`.
- Dans l'overlay : liens centrés verticalement, Din Pro 700, taille `clamp(32px, 5vw, 64px)`, lettre-spacing `-2px`, couleur cream `#f5f0ea`.
- Animation d'entrée : chaque lien slide depuis `y: 40` avec stagger 0.08s (CSS transition ou framer-motion).
- Fermeture : clic sur croix ou clic en dehors des liens.

### 5.3 Fix des liens 404 → scroll ancre
- Tous les liens nav pointent vers des ancres de la page d'accueil :
  - ACCUEIL → `/#` (scroll top)
  - L'AGENCE → `/#a-propos`
  - EXPERTISES → `/#strategie`
  - PROJETS → `/#branding-naming`
  - OMEDIATALK → `/#brand-content`
  - TALENTS → `/#social`
  - CONTACT → `/#edition`
- Utiliser `scrollIntoView({ behavior: 'smooth' })` via handler JS plutôt que `href` natif pour éviter les rechargements.

**Résultat attendu :** Navigation élégante, aucune 404, scroll smooth vers les sections.

---

## PHASE 6 — Transitions Cinématiques & Colorimétrie

**Fichiers :** `src/components/ContentSections.tsx`, `src/app/globals.css`

### 6.1 Suppression des textes de séparation redondants
- Identifier et supprimer les labels/textes bruts entre sections (ex: "Omedia Paris Service") s'ils existent dans le DOM.

### 6.2 Palette de sections cinématique
Chaque section reçoit un `background` distinct :

| Section | Couleur | Hex |
|---------|---------|-----|
| À Propos | Blanc chaud | `#FAFAF8` |
| Stratégie | Bleu nuit luxueux | `#0B132B` |
| Branding | Beige premium | `#F5ECD5` |
| Image | Dark profond | `#0a0a0a` |
| Brand Content | Blanc chaud | `#FAFAF8` |
| Digital | Bleu nuit | `#0B132B` |
| Social | Beige premium | `#F5ECD5` |
| Édition | Dark profond | `#0a0a0a` |

Textes adaptés automatiquement : dark sections → `#f5f0ea`, light sections → `#1a1a1a`.

### 6.3 Animations framer-motion au scroll
- Installer `framer-motion` si absent (`npm install framer-motion`).
- Chaque section : `motion.section` avec `initial={{ opacity: 0, y: 40 }}` → `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, amount: 0.15 }}`, `transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}`.
- Les images : même animation avec `delay: 0.2`.
- Les headings : `delay: 0.1`.

**Résultat attendu :** Voyage visuel entre dark/bleu nuit/beige au scroll. Site vivant, cinématique.

---

## PHASE 7 — Sticky Footer Reveal (Parallaxe Clip-Path)

**Fichiers :** `src/components/ui/sticky-footer.tsx`, `src/components/ui/button.tsx`, `src/app/page.tsx`

### 7.1 Installation des dépendances
```bash
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority @studio-freight/lenis
```
Note : `lucide-react` et `framer-motion` sont probablement déjà installés. Vérifier avant install.

### 7.2 Créer `src/components/ui/button.tsx` (shadcn)
Composant Button standard shadcn avec variants `default`, `outline`, `ghost`, tailles `default`, `sm`, `icon`.

### 7.3 Créer `src/components/ui/sticky-footer.tsx`
Code source exact fourni par l'utilisateur (voir ci-dessus). Points clés :
- `height: 720px` + `clipPath: polygon(0% 0, 100% 0%, 100% 100%, 0 100%)`
- Div interne `fixed bottom-0` — effet de révélation au scroll par clip-path
- Fond `#0B132B` (bleu nuit)
- `AnimatedContainer` avec `motion.div` framer-motion + `useReducedMotion`
- Icône `FrameIcon` en gold `#F5BF45`
- Liens vers ancres `#branding`, `#digital`, `#edition`
- Boutons réseaux sociaux Instagram + LinkedIn (shadcn `Button size="icon"`)

### 7.4 Remplacer le Footer dans `page.tsx`
```tsx
// Remplacer <Footer /> par <StickyFooter />
import { StickyFooter } from "@/components/ui/sticky-footer";
```
Supprimer l'import de l'ancien `Footer`.

**Résultat attendu :** Footer bleu nuit qui se révèle par en-dessous au scroll — effet Awwwards.

---

## Ordre d'exécution global mis à jour

| Phase | Fichier(s) | Statut |
|-------|-----------|--------|
| 1 | globals.css + HeroSection.tsx | ✅ Fait |
| 2 | Header.tsx + StickyServicesNav.tsx | ✅ Fait |
| 3 | SectionMiniFooter.tsx | ✅ Fait |
| 4 | DiagnosticModal + ModalContext + Footer + Header | ✅ Fait |
| 5 | Header.tsx (burger + fix 404) | ✅ Fait |
| 6 | ContentSections.tsx (colorimétrie + framer-motion) | ⏳ En attente |
| 7 | sticky-footer.tsx + button.tsx + page.tsx | ⏳ En attente |

---

## Vérification finale
- `npm run build` doit passer sans erreur TypeScript
- Tester sur desktop 1440px + mobile 390px
- Vérifier que la vidéo Hero se charge sans flash blanc
- Vérifier que le modal s'ouvre/ferme depuis Header ET Footer
- Vérifier que les cards services ont le hover effect fonctionnel

---

---

# PARTIE 2 : AUDIT DE CONVERSION & LIVRAISON

## CHECKLIST — PROTOTYPE SITE CLIENT EN 48H

---

## PHASE 1 — PRÉPARATION (ChatGPT/Claude, gratuit)

- [ ] Définir le client cible (persona fictif : nom, style, audience)
- [ ] 1 seul CTA, 1 seul objectif de conversion
- [ ] Stack décidée : front-end only, pas de backend, pas de CMS
- [ ] Brief complet rédigé avec : hero section, services, social proof, FAQ, contact
- [ ] Photos suggérées (placeholders ou AI)
- [ ] Copy final (headlines, CTA, testimonials, FAQ) — pas de lorem ipsum

---

## PHASE 2 — PROMPT KICKOFF

- [ ] Rôle assigné à l'IA : "expert web designer"
- [ ] Objectif clair : prototype front-end d'un site conversion
- [ ] Design system spécifié (couleurs, typo, ton)
- [ ] Prompt complet généré, copié, prêt à coller dans V0/Bolt

---

## PHASE 3 — PLAN MODE (avant de coder)

- [ ] V0/Bolt en mode "plan only" (pas de génération)
- [ ] Répondre aux questions clarification de l'IA
- [ ] Confirmer : dark theme, 1 font, responsive mobile/tablet/desktop
- [ ] Animations : hover + scroll-based only, pas de motion lourd
- [ ] CTA : 1 seul, ouvre un modal, pas de seconde offre
- [ ] Architecture modulaire (composants séparés, pas 1 fichier géant)
- [ ] SEO basique (title, meta description, semantic HTML)
- [ ] Générer implementation.md (plan écrit, pas de code)

---

## PHASE 4 — GÉNÉRATION

- [ ] Lancer la build phase par phase (pas tout d'un coup)
- [ ] Vérifier crédits restants avant chaque itération
- [ ] Ajouter footer + page contact si manquants
- [ ] Modals sur CTAs secondaires pour retenir l'attention
- [ ] Fix UX : ancres scroll, smooth scroll, background dynamique
- [ ] Design mode pour tweaks visuels (fonts, couleurs, spacing)

---

## PHASE 5 — GITHUB (source of truth)

- [ ] Compte GitHub créé
- [ ] Sync V0/Bolt/Nova → GitHub (nouveau repo)
- [ ] Repo public (pour retirer branding plateforme)
- [ ] Vérifier que tout le code est bien uploadé
- [ ] .gitignore inclut node_modules et .env

---

## PHASE 6 — MIGRATION LOCAL (Antigravity/Cursor/Windsurf)

- [ ] Installer Antigravity (ou autre IDE AI)
- [ ] Clone from URL → copier URL repo GitHub
- [ ] Dossier dédié /coding/ sur la machine
- [ ] Ouvrir projet
- [ ] Terminal : npm install
- [ ] Terminal : npm run dev
- [ ] Vérifier localhost (preview OK)

---

## PHASE 7 — ITÉRATION LOCALE (tokens illimités)

- [ ] Prompt : "crée implementation.md, ne modifie aucun code"
- [ ] Review le plan avec checklist numérotée
- [ ] Commit le plan → GitHub
- [ ] Nouveau chat par section (sinon contexte trop gros)
- [ ] Drag implementation.md dans chat → "implémente ce plan"
- [ ] Valider manuellement chaque changement (vert = nouveau, jaune = modifié)
- [ ] Approuver/rejeter commandes intrusives (folders, terminal)
- [ ] Commit + push après chaque section validée
- [ ] Ne jamais push du code cassé

---

## PHASE 8 — DEPLOY VERCEL

- [ ] Vercel → Add New Project → Import GitHub Repository
- [ ] Sélectionner le repo
- [ ] Garder le même nom que GitHub
- [ ] Deploy auto (framework détecté tout seul)
- [ ] Vérifier URL live fonctionne
- [ ] Speed Insights activé (gratuit, hobby plan)

---

## PHASE 9 — METADATA & PREVIEW (CRITIQUE)

- [ ] Tester URL sur metatags.io
- [ ] Si preview vide → agent crée implementation.md metadata only
- [ ] Générer OG image (snapshot auto via browser agent)
- [ ] Placer dans /public/og-image.png
- [ ] Ajouter OpenGraph tags (Facebook, LinkedIn)
- [ ] Ajouter Twitter card tags
- [ ] Favicon + Apple touch icons
- [ ] Commit metadata → push
- [ ] Re-vérifier metatags.io : titre, description, thumbnail OK

---

## PHASE 10 — LIVRAISON CLIENT

- [ ] URL Vercel propre (pas de branding plateforme)
- [ ] Preview WhatsApp/LinkedIn/Twitter validée
- [ ] Speed score check (Vercel Analytics)
- [ ] Envoyer lien au prospect avec PDF audit
- [ ] CTA dans email : "voici ton prototype, on call pour discuter ?"

---

## RÈGLES D'OR

- **Plan avant code** — toujours implementation.md d'abord
- **Phase par phase** — jamais tout générer d'un coup
- **GitHub = source of truth** — pas confiance à la plateforme
- **Nouveau chat par section** — évite context bloat
- **Valide chaque changement** — jamais auto-approve
- **Commit souvent** — avec messages clairs
- **Front-end only** — pas de backend tant que pas payé

---

## AUTO-AUDIT — État actuel du projet vs Checklist

*Audit effectué le 2026-04-18 — comparaison code vs Phase 4 et Phase 9*

### ✅ PHASE 4 — Ce qui est fait

| Critère | Statut | Détail |
|---------|--------|--------|
| Footer présent | ✅ | `Footer.tsx` complet avec vidéo bg |
| Modal sur CTA principal | ✅ | `DiagnosticModal.tsx` déclenché depuis Header + Footer |
| Ancres scroll (fix 404) | ✅ | Phase 5 : `scrollIntoView({ behavior: 'smooth' })` dans `Header.tsx` |
| Smooth scroll | ✅ | `scroll-behavior: smooth` + handler JS sur chaque nav item |
| Architecture modulaire | ✅ | Composants séparés : Header, Hero, StickyNav, ContentSections, Slider, Footer |

### ❌ PHASE 4 — Ce qui manque

| Critère | Statut | Impact |
|---------|--------|--------|
| Background dynamique au scroll | ❌ | Header reste glassmorphism fixe — pas de changement selon la section active |
| Modal sur **CTAs secondaires** | ❌ | Les liens dans `SectionMiniFooter.tsx` (cards services) ne déclenchent pas le modal |
| Smooth scroll CSS global | ⚠️ | `scroll-behavior: smooth` absent de `html {}` dans `globals.css` |

### ✅ PHASE 9 — Ce qui est fait

| Critère | Statut | Détail |
|---------|--------|--------|
| `<title>` | ✅ | "OMEDIA PARIS I Agence conseil en Communication Luxe" |
| `<meta description>` | ✅ | Description rédigée dans `layout.tsx` |
| Fonts auto-hébergées | ✅ | Din Pro woff2 dans `/public/fonts/` |

### ❌ PHASE 9 — Ce qui manque (CRITIQUE pour livraison)

| Critère | Statut | Fichier cible | Impact |
|---------|--------|---------------|--------|
| OG image (`/public/og-image.png`) | ❌ | `public/og-image.png` absent | Preview vide sur WhatsApp/LinkedIn |
| OpenGraph tags | ❌ | `layout.tsx` — `openGraph: {}` manquant | Partage sans thumbnail |
| Twitter Card tags | ❌ | `layout.tsx` — `twitter: {}` manquant | Partage sans preview |
| Favicon `.ico` | ❌ | `public/favicon.ico` absent | Onglet sans icône |
| Apple touch icon | ❌ | `public/apple-touch-icon.png` absent | PWA / iOS sans icône |
| `<html lang="fr">` | ✅ | `layout.tsx` ligne 18 | OK |
| Semantic HTML (h1, main, section) | ⚠️ | `HeroSection.tsx`, `ContentSections.tsx` | À vérifier — balises `<section>` manquantes dans certains blocs |

---

## TÂCHES PRIORITAIRES — Pour atteindre "Livraison Ready" (Phase 10)

### 🔴 CRITIQUE (bloque la livraison client)

1. **Créer `/public/og-image.png`** — screenshot 1200×630px du Hero (via browser agent ou outil de capture). Sans ça, tout partage WhatsApp/LinkedIn affiche un lien vide.
2. **Ajouter OpenGraph + Twitter Card dans `layout.tsx`** — 10 lignes de config Next.js Metadata. Titre, description, og:image, twitter:card.
3. **Ajouter favicon** — Copier `logo-omedia.png` redimensionné en 32×32 → `public/favicon.ico` + déclaration dans `layout.tsx`.

### 🟠 IMPORTANT (UX & conversion)

4. **`scroll-behavior: smooth` sur `html {}`** dans `globals.css` — 1 ligne, évite les sauts brusques entre sections.
5. **Modal sur cards services** — Ajouter `onClick={() => setOpen(true)}` sur chaque `ServiceCard` dans `SectionMiniFooter.tsx`. Transforme chaque service en point d'entrée du tunnel.
6. **Phase 6 — Colorimétrie cinématique** — `ContentSections.tsx` : alternance `#0B132B` / `#F5ECD5` / `#0a0a0a` entre sections + framer-motion scroll reveal.

### 🟡 NICE TO HAVE (polish)

7. **Phase 7 — StickyFooter clip-path** — Effet reveal Awwwards. Impact visuel fort mais non bloquant.
8. **Semantic HTML audit** — S'assurer que chaque section a un `id=` correspondant aux ancres de nav (`a-propos`, `strategie`, `branding-naming`, `brand-content`, `social`, `edition`).
9. **Deploy Vercel** — Une fois le build propre, connecter le repo GitHub à Vercel pour obtenir une URL client propre.
10. **Test metatags.io** — Valider que le preview WhatsApp/LinkedIn affiche titre + description + image après les étapes 1-3.
