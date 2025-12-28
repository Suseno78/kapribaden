import Image from 'next/image'

export const metadata = {
    title: 'Album | Paguyuban Penghayat Kapribaden',
    description: 'Galeri foto Paguyuban Penghayat Kapribaden',
}

export default function AlbumPage() {
    // Data statis dengan judul dan deskripsi per foto
    const albumSections = [
        {
            title: "Sowan Dimakam Kanjeng Romo",
            photos: [
                {
                    src: "/images/lawas/1-1.jpg",
                    title: "Tahun 1983",
                    description: "Istri Kanjeng Romo"
                },
                {
                    src: "/images/lawas/1-2.jpg",
                    title: "Tahun 1983",
                    description: "Kadhang Tuban"
                },
                {
                    src: "/images/lawas/1-3.jpg",
                    title: "Tahun 1983",
                    description: "Momen hening cipta dan doa"
                },
            ],
        },
        {
            title: "Rombongan Kadhang Se-Indonesia Dari Rumah Bawah (Pasar Sejiwan) Menuju Makam Kanjeng Romo Untuk Melakukan Prosesi Pembangunan makam Kanjeng Romo",
            photos: [
                {
                    src: "/images/lawas/2-1.jpg",
                    title: "Tahun 1983",
                    description: "Diskusi rutin antar anggota"
                },
                {
                    src: "/images/lawas/2-2.jpg",
                    title: "Tahun 1983",
                    description: "Membersihkan lingkungan sekitar"
                },
                {
                    src: "/images/lawas/2-3.jpg",
                    title: "Tahun 1983",
                    description: "Diskusi rutin antar anggota"
                },
                {
                    src: "/images/lawas/2-4.jpg",
                    title: "Tahun 1983",
                    description: "Membersihkan lingkungan sekitar"
                },
                {
                    src: "/images/lawas/2-5.jpg",
                    title: "Tahun 1983",
                    description: "Diskusi rutin antar anggota"
                },
                {
                    src: "/images/lawas/2-6.jpg",
                    title: "Tahun 1983",
                    description: "Membersihkan lingkungan sekitar"
                },
            ],
        },
        {
            title: "Proses Pembongkaran dan Peletakan Batu Pertama Pembangunan Makam Kanjeng Romo",
            photos: [
                {
                    src: "/images/lawas/3-1.jpg",
                    title: "Tahun 1983",
                    description: "Diskusi rutin antar anggota"
                },
                {
                    src: "/images/lawas/3-2.jpg",
                    title: "Tahun 1983",
                    description: "Membersihkan lingkungan sekitar"
                },
                {
                    src: "/images/lawas/3-3.jpg",
                    title: "Tahun 1983",
                    description: "Suasana di area pemakaman"
                },
                {
                    src: "/images/lawas/3-4.jpg",
                    title: "Tahun 1983",
                    description: "Membersihkan lingkungan sekitar"
                },
                {
                    src: "/images/lawas/3-5.jpg",
                    title: "Tahun 1983",
                    description: "Suasana di area pemakaman"
                },
                {
                    src: "/images/lawas/3-6.jpg",
                    title: "Tahun 1983",
                    description: "Membersihkan lingkungan sekitar"
                },
                {
                    src: "/images/lawas/3-7.jpg",
                    title: "Tahun 1983",
                    description: "Suasana di area pemakaman"
                },
                {
                    src: "/images/lawas/3-8.jpg",
                    title: "Tahun 1983",
                    description: "Membersihkan lingkungan sekitar"
                },
            ],
        },
        {
            title: "Ziarah Tahun 1992",
            photos: [
                {
                    src: "/images/lawas/4-1.jpg",
                    title: "Tahun 1992",
                    description: "Tampak depan pendopo kegiatan"
                },
                {
                    src: "/images/lawas/4-2.jpg",
                    title: "Tahun 1992",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/lawas/4-3.jpg",
                    title: "Tahun 1992",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/lawas/4-4.jpg",
                    title: "Tahun 1992",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/lawas/4-5.jpg",
                    title: "Tahun 1992",
                    description: "Suasana di dalam ruangan"
                },
            ],
        },
        {
            title: "Ziarah Tahun 2002",
            photos: [
                {
                    src: "/images/lawas/5-1.jpg",
                    title: "Tahun 2002",
                    description: "Tampak depan pendopo kegiatan"
                },
                {
                    src: "/images/lawas/5-2.jpg",
                    title: "Tahun 2002",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/lawas/5-3.jpg",
                    title: "Tahun 2002",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/lawas/5-4.jpg",
                    title: "Tahun 2002",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/lawas/5-5.jpg",
                    title: "Tahun 2002",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/lawas/5-6.jpg",
                    title: "Tahun 2002",
                    description: "Suasana di dalam ruangan"
                },
            ],
        },
        {
            title: "Ziarah Tahun 2022",
            photos: [
                {
                    src: "/images/2022/2-1.jpg",
                    title: "Tahun 2022",
                    description: "Tampak depan pendopo kegiatan"
                },
                {
                    src: "/images/2022/2-2.jpg",
                    title: "Tahun 2022",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2022/2-3.jpg",
                    title: "Tahun 2022",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2022/2-4.jpg",
                    title: "Tahun 2022",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2022/2-5.jpg",
                    title: "Tahun 2022",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2022/2-6.jpg",
                    title: "Tahun 2022",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2022/2-7.jpg",
                    title: "Tahun 2022",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2022/2-8.jpg",
                    title: "Tahun 2022",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2022/2-9.jpg",
                    title: "Tahun 2022",
                    description: "Suasana di dalam ruangan"
                },
            ],
        },
        {
            title: "Ziarah Tahun 2023",
            photos: [
                {
                    src: "/images/2023/3-1.jpg",
                    title: "Tahun 2023",
                    description: "Tampak depan pendopo kegiatan"
                },
                {
                    src: "/images/2023/3-2.jpg",
                    title: "Tahun 2023",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2023/3-3.jpg",
                    title: "Tahun 2023",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2023/3-4.jpg",
                    title: "Tahun 2023",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2023/3-5.jpg",
                    title: "Tahun 2023",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2023/3-6.jpg",
                    title: "Tahun 2023",
                    description: "Suasana di dalam ruangan"
                },
            ],
        },
        {
            title: "Ziarah Tahun 2024",
            photos: [
                {
                    src: "/images/2024/4-1.jpg",
                    title: "Tahun 2024",
                    description: "Tampak depan pendopo kegiatan"
                },
                {
                    src: "/images/2024/4-2.jpg",
                    title: "Tahun 2024",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2024/4-3.jpg",
                    title: "Tahun 2024",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2024/4-4.jpg",
                    title: "Tahun 2024",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2024/4-5.jpg",
                    title: "Tahun 2024",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2024/4-6.jpg",
                    title: "Tahun 2024",
                    description: "Suasana di dalam ruangan"
                },
            ],
        },
        {
            title: "Ziarah Tahun 2025",
            photos: [
                {
                    src: "/images/2025/5-1.jpg",
                    title: "Tahun 2025",
                    description: "Tampak depan pendopo kegiatan"
                },
                {
                    src: "/images/2025/5-2.jpg",
                    title: "Tahun 2025",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2025/5-3.jpg",
                    title: "Tahun 2025",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2025/5-4.jpg",
                    title: "Tahun 2025",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2025/5-5.jpg",
                    title: "Tahun 2025",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2025/5-6.jpg",
                    title: "Tahun 2025",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2025/5-7.jpg",
                    title: "Tahun 2025",
                    description: "Area taman dan parkir"
                },
                {
                    src: "/images/2025/5-8.jpg",
                    title: "Tahun 2025",
                    description: "Suasana di dalam ruangan"
                },
                {
                    src: "/images/2025/5-9.jpg",
                    title: "Tahun 2025",
                    description: "Suasana di dalam ruangan"
                },
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
                            {section.photos.map((photo, photoIndex) => (
                                <div
                                    key={photoIndex}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Container Gambar */}
                                    <div className="aspect-[4/3] relative bg-gray-200">
                                        <Image
                                            src={photo.src}
                                            alt={photo.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Overlay on hover - Menggunakan Judul & Deskripsi FOTO masing-masing */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-6 text-white w-full">
                                            <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                                            <p className="text-sm text-gray-200">{photo.description}</p>
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
