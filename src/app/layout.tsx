import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";

import BackgroundEffects from "@/components/BackgroundEffects/BackgroundEffects";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "The Woodfire Café | Artisan Brews & Wood-Fired Bites",
  description: "Artisan brews, wood-fired bites, and a cozy place to unwind.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
