'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import AnimatedSection from '../../components/AnimatedSection'

export default function RomoPage() {
    return (
        <div className="overflow-hidden">
            <PageHero
                title="Romo Herucokro Semono"
                subtitle="1900 - 1981"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Romo Herucokro Semono', href: '/romo' }
                ]}
            />

            {/* Photo Section */}
            <section className="relative py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="flex justify-center mb-12">
                        <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-kapribaden-purple-600 to-kapribaden-gold-500 rounded-2xl transform rotate-3 scale-105 opacity-30" />
                            <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-kapribaden-gold-500">
                                <Image
                                    src="/images/romo.jpeg"
                                    alt="Romo Herucokro Semono"
                                    width={300}
                                    height={400}
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </AnimatedSection>

                    <AnimatedSection className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-kapribaden-purple-900 mb-4">
                            Romo Semono Sastrohadidjojo
                        </h2>
                        <p className="text-2xl text-kapribaden-gold-600 font-bold">1900 - 1981</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12 bg-gradient-to-b from-white to-kapribaden-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Kelahiran dan Masa Kecil</h2>
                            <div className="prose">
                                <p>
                                    Sebelum tahun 1900, seorang isteri &quot;padhemi&quot; (isteri resmi), dibuang dalam arti diberikan kepada seseorang yang dinilai berjasa.
                                </p>
                                <p>
                                    Itu karena desakan seorang &quot;selir&quot; yang sangat dicintainya. Hal demikian, tidak jarang terjadi pada jaman itu.
                                </p>
                                <p>
                                    Isteri &quot;priyagung&quot; itu bernama Dewi Nawangwulan. Kepergiannya, disertai seorang dayang (emban), bernama Rantamsari.
                                </p>
                                <p>
                                    Dewi Nawangwulan, dibuang (&quot;dikhendangake&quot;) dan diberikan kepada Ki Kasandikromo, yang sering juga disebut Ki Kasan Kesambi,
                                    seorang tokoh spiritual pada jamannya, yang berdiam di desa Kalinongko. Gunung Damar, Kecamatan Loano. Kabupaten Purworejo, Jawa Tengah.
                                </p>
                                <p>
                                    Saat dibuang, Dewi Nawangwulan dalam keadaan mengandung. Lahir bayi yang diberi nama Semono. Ibunya, Dewi Nawangwulan wafat.
                                    Tidak lama kemudian disusul Rantamsari, dayangnya, juga meninggal dunia. Keduanya dimakamkan di Puncak Gunung Damar, Purworejo.
                                </p>
                                <p>
                                    Ki Kasandikromo, tidak pernah mau menggangap, apalagi memperlakukan Dewi Nawangwulan sebagai isterinya. Tetap dianggap dan diperlakukan
                                    sebagai &quot;ratu&quot;-nya. Demikian pula isterinya, Nyi Kasandhikromo.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Pendidikan dan Kejadian Luar Biasa</h2>
                            <div className="prose">
                                <p>
                                    Semono dipelihara dan dibesarkan Ki Kasandikromo. Di sekolahkan di Sekolah Ongko Loro (SD yang 5 tahun tamat untuk pribumi).
                                    Semono yang lahir tahun 1900 harinya Jumat Pahing. Tidak ada catatan resmi tanggal dan bulannya. Hal biasa pada jaman itu.
                                </p>
                                <p>
                                    Semono, semasa sekolah, setiap hari Selasa Kliwon dan Jumat kliwon, membolos bukan karena malas atau nakal tetapi karena malu.
                                </p>
                                <div className="bg-kapribaden-purple-50 p-6 rounded-xl border-l-4 border-kapribaden-gold-500 my-6">
                                    <p className="text-kapribaden-purple-800">
                                        <strong>Kejadian Luar Biasa:</strong> Pada saat matahari tepat di atas, saat semua orang tidak ada bayangannya.
                                        Semono bayanganya 12. Karena selalu jadi tontonan teman-temannya, jadi malu. Maka lebih baik membolos.
                                    </p>
                                </div>
                                <p>
                                    Tamat SD itu, langsung diangkat menjadi guru bantu.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Awal Perjalanan Spiritual</h2>
                            <div className="prose">
                                <p>
                                    Suatu hari, pemuda Semono yang saat itu berusia 14 tahun (sudah dianggap dan diperlakukan sebagai seorang dewasa pada jaman itu),
                                    disuruh Nyi Kasan mengambilkan minyak, didalam satu bilik rumah mereka. Ternyata di dalam bilik itu, tertidur lelap seorang gadis
                                    kemenakan Nyi Kasan. Dalam kelelapan tidurnya, kain yang dipakai tersingkap, jadi tubuhnya kelihatan terbuka.
                                </p>
                                <p>
                                    Pemuda Semono, melihat itu &quot;Mengkorok&quot; (Berdiri bulu di tubuhnya). Semono lalu merenung. Mempertanyakan, apa sebenarnya yang
                                    menggerakan bulu-bulu tubuhnya itu? Renungan demi renungan, tidak menemukan jawaban.
                                </p>
                                <p>
                                    Akhirnya Semono memutuskan, minta ijin Ki Kasan untuk pergi bertapa.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Bertapa di Cilacap (1914-1917)</h2>
                            <div className="prose">
                                <p>
                                    Semono yang berusia 14 tahun itu, bertapa di tepi Laut Selatan, di Cilacap. Bekasnya (petilasan) masih ada sampai tulisan ini ditulis.
                                    Berupa dua rumpun bambu, di dalam kompleks Pertamina. Pertamina, sekalipun sudah berusaha dengan berbagai cara, tidak bisa membongkar
                                    kedua rumpun bambu itu.
                                </p>
                                <p>
                                    Semono bertapa selama 3 tahun (1914-1917). Hasilnya mendapat &quot;cangkok Wijoyo Kusumo&quot;, berbentuk seperti bunga kering, berwarna coklat
                                    kehitaman. Kalau dimasukan ke air, akan mengembang sebesar tempatnya.
                                </p>
                                <p>
                                    Semono kecewa, karena bukan itu yang dicari. Beliau mendapatkan &quot;wangsit&quot; (ilham), untuk melanjutkan laku sampai tahun kembar 5,
                                    dan di Timur nantinya akan dia temukan apa yang dia cari.
                                </p>
                                <p>
                                    Baju yang dikenakan semono selama 3 tahun bertapa, hancur. Dengan hanya bercawat dedaunan, Semono pulang. Jalan malam, siang sembunyi,
                                    malam jalan. Takut dan malu kalau bertemu orang.
                                </p>
                                <p>
                                    Sampai di rumah, bukannya dirayakan, tetapi malah sudah disediakan lubang (&quot;luweng&quot;) lalu pemuda Semono oleh Ki Kasan, ditanam
                                    (&quot;dipendem&quot;) selama 40 hari 40 malam, hanya diberi batang gelagah untuk bernafas, dan setiap usai menanak nasi, Nyi Kasan mengepulkan
                                    asap nasi itu ke dalam lubang gelagah.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Melanjutkan Laku (1917-1955)</h2>
                            <div className="prose">
                                <p>
                                    Selanjutnya, Semono sambil menjadi Marsose (sekarang Marinir), berkelana, tetap menjalani laku. Kalau siang dinas, malamnya berendam
                                    di laut, menjala. Tidak pernah dapat ikan, itu dilakukan sampai tahun 1955.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mijil Section - Special Dark Section */}
            <section className="py-20 bg-kapribaden-purple-950 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kapribaden-purple-900/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-kapribaden-gold-900/20 to-transparent" />
                </div>
                
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Mijilnya Romo Herucokro Semono
                            </h2>
                            <p className="text-xl text-kapribaden-gold-300">
                                13 malem 14 November 1955, malem Senen Pahing, pukul 16.05
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="bg-kapribaden-purple-900/50 border border-kapribaden-purple-800 rounded-2xl p-8 mb-8">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Banyak orang di Perak, Surabaya, terkejut, menyaksikan rumah Letnan KKO (sekarang Letnan Satu Marinir), terbakar. Tetapi setelah
                                didekati ternyata bukan api, melainkan cahaya. Bahkan ada kereta keemasan (kreto kencono) di langit, yang turun masuk ke Rumah
                                Letnan Semono. Di jalan Perak Barat No.93, Surabaya.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <div className="bg-gradient-to-br from-kapribaden-purple-900 to-kapribaden-purple-950 rounded-2xl p-10 border border-kapribaden-gold-500/30 shadow-2xl">
                            <p className="text-kapribaden-gold-400 text-sm font-semibold mb-4 uppercase tracking-wider">Pernyataan saat Mijil</p>
                            <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-6">
                                &quot;Ingsun Mijil, arso nyungsang bawono balik, arso nggelar jagat anyar&quot;
                            </p>
                            <div className="border-t border-kapribaden-purple-700 pt-6">
                                <p className="text-gray-400 leading-relaxed">
                                    &quot;Ingsun&quot; (bukan aku) mijil hendak memutar-balikkan jagad (maksudnya jagat kecil, pribadi manusia, micro cosmos),
                                    dan hendak menggelarkan dunia baru (micro cosmos baru).
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} className="mt-8">
                        <p className="text-center text-gray-400 text-lg">
                            Artinya, kalau selama ini, kita selalu memperbudak hidup, selanjutnya terbalik, kita sebagai manusia akan menjadi abdinya sang hidup.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Remaining Content */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Memberikan Laku Kasampurnan (1955-1981)</h2>
                            <div className="prose">
                                <p>
                                    Mulai saat itu. Romo Herucokro Semono memberikan siapapun yang menghendaki (tidak ada paksaan, tidak menakut-nakuti dengan cara dan
                                    jalan apapun) yang ingin hidup bahagia (tentrem), agar bisa mencapai &quot;kasampurnan jati&quot; (moksha) pada saatnya.
                                </p>
                                <p>
                                    Romo Herucokro Semono, selanjutnya memberikan Laku Kasampurnan ini, sesudah dinas. Berlangsung sampai tahun 1960, beliau menjalani
                                    masa pensiun sebagai Kapten Marinir.
                                </p>
                                <p>
                                    Beliau lalu pulang ke Purworejo dan berdiam di Kalinongko dan Sewijan, Loano, Purworejo (2 rumah kediaman).
                                    Setiap hari, beliau menerima kedatangan rata-rata 500 orang lebih.
                                </p>
                                <p>
                                    Semua orang, pada waktu makan, diberi makan dan menginap dengan bebas mencari tempat untuk tidur di rumah beliau.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Sifat dan Keistimewaan Beliau</h2>
                            <div className="prose">
                                <p>
                                    Semua yang datang diperlakukan 100% sama. Beliau tidak pernah memandang orang dari perbedaan apapun. Derajat, pangkat, kekayaan,
                                    kedudukan sosial, suku, bangsa, semua diperlakukan 100% sama.
                                </p>
                                <div className="bg-kapribaden-purple-50 p-6 rounded-xl my-6">
                                    <p className="text-kapribaden-purple-800">
                                        <strong>Keajaiban:</strong> Kalau beliau sedang memberikan petuah (&quot;wulang-wuruk&quot;), setiap orang mendengar menurut bahasanya
                                        sendiri sendiri. Yang orang Jerman mendengar belia berbicara bahasa Jerman, yang orang Inggris mendengat beliau berbahasa Inggris,
                                        sedangkan penulis mendengar beliau berbahasa Jawa.
                                    </p>
                                </div>
                                <p>
                                    Romo Semono, setiap harinya, makan dua kali, tetapi tiap kali makan, hanya satu sendok. Tidurnya, hampir tidak pernah. Hampir tidak
                                    pernah mandi, tetapi selain tidak berbau badan beliau, juga tidak ada daki (kotoran) di kulit beliau. Tubuh tetap sehat, gagah,
                                    tinggi besar.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Mujijat dan Hal Luar Biasa</h2>
                            <div className="prose">
                                <p>
                                    Hal-hal luar biasa, atau mujijat yang beliau tunjukkan, kalau ditulis semua akan menjadi satu buku sendiri. Beberapa contoh saja:
                                </p>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Sekitar tahun 1960, beliau naik sepeda motor militer, diatas laut Jawa, menyeberang ke Madura</li>
                                    <li>Kalau dengan mengemudikan mobil, tangan dan kaki beliau dilepas, dan mobil di komando dengan ucapan</li>
                                    <li>Beberapa kali orang menyaksikan beliau menghidupkan orang, yang telah dinyatakan mati oleh dokter, dan siap dikubur</li>
                                    <li>Beliau sering berada di beberapa tempat pada saat yang sama, dan di tiap tempat beliau makan minum seperti biasa</li>
                                </ul>
                                <p>
                                    Setiap kali, sekalipun dihadapkan beliau menghadap ratusan orang, beliau bercerita dan setelah selesai bercerita, ternyata semua
                                    pertanyaan dan persoalan yang ada di benak yang hadir sudah terjawab semua.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <h2>Wafat dan Peninggalan</h2>
                            <div className="prose">
                                <p className="text-lg font-semibold text-kapribaden-purple-800">
                                    Romo Herucokro Semono wafat tanggal 3 Maret 1981, dan dimakamkan di Kalinongko, Loano, Purworejo.
                                </p>
                                <p>
                                    Romo Semono tidak dikaruniai anak. Tetapi meninggalkan ratusan ribu, mungkin jutaan putro, yang tersebar dimana-mana.
                                </p>
                                <div className="bg-gradient-to-br from-kapribaden-purple-50 to-kapribaden-gold-50 p-6 rounded-xl my-6 border-l-4 border-kapribaden-purple-600">
                                    <p className="text-kapribaden-purple-800">
                                        <strong>Peninggalan Beliau yang Paling Berharga:</strong><br />
                                        Sarana sarana Gaib bagi mereka yang ingin hidup bahagia (tentrem) agar bisa menjalani dan mencapai &quot;kasampurnan jati&quot; pada saatnya
                                        masing-masing.
                                    </p>
                                </div>
                                <p>
                                    Tinggalan beliau yang terakhir yang sampai sekarang, dipelihara (&quot;dhipepetri&quot;) dan dilestarikan oleh putro-putronya. Dilestarikan,
                                    dalam arti tetap dihayati dan diamalkan dan diberikan kepada siapa saja yang menghendaki, tanpa memandang perbedaan apapun yang ada
                                    pada manusianya. Jadi sifatnya universal.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-kapribaden-purple-100 via-white to-kapribaden-gold-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <p className="text-xl text-kapribaden-purple-800 font-semibold mb-6 leading-relaxed">
                            Selama 25 tahun lebih (13 malem 14 November 1955 s/d 3 Maret 1981),<br />
                            Romo Semono melayani pagi, siang, sore, malam, dini hari, siapapun yang datang.
                        </p>
                        <Link href="/kapribaden">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary"
                            >
                                Pelajari Ajaran Kapribaden
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
