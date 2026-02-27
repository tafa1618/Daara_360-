import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daara 360° — Science, Finance & Ingénierie",
  description:
    "Blog personnel et portfolio autour de la science de l'ingénieur, la finance quantitative, les méthodes industrielles et les KPIs data-driven.",
  keywords: [
    "ingénierie",
    "finance quantitative",
    "KPI industriel",
    "lean manufacturing",
    "data-driven",
    "RDM",
    "CATIA",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Animated background effects */}
        <div className="bg-grid" />
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />

        {children}
      </body>
    </html>
  );
}
