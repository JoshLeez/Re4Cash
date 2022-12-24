import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import Button from "./Button"

const ItemSell = () => {
  return (
    <Link to="/detail-product" className='wrapper-penjualan-card'>
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
      <h4>Jumlah Pembelian</h4>
      <div className='card-input-nilai'>
        <input type="text" placeholder='Masukan Nilai'/>
        <h6>Kg</h6>
      </div>
      <div className='card-total-price'>
        <h5>Total Pembelian</h5>
        <h4>Rp. 10.000</h4>
      </div>
      <div className='card-button-buy-cart'>
        <Button type="PRIMARY_LONG">Tambah ke Keranjang</Button>
        <Button type="SECONDARY_LONG">Beli</Button>
      </div>
      <div className='card-profile-verifikasi'>
        <img src="/profile-mitra.svg"/>
        <div className='card-checklist-verifikasi'>
          <UilCheckCircle color="#0EA601" size="16px"/>
          <p>Terverifikasi</p>
        </div>
      </div>
  </div>
  </Link>
  )
}

export default ItemSell




export const ItemBuy = () => {
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
      <h4>Jumlah Pembelian</h4>
      <div className='card-input-nilai'>
        <input type="text" placeholder='Masukan Nilai'/>
        <h6>Kg</h6>
      </div>
      <div className='card-total-price'>
        <h5>Total Pembelian</h5>
        <h4>Rp. 10.000</h4>
      </div>
      <div className='card-button-buy-cart'>
        <Button type="PRIMARY_LONG">Menabung</Button>
        <Button type="SECONDARY_LONG">Jual</Button>
      </div>
      <div className='card-profile-verifikasi'>
        <img src="/profile-mitra.svg"/>
        <div className='card-checklist-verifikasi'>
          <UilCheckCircle color="#0EA601" size="16px"/>
          <p>Terverifikasi</p>
        </div>
      </div>
  </div>
  </div>
  )
}
