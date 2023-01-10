import { CarouselMarketPenjual } from "../components/CarouselMarket"
import { HOCmarketplace } from "../components/HOC"
import "./styles/penjualan.css"
import ItemKg from "../components/ItemKg";

const MarketplacePenjualan = () => {
  return (
    <HOCmarketplace title="Marketplace Penjualan Utama | Re4Cash">
      <section className="hero-penjualan">
        <CarouselMarketPenjual/>
      </section>
      <section className="wrapper-kategori-pilihan">
        <div className="kategori-pilihan-left">
          <h1>Kategori Pilihan</h1>
          <div className="kategori-pilihan-btn">
            <div className="kategori-btn">
              <img src="/kategori-daur-ulang.png"/>
              <h5>Produk Daur Ulang</h5>
            </div>
            <div className="kategori-btn">
              <img src="/kategori-mentahan.png"/>
              <h5>Mentahan</h5>
            </div>
          </div>
        </div>
        <div className="kategori-pilihan-right">
          <h1>Edukasi</h1>
          <div className="content-edukasi-umum">
            <h5>Edukasi Umum</h5>
            <p>
            Teknologi pengolahan sampah sangat berpengaruh bagi kenyamanan dan kesehatan manusia. Bagaimana suatu daerah 
            atau tempat menerapkan teknologi pengolahan sampah ini dengan tepat guna dan sebaik-baiknya. Seperti yang kita
             ketahui dan kita rasakan, sampah yang dibuang begitu saja tentunya akan mencemari lingkungan hidup.
            </p>
            <span>Baca selengkapnya....</span>
          </div>
        </div>
      </section>
      <section className="kategori-list-item">
        <div className="left-kategori-item">
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
          <ItemKg/>
        </div>
        <aside className="right-kategori-item">
          
        </aside>
      </section>
    </HOCmarketplace>
  )
}

export default MarketplacePenjualan
