import Berandabanner from "../components/Berandabanner"
import Berandawhy from "../components/Berandawhy"
import { LinkButton } from "../components/Button"
import "./styles/beranda.css"
import { Link } from "react-router-dom"
import MenyiapkanSampah from "../components/MenyiapkanSampah"
import Artikelcard from "../components/Artikelcard";
import HOC from "../components/HOC"

const Beranda = () => {
  return (
    <HOC>
       <Berandabanner/>
       <section className="why-re4cash">
          <div className="judul-why-re4cash">
            <h2>Kenapa Re4Cash?</h2>
            <div className="bottom-line"/>
            <p>Sebagai marketplace yang peduli terhadap masalah pencemaran sampah, Re4Cash memiliki misi untuk mengembangkan bisnis yang berkelanjutan dengan memperhatikan keasrian alam dengan tujuan peningkatan ekonomi serta pemeliharaan lingkungan</p>
          </div>
          <div className="card-why-re4cash">
            <Berandawhy 
            img="/safety-img.png"
            title="Safety"
            description="Mempriotitaskan keamanan data pengguna dan seluruh transaksi Re4Cash."
            />
            <Berandawhy
            img="/complete-img.png" 
            title="Complete Solution"
            description="Memberikan berbagai solusi bagi lingkungan, edukasi, mitra bisnis, dan perseorangan yang terkait."
            />
            <Berandawhy 
            img="/education.png"
            title="Education"
            description="Menyediakan edukasi bagi masyarakat dengan memberikan konten pengelolaan sampah menggunakan metode 4R.."
            />
          </div>
       </section>
       <section className="pencapaian-re4cash">
          <div className="judul-why-re4cash">
            <h2>Pencapaian Kami</h2>
            <div className="bottom-line"/>
          </div>
          <div className="list-informasi-pencapaian">
            <div className="informasi-pencapaian">
              <h3>32</h3>
              <h5>Mitra</h5>
            </div>
            <div className="informasi-pencapaian">
              <h3>2430</h3>
              <h5>Pengguna Aktif</h5>
            </div>
            <div className="informasi-pencapaian">
              <h3>128.340Kg</h3>
              <h5>Sampah Terjual</h5>
            </div>
            <div className="informasi-pencapaian">
              <h3>95.982Kg</h3>
              <h5>Sampah Terbeli</h5>
            </div>
          </div>
          <LinkButton to="/tentangkami" type="PRIMARY_GREEN">Tentang Kami</LinkButton>
       </section>
       <section className="mitra-kerjasama">
        <h2>Mitra Kerjasama</h2>
        <div className="list-mitra-kerjasama">
            <img src="/mitra/mitra1.png"/>
            <img src="/mitra/mitra2.png"/>
            <img src="/mitra/mitra3.png"/>
            <img src="/mitra/mitra4.png"/>
            <img src="/mitra/mitra5.png"/>
            <img src="/mitra/mitra6.png"/>
            <img src="/mitra/mitra7.png"/>
            <img src="/mitra/mitra8.png"/>
            <img src="/mitra/mitra9.png"/>
            <img src="/mitra/mitra10.png"/>
        </div>
       </section>
       <section className="edukasi-landing-page">
        <div className="right-edukasi-landing">
          <h2>Edukasi</h2>
          <p>Indonesia Kurang Kepedulian akan Sampah</p>
          <div className="yellow-line"/>
        </div>
        <div className="left-edukasi-landing">
          <p>
          Indonesia menempati peringkat kedua di dunia sebagai penghasil sampah plastik terbesar ke laut. Hal ini diikuti oleh rendahnya kesadaran masyarakat serta kurangnya
           edukasi terkait pengelolaan sampah agar tidak mencemari lingkungan. 
          </p>
          <Link to="/edukasi" className="iconify-hover">
              <iconify-icon icon="gridicons:arrow-right"/>
          </Link>
        </div>
       </section>
       <section className="menyiapkan-sampah">
        <img src="/sampah-senyum.svg"/>
        <div className="right-menyiapkan-sampah">
          <div className="right-menyiapkan-title">
             <h2>Cara Menyiapkan Sampah</h2>
             <p>Siapa bilang memilah sampah itu ribet? Sini ya biar aku kasih tau ya</p>
          </div>
          <div className="step-by-step-menyiapkan">
              <MenyiapkanSampah
              icon="mdi:numeric-1-circle-outline"
              title="Pisahkan sampah"
              description="Sediakan 2 tempat sampah untuk organik
               dan anorganik. Pisahkan juga sampah-sampah yang 
               kering supaya nantinya bisa kamu daur ulang tanpa
               terlihat kotor atau bau."/>
              <MenyiapkanSampah
              icon="mdi:numeric-2-circle-outline"
              title="Kelola Sampah"
              description="Sampah organik seperti bekas 
              makanan, sayur-sayuran atau dedaunan yang cepat 
              terurai dapar dimanfaatkan menjadi pupuk kompos."/>
              <MenyiapkanSampah
              icon="mdi:numeric-3-circle-outline"
              title="Lakukan R3"
              description="Praktikan langkah 3R(Reduce, Reuse, Recycle) 
              yaitu mengurangi, menggunakan kembali, dan mendaur ulang."/>
              <MenyiapkanSampah
              icon="mdi:numeric-4-circle-outline"
              title="Kemas Rapi"
              description="Kemas sampah menggunakan kardus atau kemasan lain."/>
          </div>
        </div>
       </section>
       <div className="kontak-kami-landing">
          <h5>Informasi lebih lanjut hubungi kontak kami</h5>
          <LinkButton to="/kontak" type="BUTTON_TERTIARY">Kontak Kami</LinkButton>
       </div>
       <article className="artikel-hero">
         <h2>Artikel Edukasi</h2>
         <div className="artikel-green-line"/>
         <div className="artikel-hero-list">
            <Artikelcard/>
            <Artikelcard/>
            <Artikelcard/>
            <Artikelcard/>
         </div>
       </article>
    </HOC>
  )
}

export default Beranda