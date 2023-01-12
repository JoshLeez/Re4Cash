import { CarouselMarketPenjual } from "../components/CarouselMarket";
import { HOCmarketplace } from "../components/HOC";
import "./styles/penjualan.css";
import ItemKg from "../components/ItemKg";
import { UilSearchAlt } from "@iconscout/react-unicons";
import Button from "../components/Button";

const MarketplacePembelian = () => {
 
  return (
    <HOCmarketplace title="Marketplace Pembelian | Re4Cash">
      <section className="hero-penjualan">
        <CarouselMarketPenjual />
      </section>
      <section className="wrapper-kategori-pilihan">
        <div className="kategori-pilihan-left">
          <h1>Kategori Pilihan</h1>
          <div className="kategori-pilihan-btn">
            <div className="kategori-btn-pembelian">
              <img src="/kategori-daur-ulang.png" />
              <h5>Lapak Pencari Pembelian</h5>
            </div>
          </div>
        </div>
        <div className="kategori-pilihan-right">
          <h1>Edukasi</h1>
          <div className="content-edukasi-umum">
            <h5>Edukasi Umum</h5>
            <p>
              Teknologi pengolahan sampah sangat berpengaruh bagi kenyamanan dan
              kesehatan manusia. Bagaimana suatu daerah atau tempat menerapkan
              teknologi pengolahan sampah ini dengan tepat guna dan
              sebaik-baiknya. Seperti yang kita ketahui dan kita rasakan, sampah
              yang dibuang begitu saja tentunya akan mencemari lingkungan hidup.
            </p>
            <span>Baca selengkapnya....</span>
          </div>
        </div>
      </section>
      <section className="kategori-list-item">
        <div className="left-kategori-item">
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
          <ItemKg />
        </div>
        <aside className="container-right-kategori-item">
          <div className="right-kategori-item">
            <div className="filter-title">
              <iconify-icon icon="material-symbols:filter-alt-outline" />
              <h5>Filter</h5>
            </div>
            <label className="filter-checkbox">
              <input type="checkbox" />
              <h5>Rating Tertinggi</h5>
            </label>
            <div className="wrapper-kisaran-harga">
              <h5>Kisaran Harga</h5>
              <label className="kisaran-harga-radiobtn">
                <input type="radio" name="kisaran-harga" />
                <span>0 - 10.000</span>
              </label>
              <label className="kisaran-harga-radiobtn">
                <input type="radio" name="kisaran-harga" />
                <span>10.000 - 20.000</span>
              </label>
              <label className="kisaran-harga-radiobtn">
                <input type="radio" name="kisaran-harga" />
                <span>20.000 - 30.000</span>
              </label>
              <label className="kisaran-harga-radiobtn">
                <input type="radio" name="kisaran-harga" />
                <span>{"<"}30.000</span>
              </label>
            </div>
            <div className="wrapper-kisaran-harga">
              <h5>Lokasi</h5>
              <label className="filter-input-lokasi">
                <UilSearchAlt size="24px" />
                <input type="text" />
              </label>
              <div className="lokasi-radiobtn-wrapper">
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Aceh (0)</span>
                </label>
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Bali (0)</span>
                </label>
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Bangka Belitung (0)</span>
                </label>
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Banten (0)</span>
                </label>
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Bengkulu (0)</span>
                </label>
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Jawa Tengah (0)</span>
                </label>
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Kalimantan Tengah (0)</span>
                </label>
                <label className="lokasi-radiobtn">
                  <input type="radio" name="lokasi" />
                  <span>Sulawesi Tengah (0)</span>
                </label>
              </div>
            </div>
            <Button type="SECONDARY">Reset</Button>
          </div>
          <h4>Disarankan untuk memilih kota terdekat anda!</h4>
        </aside>
      </section>
    </HOCmarketplace>
  );
};

export default MarketplacePembelian;
