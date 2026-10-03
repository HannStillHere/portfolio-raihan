"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Github, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Kontak", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#08080A]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-sm font-mono text-neutral-400 hover:text-amber-500 transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
          <span>raihan.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors relative group py-1 ${
                  isActive ? "text-amber-500 font-medium" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-amber-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Desktop Socials + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/HannStillHere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors p-1"
            aria-label="GitHub Raihan"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://instagram.com/_raihan.ajaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors p-1"
            aria-label="Instagram Raihan"
          >
            <Instagram className="w-4 h-4" />
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 ml-1 text-neutral-300 hover:text-white focus:outline-none rounded-lg border border-white/10 bg-white/[0.03] transition-colors"
            aria-label="Toggle menu navigasi"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-white/[0.06] bg-[#08080A]/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base transition-colors ${
                      isActive
                        ? "bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500 px-2">
                <span>Raihan Portfolio</span>
                <span className="text-amber-500">raihanaja.my.id</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
