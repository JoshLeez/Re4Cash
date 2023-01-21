import { NavLink } from "react-router-dom";
import "./styles/profilecard.css";
import { UilUserCircle } from "@iconscout/react-unicons";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileCard = () => {
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const split = token.split(" ")[1];
  const { userId } = jwtDecode(split);
  const [fullname, setFullname] = useState([]);

  const theName = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/users`
      );
      setFullname(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    theName();
  }, [userId]);

  return (
    <div className="card-profile-user">
      {fullname
        .filter((fullnames) => fullnames.id_user == userId)
        .map((fullnames) => (
          <div key={fullnames.id_user} className="profile-name-picture">
            <img src="/profile-picture.png" />
            <h1>{fullnames.fullname}</h1>
          </div>
        ))}
      <div className="profile-point">
        <h3>Point</h3>
        <div className="profile-total-point">
          <iconify-icon icon="ph:coin-vertical-light" />
          <h3>850000</h3>
        </div>
      </div>
      <div className="profile-user-menu">
        <NavLink
          to={`/profile-user/${userId}`}
          className="profile-left-navigation"
        >
          <UilUserCircle />
          <h4>Profile Saya</h4>
        </NavLink>
        <NavLink to="/tabungan" className="profile-left-navigation">
          <iconify-icon icon="mdi:piggy-bank-outline" />
          <h4>Tabungan</h4>
        </NavLink>
        <NavLink to="/history" className="profile-left-navigation">
          <iconify-icon icon="mdi:clipboard-text-clock-outline" />
          <h4>Histori</h4>
        </NavLink>
        <NavLink to="/notifikasi" className="profile-left-navigation">
          <iconify-icon icon="mdi:bell-outline" />
          <h4>Notifikasi</h4>
        </NavLink>
        <NavLink to="/marketplace" className="profile-left-navigation logout">
          <iconify-icon icon="mi:log-out" />
          <h4>Logout</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileCard;
