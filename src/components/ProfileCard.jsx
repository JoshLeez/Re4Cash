import { NavLink } from "react-router-dom";
import "./styles/profilecard.css";
// import { useController } from 'react-hook-form';
import { UilUserCircle } from "@iconscout/react-unicons";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const ProfileCard = () => {
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const [user, setUser] = useState([]);
  const [editModal, setEditModal] = useState(false)
  // const { control, register, handleSubmit, errors } = useController();

  const userData = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const {data} = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/users-by-id`
      );
      setUser(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setEditModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // const onSubmit = (value) => {
  //   console.log(value);
  // }

  console.log(editModal)

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   // check file type
  //   if (!file.type.startsWith("image/")) {
  //     alert("Invalid file type, please select an image.");
  //     return;
  //   }

  //   // check file size
  //   if (file.size > 5000000) {
  //     alert("File size is too large, please select an image smaller than 5MB.");
  //     return;
  //   }

  //   setImage(file);
  // }




  useEffect(() => {
    userData();
  }, [token]);

  return (
    <div className="card-profile-user">
          <div className="profile-name-picture">
          <div className="edit-img-profile">
           <img src="/profile-picture.png" />
           <button onClick={()=>setEditModal(!editModal)}>
           <iconify-icon icon="material-symbols:edit"/>
            <span>Edit</span>
           </button>
           {editModal && 
           <form  className="edit-img-button"> 
           <input  ref={menuRef}  type="file"/>
            <labe>Upload a photo...</labe>
           </form>}
          </div>
            <h1>{user.fullname}</h1>
          </div>
      <div className="profile-point">
        <h3>Point</h3>
        <div className="profile-total-point">
          <iconify-icon icon="ph:coin-vertical-light" />
          <h3>850000</h3>
        </div>
      </div>
      <div className="profile-user-menu">
        <NavLink
          to={`/profile-user/${user.id_user}`}
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
