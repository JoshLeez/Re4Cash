import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengeloladatapenjualanpencarianedit.css";
import { useState } from "react";
import { ButtonUbah } from "../components/OverlayPengelola";

const PengelolaDataPenjualanEdit = () => {
  const [buttonubah, setButtonUbah] = useState(false);

  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola />
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-form-dashboard-datapenjualan-edit">
              <h4>Ubah Detail Data Penjualan</h4>
              <form className="card-formedit-dashpengelola-datapenjualan">
                <div className="grup-formedit-dashpengelola-datapenjualan">
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Nama Barang</label>
                    <input type="text" placeholder="Serabut Kelapa 1 kilo" />
                  </div>
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Nama Pembeli</label>
                    <input type="text" placeholder="Muhammad Lee" />
                  </div>
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Nomor Hp Pembeli</label>
                    <input type="text" placeholder="081123453912" />
                  </div>
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Tanggal Order</label>
                    <input type="date" placeholder="22/12/2022" />
                  </div>
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Harga /pcs</label>
                    <input type="text" placeholder="Rp 10,000.00" />
                  </div>
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Jumlah</label>
                    <input type="number" placeholder="2" />
                  </div>
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Total Harga</label>
                    <input type="text" placeholder="Rp 20,000.00" />
                  </div>
                  <div className="baris-formedit-dashpengelola-datapenjualan">
                    <label>Status</label>
                    <select>
                      <option value="dikemas">Dikemas</option>
                      <option value="dikirim">Dikirim</option>
                      <option value="selesai">Selesai</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="button-formedit-dashpengelola-datapenjualan">
                <LinkButton type="BUTTON_BATAL" to="/data-penjualan-pengelola">
                  Batal
                </LinkButton>
                <Button
                  onClick={() => setButtonUbah(!buttonubah)}
                  type="BUTTON_UBAH"
                >
                  Ubah
                </Button>
              </div>
            </section>
          </div>
          <Footerdashboardpengelola />
        </div>
      </div>
      {buttonubah && (
        <ButtonUbah
          link="/data-penjualan-pengelola"
          setButtonUbah={setButtonUbah}
        />
      )}
    </HOCdashboardpengelola>
  );
};

export default PengelolaDataPenjualanEdit;
