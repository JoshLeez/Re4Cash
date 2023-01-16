import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengelolakelolalapaktambahedit.css";
import { useState } from "react";
import { ButtonTambah } from "../components/OverlayPengelola";

const PengelolaKelolaLapakPencarianTambah = () => {

  const [buttontambah, setButtonTambah] = useState(false)

  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-form-dashboard-kelolalapakpenjualan-tambah">
              <h4>Tambah Data Lapak Pencarian</h4>
              <form className="card-formtambah-dashpengelola-kelolalapakpenjualan">
                <div className="grup-formtambah-dashpengelola-kelolalapakpenjualan">
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Jenis Produk</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Daur Ulang</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Mentahan</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Foto Produk</label>
                    {/* <input type="file"/> */}
                    <div className="form-uploadpicture">
                      <iconify-icon icon="mdi:file-image-plus-outline" />
                      <p>Tambahkan foto (1/5)</p>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Judul Pencarian</label>
                    <input type="text"/>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Deskripsi</label>
                    <textarea></textarea>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Harga</label>
                    <div className="form-inputharga">
                      <span className="form-inputharga-text">Rp</span>
                      <input type="text" className="form-inputharga-kolom"/>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Satuan</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Kg</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Pcs</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Kategori</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Organik</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Anorganik</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Sub Kategori</label>
                    <select>
                      <option value=""></option>
                      <option value="minyak">Minyak</option>
                      <option value="plastik">Plastik</option>
                      <option value="botol plastik">Botol Plastik</option>
                      <option value="botol kaca">Botol Kaca</option>
                      <option value="aluminium">Aluminium</option>
                      <option value="kaleng">Kaleng</option>
                      <option value="...">...</option>
                    </select>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Menabung</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Tersedia</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        <label>Tidak Tersedia</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Distribusi</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="checkbox"/>
                        <label>Kami Antar</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="checkbox"/>
                        <label>Ambil Sendiri</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="checkbox"/>
                        <label>Kurir</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-formtambah-dashpengelola-kelolalapakpenjualan">
                  <LinkButton type="BUTTON_BATAL" to="/kelola-lapak-pencarian-pengelola">Batal</LinkButton>
                  <Button onClick={()=>setButtonTambah(!buttontambah)} type="BUTTON_TAMBAH">Tambah</Button>
                </div>
              </form>                
            </section>
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
      {buttontambah && <ButtonTambah link='/kelola-lapak-penjualan-pengelola' setButtonTambah={setButtonTambah}/>}
    </HOCdashboardpengelola>
  );
};

export default PengelolaKelolaLapakPencarianTambah;