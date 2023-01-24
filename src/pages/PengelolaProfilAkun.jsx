import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengelolaprofilakun.css";

const PengelolaProfilAkun = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const [loading ,setLoading] = useState(true)


  useEffect(() => {
    dataPengelola()
  },[]);

  const dataPengelola = async () => {
    try {
        axios.defaults.headers.common["Authorization"] = `${token}`;
        const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_API}/pengelola-by-id`
        );
      setData(response.data);
      setLoading(false)
      console.log(response.data.data[0].nama_pengelola)
    } catch (error) {
      console.log(error.message);
    }
  };

    // console.log(data.map((pengelolas)=>console.log(pengelolas.nama_pengelola)))
    // if(data.length < 0)console.log(data.data[0].id_users)

  
//  console.log(data.data[0].nama_pengelola)

  if(loading){
    <div>...Loading</div>
  }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues :{
            // nama_pengelola :
        }
    });


  const updatePengelola = async (value) => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common["Authorization"] = `${token}`;
      await axios.patch(
        `${import.meta.env.VITE_REACT_APP_API}/pengelola-by-id`,
        value
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola />
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
                <form
                  onSubmit={handleSubmit(updatePengelola)}
                  className="card-form-dashpengelola-profilakun"
                >
                  <div className="grup-form-dashpengelola-profilakun">
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Nama Akun</label>
                      <input {...register("fullname_users")} type="text" />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Nama Lapak Pengelola</label>
                      <input {...register("nama_pengelola")} type="text" />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Nomor Hp</label>
                      <input
                        {...register("no_hp_pengelola")}
                        type="text"
                      />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Email</label>
                      <div className="form-input-container">
                        <input
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          type="email"
                        />
                        {errors.email && (
                          <span className="error-message">
                            Format Email Salah
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>No Rekening</label>
                      <div className="form-input-container">
                        <input
                           {...register("no_rekening", {required : true,   
                            pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ }})}
                          type="text"
                        />
                        {errors.no_rekening && (
                          <span className="error-message">
                            Format Rekening Salah
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="button-form-dashpengelola-profilakun">
                      <Button tipe="PRIMARY" type="submit">
                        Update Profile
                      </Button>
                    </div>
                  </div>
                </form>
                <form className="card-form-dashpengelola-profilakun">
                  <div className="grup-form-dashpengelola-profilakun">
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Provinsi</label>
                      <input
                        type="text"
                        placeholder="Zainuddin Putra Siregar"
                      />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Kabupaten/Kota</label>
                      <input type="text" placeholder="Zain Pengepul Sampah" />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Kecamatan</label>
                      <input type="text" placeholder="0881 1234 4321" />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Kode Pos</label>
                      <input
                        type="email"
                        placeholder="zainuddinputra11@gmail.com"
                      />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Alamat Lengkap</label>
                      <input type="text" placeholder="6751 3341 9863 12 1" />
                    </div>
                    <div className="button-form-dashpengelola-profilakun">
                      <Button tipe="PRIMARY" type="submit">
                        Alamat
                      </Button>
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
                      </div>{" "}
                    </div>
                    <Button tipe="PRIMARY">Kirim</Button>
                  </div>
                </section>
              </div>
            </section>
          </div>
          <Footerdashboardpengelola />
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default PengelolaProfilAkun;
