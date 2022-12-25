import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { LinkButton } from "./Button"
import "./styles/navbar.css"
import * as Unicons from '@iconscout/react-unicons';

const Navbar = () => {
  return (
    <header className="container-navbar">
        <nav className="navbar-wrapper">
          <Link to="/"><img src="/Re4CashYW.svg"/></Link>
            <div className="left-navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/edukasi">Edukasi</NavLink>
                <NavLink to="/tentangkami">Tentang Kami</NavLink>
                <NavLink to="/kontak">Kontak</NavLink>
                <NavLink to="/marketplace">Marketplace</NavLink>
            </div>
            <div className="right-navbar">
                <LinkButton type="SECONDARY">Masuk</LinkButton>
                <LinkButton type="PRIMARY">Daftar</LinkButton>
            </div>
        </nav>
    </header> 
  )
}

export default Navbar

export const Navbarmarketplace = () => {

  const [word, setWord] = useState("Semua");

  return (
    <header className="container-navbar">
      <nav className="navbar-wrapper">
      <Link to="/"><img src="/Re4CashYW.svg"/></Link>
        <Link>Edukasi</Link>
        <div className="navbar-search-filter">
          <input placeholder="Search"/>
          <button className="search-button-navbar">
            <Unicons.UilSearchAlt color="#f5f5f5"/>
          </button>
        </div>
        <Unicons.UilShoppingCart color="#FFAF00" size="32px"/>
        <Unicons.UilStore color="#FFAF00" size="32px"/>
        <div className="profile-navbar">
          <Unicons.UilUserCircle color="#FFAF00" size="32px"/>
          <h6>Hi, Udin</h6>
        </div>
      </nav>
      <menu className="bottom-navbar">
        <div className="bottom-left-navbar">
         <Link onClick={()=>setWord("Semua")}>Semua</Link>
         <Link onClick={()=>setWord("Penjualan")}>Penjualan</Link>
         <Link onClick={()=>setWord("Pembelian")}>Pembelian</Link>
         <Link className="Link-with-menu">
            <Unicons.UilListUl />
              Kategori
         </Link>
        </div>
        <h5>{word}</h5>
      </menu>
    </header>
  )
}
