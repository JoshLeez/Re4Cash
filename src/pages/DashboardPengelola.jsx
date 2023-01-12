import React from "react";
import { Footerdashboardpengelola } from "../components/Footer";
import GrafikCardPengelola from "../components/GrafikCardPengelola";
import { HOCdashboardpengelola } from "../components/HOC";
import JmlDataCardPengelola from "../components/JmlDataCardPengelola";
import { Navbardashboardpengelola } from "../components/Navbar";
import SideBarDashPengelola from "../components/SideBarDashPengelola";
import "./styles/dashboardpengelola.css";

const DashboardPengelola = () => {
  return (
    <HOCdashboardpengelola title="Dashboard Pengelola">
      <div className="dashboard-page">
        <SideBarDashPengelola/>
        <div className="dashboard-page-right">
          <Navbardashboardpengelola />
          <div className="wrapper-dashboard-utama">
            <section className="wrapper-section-dashboard-utama">
              <div className="card-profil-dashboard-utama edit">
                <div className="profile-picture-dashboard-utama">
                  <img src="/profile-picture-pengelola.png" />
                  <h1>Zain Pengepul Sampah</h1>
                  <p>Nama Toko</p>
                </div>
                <div className="profile-desc-dashboard-utama">
                  <div className="profile-desc-dashboard-utama-detail">
                    <iconify-icon icon="gg:profile" />
                    <h4>Zainuddin</h4>
                  </div>
                  <div className="profile-desc-dashboard-utama-detail">
                    <iconify-icon icon="material-symbols:location-on-outline-rounded" />
                    <h4>Jl. Nangka Utara Raya No 60, RT 6/RW 5, Tanjung Barat, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12530.</h4>
                  </div>
                  <div className="profile-desc-dashboard-utama-detail">
                    <iconify-icon icon="ic:baseline-phone-iphone" />
                    <h4>08123456123</h4>
                  </div>
                </div>
                <iconify-icon icon="material-symbols:edit" />
              </div>
              <GrafikCardPengelola nilai="Rp. 12.9120210" title="Total income penjualan" />
              <GrafikCardPengelola nilai="Rp. 12.9120210" title="Total income penjualan" />
              <GrafikCardPengelola nilai="Rp. 12.9120210" title="Total income penjualan" />
            </section>
            <section className="wrapper-section-dashboard-utama">
              <JmlDataCardPengelola jumlah="128" data="Data Penjualan"/>
              <JmlDataCardPengelola jumlah="37" data="Data Pencarian"/>
              <JmlDataCardPengelola jumlah="84" data="Data Penabung"/>
              <JmlDataCardPengelola jumlah="4" data="Lapak Penjualan"/>
              <JmlDataCardPengelola jumlah="1" data="Lapak Pencarian"/>
            </section>
            
            <section className="wrapper-section-dashboard-utama">
              <div className="prevtabel-dashutama">
                <div className="judul-tabel-dashutama">
                  <h3>Lapak Penjualan</h3>
                  <iconify-icon icon="material-symbols:edit" />
                </div>
                <div className="wrapper-table-data">
                  <table className="table-data-children">
                    <thead>
                      <tr className="table-title table-title-data-children">
                        <th>No</th>
                        <th>Jenis</th>
                        <th>Foto Barang</th>
                        <th>Nama Barang</th>
                        <th>Harga</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="row row-1">
                        <td>1</td>
                        <td>Daur Ulang</td>
                        <td><img src="prevtabel-dashuatama-potbunga.png" /></td>
                        <td>Pot dari bahan daur ulang</td>
                        <td>Rp. 20.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                table 2
              </div>
            </section>
          </div>
          <Footerdashboardpengelola/>
        </div>
      </div>
    </HOCdashboardpengelola>
  );
};

export default DashboardPengelola;
