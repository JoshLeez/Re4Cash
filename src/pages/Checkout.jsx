import { HOCCheckout} from "../components/HOC";
import "./styles/checkout.css";
import { UilArrowLeft } from '@iconscout/react-unicons';
import { UilAngleUp } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';

export const Checkout = () => {
  return (
    <HOCCheckout title="Checkout Penjualan | Re4Cash">
        <div className="checkout-page">
          <section className="left-checkout">
            <div className="checkout-back-btn">
              <UilArrowLeft size="40px"/>
              <h1>Checkout Pembelian</h1>
            </div>
            <div className="alamat-detail">
              <div className="alamat-detail-container">
                <div className="top-alamat-checkout">
                  <h5>Alamat</h5>
                  <UilAngleUp size="32px" />
                </div>
                <div className="bottom-alamat-checkout">
                  <UilLocationPoint size="32px"/>
                  <p>Jl. Pembangunan 1, Selat Panjang Kota, Kec. Tebing Tinggi, Kabupaten Kepulauan Meranti, 
                    Riau, 213094</p>
                  <h4>Ganti Alamat</h4>
                </div>
              </div>
              <p>Kami menyarankan anda unutk memilih pihak pengelola dengan kota terdekat anda!</p>
            </div>
            <div className="metode-transaksi">

            </div>
          </section>
          <aside className="right-checkout">

          </aside>
        </div>
    </HOCCheckout>
  )
}
