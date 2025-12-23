'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '../../components/PageHero'
import AnimatedSection from '../../components/AnimatedSection'
import ContentCard, { FeatureCard } from '../../components/ContentCard'

export default function KapribadenPage() {
    const pancaGaib = [
        { title: 'Kunci', desc: 'Sarana untuk mengenal Hidup dalam diri kita', icon: '🔑' },
        { title: 'Asmo', desc: 'Nama untuk Hidup kita', icon: '✨' },
        { title: 'Mijil', desc: 'Menyatukan Raga dengan Hidup', icon: '🌟' },
        { title: 'Singkir', desc: 'Menipiskan "AKU" dalam diri', icon: '🌊' },
        { title: 'Paweling', desc: 'Manunggal dengan Yang Maha Esa', icon: '🕊️' },
    ]

    const lakuPangumbah = [
        { title: 'Sabar', desc: 'Seperti seorang Ibu mengandung' },
        { title: 'Narimo', desc: 'Berusaha semaksimal mungkin tetapi apa dan berapa hasilnya, serahkan kepada kehendak Tuhan' },
        { title: 'Ngalah', desc: 'Bisa ikut merasakan senangnya orang yang dikalahi. Hanya orang menang yang bisa mengalah' },
        { title: 'Tresno welas lan asih', desc: 'Cinta Kasih kepada apa dan siapa saja (benda, pekerjaan, tanaman, binatang, apalagi sesama manusia)' },
        { title: 'Ikhlas', desc: 'Setiap saat merasa tidak punya apa-apa, semuanya hanya titipan Tuhan' },
    ]

    return (
        <div className="overflow-hidden">
            <PageHero
                title="Kapribaden"
                subtitle="Laku Kasampurnan Manunggal Kinantenan Sarwo Mijil"
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Kapribaden', href: '/kapribaden' }
                ]}
            />

            {/* Apa itu Kapribaden */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-kapribaden-purple-900 mb-6">
                            Apa itu Kapribaden?
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <ContentCard variant="purple">
                            <div className="prose prose-lg">
                                <p className="text-lg font-semibold text-kapribaden-purple-700 mb-4">
                                    Kapribaden di sini tidak sama dengan istilah umum Kepribadian yang dalam ilmu psikologi disebut personality.
                                </p>
                                <p className="text-gray-700">
                                    Kapribaden di sini merupakan sebuah laku spiritual dengan memulai mengenal diri sendiri sebagai manusia. Tujuannya dengan mengenal
                                    diri sendiri yang sebenarnya lebih dulu barulah akan bisa mengenal Tuhan Yang Maha Esa (Allah, God Almighty, Gusti Ingkang Moho Suci,
                                    atau apapun disebutNYA).
                                </p>
                            </div>
                        </ContentCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* Manusia Section */}
            <section className="py-20 bg-gradient-to-b from-white to-kapribaden-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-kapribaden-purple-900 mb-6">
                            MANUSIA
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="content-section">
                            <div className="prose">
                                <p>
                                    Manusia pada garis besarnya terdiri dari 2 bagian, yaitu <strong>Raga</strong> (badan, body) dan <strong>roh</strong> (sukma, nyawa, spirit, geest, urip atau sebutan lain).
                                </p>

                                <h3 className="text-2xl text-kapribaden-purple-700 mt-8 mb-4">Raga Manusia</h3>
                                <p>
                                    Raga manusia terbentuk dari 4 unsur alam, yaitu tanah, air, hawa dan api. Buktinya manusia tanpa tanah (makanan) pasti mati,
                                    tanpa air juga mati, tanpa hawa (bernafas) mati pula dan tanpa api (panas matahari) juga mati.
                                </p>
                                <p>
                                    Keempat unsur tadi dikonsumsi Bapak menghasilkan Mani, dikonsumsi Ibu menghasilkan sel telur.
                                </p>
                                <p>
                                    Pertemuan mani dan telur di dalam rahim Ibu (atau tabung) akhirnya berkembang di dalam rahim kalau ada roh (urip) yang memasukinya.
                                    Tanpa urip tidak jadi.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="bg-kapribaden-purple-900 text-white rounded-3xl p-8 mt-8">
                            <h4 className="font-bold text-kapribaden-gold-400 text-xl mb-4">7 Lapis Raga:</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['Rambut', 'Kulit', 'Daging (Otot)', 'Otot (Saraf)', 'Tulang', 'Sumsum', 'Darah'].map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-kapribaden-purple-800 rounded-xl p-4 text-center"
                                    >
                                        <span className="text-2xl font-bold text-kapribaden-gold-400">{i + 1}</span>
                                        <p className="text-sm mt-1">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-100 text-sm">
                                Karena itulah maka angka 7 menjadi penting dalam berbagai ritual, yang sebenarnya merupakan lambang dari 7 lapis raga atau badan kita.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <div className="content-section mt-8">
                            <h3 className="text-2xl text-kapribaden-purple-700 mb-4">Urip (Hidup/Roh)</h3>
                            <div className="prose">
                                <p>
                                    Kapribaden meyakini bahwa roh atau urip berasal dari URIP yang Maha Besar yang meliputi, mengadakan, menggerakkan seluruh alam
                                    semesta seisinya (jagad royo saisiné), yang disebut Tuhan, Allah, Gusti Ingkang Moho Suci.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Laku Kapribaden */}
            <section className="py-20 bg-kapribaden-purple-950 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kapribaden-purple-900/50 to-transparent" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            &quot;LAKU&quot; KAPRIBADEN
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="bg-kapribaden-gold-100 border border-kapribaden-gold-300 rounded-2xl p-8">
                            <div className="space-y-4">
                                <p className="text-kapribaden-purple-900 text-lg leading-relaxed">
                                    Setelah tahu bahwa diri kita sebagai manusia seperti sudah disebutkan, manusia tidak cukup hanya percaya bahwa di dalam dirinya ada roh, urip.
                                </p>
                                <p className="text-kapribaden-purple-900 text-lg leading-relaxed">
                                    Manusia dikenalkan dengan uripnya, sampai bisa merasakan sendiri bahwa urip atau roh itu memang ada.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="bg-gradient-to-br from-kapribaden-gold-500 to-kapribaden-gold-600 rounded-2xl p-8 mt-8 text-kapribaden-purple-900">
                            <p className="font-semibold text-lg mb-4">
                                Untuk bisa membuktikan dan merasakan sendiri bahwa urip atau roh di dalam dirinya memang ada:
                            </p>
                            <p>
                                Orang yang berminat minta diberi KUNCI-nya urip. Siapapun yang meminta dengan sungguh-sungguh akan diberi, tanpa syarat apapun.
                                Tinggal datang ke salah satu warga Kapribaden, dengan tujuan kedatangannya khusus meminta penjelasan.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3} className="mt-8">
                        <div className="bg-white border border-kapribaden-purple-200 rounded-2xl p-8">
                            <p className="text-kapribaden-purple-800 text-lg leading-relaxed">
                                Selanjutnya gunakan KUNCI itu dengan sungguh-sungguh. Jangan percaya tetapi jalani dan buktikan sendiri. Kita akan selalu dituntun,
                                diberi petunjuk oleh urip kita dalam menjalani kehidupan dan penghidupan sehari-hari.
                            </p>
                            <p className="text-kapribaden-purple-800 text-lg leading-relaxed mt-4">
                                Kalau memang sudah yakin karena membuktikan dan merasakan sendiri, silahkan meminta kelanjutannya.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Tujuan Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-kapribaden-purple-900 mb-6">
                            UNTUK APA MENJALANI LAKU KAPRIBADEN?
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <ContentCard variant="gold">
                            <div className="prose">
                                <p>
                                    Kalau benar-benar mau menurut dan menuruti karsanya Urip, maka dalam kehidupan dan penghidupan sehari-hari kita akan selamat dan
                                    tentrem diayomi oleh Urip.
                                </p>
                                <p className="text-lg font-semibold text-kapribaden-purple-700 mt-4">
                                    Dan kalau sewaktu-waktu kita mati, raga akan segera lebur kembali ke asalnya, yaitu tanah, air, hawa dan api, sedang urip (roh) kita
                                    akan langsung manunggal dengan Tuhan (mencapai Kasampurnan Jati), tidak gentayangan (nglambrang) di alam antara (apapun disebutnya).
                                </p>
                                <p className="mt-4">
                                    Kapribaden tidak membeda-bedakan manusia dari segi apapun, (derajat-pangkat, kekayaan, status sosial, suku, bangsa, budaya, agama dan lain-lain).
                                </p>
                            </div>
                        </ContentCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* Sejarah Section */}
            <section className="py-20 bg-gradient-to-b from-white to-kapribaden-gold-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-kapribaden-purple-900 mb-6">
                            SEJARAH KAPRIBADEN
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-kapribaden-purple-900 to-kapribaden-purple-950 rounded-3xl p-10 text-center mb-8">
                            <p className="text-kapribaden-gold-400 text-sm font-semibold mb-4 uppercase tracking-wider">Sabdo Tinulis - 29 April 1978</p>
                            <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-4">
                                &quot;ROMO Mangestoni, Putro-Putro Kudu Ngakoni Putro ROMO&quot;
                            </p>
                            <p className="text-gray-400">
                                Ditulis pada tutup kue dadar-gulung berwarna merah-putih
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="content-section">
                            <div className="prose">
                                <p>
                                    Pada tanggal 29 April 1978, dihadapan 5 orang Putro, Romo menerbitkan satu-satunya Sabdo Tinulis, dengan huruf Jawa (Honocoroko).
                                </p>
                                <p>
                                    Sekalipun Putro yang menghadap waktu itu 5 (lima) orang, yaitu Dr. Wahyono Raharjo GSW, MBA (Alm), Ibu Hartini Wahyono,
                                    Drs. Soehirman, S. Parmin (Alm) dan Sakir. Tetapi Romo menyebut yang menghadap 4 orang, karena Wahyono dan Istrinya, bagi Romo
                                    selalu dihitung satu.
                                </p>
                                <p>
                                    Sabdo tinulis itu ditulis pada tutup kue dadar-gulung berwarna merah-putih. Penjelasan Romo: &quot;ditulis ono tutup, kareban Putro-Putro
                                    podo nyawang mengisor, sebab Putro-Putro isih pada nyawang menduwur. Ben podo nyawang sing urip ono ngisor kreteg&quot;.
                                </p>
                                <p>
                                    Putro Putro yang sowan didawuhi memperbanyak sabda tinulis itu dan menyebar-luaskan ke semua Putro. Putro Putro yang menghadap saat
                                    itu mohon petunjuk cara &quot;ngakoni Putro Romo&quot;. Dan Romo ndawuhi membentuk Paguyuban yang kemudian bernama Paguyuban Penghayat Kapribaden.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Panca Gaib Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-kapribaden-purple-900 mb-6">
                            Panca Gaib
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pancaGaib.map((item, index) => (
                            <AnimatedSection key={item.title} delay={index * 0.1}>
                                <FeatureCard
                                    icon={<span className="text-4xl">{item.icon}</span>}
                                    title={item.title}
                                    description={item.desc}
                                    index={index}
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Laku Pangumbahing Rogo */}
            <section className="py-20 bg-kapribaden-purple-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Laku Pangumbahing Rogo
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lakuPangumbah.map((item, index) => (
                            <AnimatedSection key={item.title} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-kapribaden-purple-900/50 border border-kapribaden-purple-800 rounded-2xl p-6 h-full"
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-kapribaden-gold-500 to-kapribaden-gold-600 rounded-xl flex items-center justify-center text-kapribaden-purple-900 font-bold text-xl">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kekudhangan Section */}
            <section className="py-20 bg-gradient-to-b from-white to-kapribaden-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-kapribaden-purple-900 mb-6">
                            KEKUDHANGAN ROMO HERUCOKRO SEMONO
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="bg-gradient-to-br from-kapribaden-purple-100 to-kapribaden-gold-100 rounded-3xl p-10 text-center mb-8">
                            <p className="text-xl md:text-2xl italic text-kapribaden-purple-800 mb-4 leading-relaxed">
                                &quot;Heh PutraningSUN sami, pro satriyo lan wanito sejati,<br />
                                mareneo jenengsiro SUN jarwani&quot;
                            </p>
                            <p className="text-gray-700">
                                (&quot;Putra - PutraKU semua, laki-laki dan perempuan kemarilah KU beritahu&quot;)
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <ContentCard variant="gold">
                            <p className="font-semibold mb-4 text-kapribaden-purple-800">Siro wus SUN sabdho dadhi:</p>
                            <ul className="space-y-4 text-gray-700">
                                <li>
                                    <strong className="text-kapribaden-purple-700">Kitab suci sejati, Adham Makno wastanipun, Iku wujudhiro yekti</strong><br />
                                    <span className="text-sm">(Artinya, setiap tingkah lakumu kalau dilihat dan dipandang orang lain selalu menyenangkan)</span>
                                </li>
                                <li>
                                    <strong className="text-kapribaden-purple-700">Wulangreh sejati, Iku uniniro</strong><br />
                                    <span className="text-sm">(Apapun yang kamu ucapkan membuat orang lain tenteram)</span>
                                </li>
                                <li>
                                    <strong className="text-kapribaden-purple-700">Berbudi bowo leksono dhadhiyo lakuniro</strong><br />
                                    <span className="text-sm">Perbuatanmu selalu menepati janji (ucapan dan perbuatan sama)</span>
                                </li>
                                <li>
                                    <strong className="text-kapribaden-purple-700">Pratondo jenengsiro PutraningSUN</strong><br />
                                    <span className="text-sm">Menandakan kamu PutraKU.</span>
                                </li>
                            </ul>
                        </ContentCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-kapribaden-purple-100 via-white to-kapribaden-gold-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <p className="text-xl text-kapribaden-purple-800 font-semibold mb-6 leading-relaxed">
                            Marilah kita jadikan negeri tercinta pemberian Tuhan ini sebagai tempat yang lebih membahagiakan semua orang,<br />
                            melalui PERSAUDARAAN UMAT MANUSIA.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/romo">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary"
                                >
                                    Tentang Romo
                                </motion.button>
                            </Link>
                            <Link href="/pedoman">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-secondary"
                                >
                                    Pedoman
                                </motion.button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
