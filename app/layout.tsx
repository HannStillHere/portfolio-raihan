import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Raihan — Web & Bot Automation",
  description:
    "Siswa SMK TJKT yang mendalami pembuatan website dan bot otomatisasi.",
  metadataBase: new URL("https://raihanaja.my.id"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-[#08080A] text-neutral-100 antialiased selection:bg-amber-500/20 selection:text-amber-300 font-sans">
        {children}
      </body>
    </html>
  );
}
