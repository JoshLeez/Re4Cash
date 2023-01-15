import Button, { LinkButton } from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
// import "./styles/dashboardpengelola.css";
import "./styles/pengeloladatatabungan.css";

const PengelolaDataTabungan = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-konten-dashboard-datatabungan">
                <h4>Data Pencarian</h4>
                <div className="wrapper-konten-isi-dashboard-datatabungan">
                    <div className="wrapper-konten-isikiri-dashboard-datatabungan">
                        <div className="namatabel-dashpengelola-datatabungan">
                            <input type="checkbox" />
                            <label>Saya Mencari Minyak Jelantah Kiloan</label>
                        </div>
                        <table id="tabel-pengelola-datatabungan">
                            <tr>
                                <th>No</th>
                                <th>Nama Penabung</th>
                                <th>Metode Menabung</th>
                                <th>Tanggal Penarikan</th>
                                <th>Total Tabungan</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Muhammad Lee</td>
                                <td>Bebas</td>
                                <td>22/12/2022</td>
                                <td>Rp 15,000.00</td>
                                <td>Ditabung</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mustika Syawal</td>
                                <td>Seminggu 1x</td>
                                <td>15/06/2023</td>
                                <td>Rp 15,000.00</td>
                                <td>Ditabung</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Muhammad Iqbal</td>
                                <td>Dua bulan 1x</td>
                                <td>16/02/2022</td>
                                <td>Rp 50,000.00</td>
                                <td>Dibayar</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Muhammad Iqbal</td>
                                <td>Dua bulan 1x</td>
                                <td>16/02/2022</td>
                                <td>Rp 50,000.00</td>
                                <td>Dibayar</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Muhammad Iqbal</td>
                                <td>Dua bulan 1x</td>
                                <td>16/02/2022</td>
                                <td>Rp 50,000.00</td>
                                <td>Dibayar</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                        </table> 
                    </div>
                    <div className="wrapper-konten-isikanan-dashboard-datatabungan">
                        <h5>Detail Penabung</h5>
                        <div className="card-konten-isikanan-dashboard-datatabungan">
                            <iconify-icon icon="tabler:pig-off"/>
                            <p>Belum Ada Detail Data Penabung</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper-konten-isi-dashboard-datatabungan">
                    <div className="wrapper-konten-isikiri-dashboard-datatabungan">
                        <div className="namatabel-dashpengelola-datatabungan">
                            <input type="checkbox" />
                            <label>Saya Mencari Asap Cair</label>
                        </div>
                        <table id="tabel-pengelola-datatabungan">
                            <tr>
                                <th>No</th>
                                <th>Nama Penabung</th>
                                <th>Metode Menabung</th>
                                <th>Tanggal Penarikan</th>
                                <th>Total Tabungan</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Muhammad Lee</td>
                                <td>Bebas</td>
                                <td>22/12/2022</td>
                                <td>Rp 15,000.00</td>
                                <td>Ditabung</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Muhammad Lee</td>
                                <td>Bebas</td>
                                <td>22/12/2022</td>
                                <td>Rp 15,000.00</td>
                                <td>Ditabung</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Muhammad Lee</td>
                                <td>Bebas</td>
                                <td>22/12/2022</td>
                                <td>Rp 15,000.00</td>
                                <td>Ditabung</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Muhammad Lee</td>
                                <td>Bebas</td>
                                <td>22/12/2022</td>
                                <td>Rp 15,000.00</td>
                                <td>Ditabung</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Muhammad Lee</td>
                                <td>Bebas</td>
                                <td>22/12/2022</td>
                                <td>Rp 15,000.00</td>
                                <td>Ditabung</td>
                                <td>
                                    <div className="tabel-kolom-aksibutton-detail">
                                        <LinkButton type="AKSI_DETAIL" to="">
                                            <iconify-icon icon="healthicons:eye" />
                                        </LinkButton>
                                    </div>
                                </td>
                            </tr>
                        </table> 
                    </div>
                    <div className="wrapper-konten-isikanan-dashboard-datatabungan">
                        <h5>Detail Penabung</h5>
                        <div className="card-konten-isikanan-dashboard-datatabungan">
                            <iconify-icon icon="tabler:pig-off"/>
                            <p>Belum Ada Detail Data Penabung</p>
                        </div>
                    </div>
                </div>
            </section>         
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default PengelolaDataTabungan;