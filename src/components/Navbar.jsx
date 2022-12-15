import "./styles/navbar.css"
 

const Navbar = () => {
  return (
    <header className="container-navbar">
        <nav className="navbar-wrapper">
            <img src="/Re4CashYW.svg"/>
            <div className="left-navbar">
                <a>Home</a>
                <a>Edukasi</a>
                <a>Tentang Kami</a>
                <a>Kontak</a>
                <a>Marketplace</a>
            </div>
            <div className="right-navbar">
                <a className="login-button">Masuk</a>
                <a className="register-button">Daftar</a>
            </div>
        </nav>
    </header> 
  )
}

export default Navbar