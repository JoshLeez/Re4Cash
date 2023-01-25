import Button from "../components/Button";
import { HOCAkunProfile } from "../components/HOC";
import ProfileCard from "../components/ProfileCard";
import "./styles/tabungan.css";
import { useState } from "react";
import TableTabungan from "../components/TableTabungan";
import TarikPoint from "../components/TarikPoint";

const Tabungan = () => {
  const [nav, setNav] = useState(true);

  return (
    <HOCAkunProfile title="Profile | Tabungan">
      <div className="container-akun-profile">
        <ProfileCard />
        <section className="tabungan-right-content">
          {nav ? <h1>Tabungan</h1> : <h1>Tarik Point</h1>}
          <div className="container-halaman-tabungan">
            <div className="nav-tabungan-point">
              <div
                onClick={() => setNav(true)}
                className={
                  nav ? "nav-total-tabungan active" : "nav-total-tabungan"
                }
              >
                <h6>Total Tabungan</h6>
                <h1>Rp250.000</h1>
                <div className="tabungan-aktif">
                  <h6>Rekening Tabungan aktif :</h6>
                  <div className="nama-no-bank">
                    <h5>Nama Bank</h5>
                    <span>BRI</span>
                    <h5>No Rek</h5>
                    <span>988765519211</span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setNav(false)}
                className={
                  nav ? "nav-total-tabungan" : "nav-total-tabungan active"
                }
              >
                <h2>Total Point</h2>
                <h1>850.000</h1>
                <Button tipe="PRIMARY_GREEN">Tarik Point</Button>
                <span>1 Point = 1 Rupiah</span>
              </div>
            </div>
            {nav ? (
              <>
                <TableTabungan />
                <TableTabungan />
              </>
            ) : (
              <TarikPoint />
            )}
            {nav ? (
              <button className="menabung-lagi">Menabung Lagi</button>
            ) : (
              <button className="menabung-lagi">Tarik Point</button>
            )}
          </div>
        </section>
      </div>
    </HOCAkunProfile>
  );
};

export default Tabungan;
