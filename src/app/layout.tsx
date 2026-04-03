import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LiquidMetalBackground from "@/app/components/LiquidMetalBackground";
import Nav from "@/app/components/Nav";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Etienne Veau — Portfolio",
  description:
    "Portfolio d'Etienne Veau — developpeur web & mobile, stagiaire chez CGI integre a une equipe au centre de recherche Michelin de Ladoux.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] antialiased min-h-screen bg-transparent`}>
        <LiquidMetalBackground />
        <Nav />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
