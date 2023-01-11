import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import "./styles/navbar.css";
import * as Unicons from "@iconscout/react-unicons";
import { Login } from "./Overlay";
import "./styles/overlay.css";
import { OverlayUser } from "./OverlayUser";
import { UilSearch } from '@iconscout/react-unicons'
import { OverlayPengelola } from "./OverlayPengelola";

const Navbar = () => {
  const [layout, setLayout] = useState(false);

  return (
    <>
      <header className="container-navbar">
        <nav className="navbar-wrapper">
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
          <div className="right-navbar">
            <Button type="SECONDARY" onClick={() => setLayout(true)}>
              Masuk
            </Button>
            <Button type="PRIMARY">Daftar</Button>
          </div>
        </nav>
      </header>
      {layout && <Login setLayout={setLayout} layout={layout} />}
    </>
  );
};

export default Navbar;

export const Navbarmarketplace = () => {
  const [user, setUser] = useState(false);
  const [word, setWord] = useState("Semua");

  return (
    <header className="container-navbar">
      <nav className="navbar-wrapper">
        <Link to="/">
          <img src="/Re4CashYW.svg" />
        </Link>
        <Link>Edukasi</Link>
        <div className="navbar-search-filter">
          <input placeholder="Search" />
          <button className="search-button-navbar">
            <Unicons.UilSearchAlt color="#f5f5f5" />
          </button>
        </div>
        <Unicons.UilShoppingCart color="#FFAF00" size="32px" />
        <Unicons.UilStore color="#FFAF00" size="32px" />
        <div className="wrapper-profile-navbar">
          <div className="profile-navbar" onClick={() => setUser(!user)}>
            <Unicons.UilUserCircle color="#FFAF00" size="32px" />
            <h6>Hi, Udin</h6>
          </div>
          {user && <OverlayUser setUser={setUser} user={user} />}
        </div>
      </nav>
      <menu className="bottom-navbar">
        <div className="bottom-left-navbar">
         <Link onClick={()=>setWord("Semua")}>Semua</Link>
         <Link to="/marketplace-penjualan" onClick={()=>setWord("Penjualan")}>Penjualan</Link>
         <Link onClick={()=>setWord("Pembelian")}>Pembelian</Link>
         <Link className="Link-with-menu">
            <Unicons.UilListUl />
            Kategori
          </Link>
        </div>
        <h5>{word}</h5>
      </menu>
    </header>
  );
};

export const Navbardashboardpengelola = () => {
  const [pengelola, setPengelola] = useState(false);

  return (
    <header className="navbar-dashboard">
      <label className="navbar-dashboard-search">
        <UilSearch size="24px" color="#FFAF00"/>
        <input placeholder="Search"/>
      </label>
      
      <div>
        <div className="wrapper-profile-navbar">
          <div className="profile-navbar" onClick={() => setPengelola(!pengelola)}>
              <h6>Hi, Udin</h6>
              <Unicons.UilUserCircle color="#FFAF00" size="32px" />
            </div>
            {pengelola && <OverlayPengelola setPengelola={setPengelola} pengelola={pengelola} />}
        </div>
      </div>
    </header>
  );
};
