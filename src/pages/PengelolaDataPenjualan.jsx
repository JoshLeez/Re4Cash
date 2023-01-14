import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengeloladatapenjualan.css";

const PengelolaDataPenjualan = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-tabel-dashboard-datapenjualan">
                <h4>Data Penjualan</h4>
                <table id="tabel-pengelola-datapenjualan">
                    <tr>
                        <th>No</th>
                        <th>Nama Barang</th>
                        <th>Nama Pembeli</th>
                        <th>Nomor Hp Pembeli</th>
                        <th>Tanggal Order</th>
                        <th>Harga /pcs</th>
                        <th>Jumlah</th>
                        <th>Total Harga</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Serabut Kelapa 1 Kiloan</td>
                        <td>Muhammad Lee</td>
                        <td>081123453912</td>
                        <td>22/12/2022</td>
                        <td>Rp 10,000.00</td>
                        <td>2</td>
                        <td>Rp 20,000.00</td>
                        <td>Dikemas</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
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
                        <td>2</td>
                        <td>Bingkai Sedotan</td>
                        <td>Mustika Syawal</td>
                        <td>085232824813</td>
                        <td>15/06/2023</td>
                        <td>Rp 29,000.00</td>
                        <td>5</td>
                        <td>Rp 145,000.00</td>
                        <td>Dikemas</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
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
                        <td>3</td>
                        <td>Hiasan Dinding</td>
                        <td>Muhammad Iqbal</td>
                        <td>081234567892</td>
                        <td>16/02/2022</td>
                        <td>Rp 28,000.00</td>
                        <td>10</td>
                        <td>Rp 280,000.00 </td>
                        <td>Dikirim</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
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
                        <td>4</td>
                        <td>Galon Plastik</td>
                        <td>Hinata Asep</td>
                        <td>085219314313</td>
                        <td>30/12/2022</td>
                        <td>Rp 200,000.00</td>
                        <td>10</td>
                        <td>Rp.2,000,000.00</td>
                        <td>Selesai</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
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
                        <td>5</td>
                        <td>Galon Plastik</td>
                        <td>Hinata Asep</td>
                        <td>085219314313</td>
                        <td>30/12/2022</td>
                        <td>Rp 200,000.00</td>
                        <td>10</td>
                        <td>Rp.2,000,000.00</td>
                        <td>Selesai</td>
                        <td>
                            <div className="tabel-kolom-aksibutton-edithapus">
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

export default PengelolaDataPenjualan;