import { HOCmarketplace } from "../components/HOC";
import "./styles/detailproduct.css";
import { ProductNumber } from "../components/ProductCard";
import DetailCard from "../components/DetailCard";
import RatingCard from '../components/RatingCard';

const DetailProduct = () => {
  return (
    <HOCmarketplace title="Re4Cash - Detail Product">
      <section className="detail-product-wrapper">
       <ProductNumber/>
      </section>
      <div className="container-detail-comment">
        <DetailCard/>
        <RatingCard/>
      </div>
    </HOCmarketplace>
  );
};

export default DetailProduct;
