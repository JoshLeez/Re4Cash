import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import axiosInstance from "../utils/axios";
import Button from "./Button";
import "./styles/navbar.css";
import * as Unicons from "@iconscout/react-unicons";
import { Login, Register } from "./Overlay";
import "./styles/overlay.css";
import { OverlayUser } from "./OverlayUser";
import { UilSearch } from "@iconscout/react-unicons";
import { OverlayPengelola } from "./OverlayPengelola";
import axios from "axios";
import jwtDecode from "jwt-decode";


export const UserName = ({setLogin, setRegister}) => {
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const [user, setUser] = useState(false);
  const [value, setValue] = useState({});
 
  const theName = async () => {
    try {
      const {data} = await axiosInstance.get('/users-by-id');
      setValue(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
      theName()
  }, [token]);

  return(
    <>
      {token && <div className="wrapper-profile-navbar">
        <div className="profile-navbar" onClick={() => setUser(!user)}>
          <Unicons.UilUserCircle color="#FFAF00" size="32px" />
              <h6 key={value.id_user}>Hi,{value.fullname}</h6>
        </div>
        {user &&  <OverlayUser data={value} setUser={setUser} user={user} />}
      </div>}
      {!token && <div className="right-navbar">
        <Button onClick={() => setLogin(true)} tipe="SECONDARY" type="submit">
          Masuk
        </Button>
        <Button tipe="PRIMARY" onClick={() => setRegister(true)} type="button">
          Daftar
        </Button>
      </div>}
      </>
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
          <UserName setLogin={setLogin} login={login} setRegister={setRegister}/>
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
            <UserName setLogin={setLogin} setRegister={setRegister}/>
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
  const [fullname, setFullname] = useState({});


  const userName =  async () => {
    try {
      const {data} = await axiosInstance.get('/users-by-id');
      if(data.message){
      setFullname(data.data);  
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    userName();
  },[]);


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
                <h6>Hi,{fullname.fullname}</h6>
          </div>
          {user && <OverlayUser data={fullname} setUser={setUser} user={user} />}
        </div>
      </nav>
    </header>
  );
};
