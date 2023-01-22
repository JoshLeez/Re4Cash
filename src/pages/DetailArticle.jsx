import React from 'react'
import HOC from '../components/HOC'
import './styles/detailarticle.css'
import ItemKg, {ItemNumber} from "../components/ItemKg";
import { Link } from 'react-router-dom';

const DetailArticle = () => {
  return (
    <HOC title='Edukasi | Article'>
        <div className="detailarticle-hero">
          <img src="article-hero.png" alt="img" />
        </div>
        <article className="detail-article-container">
          <div className="detail-article-card">
            <Link to="/edukasi">
            <div className="article-back">
              <iconify-icon icon="material-symbols:arrow-back-ios-rounded" />
              <h3>ke halaman Edukasi</h3>
              </div>  
            </Link>
            <div className="detail-article-card-title">
              <h2>Produk Tersedia</h2>
              <p>lihat semua</p>
            </div>
            <div className="detail-article-card-content">
              <ItemKg/>
            </div>
            <div className="detail-article-card-content">
              <ItemNumber/>
            </div>
            <div className="detail-article-card-content">
              <ItemKg/>
            </div>
            <div className="detail-article-card-content">
              <ItemNumber/>
            </div>
          </div>
          <div className="detail-article-kategori">
            <h1>Anorganik | Botol</h1>
          
          <div className="detail-article-content">
            <h1>Limbah Botol – Pengertian, Dampak, dan Pengelolaannya</h1>
            <div className="article-garis" />
            <div className='detail-article-content-paragraf'>
              <div className="article-date">
                <iconify-icon icon="material-symbols:date-range-outline" />
                <p>Rabu, 14 Desember 2022</p>
              </div>
              <div className="article-text">
                <p>Limbah botol adalah limbah yang termasuk dalam kategori limbah anorganik berwujud padat dan sulit terurai. Hal tersebut dikarenakan umumnya limbah botol dibuat menggunakan bahan-bahan non-hayati atau kimia.Limbah botol tentunya memiliki berbagai macam sifat lainnya, antara lain:</p>
                <ul>
                  <li>Tidak mudah bocor</li>
                  <li>Relatif tahan terhadap panas (tergantung jenisnya)</li>
                  <li>Dapat didaur ulang</li>
                  <li>Menghindari adanya kontak dengan air dan udara sekitar</li>
                  <li>Mampu mempertahankan warna, cita rasa, dan aroma produk yang dikemas</li>
                </ul>
                <p>Konsumsi masyarakat yang tinggi menyebabkan tingginya produksi limbah botol, sehingga tidak usah diragukan lagi jumlahnya yang terakumulasi di Tempat Pembuangan Akhir (TPA). Seringkali limbah botol tidak dimanfaatkan kembali, padahal hasil daur ulang limbah botol memiliki nilai ekonomis.</p>
                <h3>Sumber Limbah Botol</h3>
                <p>Limbah botol dapat dihasilkan dari berbagai aktivitas antara lain:</p>
                <ul>
                  <li>Rumah Tangga: biasanya berasal dari wadah makanan / minuman dan bahan-bahan pembersih rumah.</li>
                  <li>Supermarket atau Rumah Makan: berasal dari wadah bahan baku / minuman / makanan dan wadah cairan pembersih.</li>
                  <li>Industri: berasal dari bahan baku keperluan industri dan hasil gagal / reject kegiatan produksi.</li>
                </ul>
                <h3>Jenis dan Contoh Limbah</h3>
                <p>Limbah Botol dapat dikategorikan menjadi dua jenis, yaitu:</p>
                <h4>Limbah Botol Kaca</h4>
                <p>Limbah botol kaca merupakan limbah berbahan kaca yang berasal dari penggunaan sehari-hari baik industri maupun lainnya yang memiliki waktu penguraian hingga 1 juta tahun. Dimana limbah botol kaca ini dibuat melalui proses pelelahan hingga pendinginan. Limbah botol kaca secara garis besar terbagi menjadi tiga warna:</p>
                <ul>
                  <li>Coklat, secara umum digunakan untuk botol minuman yang ringan</li>
                  <li>Hijau, secara umum digunakan untuk wadah minuman kecap, wine, dan saus</li>
                  <li>Bening, yang paling banyak ditemukan dimana biasanya digunakan untuk wadah bahan-bahan rumah tangga, toples, minuman, dan lain-lain</li>
                </ul>
                <h4>Limbah Botol Plastik</h4>
                <p>Limbah botol plastik cenderung sulit untuk terurai secara biologis, dimana waktu penguraian kurang lebih 80 tahun agar terurai secara sempurna. Oleh karena itu, penggunaan limbah botol plastik dapat dikatakan “tidak menguntungkan bagi lingkungan” apabila pembuangan akhir adalah pilihannya.</p>
                <p>Pada umumya limbah botol plastik terdiri dari berbagai macam jenis, seperti:</p>
                <ul>
                  <li>PET (Polyethylene Terephthalate), pada umumnya limbah botol ini tembus pandang atau transparan, ringan, dan kuat. Contoh limbah botol plastik PET antara lain: botol air mineral, botol minyak goreng, dan botol kosmetik.</li>
                  <li>HDPE (High Density Polyethylene), limbah botol dengan jenis ini memiliki karakteristik warna yang sedikit buram namun masih transparan, tidak berbau, lebih tahan terhadap panas, dan bahan lebih keras dibandingkan dengan LDPE. Limbah botol dengan bahan HDPE umumnya hanya digunakan untuk sekali pakai saja seperti wadah kosmetik, obat, dan susu, galon air minum, dan jerigen.</li>
                  <li>PVC (Polyvinyl Chloride), limbah botol dengan bahan PVC memiliki sifat yang paling sulit didaur ulang.</li>
                  <li>PP (Polypropylene), limbah botol Polypropylene memiliki kualitas terbaik, dimana pada umumnya digunakan sebagai botol minum untuk bayi. Bahan PP menjadikan limbah botol memiliki sifat elastis sehingga dapat kembali ke bentuk semula. Limbah botol dengan jenis ini memiliki warna yang cenderung keruh ataupun transparan.</li>
                </ul>
                <h3>Bahaya atau dampak negatif akibat limbah botol</h3>
                  <p>Ketidakpedulian terhadap bahaya limbah botol dapat mengakibatkan peningkatan permasalahan lingkungan. Sangat miris, Indonesia dengan alamnya yang indah kini masuk ke dalam peringkat kedua penyumbang kerusakan lingkungan di bumi.</p>
                  <p>Hal ini menjadi sebuah pengingat bahwa seluruh masyarakat, hingga pelaku usaha pun sudah seharusnya berupaya untuk merubah pola fikir dan gaya hidup yang peduli terhadap lingkungan. Apabila kedua sifat tersebut tidak segera dirubah maka keselamatan dan kelangsungsan hidup seluruh makhluk hidup terancam.</p>
                  <p>Berikut dampak-dampak limbah botol yang wajib diketahui:</p>
                  <h4>Pencemaran Udara</h4>
                  <p>Akibat pembakaran limbah-limbah botol secara sembarangan menyebabkan kandungan dioksin menyebar. Dioksin mempunyai sifat fisik dan kimia yang memberikan dampak negatif terhadap kesehatan makhluk hidup maupun lingkungan baik jangka panjang maupun pendek, seperti mengganggu sistem reproduksi, menurunkan sistem imun, dan kerusakan hati.</p>
                  <p>Selain itu, pencemaran udara berkontribusi terhadap pemanasan global, proses dimana terjadinya peningkatan suhu rata-rata bumi. Gas dioksin yang tak terkendali mampu menyebabkan panas di bumi terperangkap sehingga pemanasan global pun terjadi.</p>
                  <h4>Terganggunya pertumbuhan tanaman</h4>
                  <p>Limbah botol yang dibakar dapat menjadikan tanaman yang tumbuh di daerah sekitaran mengalami nekrosis, bintik hitam, dan klorosis, hingga mempercepat kematian tanaman.</p>
                  <h4>Pecemaran Tanah</h4>
                  <p>Limbah-limbah botol yang terbuang begitu saja mampu menghalangi air untuk masuk ke dalam tanah</p>
                  <h4>Pencemaran Air</h4>
                  <p>Dapat terjadi apabila limbah botol langsung dibuang begitu saja ke sungai atau danau. Hal ini dapat menyebabkan perairan mengalami penyumbatan saluran sehingga terjadilah banjir.</p>
                  <p>Selain itu, isi atau material yang sebelumnya berada di dalam limbah botol juga mampu menyebabkan air mengalami perubahan warna serta menghasilkan bau yang menyengat.</p>
                  <p>Limbah botol berbahan plastik berpotensi meningkatkan kandungan mikroplastik di perairan. Mikroplastik memiliki ukuran yang sangat kecil sehingga tanpa disadari dapat terakumulasi dalam tubuh biota sungai / laut dan juga manusia melalui proses rantai makanan.</p>
                  <h4>Membahayakan Kesehatan</h4>
                  <p>Limbah botol tetunya mengandung berbagai unsur kimia, salah satunya bisphenol A (BPA). Kandungan ini mampu meresap ke makanan maupun minuman sehingga memiliki konsekuensi terhadap kesehatan dalam jangka panjang. Sedangkan mikroplastik akibat limbah botol dapat menyebabkan gangguan kesuburan, kanker, permasalahan pada sistem saraf, dan sistem kekebalan tubuh.</p>
                  <h3>Pengelolaan Limbah Botol</h3>
                  <p>Pengelolaan limbah botol merupakan salah satu dari sekian banyak cara yang dapat dilakukan untuk mengurangi timbunan limbah botol di TPA maupun dampak pencemarannya. Pendekatan yang dapat diterapkan untuk mengelola limbah botol yaitu 3R: Reduce, Reuse,dan Recycle.</p>
                  <ul>
                    <li>Reduce: Mengurangi semua bentuk perilaku maupun aktivitas yang dapat menghasilkan limbah botol.</li>
                    <li>Reuse: Memanfaatan kembali limbah-limbah botol ke fungsi awalnya.</li>
                    <li>Recycle: Mengelola kembali limbah botol menjadi barang yang bermanfaat ataupun bernilai ekonomis.</li>
                  </ul>
                  <p>Dengan menerapkan konsep 3R maka kita turut berkontribusi dalam mengurangi kuantitas limbah botol yang berakhir di TPA, mengurangi permasalahan lingkungan yang terjadi di Indonesia, mewujudkan sirkular ekonomi, mengurangi penggunaan sumber daya alam yang berlebihan, dan yang terpenting menjaga keseimbangan ekosistem di lingkungan.</p>
              </div>
            </div>
          </div>
          </div>
        </article>
    </HOC>
  )
}

export default DetailArticle
