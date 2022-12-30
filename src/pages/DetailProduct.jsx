import { HOCmarketplace } from "../components/HOC";
import "./styles/detailproduct.css";
import { ProductNumber } from "../components/ProductCard";
import DetailCard from "../components/DetailCard";
import RatingCard from '../components/RatingCard';
import ItemKg from "../components/ItemKg";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  return (
    <HOCmarketplace title="Re4Cash - Detail Product">
      <section className="detail-product-wrapper">
       <ProductNumber/>
      </section>
      <div className="container-detail-comment">
        <DetailCard/>
        <RatingCard/>
        <section className="produk-sejenis">
          <div className="top-produk-sejenis">
            <h5>Produk sejenis</h5>
            <Link>Lihat semua {">"}</Link>
          </div>
          <div className="bottom-produk-sejenis">
            <ItemKg/>
            <ItemKg/>
            <ItemKg/>
            <ItemKg/>
            <ItemKg/>
          </div>
        </section>
      </div>
    </HOCmarketplace>
  );
};

export default DetailProduct;
