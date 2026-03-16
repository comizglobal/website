import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "CoMiz Global - Global Sourcing. Reliable Partners. Smarter Trade.",
  description: "CoMiz is an international trading company specializing in sourcing, negotiation, and production management across Asia, the Middle East, and Europe.",
  keywords: ["international trading", "sourcing", "import export", "global trade", "supplier management", "Asia sourcing", "Middle East trade"],
  applicationName: "CoMiz Global",
  icons: {
    icon: [
      { url: "/icons/favicon.ico", type: "image/x-icon", sizes: "16x16" },
      { url: "/icons/favicon.ico", type: "image/x-icon", sizes: "32x32" },
      { url: "/icons/favicon.ico", type: "image/x-icon", sizes: "48x48" },
    ],
    shortcut: [{ url: "/icons/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/icons/favicon.ico" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="pt-20 md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
