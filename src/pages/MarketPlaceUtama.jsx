import CarouselMarket from "../components/CarouselMarket"
import { HOCmarketplace } from "../components/HOC"
import "./styles/marketplace.css"

const MarketPlaceUtama = () => {
  return (
    <HOCmarketplace title="Re4Cash - Marketplace">
      <CarouselMarket/>
      <div className="kategori-sampah">
        <h4>Kategori Sampah</h4>
        <div className="anorganik-kategori">
          <div className="anorganik-item-wrapper">
            <div className="anorganik-item">
              <img src="/plastik.svg"/>   
            </div>
            <h5>Plastik</h5>
          </div>
        </div>
        <div className="organik-kategori">
          <div className="organik-item-wrapper">
            <div className="organik-item">
              <img src="/buah-buahan.svg"/>
            </div>
            <h5>Buah-Buahan</h5>
          </div>
        </div>
      </div>
    </HOCmarketplace>
  )
}

export default MarketPlaceUtama