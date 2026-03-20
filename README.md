# PureGlow — Landing Page Kosmetik

Landing page modern untuk brand kosmetik bebas bahan berbahaya, dibangun dengan React.

## 🚀 Setup Lokal

### Prasyarat
Pastikan sudah terinstall:
- **Node.js** v16+ → https://nodejs.org
- **npm** (sudah termasuk dalam Node.js)
- **Git** → https://git-scm.com

### Langkah Instalasi

```bash
# 1. Masuk ke folder project
cd pure-glow

# 2. Install semua dependencies
npm install

# 3. Jalankan development server
npm start
```

Buka browser dan akses: **http://localhost:3000**

## 🌐 Deploy ke Vercel (Gratis)

### Cara 1: Via CLI (Direkomendasikan)

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke akun Vercel
vercel login

# Deploy dari folder project
vercel

# Ikuti petunjuk di terminal:
# - Set up project? → Y
# - Nama project → pure-glow (atau nama lain)
# - Framework → Create React App
# - Override settings? → N

# Deploy ke production
vercel --prod
```

### Cara 2: Via GitHub (Paling Mudah)

1. Upload project ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit - PureGlow landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/pure-glow.git
git push -u origin main
```

2. Buka https://vercel.com → **Sign up** dengan akun GitHub
3. Klik **"New Project"** → Import repo `pure-glow`
4. Klik **"Deploy"** → Selesai! 🎉

URL produksi akan muncul dalam ~1 menit.

## 📦 Build untuk Production

```bash
npm run build
```

File siap deploy ada di folder `/build`.

## 🛠️ Struktur Project

```
pure-glow/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   └── App.jsx        ← Semua komponen landing page
├── package.json
├── vercel.json
└── .gitignore
```

## ✏️ Kustomisasi

Semua bisa diedit di `src/App.jsx`:
- **Nama brand** → Cari `PureGlow`
- **Produk** → Edit array `PRODUCTS`
- **Testimoni** → Edit array `TESTIMONIALS`
- **Warna** → Edit CSS variables di `:root`
- **Konten** → Edit teks di setiap komponen section
