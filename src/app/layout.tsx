import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import { DiagnosticModal } from "@/components/DiagnosticModal";

export const metadata: Metadata = {
  metadataBase: new URL("https://omedia-paris-clone.vercel.app"),
  title: "Omedia Paris | Agence conseil en Communication Luxe",
  description:
    "Nous conjuguons créativité et rentabilité pour les Maisons prestigieuses.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Omedia Paris | Agence conseil en Communication Luxe",
    description:
      "Nous conjuguons créativité et rentabilité pour les Maisons prestigieuses.",
    url: "https://omedia-paris-clone.vercel.app",
    siteName: "Omedia Paris",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omedia Paris — Agence conseil en Communication Luxe",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omedia Paris | Agence conseil en Communication Luxe",
    description:
      "Nous conjuguons créativité et rentabilité pour les Maisons prestigieuses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <ModalProvider>
          {children}
          <DiagnosticModal />
        </ModalProvider>
      </body>
    </html>
  );
}
