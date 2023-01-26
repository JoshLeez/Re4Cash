import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengelolaprofilakun.css";

const PengelolaProfilAkun = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const [user, setUser] = useState({})

  const getPengelola = useCallback(async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/pengelola-by-id`
      );
      const {
        fullname_users,
        nama_pengelola,
        email_pengelola,
        no_hp_pengelola,
        no_rekening,
      } = data.data[0];
      const { provinsi, kabupaten_kota, kecamatan, kode_pos, alamat_lengkap } =
        data.alamat[0];
      setUser(data.data[0])
      setValue("fullname", fullname_users);
      setValue("nama_pengelola", nama_pengelola);
      setValue("no_hp_pengelola", no_hp_pengelola);
      setValue("email_pengelola", email_pengelola);
      setValue("no_rekening", no_rekening);
      setValue("provinsi", provinsi);
      setValue("alamat_lengkap", alamat_lengkap);
      setValue("kabupaten_kota", kabupaten_kota);
      setValue("kecamatan", kecamatan);
      setValue("kode_pos", kode_pos);
    } catch (error) {
      console.log(error.message);
    }
  }, [setValue]);

  useEffect(() => {
    getPengelola();
  }, []);

  const updatePengelola = async (value) => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common["Authorization"] = `${token}`;
      await axios.patch(
        `${import.meta.env.VITE_REACT_APP_API}/pengelola`,
        value
      );
      navigate(0)
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigate = useNavigate()

  const updateAlamatPengelola = useCallback(async (value) => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common["Authorization"] = `${token}`;
      await axios.patch(
        `${import.meta.env.VITE_REACT_APP_API}/pengelola-alamat`,
        value
      );
      navigate(0)
    } catch (error) {
      console.log(error.message);
    }
  }, []);

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
                    <h1>{user.nama_pengelola}</h1>
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
                      <input {...register("fullname")} type="text" />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Nama Lapak Pengelola</label>
                      <input {...register("nama_pengelola")} type="text" />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Nomor Hp</label>
                      <input {...register("no_hp_pengelola")} type="text" />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Email</label>
                      <div className="form-input-container">
                        <input
                          {...register("email_pengelola", {
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
                          {...register("no_rekening", {
                            required: true,
                            pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ },
                          })}
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
                <form
                  onSubmit={handleSubmit(updateAlamatPengelola)}
                  className="card-form-dashpengelola-profilakun"
                >
                  <div className="grup-form-dashpengelola-profilakun">
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Provinsi</label>
                      <input type="text" {...register("provinsi")} />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Kabupaten/Kota</label>
                      <input type="text" {...register("kabupaten_kota")} />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Kecamatan</label>
                      <input type="text" {...register("kecamatan")} />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Kode Pos</label>
                      <input type="text" {...register("kode_pos")} />
                    </div>
                    <div className="baris-form-dashpengelola-profilakun">
                      <label>Alamat Lengkap</label>
                      <input type="text" {...register("alamat_lengkap")} />
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
