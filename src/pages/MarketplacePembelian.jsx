import { CarouselMarketPenjual } from "../components/CarouselMarket";
import { HOCmarketplace } from "../components/HOC";
import "./styles/penjualan.css";
import { ItemNumberTabung, ItemKgTabung } from "../components/ItemKg";
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
          <ItemKgTabung
            title="Saya mencari minyak jelantah kiloan"
            subKategori="Minyak"
            harga="Rp. 15.000"
            satuan="Kg"
            lokasi="Surabaya"
            namaPengelola="Pengelolaan sampah katsuri"
            src="/assets-product/pencarian-minyakBekas.png"
          />
          <ItemKgTabung
            title="Butuh sampah kantong plastik dalam kiloan"
            subKategori="Plastik"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Cilacap"
            namaPengelola="Bank Sampah Tlogomas"
            src="/assets-product/pencarian-kantong-1.png"
          />
          <ItemNumberTabung
            title="Saya mencari Asap Cair Perbotol"
            subKategori="Asap-Cair"
            harga="Rp. 95.000"
            satuan="Pcs"
            lokasi="Malang"
            namaPengelola="Pak Amir"
            src="/assets-product/pencarian-asap cair.png"
          />
          <ItemKgTabung
            title="Mencari sampah sayur sisa makanan kiloan"
            subKategori="Sayuran"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Palembang"
            namaPengelola="Bu Fani"
            src="/assets-product/pencarian-sayuran.png"
          />
          <ItemKgTabung
            title="Saya mencari sampah tembaga perkilo"
            subKategori="Kawat"
            harga="Rp. 100.000"
            satuan="Kg"
            lokasi="Bandung"
            namaPengelola="Bank Sampah Melati"
            src="/assets-product/pencarian-tembaga.png"
          />
          <ItemNumberTabung
            title="Saya mencari Kerajinan Tas Plastik Satuan"
            subKategori="Plastik"
            harga="Rp. 50.000"
            satuan="Pcs"
            lokasi="Badui"
            namaPengelola="Ibu-ibu PKK"
            src="/assets-product/pencarian-kerajinan tas plastik.png"
          />
          <ItemKgTabung
            title="Butuh Limbah Sekam Padi Dalam Kiloan"
            subKategori="Padi"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Cilacap"
            namaPengelola="Pak Waluyo"
            src="/assets-product/pencarian-sekam.png"
          />
          <ItemKgTabung
            title="Saya mencari Biochar Kiloan"
            subKategori="Minyak"
            harga="Rp. 15.000"
            satuan="Kg"
            lokasi="Surabaya"
            namaPengelola="Pengelola Limbah Organik"
            src="/assets-product/pencarian-biochar.png"
          />
          <ItemKgTabung
            title="Mencari Limbah Batok Kelapa"
            subKategori="Buahan"
            harga="Rp. 10.000"
            satuan="Kg"
            lokasi="Palembang"
            namaPengelola="Pak Parsetyo"
            src="/assets-product/pencarian-batok kelapa.png"
          />
          <ItemKgTabung
            title="Saya mencari Bichomat Perkilo"
            subKategori="Buahan"
            harga="Rp. 100.000"
            satuan="Kg"
            lokasi="Bandung"
            namaPengelola="Pak Taufik"
            src="/assets-product/pencarian-biochomat.png"
          />
          <ItemKgTabung
            title="Butuh Limbah Bonggol Jagung Kiloan"
            subKategori="Buahan"
            harga="Rp. 6.000"
            satuan="Kg"
            lokasi="Jember"
            namaPengelola="PKK desa Tritih Wetan"
            src="/assets-product/pencarian-bonggol jagung.png"
          />
          <ItemKgTabung
            title="Saya mencari Tutup Botol kaleng kiloan"
            subKategori="Botol"
            harga="Rp. 5.000"
            satuan="Kg"
            lokasi="Malang"
            namaPengelola="TPA"
            src="/assets-product/pencarian-tutup botol.png"
          />
          <ItemKgTabung
            title="Mencari Arang Sekam Kiloan"
            subKategori="Kayu"
            harga="Rp. 8.000"
            satuan="Kg"
            lokasi="Madura"
            namaPengelola="Bu Faridah"
            src="/assets-product/pencarian-arang sekam.png"
          />
          <ItemKgTabung
            title="Saya mencari sampah Kardus Kiloan"
            subKategori="Kardus"
            harga="Rp. 2.000"
            satuan="Kg"
            lokasi="Sleman"
            namaPengelola="Bank Sampah Klojen"
            src="/assets-product/pencarian-kardus.png"
          />
          <ItemKgTabung
            title="Butuh sampah Besi Tua Dalam Satuan"
            subKategori="Besi"
            harga="Rp. 6.500"
            satuan="Kg"
            lokasi="Ciamis"
            namaPengelola="Bank Sampah Joyograndc"
            src="/assets-product/pencarian-besi tua.png"
          />
          <ItemKgTabung
            title="Mencari sampah Koran Kiloan"
            subKategori="Kertas"
            harga="Rp. 2.000"
            satuan="Kg"
            lokasi="Jakarta"
            namaPengelola="Bu Lia"
            src="/assets-product/pencarian-koran bekas.png"
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

export default MarketplacePembelian;
