import Image from 'next/image'

export const metadata = {
    title: 'Album | Paguyuban Penghayat Kapribaden',
    description: 'Galeri foto Paguyuban Penghayat Kapribaden',
}

export default function AlbumPage() {
    // CARA MENAMBAHKAN FOTO:
    // 1. Simpan foto di folder: public/images/album/
    // 2. Ganti array di bawah dengan data foto Anda

    const photos = [
        {
            id: 1,
            src: '/images/album/p22.jpg',  // Ganti dengan nama file foto Anda
            title: 'Sarasehan Putro 2024',
            description: 'Kegiatan sarasehan tahunan para putro'
        },
        {
            id: 2,
            src: '/images/album/foto2.jpg',
            title: 'Gelar Gulung',
            description: 'Pelaksanaan Gelar Gulung bulanan'
        },
        {
            id: 3,
            src: '/images/album/foto3.jpg',
            title: 'Peringatan Sabdho Honocoroko',
            description: 'Peringatan Sabdho Honocoroko 29 April'
        },
        // Tambahkan foto lainnya di sini...
        // Copy format di atas dan sesuaikan id, src, title, description
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center mb-4">Album Foto</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Dokumentasi kegiatan dan momen penting Paguyuban Penghayat Kapribaden
            </p>

            {/* Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        {/* Photo Image */}
                        <div className="aspect-[4/3] relative bg-gray-200">
                            <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-kapribaden-purple-900/90 via-kapribaden-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6 text-white w-full">
                                <h3 className="font-bold text-xl mb-2">{photo.title}</h3>
                                <p className="text-sm text-gray-200">{photo.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Info Box */}
            <div className="mt-12 p-8 bg-gradient-to-r from-kapribaden-purple-50 to-kapribaden-gold-50 rounded-xl border-l-4 border-kapribaden-purple-600 shadow-lg">
                <h2 className="text-2xl font-bold text-kapribaden-purple-800 mb-4">📸 Cara Menambahkan Foto</h2>

                <div className="space-y-4 text-gray-700">
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-bold text-kapribaden-purple-700 mb-2">Langkah 1: Simpan Foto</h3>
                        <p>Simpan foto-foto Anda di folder: <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">public/images/album/</code></p>
                        <p className="text-sm text-gray-600 mt-2">Contoh: foto1.jpg, foto2.jpg, kegiatan-sarasehan.jpg</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-bold text-kapribaden-purple-700 mb-2">Langkah 2: Edit File Album</h3>
                        <p>Buka file: <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">app/album/page.tsx</code></p>
                        <p className="text-sm text-gray-600 mt-2">Tambahkan data foto di array <code className="bg-gray-100 px-1 rounded text-xs">photos</code></p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="font-bold text-kapribaden-purple-700 mb-2">Langkah 3: Format Data Foto</h3>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-2">
                            {`{
  id: 4,
  src: '/images/album/nama-foto.jpg',
  title: 'Judul Foto',
  description: 'Deskripsi singkat foto'
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
