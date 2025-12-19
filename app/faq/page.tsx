export const metadata = {
    title: 'FAQ - Pertanyaan yang Sering Diajukan | Paguyuban Penghayat Kapribaden',
    description: 'Jawaban atas pertanyaan umum tentang Kapribaden, Romo Herucokro Semono, Panca Gaib, dan Laku Kasampurnan',
}

export default function FAQPage() {
    const faqs = [
        {
            category: 'Tentang Kapribaden',
            questions: [
                {
                    q: 'Apa itu Kapribaden?',
                    a: 'Kapribaden adalah penghayatan spiritual yang bersifat universal untuk mencapai kebahagiaan sejati dan Kasampurnan Jati (moksha). Kapribaden mengajarkan bagaimana manusia bisa berguru pada Guru Sejati-nya sendiri, yaitu Hidupnya sendiri atau Rokh-nya sendiri.'
                },
                {
                    q: 'Apakah Kapribaden adalah agama?',
                    a: 'Tidak. Kapribaden bukan agama, melainkan penghayatan spiritual yang bersifat universal. Kapribaden tidak mengharuskan seseorang meninggalkan agamanya. Justru dengan menghayati Kapribaden, seseorang akan lebih memahami dan menghayati ajaran agamanya dengan lebih baik.'
                },
                {
                    q: 'Siapa yang bisa menghayati Kapribaden?',
                    a: 'Siapapun yang menghendaki, tanpa memandang perbedaan apapun - suku, bangsa, agama, derajat, pangkat, kekayaan, atau kedudukan sosial. Kapribaden bersifat universal dan terbuka untuk semua orang yang ingin hidup bahagia (tentrem) dan mencapai Kasampurnan Jati.'
                },
            ]
        },
        {
            category: 'Tentang Romo Herucokro Semono',
            questions: [
                {
                    q: 'Siapa Romo Herucokro Semono?',
                    a: 'Romo Semono Sastrohadidjojo (Romo Herucokro Semono) lahir tahun 1900 dan wafat 3 Maret 1981. Beliau adalah sosok yang Mijil pada 13 malem 14 November 1955 setelah menjalani laku selama 41 tahun (1914-1955). Beliau memberikan Laku Kasampurnan kepada siapapun yang menghendaki.'
                },
                {
                    q: 'Apa yang dimaksud dengan "Mijil"?',
                    a: 'Mijil adalah peristiwa spiritual luar biasa yang terjadi pada Romo Semono tanggal 13 malem 14 November 1955 di Surabaya. Saat itu banyak orang menyaksikan cahaya (bukan api) dan kereta keemasan (kreto kencono) turun dari langit. Pernyataan beliau saat Mijil: "Ingsun Mijil, arso nyungsang bawono balik, arso nggelar jagat anyar" - hendak memutar-balikkan jagad (pribadi manusia) dan menggelarkan dunia baru.'
                },
                {
                    q: 'Dimana makam Romo Herucokro Semono?',
                    a: 'Romo Herucokro Semono dimakamkan di Kalinongko, Loano, Purworejo, Jawa Tengah. Tempat yang sama dimana beliau dibesarkan oleh Ki Kasandhikromo.'
                },
            ]
        },
        {
            category: 'Tentang Panca Gaib',
            questions: [
                {
                    q: 'Apa itu Panca Gaib?',
                    a: 'Panca Gaib adalah lima sarana gaib yang didapat Romo Herucokro Semono dari lakunya selama 41 tahun (1914-1955). Kelima sarana ini adalah: Kunci, Asmo, Mijil, Singkir, dan Paweling. Panca Gaib digunakan untuk mengenal dan berkomunikasi dengan Hidup yang ada dalam diri kita.'
                },
                {
                    q: 'Apa fungsi Kunci dalam Panca Gaib?',
                    a: 'Kunci adalah sarana gaib pertama yang gunanya untuk memberikan bukti kepada diri kita masing-masing bahwa Hidup itu memang ada dalam diri kita. Dengan menggunakan Kunci, kita tidak hanya percaya, tetapi membuktikan dan merasakan sendiri keberadaan Hidup dalam diri kita.'
                },
                {
                    q: 'Bagaimana cara mendapatkan Panca Gaib?',
                    a: 'Panca Gaib diberikan kepada mereka yang mohon diperkenankan menjadi Putro (pengikut Laku Kasampurnan). Prosesnya melalui permohonan kepada para Kadhang (sesama penghayat) yang sudah lebih dahulu menjalani laku ini. Tidak ada paksaan atau intimidasi dalam proses ini.'
                },
            ]
        },
        {
            category: 'Tentang Laku Kasampurnan',
            questions: [
                {
                    q: 'Apa itu Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil?',
                    a: 'Laku Kasampurnan adalah jalan spiritual untuk mencapai kebahagiaan sejati di dunia dan Kasampurnan Jati (moksha) pada saatnya. Laku ini mengajarkan bagaimana manusia bisa mengikuti petunjuk dari Hidupnya sendiri, sehingga setiap tindakan sesuai dengan kehendak Tuhan.'
                },
                {
                    q: 'Apa yang dimaksud dengan "Putro"?',
                    a: 'Putro adalah sebutan untuk mereka yang telah diperkenankan mengikuti Laku Kasampurnan. Romo Herucokro Semono meninggalkan ratusan ribu, mungkin jutaan Putro yang tersebar di mana-mana, termasuk di 19 negara di luar Indonesia.'
                },
                {
                    q: 'Apa itu "Kadhang"?',
                    a: 'Kadhang adalah sebutan untuk sesama penghayat Kapribaden. Kadhang berarti saudara, menunjukkan bahwa semua penghayat adalah saudara tanpa memandang perbedaan apapun.'
                },
                {
                    q: 'Apa yang dimaksud dengan "Gelar Gulung"?',
                    a: 'Gelar Gulung adalah pertemuan rutin para Kadhang untuk saling berbagi pengalaman dalam menghayati Laku Kasampurnan. Dalam pertemuan ini, para Kadhang saling "momong" (membimbing) dan menguatkan satu sama lain.'
                },
            ]
        },
        {
            category: 'Tentang Praktik Spiritual',
            questions: [
                {
                    q: 'Apa itu Sabdho Honocoroko?',
                    a: 'Sabdho Honocoroko adalah sabda atau pernyataan penting: "ROMO Mangestoni, Putro-Putro Kudu Ngakoni Putro ROMO". Ini adalah inti ajaran yang menekankan bahwa Romo mengakui para Putro, dan para Putro harus mengakui diri sebagai Putro Romo.'
                },
                {
                    q: 'Apa itu Laku Pangumbahing Rogo?',
                    a: 'Laku Pangumbahing Rogo adalah lima laku untuk menjaga kesehatan dan keseimbangan raga: Mandi (kebersihan), Makan (nutrisi), Turu (istirahat), Olah Raga (aktivitas fisik), dan Olah Rasa (keseimbangan emosi dan spiritual).'
                },
                {
                    q: 'Bagaimana cara memulai menghayati Kapribaden?',
                    a: 'Langkah pertama adalah mempelajari ajaran Kapribaden melalui website ini atau bertemu dengan para Kadhang. Jika merasa cocok dan ingin menjalani, dapat memohon untuk diperkenankan menjadi Putro. Yang terpenting adalah keinginan tulus untuk hidup bahagia (tentrem) dan mencapai Kasampurnan Jati.'
                },
            ]
        },
        {
            category: 'Tentang Pasaran & Perhitungan',
            questions: [
                {
                    q: 'Apa itu Neptu?',
                    a: 'Neptu adalah nilai numerik dari hari dan pasaran dalam kalender Jawa. Neptu digunakan untuk berbagai perhitungan spiritual seperti menentukan hari baik, menghitung Naga Dino, Boyongan, dan lain-lain.'
                },
                {
                    q: 'Apa itu Naga Dino?',
                    a: 'Naga Dino adalah perhitungan untuk menentukan hari-hari tertentu yang memiliki makna khusus berdasarkan jumlah Neptu. Naga Dino digunakan untuk menentukan waktu yang tepat untuk berbagai kegiatan penting.'
                },
                {
                    q: 'Apa fungsi perhitungan Pasaran?',
                    a: 'Perhitungan Pasaran digunakan untuk menentukan waktu yang tepat untuk berbagai kegiatan seperti Boyongan (pindah rumah), 7 Bulanan (kehamilan), Poso 40 Dino (puasa), dan Taliwangke. Ini membantu menyelaraskan kegiatan dengan ritme spiritual.'
                },
            ]
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-center mb-4">Pertanyaan yang Sering Diajukan</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Temukan jawaban atas pertanyaan umum tentang Kapribaden, Romo Herucokro Semono, dan Laku Kasampurnan
                </p>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-8">
                {faqs.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="content-section">
                        <h2 className="text-2xl font-bold text-kapribaden-purple-800 mb-6 pb-3 border-b-2 border-kapribaden-gold-400">
                            {section.category}
                        </h2>
                        <div className="space-y-6">
                            {section.questions.map((faq, faqIndex) => (
                                <div key={faqIndex} className="bg-white/50 rounded-lg p-6 hover:bg-white/80 transition-all duration-300">
                                    <h3 className="text-lg font-bold text-kapribaden-purple-700 mb-3 flex items-start">
                                        <span className="text-kapribaden-gold-600 mr-3 text-2xl">Q:</span>
                                        <span>{faq.q}</span>
                                    </h3>
                                    <div className="flex items-start">
                                        <span className="text-kapribaden-purple-600 mr-3 text-2xl font-bold">A:</span>
                                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-kapribaden-purple-100 to-kapribaden-gold-100 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-4">
                    Masih Ada Pertanyaan?
                </h3>
                <p className="text-gray-700 mb-6">
                    Pelajari lebih lanjut tentang ajaran Kapribaden melalui halaman-halaman berikut
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="/kapribaden"
                        className="px-6 py-3 bg-kapribaden-purple-700 text-white rounded-lg hover:bg-kapribaden-purple-800 transition-colors duration-200 font-medium"
                    >
                        Tentang Kapribaden
                    </a>
                    <a
                        href="/romo"
                        className="px-6 py-3 bg-kapribaden-gold-600 text-white rounded-lg hover:bg-kapribaden-gold-700 transition-colors duration-200 font-medium"
                    >
                        Biografi Romo
                    </a>
                    <a
                        href="/buku-hidup-bahagia"
                        className="px-6 py-3 bg-kapribaden-purple-600 text-white rounded-lg hover:bg-kapribaden-purple-700 transition-colors duration-200 font-medium"
                    >
                        Buku Hidup Bahagia
                    </a>
                </div>
            </div>
        </div>
    )
}
