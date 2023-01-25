import { HOCCheckout } from "../components/HOC";
import "./styles/checkout.css";
import {
  UilLocationPoint,
  UilUniversity,
  UilAngleUp,
  UilArrowLeft,
} from "@iconscout/react-unicons";
import { Item } from "../components/ItemKg";
import CustomDropDown, { LongDropDown } from "../components/CustomDropDown";
import { useState } from "react";
import {
  GantiAlamat,
  JasaKurir,
  LengkapDataDiri,
  MetodeTarik,
  PaymentSuccess,
} from "../components/OverlayUser";

export const Checkout = () => {
  const [model, setModel] = useState(false);
  const [modelAlamat, setModelAlamat] = useState(false);
  const [lengkapData, setLengkapData] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [kurir, setKurir] = useState(false);

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
                <button onClick={() => setModelAlamat(!modelAlamat)}>
                  Ganti Alamat
                </button>
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
              <button onClick={() => setModel(!model)}>
                Pilih Metode Transaksi
              </button>
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
                <Item />
                <div className="jumlah-penjualan-dan-distribusi">
                  <div className="input-jumlah-penjualan">
                    <div className="jumlah-penjualan">
                      <h5>Jumlah Penjualan</h5>
                      <div className="input-number-penjualan">
                        <input type="number" />
                        <h6>Kg</h6>
                      </div>
                    </div>
                    <div className="jumlah-penjualan">
                      <h5>Model</h5>
                      <LongDropDown
                        width="227.5"
                        disable={true}
                        title="Pilih Model"
                      />
                    </div>
                    <div className="jumlah-penjualan">
                      <h5>Sub Total Pembelian</h5>
                      <p>Rp. 60.000</p>
                    </div>
                  </div>
                  <div className="input-jumlah-penjualan">
                    <div className="jumlah-penjualan">
                      <h5>Pilih Distribusi</h5>
                      <CustomDropDown />
                    </div>
                    <div className="jumlah-penjualan">
                      <h5>Pilih Jasa Kurir</h5>
                      <button
                        onClick={() => setKurir(!kurir)}
                        className="pilih-jasa-kurir"
                      >
                        <img src="/kurir/jnt.svg" />
                      </button>
                    </div>
                    <div className="jumlah-penjualan">
                      <h5>Biaya Distribusi</h5>
                      <p>Rp. 0</p>
                    </div>
                    <div className="jumlah-penjualan">
                      <h5>Estimasi Distribusi</h5>
                      <p>0-2 hari (segera mungkin)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-catatan">
              <h3>Catatan Untuk Pengelola</h3>
              <textarea placeholder="Catatan tulis disini (opsional)" />
            </div>
          </div>
        </section>
        <aside className="right-checkout">
          <img src="Re4CashYW.svg" />
          <div className="wrapper-detail-pembelian">
            <div className="detail-pembelian">
              <h3>Detail Pembelian</h3>
              <div className="checklist-point">
                <input type="checkbox" />
                pakai point
              </div>
            </div>
            <div className="detail-pembelian">
              <h6>Total Pembelian</h6>
              <h6>Rp. 30.000</h6>
            </div>
            <div className="detail-pembelian">
              <h6>Biaya Distribusi</h6>
              <h6>Rp. 15.000</h6>
            </div>
            <div className="detail-pembelian">
              <h6>Biaya Admin</h6>
              <h6>Rp. 0</h6>
            </div>
            <div className="detail-pembelian">
              <h6>
                Point <span>(850.000)</span>
              </h6>
              <h6>- 65.000</h6>
            </div>
          </div>
          <div style={{ border: "1px solid #FFE19E" }} />
          <div className="wrapper-detail-pembelian">
            <div className="detail-pembelian">
              <h4>Total Harga</h4>
              <h6>Rp. 0</h6>
            </div>
            <div className="detail-pembelian">
              <h4>Bonus Point</h4>
              <h6>1.800</h6>
            </div>
          </div>
          <button
            onClick={() => setLengkapData(!lengkapData)}
            className="btn-checkout"
          >
            Beli Rp. 0
          </button>
        </aside>
      </div>
      {model && <MetodeTarik setModel={setModel} />}
      {modelAlamat && <GantiAlamat setModelAlamat={setModelAlamat} />}
      {lengkapData && (
        <LengkapDataDiri
          setLengkapData={setLengkapData}
          setPaymentSuccess={setPaymentSuccess}
        />
      )}
      {paymentSuccess && <PaymentSuccess />}
      {kurir && <JasaKurir setKurir={setKurir} />}
    </HOCCheckout>
  );
};
