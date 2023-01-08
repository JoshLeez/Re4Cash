import { HOCCheckout } from "../components/HOC";
import "./styles/checkout.css";
import {
  UilLocationPoint,
  UilUniversity,
  UilAngleUp,
  UilArrowLeft,
} from "@iconscout/react-unicons";
import { Item } from "../components/ItemKg";
import CustomDropDown from "../components/CustomDropDown";

export const Checkout = () => {
  return (
    <HOCCheckout title="Checkout Penjualan | Re4Cash">
      <div className="checkout-page">
        <section className="left-checkout">
          <div className="checkout-back-btn">
            <UilArrowLeft size="40px" />
            <h1>Checkout Pembelian</h1>
          </div>
          <div className="alamat-detail">
            <div className="alamat-detail-container">
              <div className="top-alamat-checkout">
                <h5>Alamat</h5>
                <UilAngleUp size="32px" />
              </div>
              <div className="bottom-alamat-checkout">
                <UilLocationPoint size="32px" />
                <p>
                  Jl. Pembangunan 1, Selat Panjang Kota, Kec. Tebing Tinggi,
                  Kabupaten Kepulauan Meranti, Riau, 213094
                </p>
                <h4>Ganti Alamat</h4>
              </div>
            </div>
            <p>
              Kami menyarankan anda unutk memilih pihak pengelola dengan kota
              terdekat anda!
            </p>
          </div>
          <div className="metode-transaksi">
            <div className="top-alamat-checkout">
              <h5>Metode Transaksi</h5>
              <UilAngleUp size="32px" />
            </div>
            <div className="metode-transaksi-bot">
              <div className="left-bank-metode">
                <UilUniversity size="32px" />
                <img src="/bri.svg" />
              </div>
              <h4>Pilih Metode Transaksi</h4>
            </div>
          </div>
          <div className="checkout-form-menabung">
            <div className="top-alamat-checkout">
              <div className="checkout-nama-bank-sampah">
                <h6>Pengelolaan Sampah Katsuri</h6>
                <div className="lokasi-bank-sampah">
                  <UilLocationPoint size="24px" />
                  <h6>Surabaya</h6>
                </div>
              </div>
              <UilAngleUp size="32px" />
            </div>
            <div className="bottom-form-menabung">
              <div className="input-top-menabung">
                <Item/>
                <div className="jumlah-penjualan-dan-distribusi">
                  <div className="input-jumlah-penjualan">
                    <div className="jumlah-penjualan">
                        <h5>Jumlah Penjualan</h5>
                        <div className="input-number-penjualan">
                          <input type="number"/>
                          <h6>Kg</h6>
                        </div>
                    </div>
                    <div className="jumlah-penjualan">
                        <h5>Model</h5>
                        <CustomDropDown/>
                    </div>
                    <div className="jumlah-penjualan">
                        <h5>Sub Total Penjualan</h5>
                        <p>Rp. 60.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="right-checkout"></aside>
      </div>
    </HOCCheckout>
  );
};
