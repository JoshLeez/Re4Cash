import AnorganikKategori from "../components/AnorganikKategori";
import OrganikKategori from "../components/OrganikKategori";
import CarouselMarket from "../components/CarouselMarket";
import { HOCmarketplace } from "../components/HOC";
import "./styles/marketplace.css";
import { UilAngleRightB } from "@iconscout/react-unicons";
import ItemKg, {
  ItemNumber,
  ItemNumberTabung,
  ItemKgTabung,
} from "../components/ItemKg";
import { Link } from "react-router-dom";

const MarketPlaceUtama = () => {
  const kategoriAnorganik = [
    {
      img: "/plastik.svg",
      title: "Plastik",
    },
    {
      img: "/botol.svg",
      title: "Botol Plastik",
    },
    {
      img: "/botol-kaca.svg",
      title: "Botol Kaca",
    },
    {
      img: "/Aluminium.svg",
      title: "Aluminium",
    },
    {
      img: "/Aluminium2.svg",
      title: "Aluminium",
    },
    {
      img: "/karet.svg",
      title: "Karet",
    },
    {
      img: "/kawat.svg",
      title: "Kawat",
    },
    {
      img: "/keramik.svg",
      title: "Keramik",
    },
  ];

  const kategoriOrganik = [
    {
      img: "/buah-buahan.svg",
      title: "Buah-buahan",
    },
    {
      img: "/daun.svg",
      title: "Daun",
    },
    {
      img: "/padi.svg",
      title: "Padi",
    },
    {
      img: "/kelapa.svg",
      title: "Kelapa",
    },
    {
      img: "/sayur-sayuran.svg",
      title: "Sayur-Sayuran",
    },
    {
      img: "/tulang.svg",
      title: "Tulang",
    },
    {
      img: "/kayu.svg",
      title: "Kayu",
    },
    {
      img: "/kotoran-hewan.svg",
      title: "Kotoran Hewan",
    },
  ];

  return (
    <HOCmarketplace title="Marketplace | Re4Cash">
      <CarouselMarket />
      <div className="kategori-sampah">
        <h4>Kategori Sampah</h4>
        <div className="anorganik-kategori">
          {kategoriAnorganik.map((kategoris) => {
            return (
              <AnorganikKategori img={kategoris.img} title={kategoris.title} />
            );
          })}
        </div>
        <div className="organik-kategori">
          {kategoriOrganik.map((kategoris) => {
            return (
              <OrganikKategori img={kategoris.img} title={kategoris.title} />
            );
          })}
        </div>
      </div>
      <section className="marketplace-utama-penjualan">
        <h4>Penjualan</h4>
        <div className="utama-list-penjualan">
          <div className="utama-produk-mentahan">
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
              title="Galon Plastik per Buah"
              subKategori="Plastik"
              harga="Rp. 13.000"
              satuan="Pcs"
              lokasi="Jakarta"
              namaPengelola="Kuripan"
              src="/assets-product/M-Galon.png"
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
            <div className="marketplace-penjualan-button">
              <div className="penjualan-button-title">
                <h4>Mentahan</h4>
                <UilAngleRightB size="32px" />
              </div>
            </div>
          </div>
        </div>
        <div className="utama-list-penjualan">
          <div className="utama-produk-mentahan">
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
            <div className="marketplace-penjualan-button">
              <div className="penjualan-button-title">
                <h4>Produk Daur Ulang</h4>
                <UilAngleRightB size="42px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marketplace-utama-pembelian">
        <h4>Pembelian</h4>
        <div className="utama-list-penjualan">
          <div className="utama-produk-mentahan">
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
              title="Saya mencari minyak jelantah kiloan"
              subKategori="Minyak"
              harga="Rp. 15.000"
              satuan="Kg"
              lokasi="Surabaya"
              namaPengelola="Pengelolaan sampah katsuri"
              src="/assets-product/pencarian-minyakBekas.png"
            />
            <div className="marketplace-pembelian-button">
              <div className="penjualan-button-title">
                <h4>Lapak Pencari Pembeli</h4>
                <UilAngleRightB size="64px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HOCmarketplace>
  );
};

export default MarketPlaceUtama;
