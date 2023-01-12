import { NavLink } from "react-router-dom";
import "./styles/profilecard.css";
import { UilUserCircle } from "@iconscout/react-unicons";

const ProfileCard = () => {
  return (
    <div className="card-profile-user">
      <div className="profile-name-picture">
        <img src="/profile-picture.png" />
        <h1>Udin</h1>
      </div>
      <div className="profile-point">
        <h3>Point</h3>
        <div className="profile-total-point">
          <iconify-icon icon="ph:coin-vertical-light" />
          <h3>850000</h3>
        </div>
      </div>
      <div className="profile-user-menu">
        <NavLink to="/profile-user" className="profile-left-navigation">
          <UilUserCircle />
          <h4>Profile Saya</h4>
        </NavLink>
        <NavLink to="/tabungan" className="profile-left-navigation">
          <iconify-icon icon="mdi:piggy-bank-outline" />
          <h4>Tabungan</h4>
        </NavLink>
        <div className="profile-left-navigation">
          <iconify-icon icon="mdi:clipboard-text-clock-outline" />
          <h4>Histori</h4>
        </div>
        <div className="profile-left-navigation">
          <iconify-icon icon="mdi:bell-outline" />
          <h4>Notifikasi</h4>
        </div>
        <div className="profile-left-navigation logout">
          <iconify-icon icon="mi:log-out" />
          <h4>Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
