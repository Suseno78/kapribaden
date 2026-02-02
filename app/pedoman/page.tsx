import Image from 'next/image'

export const metadata = {
    title: 'Pedoman | Paguyuban Penghayat Kapribaden',
    description: 'Pedoman untuk Para Kadhang Penghayat Kapribaden',
}

export default function PedomanPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center mb-4">Pedoman Untuk Para Kadhang Penghayat Kapribaden</h1>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Pedoman ini dibuat berdasarkan pengalaman, dawuh dari para sesepuh serta dawuh dari Kanjeng Romo sendiri
            </p>

            {/* Pengantar */}
            <div className="content-section">
                <div className="prose">
                    <p className="text-lg">
                        Disini saya akan menjelaskan tentang pedoman tapi tidak mutlak dilaksanakan atau dilakukan karena kita harus melihat situasi dan
                        kondisi di lapangan serta dawuh Kanjeng Romo yang kita terima. Pedoman ini dibuat berdasarkan pengalaman, dawuh dari para sesepuh
                        serta dawuh dari Kanjeng Romo sendiri. <b>Bagi yang belum berpengalaman dan belum bisa, untuk meminta bantuan dan pendampingan dari sesepuh karena jika salah dalam menangani bisa berakibat fatal bagi diri sendiri.</b>
                    </p>
                </div>
            </div>

            {/* Peringatan Penting */}
            <div className="content-section">
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg shadow-lg">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ PERINGATAN PENTING</h3>
                            <div className="text-red-700 space-y-2">
                                <p className="font-semibold text-lg">
                                    Pedoman ini HANYA untuk para kadhang yang sudah berpengalaman dan telah mendapat bimbingan dari sesepuh!
                                </p>
                                <p>
                                    <strong>DILARANG KERAS</strong> mencoba praktik-praktik dalam pedoman ini tanpa pendampingan dari sesepuh yang berpengalaman.
                                    Kesalahan dalam pelaksanaan dapat berakibat <strong className="text-red-900">FATAL</strong> bagi diri sendiri maupun orang lain.
                                </p>
                                <p className="italic">
                                    Jika Anda belum berpengalaman dan ingin belajar, silakan hubungi sesepuh atau pengurus Paguyuban untuk mendapatkan bimbingan yang tepat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orang Kesurupan */}
            <div className="content-section">
                <h2>ORANG KESURUPAN</h2>
                <div className="prose">
                    <p>
                        Untuk menanggani orang kesurupan kita harus bisa komunikasi dengan mahkluk yang merasuki tersebut, dengan bisa komunikasi kita bisa tahu penyebab mahkluk tersebut merasuki atau menganggu orang yang minta tolong ke kita.
                    </p>
                    <p>
                        Sebelum kita komunikasi dengan mahkluk tersebut seperti biasa kita harus mijil agar raga kita terjaga, kalau bisa diajak komunikasi kita tanggapi permintaan mahkluk tersebut asal tidak merugikan kita dan si peminta tolong, namun jika tidak mau diajak komunikasi maka baru kita suwunkan yang terbaik untuk si peminta tolong.
                    </p>
                    <p>
                        Untuk yang belum bisa komunikasi dengan mahkluk ghoib kita lakukan cara yang sama dengan yang sudah bisa komunikasi termasuk pada mahkluk yang melakukan perlawanan.
                    </p>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Sarana yang Dibutuhkan</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Air cleo atau air pH tinggi</li>
                        <li>Garam grosok</li>
                        <li>Bunga 3 warna (telon) atau bunga 5 warna (ponco warno) atau bisa minyak fanbo (sesuai selera) atau merang ketan hitam yang telah dibakar dijadikan abu dicampur dengan air</li>
                    </ul>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Cara Pelaksanaan</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Air cleo atau air pH tinggi untuk diminum si kerasukan</li>
                        <li>Garam grosok di buang di pojok-pojok rumah dan dibawah tempat tidur bisa juga ditambahi dibuang di pintu rumah yang menuju ke luar</li>
                        <li>Bunga 3 warna (Bunga telon) kalau parah pakai bunga 5 warna (ponco warna) dicampur air setelah disuwunkan bunga tersebut dikeluarkan dari air lalu dihaluskan dan dicampur dengan air tadi lalu dibuat parem</li>
                    </ul>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Urutan Membalurkan</h3>
                    <ol className="list-decimal ml-6 space-y-1">
                        <li>Muka dari atas ke bawah</li>
                        <li>Kepala ke belakang sampai tengkuk</li>
                        <li>Dada dari atas ke bawah</li>
                        <li>Perut diputar searah jarum jam</li>
                        <li>Tangan kanan dari lengan ke bawah sampai ke jari dengan posisi telapak tangan menghadap ke atas</li>
                        <li>Tangan kiri dari lengan ke bawah sampai ke jari dengan posisi telapak tangan menghadap ke atas</li>
                        <li>Kaki kanan ke bawah mulai dari paha sampai ke jari kaki</li>
                        <li>Telapak kaki kanan dari tungkai ke jari</li>
                        <li>Kaki kiri ke bawah mulai dari paha sampai ke jari kaki</li>
                        <li>Telapak kaki kiri dari tungkai ke jari</li>
                    </ol>
                    <p className="text-sm text-gray-600 italic mt-2">
                        Pada waktu membalurkan jangan ada orang yang posisinya dibawah kaki atau diatas kepala.
                    </p>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan:</h4>
                        <p className="italic text-gray-700">
                            &quot;Kulo nyuwun ……. (nama si sakit) di ngapuro luputipun, diparingi pengayoman, ketentreman, keselamatan kalian Kesehatan.
                            Jin, setan, penyakit ingkang wonten dateng raganipun, kalian ingkang nganggu kulo nyuwun dipun singkiraken, dipun sirnaaken,
                            dipun paringi pengadilan sak adil-adile sak cepet-cepete&quot;
                        </p>
                    </div>
                </div>
            </div>

            {/* Penglaris */}
            <div className="content-section">
                <h2>PENGLARIS</h2>
                <div className="prose">
                    <p>
                        Penglaris disini bukan untuk mengambil rejeki orang lain atau menutup rejeki orang lain serta bukan menarik rejeki yang tidak barokah, disini kita hanya memperlancar usaha dan mengamankan rejeki dari si peminta tolong tersebut.
                    </p>
                    <p>
                        Untuk penglaris atau mengamankan rejeki dan usaha dibagi menjadi 2 bagian yaitu apakah orang yang minta tolong tersebut sudah pernah
                        minta tolong ke kita atau belum (baru pertama kali) dan yang kedua adalah orang tersebut sudah minta tolong ke kita dalam hal penglaris.
                        Perlu ditegaskan bahwa penglaris ini tidak bisa untuk selamanya tapi ada batasnya (expired) yaitu maksimal 40 hari.
                    </p>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Belum Pernah Minta Tolong ke kita</h3>
                    <p>
                        Kita harus mempersiapkan beberapa persyaratan (uborampe) dan sebelum mempersiapkan persyaratan tersebut kita harus melihat kondisi
                        lapangan si peminta tolong serta letak usahanya, setelah tahu kondisi lapangan baru kita persiapkan persyaratannya. Persyaratan tersebut adalah:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Bunga 3 warna (Kembang Telon) untuk kondisi lapangan banyak gangguan atau si peminta tolong minta yang kuat.</li>
                        <li>Air dan minyak (fanbo atau yang lainnya) jika kondisi lapangan masih aman tidak ada gangguan cuma tidak lancar, jika ada gangguan
                            bisa juga ditambah garam grosok.</li>
                        <li>Air botol (cleo atau air pH tinggi) digunakan untuk:
                            <ul className="list-circle ml-6 mt-2">
                                <li>Untuk penjual makanan dan minuman dicampurkan waktu membuat makanan dan minuman.</li>
                                <li>Untuk penjual jasa diminum tiap pagi waktu mau beraktifitas.</li>
                                <li>Untuk penjual barang diminum dan disemprotkan ke barang yang dijual.</li>
                            </ul>
                        </li>
                        <li>Garam grosok (Garam yang tidak beryodium) ditabur dipojok-pojok tempat usaha, untuk pojok mana yang dibuang dulu harus minta petunjuk dulu.</li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-2">
                        Untuk no. 1 dan 2 pilih salah satu saja lihat kondisi peminta tolong dan kondisi lapangan.
                    </p>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan:</h4>
                        <p className="italic text-gray-700">
                            &quot;Kulo nyuwun ……. (nama si peminta tolong) diparingi Usaha Lancar, Laris kalian Rejeki ingkang luwih-luwih.
                            Jin, setan, menungso ingkang nganggu usaha kalian rejekine ……. (nama si peminta tolong), kulo nyuwun dipun singkiraken,
                            dipun sirnaaken, dipun paringi pengadilan sak adil-adile sak cepet-cepete.&quot;
                        </p>
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Pelaksanaan</h3>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li>Buang garam grosok ke pojok-pojok searah jarum jam untuk titik pembuangan pertama harus mengikuti petunjuk Kanjeng Romo.</li>
                        <li>Jika yang dipilih bunga telon maka buang airnya saja di depan tempat usaha dan bunganya di bungkus kertas yang bisa menyerap air dan disimpan ditempat usaha (kalau bisa dilaci kasir) setelah 1 minggu dari pembuangan air tersebut baru bunga yang dibungkus tadi dibuang di depan tempat usaha.</li>
                        <li>Jika yang dipilih air dan minyak maka langsung dibuang semua air minyak tersebut di depan tempat usaha.</li>
                        <li>Air yang dibotol digunakan sesuai petunjuk yang telah dijelaskan diatas.</li>
                    </ol>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Sudah Pernah Minta Tolong Ke Kita</h3>
                    <p>
                        Sama dengan diatas cuma perbedaannya terletak pada waktu pemilihan bunga 3 warna jadi ketika yang dipilih adalah bunga 3 warna maka
                        bunga tersebut dibuang menurut petunjuk biasanya gading putih 1 buah dibuang di depan tempat usaha bersama dengan airnya dan bunga
                        mawar dibuang digenting (kadang juga tanpa buang bunga hanya airnya saja) sedangkan sisanya dibungkus kertas lalu disimpan dan waktu
                        pembuangannya di waktu malam 1 suro kalender Aboge.
                    </p>
                </div>
            </div>

            {/* Pagar Rumah */}
            <div className="content-section">
                <h2>PAGAR RUMAH</h2>
                <div className="prose">
                    <p>
                        Untuk pagar rumah memerlukan beberapa persyaratan tergantung kondisi lapangan dan permasalahan si peminta tolong tapi secara umum yang diperlukan adalah:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Bunga 5 warna (ponco warno) dicampur air.</li>
                        <li>Bunga gading putih yang bagus tidak cacat 1 buah dikasih minyak fanbo (sesuai selera) terus dibungkus kertas dikasih minyak fanbo
                            (sesuai selera) lalu diisolasi pakai isolasi kertas atau isolasi lakban hitam untuk jilid buku tergantung dawuh dan dikasih minyak fanbo
                            (sesuai selera) lagi.</li>
                        <li>Koin jumlah ganjil (3, 5, 7, 9) kalau bisa pecahan Rp 1.000,- kalau sulit bisa pakai sembarang koin asal sama.</li>
                        <li>Minyak fanbo (sesuai selera) sebanyak 1 atau 3 botol kecil.</li>
                        <li>Garam grosok.</li>
                        <li>Air botol cleo atau pH tinggi.</li>
                        <li>Merang ketan hitam dibakar dicampur dengan air dan minyak fanbo (sesuai selera)</li>
                        <li>Dupa Vinayak Spesial Diamond (warna biru) jika diperlukan.</li>
                    </ul>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan:</h4>
                        <p className="italic text-gray-700">
                            &quot;Kulo nyuwun ……. (nama si peminta tolong sekeluarga) diparingi pengayoman, keselamatan, ketentreman, Kesehatan kalian Rejeki ingkang luwih-luwih.
                            Jin, setan, menungso ingkang nganggu (nama si peminta tolong sekeluarga), kulo nyuwun dipun singkiraken, dipun sirnaaken,
                            dipun paringi pengadilan sak adil-adile sak cepet-cepete.&quot;
                        </p>
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Langkah-langkah Pelaksanaan</h3>
                    <ol className="list-decimal ml-6 space-y-2">
                        <li>Buang garam dulu dipojok-pojok halaman rumah searah jarum jam dan titik awal pembuangan sesuai dengan dawuh.</li>
                        <li>Buat lubang di halaman rumah yang biasa dilewati orang, taruh bunga 5 warna yang telah dicampur air, koin dan dikasih minyak fanbo (sesuai selera) jumlahnya 1 atau 3 terus langsung ditutup lubang tersebut.</li>
                        <li>Pasang bunga gading putih yang diisolasi tadi di atas pintu utama rumah.</li>
                        <li>Dupa Vinayak dibakar di halaman rumah atau di dalam rumah tergantung dawuh serta jumlahnya juga tergantung dawuh. Dupa ini tidak harus ada tapi dilihat dulu kondisi lapangan.</li>
                        <li>Air botol cleo atau pH tinggi diminum sekeluarga.</li>
                        <li>Air merang ketan hitam yang telah dicampur air banyak dan minyak fanbo (sesuai selera) atau bisa juga dimasukkan ke bak mandi untuk mandi besar sekeluarga.</li>
                    </ol>
                </div>
            </div>

            {/* Sakit Medis dan Non Medis */}
            <div className="content-section">
                <h2>SAKIT MEDIS DAN NON MEDIS</h2>
                <div className="prose">
                    <p>
                        Dalam menangani orang sakit kita harus benar-benar jeli apakah sakit yang diderita itu karena sakit buatan (dibuat manusia) atau sakit
                        karena memang dari Gusti Ingkang Maha Suci, yang bahaya adalah kita salah diagnosis penyakit yang memang buatan manusia tapi mirip dengan medis.
                    </p>
                    <p>
                        Untuk bisa membedakan tersebut harus terus berlatih untuk mendengar dawuh dan dari pengalaman pribadi atau para sesepuh, tapi para kadhang
                        tidak usah bingung ketika menangani masalah tersebut walaupun belum bisa komunikasi dengan Kanjeng Romo tapi tetap bisa menyembuhkan si
                        sakit asal yang kita perintahkan atau kita omongkan ke si sakit dilaksanakan.
                    </p>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Sarana yang Digunakan</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Air cleo atau air pH tinggi untuk diminum si sakit.</li>
                        <li>Garam grosok di buang di pojok-pojok rumah dan dibawah tempat tidur bisa juga ditambahi dibuang di pintu rumah yang menuju ke luar.</li>
                        <li>Bunga 3 warna (Bunga telon) dicampur air setelah di suwunkan bunga tersebut dikeluarkan dari air lalu dihaluskan dan dicampur dengan
                            air tadi lalu dibuat parem ke tempat yang sakit kalau ada luka diparemkan disekitar luka.</li>
                        <li>Kalau sakitnya parah bisa ditambah garam grosok dicampur air hangat buat merendam kaki (sebatas mata kaki) si sakit sampai air tidak
                            hangat lagi, ini dilakukan selama minimal 3 hari tiap pagi bangun tidur.</li>
                    </ul>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan:</h4>
                        <p className="italic text-gray-700">
                            &quot;Kulo nyuwun ……. (nama si sakit) di ngapuro luputipun, diparingi pengayoman, ketentreman, keselamatan kalian Kesehatan, jin, setan,
                            penyakit ingkang wonten dateng raganipun kulo nyuwun dipun singkiraken, dipun sirnaaken, diparingi pengadilan sak adil-adile sak
                            cepet-cepete, jin, setan, penyakit ingkang nganggu kulo nyuwun dipun singkiraken, dipun sirnaaken, diparingi pengadilan sak adil-adile
                            sak cepet-cepete&quot;
                        </p>
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Sarana Tambahan untuk Penyembuhan</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Daun sirih diolesi minyak zaitun bisa untuk batuk, TBC, paru-paru, masuk angin, ambein, memar, udun, kanker serviks, kanker payudara
                            stadium 1-2, benjolan, dll.</li>
                        <li>Daun sirih direbus buat cebok yang kena penyakit kelamin atau mens tidak berhenti, kanker serviks, dll.</li>
                        <li>Minyak bidara, minyak zaitun, VCO, minyak cengkeh dicampur jadi satu (minyak cengkeh secukupnya yang lain 1:1) bisa untuk pijat baik
                            pijat capek, pijat keseleo atau ada gangguan jin di dalam raga.</li>
                    </ul>
                </div>
            </div>

            {/* Mindah Hujan */}
            <div className="content-section">
                <h2>MINDAH HUJAN ATAU MENDATANGKAN HUJAN</h2>
                <div className="prose">
                    <p>
                        Ketika kita dimintai tolong untuk mindah hujan itu caranya sama dengan mendatangkan hujan. Untuk pekerjaan ini para kadhang harus bisa komunikasi dengan Kanjeng Romo dan Pendayangan (yang menguasai daerah tersebut bisa sesepuh atau wali) daerah si peminta tolong, jadi untuk para kadhang yang belum bisa komunikasi dengan Kanjeng Romo dan Pendayangan jangan dulu mengerjakan pekerjaan ini karena bisa fatal pada diri para kadhang.
                    </p>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Hal-hal yang Perlu Diperhatikan</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Untuk mulai pekerjaan ini harus dimulai 3-7 hari sebelum hari yang telah ditentukan oleh si peminta tolong karena jika kerjaan ini dilakukan dadakan atau si peminta tolong mendadak minta tolong maka ada konsekuensinya terhadap raga kita, terutama pada mata kita yang dibuat sakit sampai menuju kebutaan atau dada kita yang sesak nafas sampai keluar darah, semua tergantung dari berat tidaknya kerjaan tersebut.</li>
                        <li>Adanya sesaji atau sarana yang diminta atau dawuh dari Kanjeng Romo dan sesepuh daerah situ serta kapan waktu untuk pasang sesaji atau sarana tersebut serta letak atau posisi sesaji atau sarana tersebut diletakkan.</li>
                        <li>Setelah semua siap baik sesaji (sarana), tempat pasang dan waktunya baru kita mintakan apa kehendak si peminta tolong yang disertai dengan berbagai keterangan mulai nama, Alamat, keperluan, berapa lama dan kapan waktu untuk bongkar sesaji atau sarana tersebut.</li>
                    </ul>

                    <p className="mt-4">
                        Untuk syarat atau sarana biasanya cuma pakai bunga 5 warna (ponco warno) yang dikasih air bisa juga pakai dupa Vinayak diamond (warna biru).
                    </p>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan untuk Mindah Hujan:</h4>
                        <p className="italic text-gray-700">
                            &quot;Kulo nyuwun daerah ……. (nama daerah tempat tinggal yang minta hujan) griyanipun (nama si peminta tolong) mboten jawah mulai ….
                            Ngantos …… amergi wonten khajatan utawi gadhah damel …., jin, setan, nganggu kulo nyuwun dipun singkiraken, dipun sirnaaken,
                            dipun paringi pengadilan sak adil-adile sak cepet-cepete&quot;
                        </p>
                    </div>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan untuk Mendatangkan Hujan:</h4>
                        <p className="italic text-gray-700">
                            Sama dengan diatas cuma ganti nyuwun jawah damel tandurane ….(nama si peminta tolong serta Alamat) Supados hasil ingkang luwih-luwih kalian dados rejeki ingkang barokah.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hajatan Komplit */}
            <div className="content-section">
                <h2>HAJATAN KOMPLIT</h2>
                <div className="prose">
                    <p>
                        Untuk pekerjaan ini kalau bisa Putro Romo harus paham hari karena semua dikerjakan mulai dari perhitungan hari, undangan, tarub, masakan, uang anjeng, keluarga yang punya hajatan, semua harus diamankan.
                    </p>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Langkah-langkah Pelaksanaan</h3>

                    <h4 className="font-semibold text-kapribaden-purple-700 mt-4">1. Survey Lokasi</h4>
                    <p>
                        Untuk mulai pekerjaan ini, pertama harus survey lokasi terlebih dahulu mulai rumah, tempat hajatan, lingkungan, dapur untuk memasak semuanya kita teliti apakah ada gangguan atau tidak.
                    </p>

                    <h4 className="font-semibold text-kapribaden-purple-700 mt-4">2. Undangan</h4>
                    <p>
                        Undangan sebelum disebar harus diberi doa (disuwunke) supaya yang kita undang datang ke acara tersebut. Undangan tersebut kalau bisa sebelum di kasih plastik karena kalau sudah dikasih plastik agak sulit mendoakannya. Cara mendoakannya (nyuwunke) seperti biasa dan undangan tersebut disemprot dengan minyak fanbo (sesuai selera) tidak perlu basah hanya sekedarnya saja.
                    </p>

                    <h4 className="font-semibold text-kapribaden-purple-700 mt-4">3. Mendekati Hari H</h4>
                    <ul className="list-disc ml-6 space-y-2">
                        <li><strong>Pojok-pojok halaman:</strong> Diberi garam grosok, untuk penempatan awal garam grosok tersebut sesuai dawuh yang kita terima.</li>
                        <li><strong>Memasang syarat untuk tarub:</strong> Pakai bunga 5 warna (panca warna) taruh baskom (ember) kasih air dan minyak fanbo (sesuai selera) taruh digenteng rumah yang punya hajatan.</li>
                        <li><strong>Area dapur:</strong> Memberikan air cleo di gentong untuk memasak dan jangan sampai habis air gentong tersebut.</li>
                        <li><strong>Gentong uang anjengan:</strong> Pakai bunga gading putih yang dibungkus dengan lakban kertas warna putih dan diolesi minyak fanbo (sesuai selera).</li>
                        <li><strong>Menarik undangan:</strong> Dengan bunga 3 warna (kembang telon) tanpa dikasih apa-apa setelah didoakan (disuwunke) dibuang di perempatan atau pertigaan sekitar tempat hajatan.</li>
                    </ul>

                    <p className="text-sm text-gray-600 italic mt-4">
                        Syarat (sarana) tersebut diatas tidak mengikat karena ada di beberapa daerah punya adat sendiri jadi kita juga harus mengikuti adat dan tata cara daerah tersebut.
                    </p>

                    <h4 className="font-semibold text-kapribaden-purple-700 mt-4">4. Saat Acara Berlangsung</h4>
                    <p>
                        Ketika acara sedang berlangsung kita juga harus memantau agar tidak ada gangguan baik hujan, makanan, uang anjeng serta tamu undangan.
                    </p>

                    <h4 className="font-semibold text-kapribaden-purple-700 mt-4">5. Setelah Acara Selesai</h4>
                    <p>
                        Ketika acara selesai semua syarat (sarana) yang kita buat tersebut, kita buang saja ke tempat sampah (yang buang orang yang punya hajat).
                    </p>
                </div>
            </div>

            {/* Jodoh atau Pembuka Aura */}
            <div className="content-section">
                <h2>JODOH ATAU PEMBUKA AURA SERTA REJEKI</h2>
                <div className="prose">
                    <p>
                        Untuk membuka jodoh (pasangan) caranya sama dengan ketika membuka aura dan membuka rejeki seseorang.
                    </p>
                    <p>
                        Dalam melakukan pekerjaan ini maka kita harus harus tahu weton (hari kelahiran) yang mau membukakan aura, ketika sudah tahu yang harus dipersiapkan adalah bunga boreh (kembang boreh) yang dikasih air kalau tidak mau bisa memakai merang ketan hitam yang dibakar lalu dikasih air dan minyak fanbo (sesuai selera) dan air cleo.
                    </p>
                    <p>
                        Waktu penyuwunan pada hari sebelum kelahiran (malam sebelum hari kelahiran) yang baik untuk penyuwunan sekitar jam 18.00 – 19.00.
                    </p>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan:</h4>
                        <p className="italic text-gray-700 mb-4">
                            &quot;Kulo nyuwun ……. (nama si peminta tolong) disuciaken rogo ningsun kalian sukma ningsun, diparingi pengayoman, ketentreman,
                            keselamatan, kesehatan, jodo kalian rejeki. Jin, setan, menungso ingkang ganggu (nama si peminta tolong) kulo nyuwun dipun singkiraken,
                            dipun sirnaaken, dipun paringi pengadilan sak adil-adile sak cepet-cepete&quot;
                        </p>
                        <p className="text-sm text-gray-600 italic">
                            Untuk yang membuka aura serta rejeki penyuwunannya tanpa kata jodo karena kalau salah bisa mengakibatkan muncul jodo baru dan merusak perjodohan yang pertama.
                        </p>
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 mt-6">Cara Pelaksanaan</h3>
                    <p>
                        Ketika semua syarat (sarana) selesai disuwunke maka tugas si peminta tolong adalah mandi besar dengan air yang dicampur syarat (sarana) tersebut, waktu mandinya adalah antara jam 1 sampai jam 3 dini hari dan tidak boleh tidur sebelumnya tapi ketika sudah selesai mandi boleh tidur.
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-4">
                        <li>Untuk air cleo nya diminum setengah sebelum mandi dan sisanya setelah mandi.</li>
                        <li>Jam 1 sampai jam 3 dini hari adalah waktu yang terbaik untuk membuka aura, jodoh dan rejeki.</li>
                        <li>Untuk yang memakai bunga boreh ketika mandi di selokan kamar mandi diusahakan ditutup sedikit agar bunga tidak masuk ke selokan karena setelah mandi bunga-bunga tersebut diambil lalu dibuang di tempat sampah atau sungai yang mengalir atau bisa juga di laut dengan menjawab ora nguwak kembang iki tapi nguwak sengkoloku.</li>
                        <li>Untuk yang memilih air dan merang ketan hitam cara tersebut diatas tidak perlu dilakukan.</li>
                    </ul>
                </div>
            </div>

            {/* Pagar Badan */}
            <div className="content-section">
                <h2>PAGAR BADAN</h2>
                <div className="prose">
                    <p>
                        Untuk pagar badan caranya hampir sama dengan membuka aura, perbedaannya hanya pada penyuwunan dan waktu pelaksanaannya (tidak harus memakai hari kelahiran si peminta tolong).
                    </p>
                    <p>
                        Syarat (sarana) yang harus dipersiapkan adalah bunga boreh (kembang boreh) yang dikasih air kalau tidak mau bisa memakai merang ketan hitam yang dibakar lalu dikasih air dan minyak fanbo (sesuai selera) dan air cleo.
                    </p>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Penyuwunan:</h4>
                        <p className="italic text-gray-700">
                            &quot;Kulo nyuwun ……. (nama si peminta tolong) disuciaken rogo ningsun kalian sukma ningsun, diparingi pengayoman, ketentreman,
                            keselamatan, kesehatan, kalian rejeki. Jin, setan, menungso ingkang ganggu (nama si peminta tolong) kulo nyuwun dipun singkiraken,
                            dipun sirnaaken, dipun paringi pengadilan sak adil-adile sak cepet-cepete&quot;
                        </p>
                    </div>

                    <p className="mt-6">
                        Ketika semua syarat (sarana) selesai disuwunke maka tugas si peminta tolong adalah mandi besar dengan air yang dicampur syarat (sarana) tersebut, waktu mandinya adalah antara jam 1 sampai jam 3 dini hari dan tidak boleh tidur sebelumnya tapi ketika sudah selesai mandi boleh tidur.
                    </p>
                    <p>
                        Untuk yang memakai bunga boreh ketika mandi di selokan kamar mandi diusahakan ditutup sedikit agar bunga tidak masuk ke selokan karena setelah mandi bunga-bunga tersebut diambil lalu dibuang di tempat sampah atau sungai yang mengalir atau bisa juga di laut dengan menjawab ora nguwak kembang iki tapi nguwak sengkoloku.
                    </p>
                </div>
            </div>

            {/* Sajen Kelahiran */}
            <div className="content-section">
                <h2>SAJEN KELAHIRAN</h2>
                <div className="prose">
                    <div className="mb-6 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-white">
                        <Image
                            src="/images/sajen (2).png"
                            alt="Sajen Kelahiran"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 font-bold">Ketentuan Umum</h3>
                    <ul className="list-disc ml-6 space-y-2 mb-6">
                        <li><strong>Posisi:</strong> Bebas hadap mana saja boleh.</li>
                        <li><strong>Waktu Pasang:</strong> 1 hari sebelum kelahiran (antara Ashar s/d Maghrib).</li>
                        <li><strong>Waktu Bongkar:</strong> Pas hari kelahiran waktu Maghrib.</li>
                    </ul>

                    <h3 className="text-xl text-kapribaden-purple-700 font-bold">Keterangan Gambar (Bahan)</h3>
                    <ol className="list-decimal ml-6 space-y-2 mb-6">
                        <li>Teh Pahit</li>
                        <li>Kopi Pahit</li>
                        <li>Air Putih Mentah</li>
                        <li>Bunga Boreh di rendam air</li>
                        <li>Buceng Nasi Putih dan Telor Ceplok Jawa</li>
                        <li>Bubur Merah Putih</li>
                    </ol>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mb-6 border-l-4 border-kapribaden-purple-600">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Niat Pasang Sajen Kelahiran: (Kunci, Patrap, Mijil)</h4>
                        <p className="italic text-gray-700 mb-4">
                            &quot;Niat ingsun pasang sajen damel ngeruhi kelahiran kulo, ngeruhi derek kulo ingkang ketinggal kalian ingkang mboten ketinggal,
                            ngeruhi derek kulo ingkang krawat kalian ingkang mboten krawat. kulo nyuwun pengayoman, ketentreman, keslametan, kesehatan, kalian rejeki.
                            Jin, setan, menungsa ingkang ganggu kulo, kulo nyuwun dipun disingkiraken, sirna aken kalian dipun paringi pengadilan sak adil-adile sak cepet-cepeten&quot;
                        </p>

                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Niat Bongkar Sajen Kelahiran: (Kunci, Patrap, Mijil)</h4>
                        <p className="italic text-gray-700">
                            &quot;Niat ingsun bongkar sajen damel ngeruhi kelahiran kulo, ngeruhi derek kulo ingkang ketinggal kalian ingkang mboten ketinggal,
                            ngeruhi derek kulo ingkang krawat kalian ingkang mboten krawat. kulo nyuwun pengayoman, ketentreman, keslametan, kesehatan, kalian rejeki.
                            Jin, setan, menungsa ingkang ganggu kulo, kulo nyuwun dipun disingkiraken, sirna aken kalian dipun paringi pengadilan sak adil-adile sak cepet-cepeten&quot;
                        </p>
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 font-bold">Pembuangan</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Teh, kopi, air putih buang di pembuangan air.</li>
                        <li>Bubur dibuang di sampah.</li>
                        <li>Kembang Boreh buang di tempat ari-ari atau dibuat mandi atau di buang di tempat sampah.</li>
                    </ul>
                </div>
            </div>

            {/* Sajen Satriyo */}
            <div className="content-section">
                <h2>SAJEN SATRIYO</h2>
                <div className="prose">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-white">
                            <Image
                                src="/images/sajen (1).png"
                                alt="Sajen Satriyo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="text-center">
                                <p className="font-bold mb-2">POSISI:</p>
                                <p className="mb-4">Sesuai dengan gambar (sajen ada di timur)</p>
                                <div className="relative w-32 h-32 mx-auto">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-0.5 bg-gray-400 absolute"></div>
                                        <div className="h-full w-0.5 bg-gray-400 absolute"></div>
                                        <span className="absolute top-0 bg-gray-50 px-1 text-xs">Utara</span>
                                        <span className="absolute bottom-0 bg-gray-50 px-1 text-xs">Selatan</span>
                                        <span className="absolute left-0 bg-gray-50 px-1 text-xs">Barat</span>
                                        <span className="absolute right-0 bg-gray-50 px-1 text-xs">Timur</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 font-bold">Ketentuan Umum</h3>
                    <ul className="list-disc ml-6 space-y-2 mb-6">
                        <li><strong>Waktu Pasang:</strong> 1 hari sebelum Senin Pahing jam 16.00.</li>
                        <li><strong>Waktu Bongkar:</strong> Hari Senin Pahing waktu Maghrib.</li>
                    </ul>

                    <h3 className="text-xl text-kapribaden-purple-700 font-bold">Keterangan Gambar (Bahan)</h3>
                    <ol className="list-decimal ml-6 space-y-2 mb-6">
                        <li>Teh Pahit</li>
                        <li>Kopi Pahit</li>
                        <li>Air Putih Mentah</li>
                        <li>Merang Ketan Hitam 3 Helai dibakar lalu di rendam air mentah</li>
                        <li>Buceng Nasi Kuning, Rokok Klobot dan Telor Ceplok Jawa</li>
                        <li>Bunga 5 warna di rendam air</li>
                    </ol>

                    <div className="bg-kapribaden-purple-50 p-6 rounded-lg mb-6 border-l-4 border-kapribaden-purple-600">
                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Niat Pasang Sajen Satriyo: (Kunci, Patrap, Mijil)</h4>
                        <p className="italic text-gray-700 mb-4">
                            &quot;Niat ingsun pasang sajen damel kelahiran Satriyo ngeh meniko Senin Pahing.
                            Kulo nyuwun pengayoman, ketentreman, keslametan, kesehatan, kalian rejeki. Jin, setan,
                            menungsa ingkang ganggu kulo, kulo nyuwun dipun disingkiraken, sirna aken kalian dipun paringi
                            pengadilan sak adil-adile sak cepet-cepeten&quot;
                        </p>

                        <h4 className="font-bold text-kapribaden-purple-800 mb-3">Niat Bongkar Sajen Satriyo: (Kunci, Patrap, Mijil)</h4>
                        <p className="italic text-gray-700">
                            &quot;Niat ingsun bongkar sajen damel kelahirane Satriyo ngeh meniko Senin Pahing.
                            Kulo nyuwun pengayoman, ketentreman, keslametan, kesehatan, kalian rejeki. Jin, setan,
                            menungsa ingkang ganggu kulo, kulo nyuwun dipun disingkiraken, sirna aken kalian dipun paringi
                            pengadilan sak adil-adile sak cepet-cepeten&quot;
                        </p>
                    </div>

                    <h3 className="text-xl text-kapribaden-purple-700 font-bold">Pembuangan</h3>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Teh buang di sebelah kanan rumah.</li>
                        <li>Kopi buang di sebelah kiri rumah.</li>
                        <li>Air Putih mentah buang di depan pintu rumah selain pintu utama rumah.</li>
                        <li>Air Merang Ketan Hitam di buat mandi atau masukkan di bak air kamar mandi.</li>
                        <li>Buceng, telur, rokok taruh di angin-angin pintu utama rumah (taruh di kotak tanpa tutup).</li>
                        <li>Kembang 5 warna buang di depan rumah.</li>
                    </ul>
                </div>
            </div>

            {/* Catatan */}
            <div className="mt-12 p-8 bg-gradient-to-r from-kapribaden-purple-50 to-kapribaden-gold-50 rounded-lg border-l-4 border-kapribaden-gold-600">
                <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-3">Catatan Penting</h3>
                <p className="text-gray-700 leading-relaxed">
                    Pedoman ini tidak mutlak dilaksanakan atau dilakukan karena kita harus melihat situasi dan kondisi di lapangan serta dawuh Kanjeng Romo
                    yang kita terima. Selalu minta petunjuk dan ikuti dawuh yang diterima.
                </p>
            </div>
        </div>
    )
}
