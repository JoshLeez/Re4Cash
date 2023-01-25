import { HOCmarketplace } from "../components/HOC";
import "./styles/detailproduct.css";
import { ProductNumber } from "../components/ProductCard";
import DetailCard from "../components/DetailCard";
import RatingCard from "../components/RatingCard";
import { ItemNumber } from "../components/ItemKg";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  return (
    <HOCmarketplace title="Re4Cash - Detail Product">
      <section className="detail-product-wrapper">
        <ProductNumber />
      </section>
      <div className="container-detail-comment">
        <DetailCard />
        <RatingCard />
        <section className="produk-sejenis">
          <div className="top-produk-sejenis">
            <h5>Produk sejenis</h5>
            <Link>Lihat semua {">"}</Link>
          </div>
          <div className="bottom-produk-sejenis">
            <ItemNumber
              title="Pot Bunga Ramah Lingkungan Dari Botol..."
              subKategori="Plastik"
              harga="Rp. 20.000"
              satuan="Pcs"
              lokasi="Jakarta"
              namaPengelola="Nurhadi"
              src="/assets-product/P-Pot bunga botol plastik.png"
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
          </div>
        </section>
      </div>
    </HOCmarketplace>
  );
};

export default DetailProduct;
