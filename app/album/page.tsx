import Image from 'next/image'

export const metadata = {
    title: 'Album | Paguyuban Penghayat Kapribaden',
    description: 'Galeri foto Paguyuban Penghayat Kapribaden',
}

export default function AlbumPage() {
    // Data statis sesuai request (menggunakan gambar placeholder yang ada agar tampil)
    const albumSections = [
        {
            title: "Upacara Adat",
            photos: [
                "/images/album/p22.jpg",
                "/images/album/p222.jpg",
                "/images/album/p223.jpg",
            ],
        },
        {
            title: "Kegiatan Rutin",
            photos: [
                "/images/album/p224.jpg",
                "/images/album/IMG20220823071853.jpg",
            ],
        },
        {
            title: "Ziarah",
            photos: [
                "/images/album/p22.jpg",
                "/images/album/p222.jpg",
                "/images/album/p223.jpg",
            ],
        },
        {
            title: "Bangunan & Tempat",
            photos: [
                "/images/album/p224.jpg",
                "/images/album/IMG20220823071853.jpg",
                "/images/album/p22.jpg",
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center mb-4">Album Foto</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
                Dokumentasi kegiatan dan momen penting Paguyuban Penghayat Kapribaden
            </p>

            <div className="space-y-16">
                {albumSections.map((section, index) => (
                    <section key={index}>
                        {/* Judul Section: Tebal, Hijau, Lebih Besar */}
                        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 border-b-2 border-green-100 pb-2 inline-block">
                            📸 {section.title}
                        </h2>

                        {/* Grid Foto - Style persis sebelumnya */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.photos.map((photoSrc, photoIndex) => (
                                <div
                                    key={photoIndex}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Container Gambar */}
                                    <div className="aspect-[4/3] relative bg-gray-200">
                                        <Image
                                            src={photoSrc}
                                            alt={`${section.title} - ${photoIndex + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Overlay on hover - Diganti nuansa hijau agar konsisten */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-6 text-white w-full">
                                            <h3 className="font-bold text-lg mb-1">{section.title}</h3>
                                            <p className="text-sm text-gray-200">Dokumentasi {section.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
