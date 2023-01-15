import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
// import "./styles/dashboardpengelola.css";
import "./styles/pengelolakelolalapakpenjualan.css";

const PengelolaKelolaLapakPenjualan = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-tabel-dashboard-kelolalapakpenjualan">
                <div className="judul-tabel-dashboard-kelolalapakpenjualan">
                    <h4>Data Lapak Penjualan</h4>
                    <LinkButton type="PRIMARY_LONG_GREEN" to="/kelola-lapak-penjualan-pengelola/tambah">
                        <div className="icon-button-tambahproduk">
                            <iconify-icon icon="ic:outline-plus" />
                        </div>
                        <span>Tambah Produk</span>
                    </LinkButton>
                </div>
                <table id="tabel-pengelola-kelolalapakpenjualan">
                    <tr>
                        <th>No</th>
                        <th>Jenis</th>
                        <th>Foto Barang</th>
                        <th>Nama Barang</th>
                        <th>Deskripsi</th>
                        <th>Harga</th>
                        <th>Satuan</th>
                        <th>Kategori</th>
                        <th>Sub Kategori</th>
                        <th>Stok</th>
                        <th>Model</th>
                        <th>Distribusi</th>
                        <th>Aksi</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Daur Ulang</td>
                        <td><img src="prevtabel-dashuatama-potbunga.png" /></td>
                        <td>Pot dari bahan daur ulang</td>
                        <td>Pot Bunga Ramah Lingkungan  merupakan Pot yang memiliki fungsi Menanam Bunga  mini yang pas untuk hiasan kamar anda menjadi lebih estetik.</td>
                        <td>Rp20.000</td>
                        <td>Pcs</td>
                        <td>Anorganik</td>
                        <td>Plastik</td>
                        <td>20</td>
                        <td>Biru Dove, Oren, Hitam, Coklat, Biru</td>
                        <td>Diproses</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-detailedithapus">
                                <LinkButton type="AKSI_DETAIL" to="">
                                    <iconify-icon icon="healthicons:eye" />
                                </LinkButton>
                                <LinkButton type="AKSI_EDIT" to="/data-penjualan-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button type="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Daur Ulang</td>
                        <td><img src="prevtabel-dashuatama-potbunga.png" /></td>
                        <td>Pot dari bahan daur ulang</td>
                        <td>Pot Bunga Ramah Lingkungan  merupakan Pot yang memiliki fungsi Menanam Bunga  mini yang pas untuk hiasan kamar anda menjadi lebih estetik.</td>
                        <td>Rp20.000</td>
                        <td>Pcs</td>
                        <td>Anorganik</td>
                        <td>Plastik</td>
                        <td>20</td>
                        <td>Biru Dove, Oren, Hitam, Coklat, Biru</td>
                        <td>Diproses</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-detailedithapus">
                                <LinkButton type="AKSI_DETAIL" to="">
                                    <iconify-icon icon="healthicons:eye" />
                                </LinkButton>
                                <LinkButton type="AKSI_EDIT" to="/data-penjualan-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button type="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Daur Ulang</td>
                        <td><img src="prevtabel-dashuatama-potbunga.png" /></td>
                        <td>Pot dari bahan daur ulang</td>
                        <td>Pot Bunga Ramah Lingkungan  merupakan Pot yang memiliki fungsi Menanam Bunga  mini yang pas untuk hiasan kamar anda menjadi lebih estetik.</td>
                        <td>Rp20.000</td>
                        <td>Pcs</td>
                        <td>Anorganik</td>
                        <td>Plastik</td>
                        <td>20</td>
                        <td>Biru Dove, Oren, Hitam, Coklat, Biru</td>
                        <td>Diproses</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-detailedithapus">
                                <LinkButton type="AKSI_DETAIL" to="">
                                    <iconify-icon icon="healthicons:eye" />
                                </LinkButton>
                                <LinkButton type="AKSI_EDIT" to="/data-penjualan-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button type="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Daur Ulang</td>
                        <td><img src="prevtabel-dashuatama-potbunga.png" /></td>
                        <td>Pot dari bahan daur ulang</td>
                        <td>Pot Bunga Ramah Lingkungan  merupakan Pot yang memiliki fungsi Menanam Bunga  mini yang pas untuk hiasan kamar anda menjadi lebih estetik.</td>
                        <td>Rp20.000</td>
                        <td>Pcs</td>
                        <td>Anorganik</td>
                        <td>Plastik</td>
                        <td>20</td>
                        <td>Biru Dove, Oren, Hitam, Coklat, Biru</td>
                        <td>Diproses</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-detailedithapus">
                                <LinkButton type="AKSI_DETAIL" to="">
                                    <iconify-icon icon="healthicons:eye" />
                                </LinkButton>
                                <LinkButton type="AKSI_EDIT" to="/data-penjualan-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button type="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                </table> 
            </section>         
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default PengelolaKelolaLapakPenjualan;