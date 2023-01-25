import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
// import "./styles/dashboardpengelola.css";
import "./styles/pengelolakelolalapak.css";

const PengelolaKelolaLapakPencarian = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola />
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-tabel-dashboard-kelolalapakpenjualan">
              <div className="judul-tabel-dashboard-kelolalapakpenjualan">
                <h4>Data Lapak Pencarian</h4>
                <LinkButton
                  type="PRIMARY_LONG_GREEN"
                  to="/kelola-lapak-pencarian-pengelola/tambah"
                >
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
                  <th>Judul Pencarian</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Satuan</th>
                  <th>Kategori</th>
                  <th>Sub Kategori</th>
                  <th>Menabung</th>
                  <th>Distribusi</th>
                  <th>Aksi</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mentahan</td>
                  <td>
                    <img src="prevtabel-dashuatama-minyakjelantah.png" />
                  </td>
                  <td>Saya Mencari Minyak Jelantah Kiloan</td>
                  <td>
                    Minyak jelantah adalah minyak bekas pemakaian, bisa dalam
                    kebutuhan rumah tangga, kebutuhan restoran dan lain lain.
                  </td>
                  <td>Rp15.000</td>
                  <td>Kg</td>
                  <td>Organik</td>
                  <td>Minyak</td>
                  <td>Diantar</td>
                  <td>Kami Jemput, Ambil Sendiri, Kami Ambil</td>
                  <td>
                    <div className="tabel-kolom-aksibutton-detailedithapus">
                      <LinkButton type="AKSI_DETAIL" to="">
                        <iconify-icon icon="healthicons:eye" />
                      </LinkButton>
                      <LinkButton
                        type="AKSI_EDIT"
                        to="/kelola-lapak-pencarian-pengelola/edit"
                      >
                        <iconify-icon icon="clarity:edit-solid" />
                      </LinkButton>
                      <Button tipe="AKSI_HAPUS">
                        <iconify-icon icon="icomoon-free:cross" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </table>
            </section>
          </div>
          <Footerdashboardpengelola />
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default PengelolaKelolaLapakPencarian;
