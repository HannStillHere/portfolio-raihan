"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Github } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Kontak", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#08080A]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-mono text-neutral-400 hover:text-amber-500 transition-colors">
          raihan.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors relative group ${
                  isActive ? "text-amber-500" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-amber-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/HannStillHere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://instagram.com/_raihan.ajaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
