"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero */}
        <section className="min-h-[85vh] flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
                  Raihan
                </h1>
                <p className="text-lg text-neutral-400 mb-8">
                  lagi belajar bikin website dan aplikasi serta bot otomatis
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-black text-sm font-medium rounded-lg transition-colors"
                  >
                    Lihat Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-white/20 text-sm font-medium rounded-lg transition-colors"
                  >
                    Tentang Saya
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-300 leading-relaxed"
              >
                <p>
                  Siswa SMK jurusan TJKT yang sedang mengerjakan website streaming anime & donghua, 
                  serta membangun berbagai sistem bot otomatisasi.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Teaser */}
        <section className="py-20 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <Link href="/projects" className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                Lihat semua →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "SobatDonghua", desc: "Platform streaming anime & donghua", link: "https://sobatdonghua.web.id" },
                { title: "Downloaderku", desc: "Media downloader TikTok, YouTube, Spotify", link: "https://downloaderku.web.id" },
              ].map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-bezel p-6 rounded-xl group"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400">{project.desc}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
