import { NavLink } from "react-router-dom"
import { LinkButton } from "./Button"
import "./styles/navbar.css"
 

const Navbar = () => {
  return (
    <header className="container-navbar">
        <nav className="navbar-wrapper">
            <img src="/Re4CashYW.svg"/>
            <div className="left-navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/edukasi">Edukasi</NavLink>
                <NavLink to="/tentangkami">Tentang Kami</NavLink>
                <NavLink>Kontak</NavLink>
                <NavLink>Marketplace</NavLink>
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