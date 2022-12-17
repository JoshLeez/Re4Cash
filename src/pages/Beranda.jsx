import Berandabanner from "../components/Berandabanner"
import Berandawhy from "../components/Berandawhy"
import { LinkButton } from "../components/Button"
import "./styles/beranda.css"
import { Link } from "react-router-dom"

const Beranda = () => {
  return (
    <div className='container'>
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
            img="/complete-img.png"
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
          <LinkButton type="PRIMARY_GREEN">Tentang Kami</LinkButton>
       </section>
       <section className="mitra-kerjasama">
        <h2>Mitra Kerjasama</h2>
        <div className="list-mitra-kerjasama">
          
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
          <Link>
            Arrow
          </Link>
        </div>
       </section>
    </div>
  )
}

export default Beranda