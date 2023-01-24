import { Link, NavLink, useParams } from "react-router-dom";
import "./styles/sidebar_dashpengelola.css";

const SideBarDashPengelola = (props) => {

  const {id} = useParams()

  return ( 
  <div className="wrapper-sidebar">
    <div>
      <div className="logo-dashpengelola">
        <Link to="/">
          <img src="/Re4CashYW.svg" />
        </Link>
      </div>
      <nav className="nav-sidebar">
        <NavLink to={`/dashboard-pengelola/${id}`} className="nav-sidebar-isi">
          <iconify-icon icon="material-symbols:space-dashboard-outline"/>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to={`/profil-akun-pengelola/${id}`} className="nav-sidebar-isi">
        <iconify-icon icon="ph:user"/>
          <span>Profil Akun Pengelola</span>
        </NavLink>
        <NavLink to={`/data-penjualan-pengelola`}  className="nav-sidebar-isi">
          <iconify-icon icon="icons8:buy"/>
          <span>Data Penjualan</span>
        </NavLink>
        <NavLink to={`/data-pencarian-pengelola`}  className="nav-sidebar-isi">
          <iconify-icon icon="material-symbols:content-paste-search"/>
          <span>Data Pencarian</span>
        </NavLink>
        <NavLink to={`/data-tabungan-pengelola`} className="nav-sidebar-isi">
          <iconify-icon icon="ic:outline-savings"/>
          <span>Data Tabungan</span>
        </NavLink>
        <NavLink to={`/kelola-lapak-penjualan-pengelola`} className="nav-sidebar-isi">
          <iconify-icon icon="mdi:shop-edit-outline"/>
          <span>Kelola Lapak Penjualan</span>
        </NavLink>
        <NavLink to="/kelola-lapak-pencarian-pengelola" className="nav-sidebar-isi">
          <iconify-icon icon="mdi:shop-find-outline"/>
          <span>Kelola Lapak Pencarian</span>
        </NavLink>
      </nav>
      <NavLink to="/marketplace" className="nav-sidebar-keluar">
        <iconify-icon icon="material-symbols:logout"/>
        <span>Keluar</span>
      </NavLink>
    </div>
  </div>
  );
};
export default SideBarDashPengelola;
