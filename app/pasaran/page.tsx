export const metadata = {
    title: 'Jumlah Hari & Pasaran | Paguyuban Penghayat Kapribaden',
    description: 'Perhitungan Hari dan Pasaran dalam Kalender Jawa',
}

export default function PasaranPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center mb-4">Jumlah Hari & Pasaran</h1>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Perhitungan hari dan pasaran dalam kalender Jawa untuk berbagai keperluan
            </p>

            {/* Jumlah Neptu */}
            <div className="content-section">
                <h2>JUMLAH NEPTU HARI & PASARAN</h2>
                <div className="prose">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl text-kapribaden-purple-700 mb-4">Hari</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Minggu</span>
                                    <span className="text-kapribaden-purple-700 font-bold">5</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Senin</span>
                                    <span className="text-kapribaden-purple-700 font-bold">4</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Selasa</span>
                                    <span className="text-kapribaden-purple-700 font-bold">3</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Rabu</span>
                                    <span className="text-kapribaden-purple-700 font-bold">7</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Kamis</span>
                                    <span className="text-kapribaden-purple-700 font-bold">8</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Jum&apos;at</span>
                                    <span className="text-kapribaden-purple-700 font-bold">6</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Sabtu</span>
                                    <span className="text-kapribaden-purple-700 font-bold">9</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl text-kapribaden-purple-700 mb-4">Pasaran</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Legi</span>
                                    <span className="text-kapribaden-gold-700 font-bold">5</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Pahing</span>
                                    <span className="text-kapribaden-gold-700 font-bold">9</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Pon</span>
                                    <span className="text-kapribaden-gold-700 font-bold">7</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Wage</span>
                                    <span className="text-kapribaden-gold-700 font-bold">4</span>
                                </div>
                                <div className="flex justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <span className="font-semibold">Kliwon</span>
                                    <span className="text-kapribaden-gold-700 font-bold">8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabel Baik Buruknya Hari */}
            <div className="content-section overflow-x-auto">
                <h2 className="text-center mb-6 bg-yellow-200 py-2 font-bold">BAIK BURUKNYA HARI</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                    {/* Kolom 1: Tabel PASARAN + NAGA TAHUN + NAGA DINO gabungan */}
                    <div className="space-y-3">
                        <table className="w-full border-collapse border border-gray-400 text-xs">
                            <thead>
                                <tr>
                                    <th className="border border-gray-400 p-1 bg-yellow-200" colSpan={4}>PASARAN</th>
                                    <th className="border border-gray-400 p-1 bg-green-200" colSpan={2}>NAGA TAHUN</th>
                                    <th className="border border-gray-400 p-1 bg-cyan-200" colSpan={6}>NAGA DINO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center bg-green-50">Suro</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">0</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">8</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center bg-green-50">Sapar</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">5</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center bg-green-50">Mulud</td><td className="border border-gray-400 p-1 text-center">8</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">8</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">5</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center bg-green-50">Bakda Mulut</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">8</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">3</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center bg-green-50">Jumadil Awal</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">8</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">6</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center bg-green-50">Jumadil Akhir</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">7</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center bg-green-50">Redjeb</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">8</td><td className="border border-gray-400 p-1 text-center">6</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center bg-green-50">Ruwah</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">8</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">5</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center bg-green-50">Poso</td><td className="border border-gray-400 p-1 text-center">8</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">2</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center bg-green-50">Syawal</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">8</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center bg-green-50">Selo</td><td className="border border-gray-400 p-1 text-center">3</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">6</td><td className="border border-gray-400 p-1 text-center">9</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">5</td></tr>
                                <tr><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">O</td><td className="border border-gray-400 p-1 text-center">X</td><td className="border border-gray-400 p-1 text-center bg-green-50">Besar</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">5</td><td className="border border-gray-400 p-1 text-center">4</td><td className="border border-gray-400 p-1 text-center">7</td><td className="border border-gray-400 p-1 text-center">5</td></tr>
                            </tbody>
                        </table>

                        {/* Tabel Halangan Gedong Pangan Kosong */}
                        <table className="border-collapse border border-gray-400 text-xs">
                            <tbody>
                                <tr>
                                    <td className="border border-gray-400 p-1 text-center" rowSpan={6}>W<br/>a<br/>g<br/>o<br/>n<br/>e</td>
                                    <td className="border border-gray-400 p-1 text-center">P</td>
                                    <td className="border border-gray-400 p-1 text-center">K</td>
                                    <td className="border border-gray-400 p-1 text-center" rowSpan={6}>X</td>
                                    <td className="border border-gray-400 p-1 text-center bg-red-100">Halangan</td>
                                    <td className="border border-gray-400 p-1 text-center">R</td>
                                    <td className="border border-gray-400 p-1 text-center">G</td>
                                    <td className="border border-gray-400 p-1 text-center" rowSpan={6}>W<br/>a<br/>r<br/>i</td>
                                    <td className="border border-gray-400 p-1 text-center">P</td>
                                    <td className="border border-gray-400 p-1 text-center">L</td>
                                    <td className="border border-gray-400 p-1 text-center">J</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 p-1 text-center">a</td>
                                    <td className="border border-gray-400 p-1 text-center">l</td>
                                    <td className="border border-gray-400 p-1 text-center bg-green-100">Gedong</td>
                                    <td className="border border-gray-400 p-1 text-center">e</td>
                                    <td className="border border-gray-400 p-1 text-center">u</td>
                                    <td className="border border-gray-400 p-1 text-center">i</td>
                                    <td className="border border-gray-400 p-1 text-center">a</td>
                                    <td className="border border-gray-400 p-1 text-center">o</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 p-1 text-center">h</td>
                                    <td className="border border-gray-400 p-1 text-center">i</td>
                                    <td className="border border-gray-400 p-1 text-center bg-cyan-100">4</td>
                                    <td className="border border-gray-400 p-1 text-center">s</td>
                                    <td className="border border-gray-400 p-1 text-center">r</td>
                                    <td className="border border-gray-400 p-1 text-center">k</td>
                                    <td className="border border-gray-400 p-1 text-center">l</td>
                                    <td className="border border-gray-400 p-1 text-center">a</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 p-1 text-center">i</td>
                                    <td className="border border-gray-400 p-1 text-center">w</td>
                                    <td className="border border-gray-400 p-1 text-center bg-cyan-100">Pangan</td>
                                    <td className="border border-gray-400 p-1 text-center">u</td>
                                    <td className="border border-gray-400 p-1 text-center">i</td>
                                    <td className="border border-gray-400 p-1 text-center">i</td>
                                    <td className="border border-gray-400 p-1 text-center">o</td>
                                    <td className="border border-gray-400 p-1 text-center">a</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 p-1 text-center">n</td>
                                    <td className="border border-gray-400 p-1 text-center">o</td>
                                    <td className="border border-gray-400 p-1 text-center bg-yellow-100">Kosong</td>
                                    <td className="border border-gray-400 p-1 text-center">n</td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                    <td className="border border-gray-400 p-1 text-center">o</td>
                                    <td className="border border-gray-400 p-1 text-center">s</td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-400 p-1 text-center">g</td>
                                    <td className="border border-gray-400 p-1 text-center">n</td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                    <td className="border border-gray-400 p-1 text-center"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Kolom Ketiga - Jam Naas, Hitungan, dan Sesaji */}
                    <div className="space-y-4">
                        {/* Jam Naas */}
                        <div>
                            <h3 className="text-center font-bold mb-2 bg-gray-100 p-2 border border-gray-400">JAM NAAS</h3>
                            <p className="text-xs mb-2 text-center">(Larangan keras untuk pergi berangkat perang atau menyerang musuh)</p>
                            <table className="w-full border-collapse border border-gray-400 text-xs">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-400 p-1">HARI</th>
                                        <th className="border border-gray-400 p-1">JAM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-400 p-1">Minggu</td>
                                        <td className="border border-gray-400 p-1 text-xs">Antara jam 10 sampai jam 11<br/>Antara jam 17 sampai jam 18</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400 p-1">Senin</td>
                                        <td className="border border-gray-400 p-1 text-xs">Antara jam 8 sampai jam 9<br/>Antara jam 15 sampai jam 16</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400 p-1">Selasa</td>
                                        <td className="border border-gray-400 p-1 text-xs">Antara jam 6 sampai jam 7<br/>Antara jam 13 sampai jam 14</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400 p-1">Rabu</td>
                                        <td className="border border-gray-400 p-1 text-xs">Antara jam 12 sampai jam 13<br/>Antara jam 17 sampai jam 18</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400 p-1">Kamis</td>
                                        <td className="border border-gray-400 p-1 text-xs">Antara jam 10 sampai jam 11<br/>Antara jam 15 sampai jam 16</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400 p-1">Jum&apos;at</td>
                                        <td className="border border-gray-400 p-1 text-xs">Antara jam 8 sampai jam 9<br/>Antara jam 13 sampai jam 14</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400 p-1">Sabtu</td>
                                        <td className="border border-gray-400 p-1 text-xs">Antara jam 6 sampai jam 7<br/>Antara jam 11 sampai jam 12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Hitungan untuk Orang Hamil */}
                        <div className="border border-gray-400 p-3 bg-blue-50">
                            <h4 className="font-bold text-sm mb-2">HITUNGAN UNTUK ORANG HAMIL (NGRUJAKI)</h4>
                            <p className="text-xs mb-1">i = Wiji</p>
                            <p className="text-xs mb-1">2 = Dadi</p>
                            <p className="text-xs mb-1">3 = Lutung</p>
                            <p className="text-xs mb-2 font-bold">KEL:</p>
                            <p className="text-xs">Paling baik kalau ngrujakl jatuh pada DADI kemudian WIJI (WUJUD), misalnya Rabu Pon neptunya 14 lalu kita urutkan sesuai nomor diatas sehingga jatuh pada nomor 2 yang berarti DADI</p>
                        </div>

                        {/* Hitungan untuk Maling */}
                        <div className="border border-gray-400 p-3 bg-yellow-50">
                            <h4 className="font-bold text-sm mb-2">HITUNGAN UNTUK MALING</h4>
                            <p className="text-xs mb-1">1 = Ketong</p>
                            <p className="text-xs mb-1">2 = Rojo</p>
                            <p className="text-xs">3 = Pati</p>
                        </div>

                        {/* Sesaji */}
                        <div className="border border-gray-400 p-3 bg-gray-50">
                            <h4 className="font-bold text-sm mb-2 text-center">SESAJI</h4>
                            <p className="text-xs">Cuwek anyar, lawe, rokok cerutu, kembang takiran, endok, kolopo karo gulo jawa.</p>
                            <p className="text-xs mt-2">Sate sak sujen, ngllon, suri, golek&apos;an, gedang raja siji, jajan, beras sak jumput, buceng citik.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Taliwangke dan Posisi/Kedudukan Naga Tahun */}
            <div className="content-section overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Taliwangke */}
                    <div>
                        <h3 className="text-center font-bold mb-3 bg-gray-100 p-2 border border-gray-400">TALIWANGKE</h3>
                        <p className="text-sm mb-3 text-center">(Hari yang tidak bisa digunakan untuk apa saja)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">HARI & PASARAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Rabu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Kamis Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Jum&apos;at Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Sabtu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Senin Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Selasa Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Rabu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Kamis Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Jum&apos;at Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Sabtu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Senin Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Selasa Legi</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Posisi/Kedudukan Naga Tahun */}
                    <div>
                        <h3 className="text-center font-bold mb-3 bg-gray-100 p-2 border border-gray-400">POSISI / KEDUDUKAN<br/>NAGA TAHUN</h3>
                        <p className="text-sm mb-3 text-center">(Tiga Bulan Sekali Ganti)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm mb-4">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">POSISI / KEDUDUKAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2 bg-yellow-50 text-center" rowSpan={3}>Timur / Wetan</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2 bg-red-50 text-center" rowSpan={3}>Selatan / Kidul</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2 bg-cyan-50 text-center" rowSpan={3}>Barat / Kulon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2 bg-green-50 text-center" rowSpan={3}>Utara / Lor</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Pindah Rumah */}
            <div className="content-section overflow-x-auto">
                <h2 className="text-center mb-6 text-red-700 font-bold">JUMLAH HARI DAN PASARAN UNTUK PINDAH RUMAH,<br/>PASANG KUDA-KUDA DAN BUAT PONDASI</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Tabel Hari Pasaran Neptu */}
                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-400 p-2">HARI</th>
                                <th className="border border-gray-400 p-2">PASARAN</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2 font-bold">Minggu</td><td className="border border-gray-400 p-2 font-bold">Kliwon</td><td className="border border-gray-400 p-2">5 + 8 = 13</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Senin</td><td className="border border-gray-400 p-2 font-bold">Pahing</td><td className="border border-gray-400 p-2">4 + 9 = 13</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Kamis</td><td className="border border-gray-400 p-2 font-bold">Legi</td><td className="border border-gray-400 p-2">8 + 5 = 13</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Kamis</td><td className="border border-gray-400 p-2 font-bold">Pahing</td><td className="border border-gray-400 p-2">8 + 9 = 17</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Jum&apos;at</td><td className="border border-gray-400 p-2 font-bold">Pon</td><td className="border border-gray-400 p-2">6 + 7 = 13</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Sabtu</td><td className="border border-gray-400 p-2 font-bold">Kliwon</td><td className="border border-gray-400 p-2">9 + 8 = 17</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Sabtu</td><td className="border border-gray-400 p-2 font-bold">Wage</td><td className="border border-gray-400 p-2">9 + 4 = 13</td></tr>
                        </tbody>
                    </table>

                    {/* Tabel Hari Neptu */}
                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="border border-gray-400 p-2">HARI</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2 font-bold">Minggu</td><td className="border border-gray-400 p-2 text-center">5</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Senin</td><td className="border border-gray-400 p-2 text-center">4</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Selasa</td><td className="border border-gray-400 p-2 text-center">3</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Rabu</td><td className="border border-gray-400 p-2 text-center">7</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Kamis</td><td className="border border-gray-400 p-2 text-center">8</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Jum&apos;at</td><td className="border border-gray-400 p-2 text-center">6</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Sabtu</td><td className="border border-gray-400 p-2 text-center">9</td></tr>
                        </tbody>
                    </table>

                    {/* Tabel Pasaran Neptu */}
                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="border border-gray-400 p-2">PASARAN</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2 font-bold">Legi</td><td className="border border-gray-400 p-2 text-center">5</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Pahing</td><td className="border border-gray-400 p-2 text-center">9</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Pon</td><td className="border border-gray-400 p-2 text-center">7</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Wage</td><td className="border border-gray-400 p-2 text-center">4</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Kliwon</td><td className="border border-gray-400 p-2 text-center">8</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Hitungan */}
                <div className="bg-white p-6 rounded-lg border border-gray-400 mb-4">
                    <h3 className="font-bold text-lg mb-3">HITUNGANNYA :</h3>
                    <p className="mb-2">Jumlah neptu dibagi 4 dan sisanya menunjukkan keadaan rumah dan penghuninya :</p>
                    <div className="ml-6">
                        <p>1. Guna : Migunani / bermanfaat</p>
                        <p>2. Reso : Resani / Ngresiki</p>
                        <p>3. Rogoh : Ngrogoh / Akeh Malinge</p>
                        <p>4. Sentoyong : Ngadeg tapi rubohan / Rejekine angel</p>
                    </div>
                </div>

                {/* Footer biru */}
                <div className="bg-blue-500 text-white text-center p-3 rounded font-bold">
                    Jumlah neptu hari yang baik berjumlah 13 dan 17
                </div>
            </div>

            {/* Tujuh Bulanan */}
            <div className="content-section overflow-x-auto">
                <h2 className="text-center mb-6 text-red-700 font-bold">JUMLAH HARI DAN PASARAN UNTUK TUJUH BULANAN</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Tabel Hari Pasaran Neptu */}
                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-400 p-2">HARI</th>
                                <th className="border border-gray-400 p-2">PASARAN</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2 font-bold">Minggu</td><td className="border border-gray-400 p-2 font-bold">Pahing</td><td className="border border-gray-400 p-2">5 + 9 = 14</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Senin</td><td className="border border-gray-400 p-2 font-bold">Pon</td><td className="border border-gray-400 p-2">4 + 7 = 11</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Senin</td><td className="border border-gray-400 p-2 font-bold">Wage</td><td className="border border-gray-400 p-2">4 + 4 = 8</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Selasa</td><td className="border border-gray-400 p-2 font-bold">Legi</td><td className="border border-gray-400 p-2">3 + 5 = 8</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Rabu</td><td className="border border-gray-400 p-2 font-bold">Pon</td><td className="border border-gray-400 p-2">7 + 7 = 14</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Kamis</td><td className="border border-gray-400 p-2 font-bold">Pahing</td><td className="border border-gray-400 p-2">8 + 9 = 17</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Jum&apos;at</td><td className="border border-gray-400 p-2 font-bold">Kliwon</td><td className="border border-gray-400 p-2">6 + 8 = 14</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Sabtu</td><td className="border border-gray-400 p-2 font-bold">Legi</td><td className="border border-gray-400 p-2">9 + 5 = 14</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Sabtu</td><td className="border border-gray-400 p-2 font-bold">Kliwon</td><td className="border border-gray-400 p-2">9 + 8 = 17</td></tr>
                        </tbody>
                    </table>

                    {/* Tabel Hari Neptu */}
                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="border border-gray-400 p-2">HARI</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2 font-bold">Minggu</td><td className="border border-gray-400 p-2 text-center">5</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Senin</td><td className="border border-gray-400 p-2 text-center">4</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Selasa</td><td className="border border-gray-400 p-2 text-center">3</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Rabu</td><td className="border border-gray-400 p-2 text-center">7</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Kamis</td><td className="border border-gray-400 p-2 text-center">8</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Jum&apos;at</td><td className="border border-gray-400 p-2 text-center">6</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Sabtu</td><td className="border border-gray-400 p-2 text-center">9</td></tr>
                        </tbody>
                    </table>

                    {/* Tabel Pasaran Neptu */}
                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="border border-gray-400 p-2">PASARAN</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2 font-bold">Legi</td><td className="border border-gray-400 p-2 text-center">5</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Pahing</td><td className="border border-gray-400 p-2 text-center">9</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Pon</td><td className="border border-gray-400 p-2 text-center">7</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Wage</td><td className="border border-gray-400 p-2 text-center">4</td></tr>
                            <tr><td className="border border-gray-400 p-2 font-bold">Kliwon</td><td className="border border-gray-400 p-2 text-center">8</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Hitungan */}
                <div className="bg-white p-6 rounded-lg border border-gray-400 mb-4">
                    <h3 className="font-bold text-lg mb-3">HITUNGANNYA :</h3>
                    <p className="mb-2">Jumlah neptu dibagi 3 dan sisanya menunjukkan hari baik untuk ngrujaki :</p>
                    <div className="ml-6">
                        <p>Keterangan sisa</p>
                        <p>1. Wiji : Wujud anak ga tau sifatnya</p>
                        <p>2. Dadi : Wujud anak yang sifatnya sesuai dengan keinginan (terbaik)</p>
                        <p>3. Wurung : Tidak jadi atau keguguran</p>
                    </div>
                </div>

                {/* Footer biru */}
                <div className="bg-blue-500 text-white text-center p-3 rounded font-bold">
                    Jumlah neptu hari yang baik berjumlah 8, 11, 14 dan 17
                </div>
            </div>

            {/* Naas Berdasarkan Weton */}
            <div className="content-section overflow-x-auto">
                <h2 className="text-center mb-6 text-red-700 font-bold">NAAS BERDASARKAN WETON</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Minggu Legi */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Minggu Legi : 5 + 5 = 10</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Selasa Pon</p>
                            <p><span className="font-semibold">Sedang</span> : Sabtu Pahing</p>
                            <p><span className="font-semibold">Besar</span> : Selasa Pon</p>
                        </div>
                    </div>

                    {/* Senin Legi */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Senin Legi : 4 + 5 = 9</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Rabu Pon</p>
                            <p><span className="font-semibold">Sedang</span> : Minggu Pahing</p>
                            <p><span className="font-semibold">Besar</span> : Selasa Wage</p>
                        </div>
                    </div>

                    {/* Minggu Pahing */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Minggu Pahing : 5 + 9 = 14</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Selasa Wage</p>
                            <p><span className="font-semibold">Sedang</span> : Kamis Pon</p>
                            <p><span className="font-semibold">Besar</span> : Sabtu Kliwon</p>
                        </div>
                    </div>

                    {/* Senin Pahing */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Senin Pahing : 4 + 9 = 13</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Rabu Wage</p>
                            <p><span className="font-semibold">Sedang</span> : Minggu Pon</p>
                            <p><span className="font-semibold">Besar</span> : Sabtu Wage</p>
                        </div>
                    </div>

                    {/* Minggu Pon */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Minggu Pon : 5 + 7 = 12</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Selasa Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Sabtu Wage</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Wage</p>
                        </div>
                    </div>

                    {/* Senin Pon */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Senin Pon : 4 + 7 = 11</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Rabu Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Minggu Wage</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Pon</p>
                        </div>
                    </div>

                    {/* Minggu Wage */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Minggu Wage : 5 + 4 = 9</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Selasa Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Sabtu Kliwon</p>
                            <p><span className="font-semibold">Besar</span> : Senin Pahing</p>
                        </div>
                    </div>

                    {/* Senin Wage */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Senin Wage : 4 + 4 = 8</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Rabu Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Minggu Kliwon</p>
                            <p><span className="font-semibold">Besar</span> : Senin Legi</p>
                        </div>
                    </div>

                    {/* Minggu Kliwon */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Minggu Kliwon : 5 + 8 = 13</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Selasa Pahing</p>
                            <p><span className="font-semibold">Sedang</span> : Sabtu Legi</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Kliwon</p>
                        </div>
                    </div>

                    {/* Senin Kliwon */}
                    <div className="border-2 border-gray-400 p-3 bg-green-100">
                        <h3 className="font-bold text-center mb-2">Senin Kliwon : 4 + 8 = 12</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Rabu Pahing</p>
                            <p><span className="font-semibold">Sedang</span> : Minggu Legi</p>
                            <p><span className="font-semibold">Besar</span> : Jum&apos;at Legi</p>
                        </div>
                    </div>

                    {/* Selasa Legi */}
                    <div className="border-2 border-gray-400 p-3 bg-yellow-100">
                        <h3 className="font-bold text-center mb-2">Selasa Legi : 3 + 5 = 8</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Kamis Pon</p>
                            <p><span className="font-semibold">Sedang</span> : Senin Pahing</p>
                            <p><span className="font-semibold">Besar</span> : Selasa Pon</p>
                        </div>
                    </div>

                    {/* Rabu Legi */}
                    <div className="border-2 border-gray-400 p-3 bg-red-100">
                        <h3 className="font-bold text-center mb-2">Rabu Legi : 7 + 5 = 12</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Jum&apos;at Pon</p>
                            <p><span className="font-semibold">Sedang</span> : Selasa Pahing</p>
                            <p><span className="font-semibold">Besar</span> : Minggu Pahing</p>
                        </div>
                    </div>

                    {/* Selasa Pahing */}
                    <div className="border-2 border-gray-400 p-3 bg-yellow-100">
                        <h3 className="font-bold text-center mb-2">Selasa Pahing : 3 + 9 = 12</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Kamis Wage</p>
                            <p><span className="font-semibold">Sedang</span> : Senin Pon</p>
                            <p><span className="font-semibold">Besar</span> : Sabtu Pon</p>
                        </div>
                    </div>

                    {/* Rabu Pahing */}
                    <div className="border-2 border-gray-400 p-3 bg-red-100">
                        <h3 className="font-bold text-center mb-2">Rabu Pahing : 7 + 9 = 16</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Jum&apos;at Wage</p>
                            <p><span className="font-semibold">Sedang</span> : Selasa Pon</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Pahing</p>
                        </div>
                    </div>

                    {/* Selasa Pon */}
                    <div className="border-2 border-gray-400 p-3 bg-yellow-100">
                        <h3 className="font-bold text-center mb-2">Selasa Pon : 3 + 7 = 10</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Kamis Kliwon</p>
                            <p><span className="font-semibold">Sedang</span> : Senin Wage</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Pahing</p>
                        </div>
                    </div>

                    {/* Rabu Pon */}
                    <div className="border-2 border-gray-400 p-3 bg-red-100">
                        <h3 className="font-bold text-center mb-2">Rabu Pon : 7 + 7 = 14</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Jum&apos;at Pon</p>
                            <p><span className="font-semibold">Sedang</span> : Selasa Wage</p>
                            <p><span className="font-semibold">Besar</span> : Selasa Legi</p>
                        </div>
                    </div>

                    {/* Selasa Wage */}
                    <div className="border-2 border-gray-400 p-3 bg-yellow-100">
                        <h3 className="font-bold text-center mb-2">Selasa Wage : 3 + 4 = 7</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Kamis Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Sabtu Kliwon</p>
                            <p><span className="font-semibold">Besar</span> : Senin Kliwon</p>
                        </div>
                    </div>

                    {/* Rabu Wage */}
                    <div className="border-2 border-gray-400 p-3 bg-red-100">
                        <h3 className="font-bold text-center mb-2">Rabu Wage : 7 + 4 = 11</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Jum&apos;at Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Sabtu Kliwon</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Kliwon</p>
                        </div>
                    </div>

                    {/* Selasa Kliwon */}
                    <div className="border-2 border-gray-400 p-3 bg-yellow-100">
                        <h3 className="font-bold text-center mb-2">Selasa Kliwon : 3 + 8 = 11</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Kamis Pahing</p>
                            <p><span className="font-semibold">Sedang</span> : Senin Legi</p>
                            <p><span className="font-semibold">Besar</span> : Jum&apos;at Kliwon</p>
                        </div>
                    </div>

                    {/* Kamis Pahing */}
                    <div className="border-2 border-gray-400 p-3 bg-gray-200">
                        <h3 className="font-bold text-center mb-2">Kamis Pahing : 8 + 9 = 17</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Sabtu Wage</p>
                            <p><span className="font-semibold">Sedang</span> : Rabu Pon</p>
                            <p><span className="font-semibold">Besar</span> : Sabtu Pon</p>
                        </div>
                    </div>

                    {/* Kamis Pon */}
                    <div className="border-2 border-gray-400 p-3 bg-gray-200">
                        <h3 className="font-bold text-center mb-2">Kamis Pon : 8 + 7 = 15</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Sabtu Kliwon</p>
                            <p><span className="font-semibold">Sedang</span> : Rabu Wage</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Pahing</p>
                        </div>
                    </div>

                    {/* Jum&apos;at Legi */}
                    <div className="border-2 border-gray-400 p-3 bg-green-200">
                        <h3 className="font-bold text-center mb-2">Jum&apos;at Legi : 6 + 5 = 11</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Minggu Pon</p>
                            <p><span className="font-semibold">Sedang</span> : Kamis Pahing</p>
                            <p><span className="font-semibold">Besar</span> : Senin Legi</p>
                        </div>
                    </div>

                    {/* Sabtu Legi */}
                    <div className="border-2 border-gray-400 p-3 bg-blue-100">
                        <h3 className="font-bold text-center mb-2">Sabtu Legi : 9 + 5 = 14</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Senin Pon</p>
                            <p><span className="font-semibold">Sedang</span> : Jum&apos;at Pahing</p>
                            <p><span className="font-semibold">Besar</span> : Jum&apos;at Wage</p>
                        </div>
                    </div>

                    {/* Jum&apos;at Pahing */}
                    <div className="border-2 border-gray-400 p-3 bg-green-200">
                        <h3 className="font-bold text-center mb-2">Jum&apos;at Pahing : 6 + 9 = 15</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Minggu Wage</p>
                            <p><span className="font-semibold">Sedang</span> : Kamis Pon</p>
                            <p><span className="font-semibold">Besar</span> : Jum&apos;at Legi</p>
                        </div>
                    </div>

                    {/* Sabtu Pahing */}
                    <div className="border-2 border-gray-400 p-3 bg-blue-100">
                        <h3 className="font-bold text-center mb-2">Sabtu Pahing : 9 + 9 = 18</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Senin Wage</p>
                            <p><span className="font-semibold">Sedang</span> : Jum&apos;at Pon</p>
                            <p><span className="font-semibold">Besar</span> : Selasa Wage</p>
                        </div>
                    </div>

                    {/* Jum&apos;at Pon */}
                    <div className="border-2 border-gray-400 p-3 bg-green-200">
                        <h3 className="font-bold text-center mb-2">Jum&apos;at Pon : 6 + 7 = 13</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Minggu Kliwon</p>
                            <p><span className="font-semibold">Sedang</span> : Kamis Wage</p>
                            <p><span className="font-semibold">Besar</span> : Rabu Kliwon</p>
                        </div>
                    </div>

                    {/* Sabtu Pon */}
                    <div className="border-2 border-gray-400 p-3 bg-blue-100">
                        <h3 className="font-bold text-center mb-2">Sabtu Pon : 9 + 7 = 16</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Senin Kliwon</p>
                            <p><span className="font-semibold">Sedang</span> : Jum&apos;at Wage</p>
                            <p><span className="font-semibold">Besar</span> : Minggu Pon</p>
                        </div>
                    </div>

                    {/* Jum&apos;at Wage */}
                    <div className="border-2 border-gray-400 p-3 bg-green-200">
                        <h3 className="font-bold text-center mb-2">Jum&apos;at Wage : 6 + 4 = 10</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Minggu Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Kamis Kliwon</p>
                            <p><span className="font-semibold">Besar</span> : Minggu Pon</p>
                        </div>
                    </div>

                    {/* Sabtu Wage */}
                    <div className="border-2 border-gray-400 p-3 bg-blue-100">
                        <h3 className="font-bold text-center mb-2">Sabtu Wage : 9 + 4 = 13</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Senin Legi</p>
                            <p><span className="font-semibold">Sedang</span> : Jum&apos;at Kliwon</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Legi</p>
                        </div>
                    </div>

                    {/* Jum&apos;at Kliwon */}
                    <div className="border-2 border-gray-400 p-3 bg-green-200">
                        <h3 className="font-bold text-center mb-2">Jum&apos;at Kliwon : 6 + 8 = 14</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Minggu Pahing</p>
                            <p><span className="font-semibold">Sedang</span> : Kamis Legi</p>
                            <p><span className="font-semibold">Besar</span> : Kamis Pon</p>
                        </div>
                    </div>

                    {/* Sabtu Kliwon */}
                    <div className="border-2 border-gray-400 p-3 bg-blue-100">
                        <h3 className="font-bold text-center mb-2">Sabtu Kliwon : 9 + 8 = 17</h3>
                        <div className="text-sm space-y-1">
                            <p><span className="font-semibold">Apes</span> : Senin Pahing</p>
                            <p><span className="font-semibold">Sedang</span> : Kamis Legi</p>
                            <p><span className="font-semibold">Besar</span> : Senin Legi</p>
                        </div>
                    </div>
                </div>

                {/* Tabel Jumlah Neptu di bawah */}
                <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="border border-gray-400 p-2">HARI</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2">Minggu</td><td className="border border-gray-400 p-2 text-center">5</td></tr>
                            <tr><td className="border border-gray-400 p-2">Senin</td><td className="border border-gray-400 p-2 text-center">4</td></tr>
                            <tr><td className="border border-gray-400 p-2">Selasa</td><td className="border border-gray-400 p-2 text-center">3</td></tr>
                            <tr><td className="border border-gray-400 p-2">Rabu</td><td className="border border-gray-400 p-2 text-center">7</td></tr>
                            <tr><td className="border border-gray-400 p-2">Kamis</td><td className="border border-gray-400 p-2 text-center">8</td></tr>
                            <tr><td className="border border-gray-400 p-2">Jum&apos;at</td><td className="border border-gray-400 p-2 text-center">6</td></tr>
                            <tr><td className="border border-gray-400 p-2">Sabtu</td><td className="border border-gray-400 p-2 text-center">9</td></tr>
                        </tbody>
                    </table>

                    <table className="border-collapse border border-gray-400 text-sm">
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="border border-gray-400 p-2">PASARAN</th>
                                <th className="border border-gray-400 p-2">NEPTU</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-gray-400 p-2">Legi</td><td className="border border-gray-400 p-2 text-center">5</td></tr>
                            <tr><td className="border border-gray-400 p-2">Pahing</td><td className="border border-gray-400 p-2 text-center">9</td></tr>
                            <tr><td className="border border-gray-400 p-2">Pon</td><td className="border border-gray-400 p-2 text-center">7</td></tr>
                            <tr><td className="border border-gray-400 p-2">Wage</td><td className="border border-gray-400 p-2 text-center">4</td></tr>
                            <tr><td className="border border-gray-400 p-2">Kliwon</td><td className="border border-gray-400 p-2 text-center">8</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Tabel Tahun Jawa dan Jatuhnya Bulan */}
            <div className="content-section overflow-x-auto">
                <h2 className="text-center mb-6">TAHUN JAWA DAN JATUHNYA BULAN</h2>
                
                {/* Grid untuk 4 kolom tabel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* 1. ALIF */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">1. ALIF</h3>
                        <p className="text-center text-sm mb-2">(ABOGE : Alif Rabo Wage)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Rabu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Jumat Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Sabtu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Senin Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Selasa Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Kamis Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Jumat Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Minggu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Senin Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Rabu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Kamis Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Sabtu Wage</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 2. HE */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">2. HE</h3>
                        <p className="text-center text-sm mb-2">(HEHADPON : He Ahad Pon)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Minggu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Selasa Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Rabu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Jumat Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Sabtu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Senin Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Selasa Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Kamis Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Jumat Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Minggu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Senin Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Rabu Pon</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 3. JIMAWAL */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">3. JIMAWAL</h3>
                        <p className="text-center text-sm mb-2">(JIMAHPON : Jim Jumat Pon)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Jumat Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Minggu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Senin Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Rabu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Kamis Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Sabtu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Minggu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Selasa Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Rabu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Jumat Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Sabtu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Senin Pon</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 4. JE */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">4. JE</h3>
                        <p className="text-center text-sm mb-2">(JISAING : Je Seloso Pahing)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Selasa Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Kamis Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Jumat Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Minggu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Senin Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Rabu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Kamis Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Sabtu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Minggu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Selasa Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Rabu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Jumat Pahing</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 5. DAL */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">5. DAL</h3>
                        <p className="text-center text-sm mb-2">(DALTUGI : Dal Sabtu Legi)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Sabtu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Senin Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Selasa Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Kamis Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Jumat Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Minggu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Senin Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Rabu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Kamis Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Sabtu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Minggu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Selasa Legi</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 6. BE */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">6. BE</h3>
                        <p className="text-center text-sm mb-2">(BEMISGI : Be Kamis Legi)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Kamis Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Sabtu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Minggu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Selasa Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Rabu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Jumat Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Sabtu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Senin Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Selasa Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Kamis Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Jumat Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Minggu Legi</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 7. WAU */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">7. WAU</h3>
                        <p className="text-center text-sm mb-2">(WUNENWON : Wau Senin Kliwon)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Senin Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Rabu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Kamis Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Sabtu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Minggu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Selasa Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Rabu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Jumat Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Sabtu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Senin Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Selasa Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Kamis Kliwon</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 8. JEMAKIR */}
                    <div>
                        <h3 className="text-center font-bold text-lg mb-3 text-blue-700">8. JEMAKIR</h3>
                        <p className="text-center text-sm mb-2">(JIMAGE : Jemakir Jumat Wage)</p>
                        <table className="w-full border-collapse border border-gray-400 text-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-400 p-2">BULAN</th>
                                    <th className="border border-gray-400 p-2">JATUHNYA BULAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-400 p-2">Suro</td><td className="border border-gray-400 p-2">Jumat Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Sapar</td><td className="border border-gray-400 p-2">Minggu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Mulud</td><td className="border border-gray-400 p-2">Senin Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Bakda Mulut</td><td className="border border-gray-400 p-2">Rabu Pon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Awal</td><td className="border border-gray-400 p-2">Kamis Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Jumadil Akhir</td><td className="border border-gray-400 p-2">Sabtu Pahing</td></tr>
                                <tr><td className="border border-gray-400 p-2">Redjeb</td><td className="border border-gray-400 p-2">Minggu Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Ruwah</td><td className="border border-gray-400 p-2">Selasa Legi</td></tr>
                                <tr><td className="border border-gray-400 p-2">Poso</td><td className="border border-gray-400 p-2">Rabu Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Syawal</td><td className="border border-gray-400 p-2">Jumat Kliwon</td></tr>
                                <tr><td className="border border-gray-400 p-2">Selo</td><td className="border border-gray-400 p-2">Sabtu Wage</td></tr>
                                <tr><td className="border border-gray-400 p-2">Besar</td><td className="border border-gray-400 p-2">Senin Wage</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Taliwangke */}
            <div className="content-section">
                <h2>TALIWANGKE</h2>
                <div className="prose">
                    <p className="font-semibold text-kapribaden-purple-700">
                        Hari yang tidak bisa digunakan untuk apa saja
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                        <h3 className="text-lg font-bold text-kapribaden-purple-800 mb-3">Daftar Taliwangke:</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Suro: Rabu Pahing</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Sapar: Kamis Pon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Mulud: Jum&apos;at Wage</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Bakda Mulut: Sabtu Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Jumadil Awal: Senin Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Jumadil Akhir: Selasa Legi</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Redjeb: Rabu Pahing</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Ruwah: Kamis Pon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Poso: Jum&apos;at Wage</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Syawal: Sabtu Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Selo: Senin Kliwon</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded border border-red-200">
                                <p className="font-semibold">Besar: Selasa Legi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Catatan */}
            <div className="mt-12 p-8 bg-gradient-to-r from-kapribaden-purple-50 to-kapribaden-gold-50 rounded-lg border-l-4 border-kapribaden-purple-600">
                <h3 className="text-2xl font-bold text-kapribaden-purple-800 mb-3">Catatan Penting</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Perhitungan hari dan pasaran ini merupakan pedoman umum. Untuk keperluan khusus, selalu minta petunjuk dan ikuti dawuh yang diterima.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Perhitungan neptu dilakukan dengan menjumlahkan nilai hari dan pasaran, kemudian hasilnya diinterpretasikan sesuai dengan keperluan
                    (boyongan, ngrujaki, dll).
                </p>
            </div>
        </div>
    )
}
