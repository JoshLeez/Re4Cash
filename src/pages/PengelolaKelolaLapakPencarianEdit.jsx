import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengelolakelolalapaktambahedit.css";
import { useState } from "react";
import { ButtonUbah } from "../components/OverlayPengelola";

const PengelolaKelolaLapakPencarianEdit = () => {

  const [buttonubah, setButtonUbah] = useState(false)

  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-form-dashboard-kelolalapakpenjualan-tambah">
              <h4>Ubah Detail Produk Lapak Pencarian</h4>
              <form className="card-formtambah-dashpengelola-kelolalapakpenjualan">
                <div className="grup-formtambah-dashpengelola-kelolalapakpenjualan">
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Jenis Produk</label>
                    <div className="formtambah-radio">
                      <label className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        Daur Ulang
                      </label>
                      <label className="formtambah-radio-pilihan">
                        <input type="radio" checked/>
                        Mentahan
                      </label>
                    </div>
                  </div>
                  <div className="baris-formtambah-upimg-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Foto Produk</label>
                    {/* <div className="wrapper-form-uploadpicture"> */}
                      <img src="/prevtabel-dashuatama-minyakjelantah.png" />
                      <div className="form-uploadpicture">
                        <iconify-icon icon="mdi:file-image-plus-outline" />
                        <p>Tambahkan foto (1/5)</p>
                      </div>
                    {/* </div> */}
                    {/* <input type="file" accept="image/png, image/jpg, image/jpeg" multiple/> */}
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Judul Pencarian</label>
                    <input type="text" placeholder="Saya Mencari Minyak Jelantah Kiloan"/>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Deskripsi</label>
                    <textarea placeholder="Minyak jelantah adalah minyak bekas pemakaian, bisa dalam kebutuhan rumah tangga, kebutuhan restoran dan lain lain. Minyak ini meliputi minyak sawit dan segala minyak goreng lainnya.

Bagi kalian yang kerja in every weekdays (senin hingga jumat), mungkin iseng bikin donuts kentang di hari libur (weekend). Setelah bikin donuts, tentu akan banyak minyak jelantah yang kalian hasilkan. Jangan khawatir, jadikan sabun cuci baju aja. Lumayan bisa lebih hemat dan lebih ramah lingkungan.

Dikarenakan minyak jelantah telah mengalami beberapa reaksi akibat penggorengan berulang, reaksi tersebut menghasilkan asam lemak jenuh yang sangat tinggi. Asam lemak tersebut dapat membantu pertumbuhan tanaman.

Semua Orderan yang masuk sampai jam 5 sore, akan kami proses di hari yang sama. Selebihnya akan kami proses di hari berikutnya."></textarea>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Harga</label>
                    <div className="form-inputharga">
                      <span className="form-inputharga-text">Rp</span>
                      <input type="text" placeholder="15.000" className="form-inputharga-kolom"/>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Satuan</label>
                    <div className="formtambah-radio">
                      <label className="formtambah-radio-pilihan">
                        <input type="radio" checked/>
                        Kg
                      </label>
                      <label className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        Pcs
                      </label>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Kategori</label>
                    <div className="formtambah-radio">
                      <label className="formtambah-radio-pilihan">
                        <input type="radio" checked/>
                        Organik
                      </label>
                      <label className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        Anorganik
                      </label>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Sub Kategori</label>
                    <select>
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
                      <label className="formtambah-radio-pilihan">
                        <input type="radio" checked/>
                        Tersedia
                      </label>
                      <label className="formtambah-radio-pilihan">
                        <input type="radio"/>
                        Tidak Tersedia
                      </label>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Distribusi</label>
                    <div className="formtambah-radio">
                      <label className="formtambah-radio-pilihan">
                        <input type="checkbox" checked/>
                        Kami Antar
                      </label>
                      <label className="formtambah-radio-pilihan">
                        <input type="checkbox" checked/>
                        Ambil Sendiri
                      </label>
                      <label className="formtambah-radio-pilihan">
                        <input type="checkbox" checked/>
                        Kurir
                      </label>
                    </div>
                  </div>
                </div>
                <div className="button-formtambah-dashpengelola-kelolalapakpenjualan">
                  <LinkButton type="BUTTON_BATAL" to="/kelola-lapak-pencarian-pengelola">Batal</LinkButton>
                  <Button onClick={()=>setButtonUbah(!buttonubah)} tipe="BUTTON_UBAH">Ubah</Button>
                </div>
              </form>                
            </section>
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
      {buttonubah && <ButtonUbah link='/kelola-lapak-pencarian-pengelola' setButtonUbah={setButtonUbah}/>}
    </HOCdashboardpengelola>
  );
};

export default PengelolaKelolaLapakPencarianEdit;