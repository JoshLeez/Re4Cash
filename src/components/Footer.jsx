import "./styles/footer.css";
import * as Unicons from "@iconscout/react-unicons";

import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="content-footer">
        <div className="list-footer">
          <h6>Re4Cash</h6>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', fontWeight: '500'}} to="/"><p>Home</p></Link>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', fontWeight: '500'}} to="/edukasi"><p>Edukasi</p></Link>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', fontWeight: '500'}} to="/tentangkami"><p>Tentang Kami</p></Link>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', fontWeight: '500'}} to="/kontak"><p>Kontak</p></Link>
          <Link style={{textDecoration: 'none', color: 'black', fontSize: '16px', fontWeight: '500'}} to="/marketplace"><p>Marketplace</p></Link>
          
          <NavLink style={{textDecoration: 'none', color: 'black', fontSize: '16px', fontWeight: '500'}} to="/kebijakanprivasi">
          <p>Kebijakan Privasi</p>
          </NavLink>
        </div>
        <div className="list-footer">
          <h6>Bantuan</h6>
          <p>FAQ</p>
          <p>Hubungi Kami</p>
        </div>
        <div className="list-footer">
          <h6>Social Media</h6>
          <div className="footer-icon">
            <Unicons.UilInstagram />
            <p>@re4cash</p>
          </div>
          <div className="footer-icon">
            <Unicons.UilWhatsapp />
            <p>+62 8111 2222 3333</p>
          </div>
          <div className="footer-icon">
            <Unicons.UilTwitterAlt />
            <p>re4cash</p>
          </div>
        </div>
        <div className="right-footer">
          <img src="/Re4CashYW.svg" />
          <p>
            Re4Cash merupakan Green E-commerce pertama yang menyediakan berbagai
            bahan sisa yang sudah terstandarisasi untuk diolah kembali menjadi
            produk dengan nilai guna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const Footerdashboardpengelola = () => {
  return (
   <div className="footer-pengelola">
      Copyright © 2022 Re4Cash. All rights reserved.
   </div>
  );
};
