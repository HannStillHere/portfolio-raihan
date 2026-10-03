import Link from "next/link";
import { Instagram } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Kontak", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A0B]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-mono text-neutral-400 hover:text-amber-500 transition-colors">
          raihan.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <Link
          href="https://instagram.com/_raihan.ajaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
