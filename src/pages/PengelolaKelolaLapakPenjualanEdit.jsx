import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengelolakelolalapakpenjualantambah.css";
import { useState } from "react";
import { ButtonTambah } from "../components/OverlayPengelola";

const PengelolaKelolaLapakPenjualanEdit = () => {

  const [buttontambah, setButtonTambah] = useState(false)

  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-form-dashboard-kelolalapakpenjualan-tambah">
              <h4>Ubah Detail Produk</h4>
              <form className="card-formtambah-dashpengelola-kelolalapakpenjualan">
                <div className="grup-formtambah-dashpengelola-kelolalapakpenjualan">
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Jenis Produk</label>
                    <div className="formtambah-radio">
                      <div className="formtambah-radio-pilihan">
                        <input type="radio" checked/>
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
                    {/* <div className="wrapper-form-uploadpicture"> */}
                        <img src="prevtabel-dashuatama-potbunga.png" />
                        <div className="form-uploadpicture">
                        <iconify-icon icon="mdi:file-image-plus-outline" />
                        <p>Tambahkan foto (1/5)</p>
                        </div>
                    {/* </div> */}
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Nama Produk</label>
                    <input type="text" placeholder="Pot dari bahan daur ulang"/>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Deskripsi</label>
                    <textarea placeholder="“Pot Bunga Ramah Lingkungan  merupakan Pot yang memiliki fungsi Menanam Bunga  mini yang pas untuk hiasan kamar anda menjadi lebih estetik.  

“Pot Bunga Ramah Lingkungan tersedia dalam berbagai ukuran dari kecil hingga besar  dengan warna hitam, merah marun, cokelat, dan abu dan masih banyak varian warna lain. Warna yang terlihat pada foto sesuai dengan warna aslinya. Apabila terdapat perbedaan warna, disebabkan oleh pengaturan monitor dan efek cahaya pada layar monitor Anda.”

“Setiap pembelian Pot Bunga Ramah Lingkungan sebanyak 5 pcs, Anda akan mendapatkan potongan harga sebesar 25%. Dapatkan tambahan gratis biaya kirim dengan pembelian minimal 7 pcs.”

“Dapatkan jaminan 100% uang kembali jika produk yang Anda terima tidak sesuai foto dan deskripsi kami.”"></textarea>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Harga</label>
                    <div className="form-inputharga">
                      <span className="form-inputharga-text">Rp</span>
                      <input type="text" placeholder="20.000" className="form-inputharga-kolom"/>
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
                        <input type="radio" checked/>
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
                        <input type="radio" checked/>
                        <label>Anorganik</label>
                      </div>
                    </div>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><span className="tanda-required">*</span>Sub Kategori</label>
                    <select>
                      <option value="dikemas">Plastik</option>
                      <option value="dikirim">Botol Plastik</option>
                      <option value="selesai">Botol Kaca</option>
                      <option value="selesai">Aluminium</option>
                      <option value="selesai">Kaleng</option>
                      <option value="selesai">...</option>
                    </select>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label><p className="tanda-required">*</p>Stok Barang</label>
                    <input type="number" placeholder="20" className="formtambah-number"/>
                  </div>
                  <div className="baris-formtambah-dashpengelola-kelolalapakpenjualan">
                    <label>Model</label>
                    {/* <input type="text" placeholder="Rp 20,000.00"/> */}
                    <div className="form-inputmodel">
                      <span className="form-inputmodel-pilihan">Biru Dove</span>
                      <span className="form-inputmodel-pilihan">Oren</span>
                      <span className="form-inputmodel-pilihan">Hitam</span>
                      <span className="form-inputmodel-pilihan">Coklat</span>
                      <span className="form-inputmodel-pilihan">Biru</span>
                      <span className="form-inputmodel-pilihan">+</span>
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
                        <input type="checkbox" checked/>
                        <label>Ambil Sendiri</label>
                      </div>
                      <div className="formtambah-radio-pilihan">
                        <input type="checkbox" checked/>
                        <label>Kurir</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-formtambah-dashpengelola-kelolalapakpenjualan">
                  <LinkButton type="BUTTON_BATAL" to="/kelola-lapak-penjualan-pengelola">Batal</LinkButton>
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

export default PengelolaKelolaLapakPenjualanEdit;