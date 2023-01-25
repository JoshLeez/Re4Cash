import { HOCAkunProfile } from "../components/HOC";
import ProfileCard from "../components/ProfileCard";
import StatusTransaksi from "../components/StatusTransaksi";
import "./styles/akunprofile.css";
import { useEffect, useState } from "react";
import Dikemas from "../components/Dikemas";
import Dikirim from "../components/Dikirim";
import PesananSelesai from "../components/PesananSelesai";
import ProfileSetting from "../components/ProfileSetting";
import { useParams } from "react-router-dom";
import axios from "axios";

const AkunProfile = () => {
  const [pagination, setPagination] = useState(0);
  const [active, setActive] = useState({
    active1: true,
    active2: false,
    active3: false,
    active4: false,
  });

  const style = {
    transform: `translateX(${pagination}px)`,
  };

  const activeHandler1 = () => {
    setActive({
      ...active,
      active1: true,
      active2: false,
      active3: false,
      active4: false,
    });
  };

  const activeHandler2 = () => {
    setActive({
      ...active,
      active1: false,
      active2: true,
      active3: false,
      active4: false,
    });
  };

  const activeHandler3 = () => {
    setActive({
      ...active,
      active1: false,
      active2: false,
      active3: true,
      active4: false,
    });
  };

  const activeHandler4 = () => {
    setActive({
      ...active,
      active1: false,
      active2: false,
      active3: false,
      active4: true,
    });
  };

  const className1 = active.active1
    ? "pesanan-saya-menu active"
    : "pesanan-saya-menu";
  const className2 = active.active2
    ? "pesanan-saya-menu active"
    : "pesanan-saya-menu";
  const className3 = active.active3
    ? "pesanan-saya-menu active"
    : "pesanan-saya-menu";
  const className4 = active.active4
    ? "pesanan-saya-menu active"
    : "pesanan-saya-menu";

  return (
    <HOCAkunProfile title="Profile | Profile Saya">
      <div className="container-akun-profile">
        <ProfileCard />
        <section className="akun-profile-right-content">
          <div className="wrapper-pesanan-saya">
            <h1>Pesanan Saya</h1>
            <section className="detail-pesanan-saya">
              <header className="pesanan-saya-navigation">
                <div
                  onClick={() => {
                    setPagination(0), activeHandler1();
                  }}
                  className={className1}
                >
                  <iconify-icon icon="material-symbols:payments-outline-rounded" />
                  <h3>Status Transaksi</h3>
                  <span className="circle-notification">4</span>
                </div>
                <div
                  onClick={() => {
                    setPagination(-904), activeHandler2();
                  }}
                  className={className2}
                >
                  <iconify-icon icon="lucide:package-open" />
                  <h3>Dikemas</h3>
                  <span className="circle-notification">3</span>
                </div>
                <div
                  onClick={() => {
                    setPagination(-1808), activeHandler3();
                  }}
                  className={className3}
                >
                  <iconify-icon icon="tabler:truck-delivery" />
                  <h3>Dikirim</h3>
                </div>
                <div
                  onClick={() => {
                    setPagination(-2712), activeHandler4();
                  }}
                  className={className4}
                >
                  <iconify-icon icon="lucide:package-check" />
                  <h3>Pesanan Selesai</h3>
                  <span className="circle-notification">2</span>
                </div>
              </header>
              <section style={style} className="content-nav-pesanan-saya">
                <StatusTransaksi />
                <Dikemas />
                <Dikirim />
                <PesananSelesai />
              </section>
            </section>
          </div>
          <ProfileSetting />
        </section>
      </div>
    </HOCAkunProfile>
  );
};

export default AkunProfile;
