import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aradana Catering | Culinary Excellence",
  description: "Bespoke culinary experiences crafted for unforgettable events. A luxury catering service.",
  metadataBase: new URL('https://aradanacaterers.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/aradana-logo-icon.png', sizes: 'any' },
    ],
    apple: [
      { url: '/aradana-logo-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cache-busted favicon to force browsers/CDNs to fetch the new logo */}
        <link rel="icon" href="/favicon-v2.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Aradana Catering" />
        <meta property="og:description" content="Bespoke culinary experiences crafted for unforgettable events." />
        <meta property="og:image" content="/android-chrome-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-aradana-dark text-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
