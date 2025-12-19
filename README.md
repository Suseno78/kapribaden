# Website Paguyuban Penghayat Kapribaden

Website resmi Paguyuban Penghayat Kapribaden menggunakan Next.js 14 dengan App Router dan Tailwind CSS.

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka browser ke [http://localhost:3000](http://localhost:3000)

### 3. Build untuk Production

```bash
npm run build
npm start
```

## 📁 Struktur Project

```
c:\Paguyuban\
├── app/
│   ├── layout.tsx          # Root layout dengan Navbar & Footer
│   ├── globals.css         # Global styles dengan Tailwind
│   ├── page.tsx            # Homepage
│   ├── romo/
│   │   └── page.tsx        # Halaman Biografi Romo
│   ├── kapribaden/
│   │   └── page.tsx        # Halaman Tentang Kapribaden
│   ├── album/
│   │   └── page.tsx        # Halaman Galeri Foto
│   ├── pedoman/
│   │   └── page.tsx        # Halaman Pedoman
│   └── pasaran/
│       └── page.tsx        # Halaman Jumlah Hari & Pasaran
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── public/                 # Static files (images, etc)
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Tema Warna

Website menggunakan tema warna:
- **Ungu (Purple)**: Warna dominan untuk branding
- **Emas (Gold)**: Warna aksen untuk highlight

## 📄 Halaman Website

1. **Home** (`/`) - Halaman utama dengan intro Paguyuban
2. **Romo Herucokro Semono** (`/romo`) - Biografi lengkap Romo
3. **Kapribaden** (`/kapribaden`) - Tentang Kapribaden, Sejarah, dan Ajaran
4. **Album** (`/album`) - Galeri foto (placeholder, dapat diganti)
5. **Pedoman** (`/pedoman`) - Pedoman untuk Para Kadhang
6. **Jumlah Hari & Pasaran** (`/pasaran`) - Perhitungan kalender Jawa

## 🖼️ Mengganti Foto di Album

1. Simpan foto di folder `public/images/album/`
2. Edit file `app/album/page.tsx`
3. Ganti array `placeholderImages` dengan data foto Anda

Contoh:
```typescript
const photos = [
  {
    id: 1,
    src: '/images/album/foto1.jpg',
    title: 'Kegiatan Sarasehan',
    description: 'Sarasehan Putro 2024'
  },
  // ... foto lainnya
]
```

## 🚀 Deploy ke Vercel

### Cara 1: Deploy via GitHub

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <URL_REPO_GITHUB>
   git push -u origin main
   ```

2. **Connect ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Click "New Project"
   - Import repository Anda
   - Click "Deploy"

### Cara 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Ikuti instruksi di terminal.

## ⚙️ Konfigurasi

### Metadata SEO

Edit metadata di setiap file `page.tsx`:

```typescript
export const metadata = {
  title: 'Judul Halaman',
  description: 'Deskripsi halaman untuk SEO',
}
```

### Warna Tema

Edit warna di `tailwind.config.js`:

```javascript
colors: {
  'kapribaden-purple': { ... },
  'kapribaden-gold': { ... },
}
```

## 📝 Catatan

- Website sudah responsive (mobile-friendly)
- Semua konten diambil dari file sumber tanpa perubahan
- Styling menggunakan Tailwind CSS
- TypeScript untuk type safety
- Ready untuk production deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📞 Support

Untuk pertanyaan atau bantuan, silakan hubungi admin Paguyuban.

---

© 2024 Paguyuban Penghayat Kapribaden. All rights reserved.
# paguyuban-seno
# paguyuban-seno
