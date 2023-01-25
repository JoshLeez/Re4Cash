import axios from "axios";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./styles/menjadipengelola.css";

const MenjadiPengelola = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const split = token.split(" ")[1];
  const { userId } = jwtDecode(split);
  const navigate = useNavigate();
  // console.log(jwtDecode(split))

  const onSubmit = async (value) => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/pengelola`,
        value
      );
      localStorage.removeItem(import.meta.env.VITE_REACT_APP_AUTH);
      if (data.Authorization) {
        localStorage.setItem(
          import.meta.env.VITE_REACT_APP_AUTH,
          data.Authorization
        );
      }
      const tokenPengelola = localStorage.getItem(
        import.meta.env.VITE_REACT_APP_AUTH
      );
      const split = tokenPengelola.split(" ")[1];
      const { pengelolaId } = jwtDecode(split);
      navigate(`/dashboard-pengelola/${pengelolaId}`);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div className="menjadi-pengelola-page">
      <div className="left-side">
        <div className="img-bg">
          <img src="img-menjadi-pengelola.png" alt="img-pengelola" />
        </div>
        <div className="img-logo">
          <div className="navigasi-back">
            <Link to={`/profile-user/${userId}`} className="back-arrow">
              <iconify-icon icon="material-symbols:arrow-back" />
            </Link>
            <Link to="/" className="back-text">
              <p>Home</p>
            </Link>
            <Link to="/marketplace" className="back-text">
              <p>Marketplace</p>
            </Link>
          </div>
        </div>
        <div className="img-logo-logo">
          <img src="Re4Cash-Logo.png" alt="img-logo" />
        </div>
      </div>
      <div className="right-side">
        <form onSubmit={handleSubmit(onSubmit)} className="content-right-side">
          <h1>Lengkapi Profile Akun Pengelola</h1>
          <div className="detail-content">
            <div className="subtitle">
              <iconify-icon icon="bx:building-house" />
              <h4>Informasi Perusahaan/Toko/Perorangan </h4>
            </div>
            <div className="wrapper-input">
              <div className="input-content">
                <input
                  type="text"
                  {...register("nama_pengelola", { required: true })}
                  placeholder="Nama Perusahaan/Toko/Perorangan"
                />
                <input
                  type="text"
                  {...register("no_hp_pengelola", {
                    required: true,
                    pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ },
                  })}
                  placeholder="No. Hp Perusahaan/Toko/Perorangan "
                />
              </div>
              {errors.no_hp_pengelola && (
                <span className="error-message">No HP Invalid atau </span>
              )}
              {errors.nama_pengelola && (
                <span className="error-message">
                  Nama Perusahaan/Toko/Perorangan tidak boleh kosong
                </span>
              )}
              <div className="input-content">
                <input
                  {...register("no_rekening", {
                    required: true,
                    pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ },
                  })}
                  type="text"
                  placeholder="Rekening Perusahaan/Toko/Perorangan"
                />
                <input
                  {...register("email_pengelola", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  type="text"
                  placeholder="Email Khusus (opsional)"
                />
              </div>
              {errors.no_rekening && (
                <span className="error-message">Invalid No Rekening </span>
              )}
              {errors.email_pengelola && (
                <span className="error-message">atau Format Email Salah</span>
              )}
            </div>
          </div>
          <div className="detail-content">
            <div className="subtitle">
              <iconify-icon icon="mi:location" />
              <h4>Alamat Perusahaan/Toko/Perorangan</h4>
            </div>
            <textarea
              {...register("alamat_lengkap", { required: true })}
              placeholder="Alamat Lengkap (nama jalan dan patokan)"
            />
            {errors.alamat_lengkap && (
              <span className="error-message">Alamat tidak boleh Kosong</span>
            )}
            <div className="wrapper-input">
              <div className="input-content">
                <input
                  {...register("kecamatan", { required: true })}
                  type="text"
                  placeholder="Kecamatan"
                />
                <input
                  {...register("kabupaten_kota", { required: true })}
                  type="text"
                  placeholder="Kabupaten/Kota"
                />
              </div>
              {errors.kecamatan && (
                <span className="error-message">
                  Kecamatan tidak boleh Kosong{" "}
                </span>
              )}
              {errors.kabupaten_kota && (
                <span className="error-message">
                  atau Kabupaten tidak boleh Kosong
                </span>
              )}
              <div className="input-content">
                <input
                  {...register("provinsi", { required: true })}
                  type="text"
                  placeholder="Provinsi"
                />
                <input
                  {...register("kode_pos", {
                    required: true,
                    pattern: { value: /^(0|[1-9]\d*)(\.\d+)?$/ },
                  })}
                  type="text"
                  placeholder="Kode Pos"
                />
              </div>
              {errors.provinsi && (
                <span className="error-message">
                  Provinsi tidak boleh Kosong atau{" "}
                </span>
              )}
              {errors.kode_pos && (
                <span className="error-message">
                  Kode Pos tidak boleh Kosong
                </span>
              )}
            </div>
          </div>
          <p>
            Dengan mendaftar menjadi pengelola, Anda bertanggung jawab atas akun
            tersebut sesuai dengan <span>Ketentuan</span> &{" "}
            <span>Kebijakan Privasi.</span>
          </p>
          {errorMessage && <span>{errorMessage}</span>}
          <Button type="submit">Menjadi Pengelola</Button>
        </form>
      </div>
    </div>
  );
};

export default MenjadiPengelola;
