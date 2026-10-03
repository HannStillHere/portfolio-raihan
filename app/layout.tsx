import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Raihan — Personal Portfolio",
  description:
    "Portfolio Raihan, siswa SMK TJKT yang mendalami pembuatan website modern, aplikasi web, dan bot otomatisasi.",
  keywords: [
    "Raihan",
    "Portfolio",
    "SMK TJKT",
    "Web Developer",
    "Next.js",
    "Bot Automation",
    "SobatDonghua",
    "Downloaderku",
    "RaihanCloud",
  ],
  authors: [{ name: "Raihan", url: "https://raihanaja.my.id" }],
  creator: "Raihan",
  metadataBase: new URL("https://raihanaja.my.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://raihanaja.my.id",
    title: "Raihan — Personal Portfolio",
    description:
      "Portfolio Raihan — Siswa SMK TJKT yang mendalami website modern dan bot otomatisasi.",
    siteName: "Raihan Portfolio",
    images: [
      {
        url: "/images/projects/screenshot-1.png",
        width: 1200,
        height: 630,
        alt: "Raihan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan — Personal Portfolio",
    description:
      "Portfolio Raihan — Siswa SMK TJKT yang mendalami website modern dan bot otomatisasi.",
    images: ["/images/projects/screenshot-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body className="bg-[#0A0A0B] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
