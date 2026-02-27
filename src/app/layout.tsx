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
      { url: '/favicon-16.png?v=4', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png?v=4', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico?v=4' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=4', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192',
        url: '/android-chrome-192.png?v=4',
      },
      {
        rel: 'android-chrome-512',
        url: '/android-chrome-512.png?v=4',
      },
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
