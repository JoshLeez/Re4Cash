import { HOCmarketplace } from "../components/HOC";
import "./styles/keranjang.css";
import { UilLocationPoint, UilTrashAlt } from "@iconscout/react-unicons";
import CustomDropDown from "../components/CustomDropDown";
import { ButtonNumber, LinkButton } from "../components/Button";

const Keranjang = () => {
  return (
    <HOCmarketplace title="Keranjang | Re4Cash">
      <section className="keranjang-page">
        <div className="left-keranjang">
          <h1>Keranjang</h1>
          <div className="checkbox-keranjang">
            <input type="checkbox" />
            <div className="keranjang-produk">
              <header className="top-keranjang-produk">
                <div className="checkout-nama-bank-sampah">
                  <h6>Nurhadi</h6>
                  <div className="lokasi-bank-sampah">
                    <UilLocationPoint size="24px" />
                    <h6>Jakarta</h6>
                  </div>
                </div>
                <UilTrashAlt color="#606060" />
              </header>
              <div className="bot-keranjang-produk">
                <div className="keranjang-nama-produk">
                  <h4>Nama</h4>
                  <div className="cart-img-nama-produk">
                    <img src="/pot.png" />
                    <span>Pot Bunga Ramah Lingkungan Dari Botol Plastik</span>
                  </div>
                </div>
                <div className="keranjang-nama-produk">
                  <h4>Harga</h4>
                  <h3>
                    Rp. 20.000 <span>/ buah</span>
                  </h3>
                  <CustomDropDown />
                </div>
                <div className="keranjang-nama-produk">
                  <h4>Kuantitas</h4>
                  <ButtonNumber />
                </div>
                <div className="keranjang-nama-produk">
                  <h4>Sub Total</h4>
                  <h2>Rp. 20.000</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="checkbox-keranjang">
            <input type="checkbox" />
            <div className="keranjang-produk">
              <header className="top-keranjang-produk">
                <div className="checkout-nama-bank-sampah">
                  <h6>Nurhadi</h6>
                  <div className="lokasi-bank-sampah">
                    <UilLocationPoint size="24px" />
                    <h6>Jakarta</h6>
                  </div>
                </div>
                <UilTrashAlt color="#606060" />
              </header>
              <div className="bot-keranjang-produk">
                <div className="keranjang-nama-produk">
                  <h4>Nama</h4>
                  <div className="cart-img-nama-produk">
                    <img src="/pot.png" />
                    <span>Pot Bunga Ramah Lingkungan Dari Botol Plastik</span>
                  </div>
                </div>
                <div className="keranjang-nama-produk">
                  <h4>Harga</h4>
                  <h3>
                    Rp. 20.000 <span>/ buah</span>
                  </h3>
                  <CustomDropDown />
                </div>
                <div className="keranjang-nama-produk">
                  <h4>Kuantitas</h4>
                  <ButtonNumber />
                </div>
                <div className="keranjang-nama-produk">
                  <h4>Sub Total</h4>
                  <h2>Rp. 20.000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-keranjang">
          <img src="Re4CashYW.svg" />
          <div className="keranjang-detail-pembelian">
            <h1>Detail Pembelian</h1>
            <div className="checkbox-pakai-point">
              <input type="checkbox" />
              <span>pakai point</span>
            </div>
          </div>
          <div className="keranjang-total-pembelian">
            <div className="harga-total-pembelian">
              <h6>Total Pembelian</h6>
              <h6>Rp. 50.000</h6>
            </div>
            <div className="harga-total-pembelian">
              <h6>
                point <span>(850.000)</span>
              </h6>
              <h6>- 50.000</h6>
            </div>
          </div>
          <div id="keranjang-garis" />
          <div className="keranjang-total-pembelian">
            <div className="harga-total-pembelian">
              <h5>Total Harga</h5>
              <h6>Rp. 0</h6>
            </div>
            <div className="harga-total-pembelian">
              <h5>Bonus Point</h5>
              <h6>1.800</h6>
            </div>
          </div>
          <LinkButton to="/checkout" type="PRIMARY_LONG">
            Beli Sekarang
          </LinkButton>
        </div>
      </section>
    </HOCmarketplace>
  );
};

export default Keranjang;
