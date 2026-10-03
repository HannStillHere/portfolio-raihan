# 🌐 Personal Portfolio Website — Raihan

Website portfolio personal modern dengan stack Next.js 14 App Router, TypeScript, Tailwind CSS, dan Framer Motion. Didesain dengan estetika dark obsidian (`#0A0A0B`), glassmorphism halus, dan aksen neon cyan/amber.

Live Domain: **[https://raihanaja.my.id](https://raihanaja.my.id)**

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
# 1. Masuk ke direktori
cd D:\portfolio-raihan

# 2. Jalankan development server
npm run dev

# 3. Buka browser di http://localhost:3000
```

---

## 🖼️ Cara Mengganti Screenshot / Thumbnail Project

Seluruh thumbnail project tersimpan di folder:
```
public/images/projects/
├── screenshot-1.png   # Digunakan oleh SobatDonghua
├── screenshot-2.png   # Digunakan oleh Downloaderku
└── screenshot-3.png   # Digunakan oleh RaihanCloud v2
```

Untuk mengganti gambar:
1. Cukup timpa file di atas dengan gambar screenshot baru dengan nama yang sama, atau:
2. Masukkan gambar baru ke folder `public/images/projects/nama-file.png` lalu ubah path-nya di file `lib/data.ts`.

---

## ☁️ Cara Deploy ke Vercel & Hubungkan Domain `raihanaja.my.id`

Website ini di-hosting di **Vercel** (Global Serverless Edge) sehingga **100% bebas downtime** dan tidak akan pernah terpengaruh jika VPS sering di-restart.

### 1. Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit: Raihan Portfolio Website"
git branch -M main
# Buat repository baru di github.com/HannStillHere/portfolio lalu hubungkan:
git remote add origin https://github.com/HannStillHere/portfolio.git
git push -u origin main
```

### 2. Hubungkan ke Vercel
1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik **Add New...** -> **Project**.
3. Pilih repository **portfolio** lalu klik **Deploy**.
4. Dalam 30-45 detik, website langsung aktif dengan URL Vercel gratis (`portfolio-raihan.vercel.app`).

### 3. Pasang Domain `raihanaja.my.id` di Vercel
1. Pada dashboard project di Vercel, buka menu **Settings** -> **Domains**.
2. Masukkan `raihanaja.my.id` dan `www.raihanaja.my.id`, lalu klik **Add**.
3. Vercel akan memberikan DNS Record:
   - **Type A**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **Type CNAME** (untuk subdomain `www`):
     - Name: `www`
     - Value: `cname.vercel-dns.com`
4. Buka tempat Anda membeli domain `raihanaja.my.id` (misal Cloudflare, Rumahweb, Niagahoster, atau Domainesia):
   - Tambahkan Record **A** dengan host `@` mengarah ke `76.76.21.21`.
   - Tambahkan Record **CNAME** dengan host `www` mengarah ke `cname.vercel-dns.com`.
   *(Jika menggunakan Cloudflare, pastikan proxy status "DNS Only" atau "Proxied" keduanya didukung Vercel).*
5. Dalam beberapa menit, Vercel otomatis menerbitkan sertifikat SSL HTTPS gratis dan domain **https://raihanaja.my.id** aktif 24/7!
