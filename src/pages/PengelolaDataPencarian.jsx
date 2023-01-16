import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengeloladatapenjualanpencarian.css";

const PengelolaDataPencarian = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-tabel-dashboard-datapenjualan">
                <h4>Data Pencarian</h4>
                <table id="tabel-pengelola-datapenjualan">
                    <tr>
                        <th>No</th>
                        <th>Nama Barang</th>
                        <th>Nama Penjual</th>
                        <th>Nomor Hp Penjual</th>
                        <th>Tanggal Jual</th>
                        <th>Harga /pcs</th>
                        <th>Jumlah</th>
                        <th>Total Harga</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Saya mencari minyak jelantah</td>
                        <td>Muhammad Lee</td>
                        <td>081123453912</td>
                        <td>22/12/2022</td>
                        <td>Rp 15,000.00</td>
                        <td>2</td>
                        <td>Rp 30,000.00</td>
                        <td>Diproses</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
                                <LinkButton type="AKSI_EDIT" to="/data-pencarian-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button tipe="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Saya mencari biochar</td>
                        <td>Mustika Syawal</td>
                        <td>085232824813</td>
                        <td>15/06/2023</td>
                        <td>Rp 15,000.00</td>
                        <td>5</td>
                        <td>Rp 75,000.00</td>
                        <td>Diproses</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
                                <LinkButton type="AKSI_EDIT" to="/data-pencarian-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button tipe="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Saya mencari kerajinan tas</td>
                        <td>Muhammad Iqbal</td>
                        <td>081234567892</td>
                        <td>16/02/2022</td>
                        <td>Rp 50,000.00</td>
                        <td>10</td>
                        <td>Rp 500,000.00 </td>
                        <td>Diproses</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
                                <LinkButton type="AKSI_EDIT" to="/data-pencarian-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button tipe="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Saya mencari asap cair</td>
                        <td>Naruto Budiyanti</td>
                        <td>081239183912</td>
                        <td>30/12/2022</td>
                        <td>Rp 200,000.00</td>
                        <td>10</td>
                        <td>Rp.2,000,000.00</td>
                        <td>Ditabung</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
                                <LinkButton type="AKSI_EDIT" to="/data-pencarian-pengelola/edit">
                                    <iconify-icon icon="clarity:edit-solid" />
                                </LinkButton>
                                <Button tipe="AKSI_HAPUS">
                                    <iconify-icon icon="icomoon-free:cross" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Galon Plastik</td>
                        <td>Hinata Asep</td>
                        <td>085219314313</td>
                        <td>30/12/2022</td>
                        <td>Rp 200,000.00</td>
                        <td>10</td>
                        <td>Rp.2,000,000.00</td>
                        <td>Dibayar</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
                                <LinkButton type="AKSI_EDIT" to="/data-pencarian-pengelola/edit">
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
          <Footerdashboardpengelola/>
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default PengelolaDataPencarian;