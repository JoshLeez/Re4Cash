import { HOCmarketplace } from "../components/HOC";
import "./styles/detailproduct.css";
import { ProductNumber } from "../components/ProductCard";

const DetailProduct = () => {
  return (
    <HOCmarketplace title="Re4Cash - Detail Product">
      <section className="detail-product-wrapper">
       <ProductNumber/>
      </section>
    </HOCmarketplace>
  );
};

export default DetailProduct;
