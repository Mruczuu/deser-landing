import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zlotysnajper.com"),
  title: "Take Profit Traders App - Pierwsza bezpłatna aplikacja dla traderów w Polsce",
  description: "Wszystkie najważniejsze narzędzia tradera w jednym miejscu. Kalendarz makroekonomiczny, sygnały, Trading Journal, FedWatch i więcej. Całkowicie bezpłatnie.",
  openGraph: {
    title: "Take Profit Traders App - Pierwsza bezpłatna aplikacja dla traderów w Polsce",
    description: "Wszystkie najważniejsze narzędzia tradera w jednym miejscu. Kalendarz makroekonomiczny, sygnały, Trading Journal, FedWatch i więcej. Całkowicie bezpłatnie.",
    url: "https://zlotysnajper.com",
    siteName: "Złoty Snajper",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Take Profit Traders App",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Take Profit Traders App - Pierwsza bezpłatna aplikacja dla traderów w Polsce",
    description: "Wszystkie najważniejsze narzędzia tradera w jednym miejscu. Kalendarz makroekonomiczny, sygnały, Trading Journal, FedWatch i więcej. Całkowicie bezpłatnie.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Snowfall />
        {children}
        <Footer />
      </body>
    </html>
  );
}