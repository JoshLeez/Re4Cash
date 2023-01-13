import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState, useEffect } from "react";

const ItemKg = () => {

  const [item, setItem] = useState("");

  const inputHandler = (e) => {
    e.preventDefault();
    setItem(parseInt(e.target.value) || "");
  };

  return (
    <div className="wrapper-penjualan-card">
      <Link to="/detail-product" className="penjualan-card">
        <img src="/serabut-kelapa.svg" />
        <div className="bottom-detail-card">
          <h6>Serabut Kelapa 1 Kg</h6>
          <div className="rating-produk">
            <p>Kelapa</p>
            <div className="rating-star">
              <div className="total-star">
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
              </div>
              <p>
                5,0 <span>(65)</span>
              </p>
            </div>
          </div>
          <h4 className="price-card">
            Rp. 10.000 <span>/ kilo</span>
          </h4>
        </div>
        <div className="lokasi-bottom">
          <div className="lokasi-place">
            <UilLocationPoint color="black" />
            <p>Jakarta</p>
          </div>
          <p>Bank sampah aisyah</p>
        </div>
      </Link>
      <div className="penjualan-hover">
        <h4>Jumlah Pembelian</h4>
        <div className="card-input-nilai">
          <input  placeholder="Masukan Nilai"
                  type="text"
                  value={item}
                  onChange={inputHandler} />
          <h6>Kg</h6>
        </div>
        <div className="card-total-price">
          <h5>Total Pembelian</h5>
          <h4>Rp. 10.000</h4>
        </div>
        <div className="card-button-buy-cart">
          <Button type="PRIMARY_LONG">Tambah ke Keranjang</Button>
          <Button type="SECONDARY_LONG">Beli</Button>
        </div>
        <div className="card-profile-verifikasi">
          <img src="/profile-mitra.svg" />
          <div className="card-checklist-verifikasi">
            <UilCheckCircle color="#0EA601" size="16px" />
            <p>Terverifikasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemKg;


export const ItemNumber = () => {
  const [item, setItem] = useState(1);
  const [disabled, setDisabled] = useState(null);

  const inputHandler = (e) => {
    e.preventDefault();
    setItem(parseInt(e.target.value) || 1);
  };

  const Increment = () => {
    setItem((prevState) => prevState + 1);
  };

  const Decrement = () => {
    setItem((prevState) => prevState - 1);
  };

  useEffect(() => {
    item === 1 ? setDisabled(true) : setDisabled(false);
  }, [item]);

  return (
    <div className="wrapper-penjualan-card">
      <div className="penjualan-card">
        <img src="/serabut-kelapa.svg" />
        <div className="bottom-detail-card">
          <h6>Serabut Kelapa 1 Kg</h6>
          <div className="rating-produk">
            <p>Kelapa</p>
            <div className="rating-star">
              <div className="total-star">
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
              </div>
              <p>
                5,0 <span>(65)</span>
              </p>
            </div>
          </div>
          <h4 className="price-card">
            Rp. 10.000 <span>/ kilo</span>
          </h4>
        </div>
        <div className="lokasi-bottom">
          <div className="lokasi-place">
            <UilLocationPoint />
            <p>Jakarta</p>
          </div>
          <p>Bank sampah aisyah</p>
        </div>
      </div>
      <div className="penjualan-hover">
        <h4>Jumlah Pembelian</h4>
        <div className="card-incre-decre">
          <button
            disabled={item === 1}
            className={disabled ? "negev disabled" : "negev"}
            onClick={Decrement}
          >
            -
          </button>
          <input
            disable={item === 1}
            type="text"
            value={item}
            onChange={inputHandler}
          />
          <button className="posit" onClick={Increment}>
            +
          </button>
        </div>
        <div className="card-total-price">
          <h5>Total Pembelian</h5>
          <h4>Rp. 10.000</h4>
        </div>
        <div className="card-button-buy-cart">
          <Button type="PRIMARY_LONG">Menabung</Button>
          <Button type="SECONDARY_LONG">Jual</Button>
        </div>
        <div className="card-profile-verifikasi">
          <img src="/profile-mitra.svg" />
          <div className="card-checklist-verifikasi">
            <UilCheckCircle color="#0EA601" size="16px" />
            <p>Terverifikasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};




export const Item = () => {
  return (
    <div className="wrapper-item">
        <img src="/serabut-kelapa.svg"/>
        <h6>Saya mencari minyak jelantah kiloan</h6>
        <p>Minyak</p>
        <h4>Rp. 15.000 <span>/ kilo</span></h4>
    </div>
  )
}

export const ItemTabung = () => {
  return (
    <div className="wrapper-item">
        <img src="/serabut-kelapa.svg"/>
        <h6>Butuh sampah kantong plastik dalam kiloan</h6>
        <div className="rating-produk">
            <p>Kelapa</p>
            <div className="rating-star">
              <div className="total-star">
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
                <iconify-icon icon="typcn:star" />
              </div>
              <p>
                5,0 <span>(65)</span>
              </p>
            </div>
          </div>
        <h4>Rp. 15.000 <span>/ kilo</span></h4>
        <div className="bisa-menabung-status">
          <iconify-icon icon="material-symbols:check-small-rounded"/>
          <span>Bisa Menabung</span>
        </div>
    </div>
  )
}