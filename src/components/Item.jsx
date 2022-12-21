import { UilLocationPoint } from '@iconscout/react-unicons'

const Item = () => {
  return (
    <div className='wrapper-penjualan-card'>
    <div className="penjualan-card">
    <img src="/serabut-kelapa.svg"/>
    <div className="bottom-detail-card">
        <h6>Serabut Kelapa 1 Kg</h6>
        <div className="rating-produk">
          <p>Kelapa</p>
          <div className="rating-star">
            <div className="total-star">
            <iconify-icon icon="typcn:star"/>
            <iconify-icon icon="typcn:star"/>
            <iconify-icon icon="typcn:star"/>
            <iconify-icon icon="typcn:star"/>
            <iconify-icon icon="typcn:star"/> 
            </div>
            <p>5,0 <span>(65)</span></p>
          </div>
        </div>
        <h4 className="price-card">Rp. 10.000 <span>/ kilo</span></h4>
    </div>
    <div className="lokasi-bottom">
      <div className="lokasi-place">
        <UilLocationPoint/>
        <p>Jakarta</p>
      </div>
      <p>Bank sampah aisyah</p>
    </div>
  </div>
  <div className='penjualan-hover'>
      <h4>CAPEK CUY</h4>
  </div>
  </div>
  )
}

export default Item