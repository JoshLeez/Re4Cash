import Berandabanner from "../components/Berandabanner"
import "./styles/beranda.css"

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
            <div className="card-info-re4cash">
              <img src="/safety-img.png"/>
              <div className="word-card-re4cash">
                  <h4>Safety</h4>
                  <p>Mempriotitaskan keamanan data pengguna dan seluruh transaksi Re4Cash.</p>
              </div>
            </div>
            <div className="card-info-re4cash">
              <img src="/safety-img.png"/>
              <div className="word-card-re4cash">
                  <h4>Complete Solution</h4>
                  <p>Memberikan berbagai solusi bagi lingkungan, edukasi, mitra bisnis, dan perseorangan yang terkait.</p>
              </div>
            </div>
            <div className="card-info-re4cash">
              <img src="/safety-img.png"/>
              <div className="word-card-re4cash">
                  <h4>Education</h4>
                  <p>Menyediakan edukasi bagi masyarakat dengan memberikan konten pengelolaan sampah menggunakan metode 4R.</p>
              </div>
            </div>
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
       </section>
    </div>
  )
}

export default Beranda