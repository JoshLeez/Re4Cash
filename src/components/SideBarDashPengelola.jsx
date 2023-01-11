// import { LayoutDashboard, ClipboardText, Users, ReportMoney, Hearts, Logout } from "tabler-icons-react";
// import LogoPantiKita from "../images/Logo-X-Dark-Panti-Kita.png";
import { Link, NavLink } from "react-router-dom";
import "./styles/sidebar_dashpengelola.css";

const SideBarDashPengelola = (props) => {
  return ( 
  <div className="wrapper-sidebar">
    <div>
      <div className="logo-dashpengelola">
        <Link to="/">
          <img src="/Re4CashYW.svg" />
        </Link>
      </div>

      <nav className="nav-sidebar">
        <NavLink className="nav-sidebar-isi">
          <iconify-icon icon="material-symbols:space-dashboard-outline"/>
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="nav-sidebar-isi">
          <iconify-icon icon="ph:user"/>
          <span>Profil Akun Pengelola</span>
        </NavLink>
        <NavLink className="nav-sidebar-isi">
          <iconify-icon icon="icons8:buy"/>
          <span>Data Penjualan</span>
        </NavLink>
        <NavLink className="nav-sidebar-isi">
          <iconify-icon icon="material-symbols:content-paste-search"/>
          <span>Data Pencarian</span>
        </NavLink>
        <NavLink className="nav-sidebar-isi">
          <iconify-icon icon="ic:outline-savings"/>
          <span>Data Tabungan</span>
        </NavLink>
        <NavLink className="nav-sidebar-isi">
          <iconify-icon icon="mdi:shop-edit-outline"/>
          <span>Kelola Lapak Penjualan</span>
        </NavLink>
        <NavLink className="nav-sidebar-isi">
          <iconify-icon icon="material-symbols:space-dashboard-outline"/>
          <span>Kelola Lapak Pencarian</span>
        </NavLink>
      </nav>
      <NavLink to="/test" className="nav-sidebar-keluar">
        <iconify-icon icon="material-symbols:logout"/>
        <span>Keluar</span>
      </NavLink>
      {/* <nav className="nav-side-bar">
          <div className={"nav-side " + props.activeSideDashboard + " " + props.activeBgDashboard}>
            <LayoutDashboard className="icon-nav" />
            <NavLink to="/dashboard" className={"side-bar-link " + props.activeSideDashboard}>Dashboard</NavLink>
          </div>
      </nav>
      <div className={"logout " + props.activeSideLogout + " " + props.activeBgLogout}>
          <Logout className="icon-nav"/>
          <NavLink to="/masuk" className={"side-bar-link " + props.activeSideLogout}>Keluar</NavLink>
      </div> */}
    </div>
  </div>
  );
};
export default SideBarDashPengelola;
