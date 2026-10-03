"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import Link from "next/link";
import { Instagram, Github, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "raihanabdul803@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <MaskedText className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-center">Mari ngobrol.</h1>
        </MaskedText>
        
        <MaskedText delay={0.1} className="mb-16">
          <p className="text-neutral-400 text-center text-lg">
            DM aja kalau mau tanya atau kolaborasi.
          </p>
        </MaskedText>

        <div className="space-y-6">
          <MaskedText delay={0.2}>
            <div className="card-bezel p-6 rounded-xl">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span className="text-lg font-mono">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-neutral-400" />
                  )}
                </button>
              </div>
            </div>
          </MaskedText>

          <MaskedText delay={0.3}>
            <Link
              href="https://instagram.com/_raihan.ajaa"
              target="_blank"
              rel="noopener noreferrer"
              className="card-bezel p-6 rounded-xl flex items-center justify-between gap-4 group hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-amber-500" />
                <span className="text-lg font-mono group-hover:text-amber-500 transition-colors">
                  @_raihan.ajaa
                </span>
              </div>
              <span className="text-sm text-neutral-500">Instagram</span>
            </Link>
          </MaskedText>

          <MaskedText delay={0.4}>
            <Link
              href="https://github.com/HannStillHere"
              target="_blank"
              rel="noopener noreferrer"
              className="card-bezel p-6 rounded-xl flex items-center justify-between gap-4 group hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-amber-500" />
                <span className="text-lg font-mono group-hover:text-amber-500 transition-colors">
                  HannStillHere
                </span>
              </div>
              <span className="text-sm text-neutral-500">GitHub</span>
            </Link>
          </MaskedText>
        </div>
      </div>
    </div>
  );
}
