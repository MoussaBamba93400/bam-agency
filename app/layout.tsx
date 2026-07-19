import type { Metadata } from "next";
import { body, display } from "./fonts";
import { BRAND } from "./data-bam";
import "./globals.css";

const TITLE = `${BRAND.name} — Sites web pour commerces locaux`;

export const metadata: Metadata = {
  title: TITLE,
  description: BRAND.tagline,
  icons: {
    icon: "/BAM.jpg",
    apple: "/BAM.jpg",
  },
  openGraph: {
    title: TITLE,
    description: BRAND.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
