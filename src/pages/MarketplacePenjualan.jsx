import { CarouselMarketPenjual } from "../components/CarouselMarket";
import { HOCmarketplace } from "../components/HOC";
import "./styles/penjualan.css";
import ItemKg, { ItemNumber } from "../components/ItemKg";
import { useState } from "react";
import { UilSearchAlt } from "@iconscout/react-unicons";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const MarketplacePenjualan = () => {
  const [daurUlang, setDaurUlang] = useState(false);
  const [mentahan, setMentahan] = useState(false);

  const mentahanHandler = () => {
    setMentahan(!mentahan);
    setDaurUlang(false);
  };

  const daurUlangHandler = () => {
    setDaurUlang(!daurUlang);
    setMentahan(false);
  };

  return (
    <HOCmarketplace title="Marketplace Penjualan | Re4Cash">
      <section className="hero-penjualan">
        <CarouselMarketPenjual />
      </section>
      <section className="wrapper-kategori-pilihan">
        <div className="kategori-pilihan-left">
          <h1>Kategori Pilihan</h1>
          <div className="kategori-pilihan-btn">
            <div
              onClick={daurUlangHandler}
              className={daurUlang ? "kategori-btn active" : "kategori-btn"}
            >
              <img src="/kategori-daur-ulang.png" />
              <h5>Produk Daur Ulang</h5>
            </div>
            <div
              onClick={mentahanHandler}
              className={mentahan ? "kategori-btn active" : "kategori-btn"}
            >
              <img src="/kategori-mentahan.png" />
              <h5>Mentahan</h5>
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
          <Link to="/detail-product">
            <ItemNumber
              title="Pot Bunga Ramah Lingkungan Dari Botol..."
              subKategori="Plastik"
              harga="Rp. 20.000"
              satuan="Pcs"
              lokasi="Jakarta"
              namaPengelola="Nurhadi"
              src="/assets-product/P-Pot bunga botol plastik.png"
            />
          </Link>
          <ItemKg
            title="Serabut Kelapa Kiloan"
            subKategori="Kelapa"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Cilacap"
            namaPengelola="Bank sampah aisyah"
            src="/assets-product/M-Serabut Kelapa.png"
          />
          <ItemKg
            title="Tulang Ayam Kiloan"
            subKategori="Tulang"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Surabaya"
            namaPengelola="Bank sampah iman"
            src="/assets-product/M-Tulang.png"
          />
          <ItemNumber
            title="Plastik Kresek"
            subKategori="Plastik"
            harga="Rp. 500"
            satuan="Pcs"
            lokasi="Palembang"
            namaPengelola="Pak Nurhadi"
            src="/assets-product/M-Kantong Kresek.png"
          />
          <ItemNumber
            title="Bingkai Foto dari Sedotan Bekas"
            subKategori="Plastik"
            harga="Rp. 29.000"
            satuan="Pcs"
            lokasi="Jakarta"
            namaPengelola="Bu Santi"
            src="/assets-product/P-bingkai sedotan.png"
          />
          <ItemNumber
            title="Mainan Lego Dari Sterofoam"
            subKategori="Sterofoam"
            harga="Rp. 10.000"
            satuan="Pcs"
            lokasi="Yogyakarta"
            namaPengelola="Bank sampah gemilang"
            src="/assets-product/P-lego sterofom.png"
          />
          <ItemNumber
            title="Hiasan dinding dari karton"
            subKategori="Kertas"
            harga="Rp. 28.000"
            satuan="Pcs"
            lokasi="Sukabumi"
            namaPengelola="felis_catus"
            src="/assets-product/P-bunga kardus.png"
          />
          <ItemNumber
            title="Campuran dari Plastik Pave"
            subKategori="Plastik"
            harga="Rp. 15.000"
            satuan="Pcs"
            lokasi="Pontianak"
            namaPengelola="Karang Taruna Kuripan"
            src="/assets-product/P-campuran pave.png"
          />
          <ItemNumber
            title="Galon Plastik per Buah"
            subKategori="Plastik"
            harga="Rp. 13.000"
            satuan="Pcs"
            lokasi="Jakarta"
            namaPengelola="Kuripan"
            src="/assets-product/M-Galon.png"
          />
          <ItemKg
            title="Jual Botol Bekas Kiloan"
            subKategori="Botol"
            harga="Rp. 12.000"
            satuan="Kg"
            lokasi="Bogor"
            namaPengelola="Bank sampah Agen"
            src="/assets-product/M-botol plastik-1.png"
          />
          <ItemKg
            title="Serabut Kelapa Kiloan"
            subKategori="Kelapa"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Cilacap"
            namaPengelola="Bank sampah aisyah"
            src="/assets-product/M-Serabut Kelapa.png"
          />
          <ItemNumber
            title="Hiasan dinding dari karton"
            subKategori="Kertas"
            harga="Rp. 28.000"
            satuan="Pcs"
            lokasi="Sukabumi"
            namaPengelola="felis_catus"
            src="/assets-product/P-bunga kardus.png"
          />
          <ItemKg
            title="Jual Botol & Plastik Kiloan"
            subKategori="Plastik"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Bekasi"
            namaPengelola="Bank sampah Jaya"
            src="/assets-product/M-botol plastik.png"
          />
          <ItemNumber
            title="Campuran dari Plastik Pave"
            subKategori="Plastik"
            harga="Rp. 15.000"
            satuan="Pcs"
            lokasi="Pontianak"
            namaPengelola="Karang Taruna Kuripan"
            src="/assets-product/P-campuran pave.png"
          />
          <ItemNumber
            title="Bingkai Foto dari Sedotan Bekas"
            subKategori="Plastik"
            harga="Rp. 29.000"
            satuan="Pcs"
            lokasi="Jakarta"
            namaPengelola="Bu Santi"
            src="/assets-product/P-bingkai sedotan.png"
          />
          <ItemNumber
            title="Mainan Lego Dari Sterofoam"
            subKategori="Sterofoam"
            harga="Rp. 10.000"
            satuan="Pcs"
            lokasi="Yogyakarta"
            namaPengelola="Bank sampah gemilang"
            src="/assets-product/P-lego sterofom.png"
          />
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
            <Button tipe="SECONDARY">Reset</Button>
          </div>
          <h4>Disarankan untuk memilih kota terdekat anda!</h4>
        </aside>
      </section>
    </HOCmarketplace>
  );
};

export default MarketplacePenjualan;
