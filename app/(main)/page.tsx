"use client";

import { MaskedText } from "@/components/motion/MaskedText";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Masking Text */}
      <section className="min-h-[85vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <MaskedText className="mb-6">
                <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
                  Raihan
                </h1>
              </MaskedText>
              
              <MaskedText delay={0.1} className="mb-8">
                <p className="text-lg text-neutral-400 leading-relaxed">
                  lagi belajar bikin website dan aplikasi serta bot otomatis
                </p>
              </MaskedText>
              
              <MaskedText delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black text-sm font-medium rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Lihat Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-amber-500/50 text-sm font-medium rounded-lg transition-all"
                  >
                    Tentang Saya
                  </Link>
                </div>
              </MaskedText>
            </div>

            <MaskedText delay={0.3} className="text-neutral-300 leading-relaxed space-y-4">
              <p>
                Siswa SMK jurusan TJKT yang sedang mengerjakan website streaming anime & donghua, 
                serta membangun berbagai sistem bot otomatisasi.
              </p>
            </MaskedText>
          </div>
        </div>
      </section>

      {/* Featured Projects with Parallax */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <MaskedText className="mb-12">
            <div className="flex items-baseline justify-between">
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <Link href="/projects" className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                Lihat semua →
              </Link>
            </div>
          </MaskedText>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "SobatDonghua", 
                desc: "Platform streaming anime & donghua multi-server HD", 
                link: "https://sobatdonghua.web.id",
                image: "/images/projects/screenshot-1.png"
              },
              { 
                title: "Downloaderku", 
                desc: "Media downloader TikTok, YouTube, Spotify", 
                link: "https://downloaderku.web.id",
                image: "/images/projects/screenshot-2.png"
              },
            ].map((project, i) => (
              <MaskedText key={project.title} delay={0.1 + i * 0.1}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-bezel rounded-xl overflow-hidden group block"
                >
                  <ParallaxImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-video"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400">{project.desc}</p>
                  </div>
                </a>
              </MaskedText>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
