import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import Button from "./Button";
import "./styles/navbar.css";
import * as Unicons from "@iconscout/react-unicons";
import { Login, Register } from "./Overlay";
import "./styles/overlay.css";
import { OverlayUser } from "./OverlayUser";
import { UilSearch } from "@iconscout/react-unicons";
import { OverlayPengelola } from "./OverlayPengelola";
import jwtDecode from "jwt-decode";
import axios from "axios";


export const UserName = ({setLogin, setRegister}) => {
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const [user, setUser] = useState(false);
  const [fullname, setFullname] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    if (token !== null) {
      const split = token.split(" ")[1];
      const { userId } = jwtDecode(split);
      setId(userId)
    }
  },[token]);

  
  const theName = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/users`
      );
      setFullname(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
      theName()
  }, [id]);

  return(
      id !== undefined ? (
      <div className="wrapper-profile-navbar">
        <div className="profile-navbar" onClick={() => setUser(!user)}>
          <Unicons.UilUserCircle color="#FFAF00" size="32px" />
          {fullname
            .filter((fullnames) => fullnames.id_user == id)
            .map((fullnames) => (
              <h6>Hi,{fullnames.fullname}</h6>
            ))}
        </div>
        {user &&  <OverlayUser fullname={fullname} setUser={setUser} user={user} />}
      </div>
    ) : (
      <div className="right-navbar">
        <Button onClick={() => setLogin(true)} tipe="SECONDARY" type="submit">
          Masuk
        </Button>
        <Button tipe="PRIMARY" onClick={() => setRegister(true)} type="button">
          Daftar
        </Button>
      </div>)
      )
      }


const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <>
      <header className="container-navbar">
        <nav className="navbar-wrapper ">
          <Link to="/">
            <img src="/Re4CashYW.svg" />
          </Link>
          <div className="left-navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/edukasi">Edukasi</NavLink>
            <NavLink to="/tentangkami">Tentang Kami</NavLink>
            <NavLink to="/kontak">Kontak</NavLink>
            <NavLink to="/marketplace">Marketplace</NavLink>
          </div>
          <UserName setLogin={setLogin} setRegister={setRegister}/>
        </nav>
      </header>
      {login && <Login setLogin={setLogin} />}
      {register && <Register setRegister={setRegister} />}
    </>
  );
};

export default Navbar;

export const Navbarmarketplace = () => {
  const [word, setWord] = useState("Semua");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <>
      <header className="container-navbar marketplace">
        <nav className="navbar-outside">
          <div className="navbar-wrapper menu">
            <Link to="/">
              <img src="/Re4CashYW.svg" />
            </Link>
            <Link to="/edukasi">Edukasi</Link>
            <div className="navbar-search-filter">
              <input placeholder="Search" />
              <button className="search-button-navbar">
                <Unicons.UilSearchAlt color="#f5f5f5" />
              </button>
            </div>
            <Link to="/keranjang">
              <Unicons.UilShoppingCart color="#FFAF00" size="32px" />
            </Link>
            <Unicons.UilStore color="#FFAF00" size="32px" />
            <UserName/>
          </div>
        </nav>
        <menu className="bottom-navbar">
          <div className="bottom-left-navbar">
            <NavLink to="/marketplace" onClick={() => setWord("Semua")}>
              Semua
            </NavLink>
            <NavLink
              to="/marketplace-penjualan"
              onClick={() => setWord("Penjualan")}
            >
              Penjualan
            </NavLink>
            <NavLink
              to="/marketplace-pembelian"
              onClick={() => setWord("Pembelian")}
            >
              Pembelian
            </NavLink>
            <Link className="Link-with-menu">
              <Unicons.UilListUl />
              Kategori
            </Link>
          </div>
          <h5>{word}</h5>
        </menu>
      </header>
      {login && <Login setLogin={setLogin} />}
      {register && <Register setRegister={setRegister} />}
    </>
  );
};

export const NavbarAkunProfile = () => {
  const [user, setUser] = useState(false);
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const [fullname, setFullname] = useState([]);

  const { id } = useParams();

  const userName = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/users`
      );

      setFullname(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    userName();
  }, []);

  return (
    <header className="container-navbar">
      <nav className="navbar-wrapper ">
        <Link to="/">
          <img src="/Re4CashYW.svg" />
        </Link>
        <Link to="/edukasi">Edukasi</Link>
        <div className="navbar-search-filter">
          <input placeholder="Search" />
          <button className="search-button-navbar">
            <Unicons.UilSearchAlt color="#f5f5f5" />
          </button>
        </div>
        <Link to="/keranjang">
          <Unicons.UilShoppingCart color="#FFAF00" size="32px" />
        </Link>
        <Unicons.UilStore color="#FFAF00" size="32px" />
        <div className="wrapper-profile-navbar">
          <div className="profile-navbar" onClick={() => setUser(!user)}>
            <Unicons.UilUserCircle color="#FFAF00" size="32px" />
            {fullname
              .filter((fullnames) => fullnames.id_user == id)
              .map((fullnames) => (
                <h6>Hi,{fullnames.fullname}</h6>
              ))}
          </div>
          {user && <OverlayUser fullname={fullname} setUser={setUser} user={user} />}
        </div>
      </nav>
    </header>
  );
};

export const Navbardashboardpengelola = () => {
  const [pengelola, setPengelola] = useState(false);
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const [fullname, setFullname] = useState([]);

  const { id } = useParams();

  const userName = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/users`
      );

      setFullname(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    userName();
  }, []);

  return (
    <header className="navbar-dashboard">
      <label className="navbar-dashboard-search">
        <UilSearch size="24px" color="#FFAF00" />
        <input placeholder="Search" />
      </label>
      <div>
        <div className="wrapper-profile-navbar">
          <div
            className="profile-navbar"
            onClick={() => setPengelola(!pengelola)}
          >
            <Unicons.UilUserCircle color="#FFAF00" size="32px" />
            {fullname
              .filter((fullnames) => fullnames.id_user == id)
              .map((fullnames) => (
                <h6>Hi,{fullnames.fullname}</h6>
              ))}
          </div>
          {pengelola && (
            <OverlayPengelola
              setPengelola={setPengelola}
              pengelola={pengelola}
            />
          )}
        </div>
      </div>
    </header>
  );
};
