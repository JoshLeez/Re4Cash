import { Link } from "react-router-dom";
import { LinkButton } from "../components/Button";
import "./styles/menjadipengelola.css";

const MenjadiPengelola = () => {
  return (
    <div className="menjadi-pengelola-page">
      <div className="left-side">
        <div className="img-bg">
          <img src="img-menjadi-pengelola.png" alt="img-pengelola" />
        </div>

        <div className="img-logo">
          <div className="navigasi-back">
            <Link to="/profile-user" className="back-arrow">
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
        <div className="content-right-side">
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
                  placeholder="Nama Perusahaan/Toko/Perorangan"
                />
                <input
                  type="text"
                  placeholder="No. Hp Perusahaan/Toko/Perorangan "
                />
              </div>
              <div className="input-content">
                <input
                  type="text"
                  placeholder="Rekening Perusahaan/Toko/Perorangan"
                />
                <input type="text" placeholder="Email Khusus (opsional)" />
              </div>
            </div>
          </div>
          <div className="detail-content">
            <div className="subtitle">
              <iconify-icon icon="ion:location-outline" />
              <h4>Alamat Perusahaan/Toko/Perorangan</h4>
            </div>
            <textarea placeholder="Alamat Lengkap (nama jalan dan patokan)" />
            <div className="wrapper-input">
              <div className="input-content">
                <input
                  type="text"
                  placeholder="Nama Perusahaan/Toko/Perorangan"
                />
                <input
                  type="text"
                  placeholder="Nama Perusahaan/Toko/Perorangan"
                />
              </div>
              <div className="input-content">
                <input
                  type="text"
                  placeholder="Nama Perusahaan/Toko/Perorangan"
                />
                <input
                  type="text"
                  placeholder="Nama Perusahaan/Toko/Perorangan"
                />
              </div>
            </div>
          </div>
          <p>
            Dengan mendaftar menjadi pengelola, Anda bertanggung jawab atas akun
            tersebut sesuai dengan <span>Ketentuan</span> &{" "}
            <span>Kebijakan Privasi.</span>
          </p>
          <LinkButton to="/dashboard-pengelola">Menjadi Pengelola</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default MenjadiPengelola;
