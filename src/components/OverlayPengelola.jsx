import { UilUserCircle } from "@iconscout/react-unicons";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export const OverlayPengelola = ({ setPengelola, userPengelola }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (menuRef.current != null && !menuRef.current.contains(event.target)) {
        setPengelola(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[]);

  const navigate = useNavigate();
  
  const logout = async () => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common["Authorization"] = `${token}`;
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_API}/logout-pengelola`
      );
      localStorage.removeItem(import.meta.env.VITE_REACT_APP_AUTH);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const switchToUser = async () => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/switch-to-user`
      );
      localStorage.removeItem(import.meta.env.VITE_REACT_APP_AUTH);
      if (data.Authorization === undefined) {
        navigate("/profile-user");
      }
      if (data.Authorization) {
        localStorage.setItem(
          import.meta.env.VITE_REACT_APP_AUTH,
          data.Authorization
        );
      }
      const tokenUser = localStorage.getItem(
        import.meta.env.VITE_REACT_APP_AUTH
      );
      const split = tokenUser.split(" ")[1];
      const { userId } = jwtDecode(split);
      if (data.message) navigate(`/profile-user/${userId}}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div ref={menuRef} className="dd-pengelola">
      <div className="dd-profile-saya">
        <UilUserCircle />
        <button onClick={switchToUser} className="nama-poin-user">
          <h2>{userPengelola.fullname_users}</h2>
          <h4>Profile Saya</h4>
          <span>0 Poin</span>
        </button>
      </div>
      <div className="dd-bot-user">
        <button onClick={switchToUser} className="option-bot-user">
          <iconify-icon icon="mdi:clipboard-user-outline" />
          <h4>Menjadi Customer</h4>
        </button>
        <div className="option-bot-user">
          <iconify-icon icon="mdi:piggy-bank-outline" />
          <h4>Tabungan</h4>
        </div>
        <div className="option-bot-user">
          <iconify-icon icon="mdi:clipboard-text-clock-outline" />
          <h4>Histori</h4>
        </div>
        <div className="option-bot-user">
          <iconify-icon icon="mdi:bell-outline" />
          <h4>Notifikasi</h4>
        </div>
        <button
          onClick={() => logout()}
          type="button"
          className="option-bot-user logout"
        >
          <iconify-icon icon="mi:log-out" />
          <h4>Logout</h4>
        </button>
      </div>
    </div>
  );
};

export const ButtonUbah = ({ setButtonUbah, link }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (menuRef.current != null && !menuRef.current.contains(event.target)) {
        setButtonUbah(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="overlay-container">
      <div ref={menuRef} className="container-button-ubah">
        <div className="button-ubah-tulisan">
          <img src="/icon-overlay-button-ubah.png" />
          <h1>Apakah Anda Yakin Ingin Mengubah?</h1>
        </div>
        <div className="wrapped-overlay-button-ubah">
          <Button
            onClick={() => setButtonUbah(false)}
            className="tiru-overlay-button-batal"
          >
            <h4>Batal</h4>
          </Button>
          <Link to={link} className="tiru-overlay-button-ubah">
            <h4>Ubah</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ButtonTambah = ({ setButtonTambah, link }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    let handler = (event) => {
      if (menuRef.current != null && !menuRef.current.contains(event.target)) {
        setButtonTambah(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="overlay-container">
      <div ref={menuRef} className="container-button-ubah">
        <div className="button-ubah-tulisan">
          <img src="/icon-overlay-button-ubah.png" />
          <h1>Apakah Anda Yakin Ingin Menambah?</h1>
        </div>
        <div className="wrapped-overlay-button-ubah">
          <Button
            onClick={() => setButtonTambah(false)}
            className="tiru-overlay-button-batal"
          >
            <h4>Batal</h4>
          </Button>
          <Link to={link} className="tiru-overlay-button-ubah">
            <h4>Tambah</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
