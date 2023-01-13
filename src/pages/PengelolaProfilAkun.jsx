import Button from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengelolaprofilakun.css";

const PengelolaProfilAkun = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-section-dashboard-profilakun">
                <div className="card-profil-dashboard-profilakun">
                    <img src="/profile-picture-pengelola.png" />
                    <div className="profile-detail-dashboard-profilakun">
                        <div className="profile-nama-dashboard-profilakun">
                            <h1>Zain Pengepul Sampah</h1>
                            <p>Nama Toko</p>
                        </div>
                        <div className="profile-verif-dashboard-profilakun">
                            <iconify-icon icon="zondicons:checkmark-outline" />
                            <h3>Terverifikasi</h3>
                        </div>
                    </div>
                </div>
                <div className="card-formupload-dashpengelola-profilakun">
                    <form className="card-form-dashpengelola-profilakun">
                        <div className="grup-form-dashpengelola-profilakun">
                            <div className="baris-form-dashpengelola-profilakun">
                                <label>Nama Akun</label>
                                <input type="text" placeholder="Zainuddin Putra Siregar"/>
                            </div>
                            <div className="baris-form-dashpengelola-profilakun">
                                <label>Nama Lapak Pengelola</label>
                                <input type="text" placeholder="Zain Pengepul Sampah"/>
                            </div>
                            <div className="baris-form-dashpengelola-profilakun">
                                <label>Alamat</label>
                                <input type="text" placeholder="Malang"/>
                            </div>
                            <div className="baris-form-dashpengelola-profilakun">
                                <label>Nomor Hp</label>
                                <input type="text" placeholder="0881 1234 4321"/>
                            </div>
                            <div className="baris-form-dashpengelola-profilakun">
                                <label>Email</label>
                                <input type="email" placeholder="zainuddinputra11@gmail.com"/>
                            </div>
                            <div className="baris-form-dashpengelola-profilakun">
                                <label>No Rekening</label>
                                <input type="text" placeholder="6751 3341 9863 12 1"/>
                            </div>
                            <div className="button-form-dashpengelola-profilakun">
                                <Button type="PRIMARY">Update Profile</Button>
                            </div>
                        </div>
                    </form>
                    <section className="verfikasi-dashboard-profilakun">
                        <h3>Verifikasi</h3>
                        <div className="verifikasi-isi-dashboard-profilakun">
                            <div className="verifikasi-upload-dashboard-profilakun">
                                <div className="verifikasi-uploadtitle-dashboard-profilakun">
                                    <h5>Masukan Foto KTP Anda</h5>
                                    <div className="verifikasi-uploadcard-dashboard-profilakun">
                                        <h4>File Upload</h4>
                                        <div className="verifikasi-uploadcard-isi-dashboard-profilakun">
                                            <img src="/icon-fileupload-dashboard-pengelola-profilakun.png" />
                                            <h4>Select a File Upload</h4>
                                            <p>Or Drag and Drop It here</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="verifikasi-uploadtitle-dashboard-profilakun">
                                    <h5>Masukan File NPWP Anda</h5>
                                    <div className="verifikasi-uploadcard-dashboard-profilakun">
                                        <h4>File Upload</h4>
                                        <div className="verifikasi-uploadcard-isi-dashboard-profilakun">
                                            <img src="/icon-fileupload-dashboard-pengelola-profilakun.png" />
                                            <h4>Select a File Upload</h4>
                                            <p>Or Drag and Drop It here</p>
                                        </div>
                                    </div>
                                </div>                            </div>
                            <Button type="PRIMARY">Kirim</Button>
                        </div>
                    </section>
                </div>
                
            </section>

            
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default PengelolaProfilAkun;