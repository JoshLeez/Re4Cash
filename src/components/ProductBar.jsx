import Button from "./Button"
import { UilCheckCircle } from '@iconscout/react-unicons'

export const ProductByNumber = () => {
  return (
    <sidebar className="detail-right-side">
      <div className="top-detail-right-side">
        <div className="detail-jumlah-pembelian">
          <div className="input-jumlah-pembelian">
            <h6>Jumlah Pembelian</h6>
              <div className="card-incre-decre">
                <button className="negev">-</button>
                <input/>
                <button>+</button>
              </div>
            </div>
            <div className="detail-total-pembelian">
              <h6>Total Pembelian</h6>
              <h5>Rp. 20.000</h5>
            </div>
            <div className='card-button-buy-cart'>
              <Button type="PRIMARY_LONG">Tambah ke Keranjang</Button>
              <Button type="SECONDARY_LONG">Beli</Button>
            </div>
        </div>
        <div className="detail-profile-pengelola">
          <h6>Profile Pengelola</h6>
          <img src="./profile-mitra.svg"/>
          <div className="bottom-profile-pengelola">
            <h6>Nurhadi</h6>
            <div className='detail-checklist-verifikasi'>
              <UilCheckCircle color="#0EA601" size="24px"/>
              <p>Terverifikasi</p>
           </div>
           <p>Lokasi : Jakarta</p>
           <p>Terakhir online 2 hari lalu</p>
          </div>
        </div>
      </div>
      <p>Disarankan untuk memilih kota terdekat anda!</p>
    </sidebar>
  )
}


export const ProductByKg = () => {
  return (
    <div>ProductBar</div>
  )
}

