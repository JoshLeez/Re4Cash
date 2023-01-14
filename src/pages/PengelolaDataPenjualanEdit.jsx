import { Footerdashboardpengelola } from "../components/Footer";
import { HOCdashboardpengelola } from "../components/HOC";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";
import "./styles/pengeloladatapenjualanedit.css";

const PengelolaDataPenjualanEdit = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-form-dashboard-datapenjualan-edit">
                yayayay
                
            </section>

            
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default PengelolaDataPenjualanEdit;