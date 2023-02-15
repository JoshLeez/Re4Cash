import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { EditProfile, TambahAlamat, EditAlamat } from "./OverlayUser";

const ProfileSetting = () => {
  const [edit, setEdit] = useState(false);
  const [alamat, setAlamat] = useState(false);
  const [editAlamat, setEditAlamat] = useState(false);
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const { id } = useParams();
  const [hapus, setHapus] = useState(true);
  const [selected, setSelected] = useState();
  const [user, setUser] = useState({});
  const genderRef = useRef(user.gender)
  const [userSelected, setUserSelected] = useState();
  const birthdate = Object.keys(user).length === 0 ? "" : new Date(user.tgl_lahir).toLocaleDateString();

  const getUserData = useCallback( async () => {
    try {
      const {data} = await axiosInstance.get('/users-by-id');
      genderRef.current = data.data.gender;
      setUser(data.data);
    } catch (error) {
      console.log(error.message);
    }
  },[]);

  // const AlamatUser = async () => {
    // try {
  //     const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  //     const config = {
  //       headers: {
  //         Authorization: `${token}`,
  //       },
  //     };
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_REACT_APP_API}/alamat-user`,
  //       config
  //     );
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  useEffect(() => {
    getUserData();
  }, [id, hapus, edit,editAlamat,alamat]);

  // useEffect(() => {
  //   if (editAlamat === false || alamat === false) {
  //     AlamatUser();
  //   }
  // }, [editAlamat, alamat, hapus, edit])

  const onSelectGender = (gender) =>{
    genderRef.current = gender;
  }

  const onSubmit = async (value) => {
    try {
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common["Authorization"] = `${token}`;
      const data = {
        ...value,
        gender: genderRef.current
      }
      await axios.patch(`${import.meta.env.VITE_REACT_APP_API}/users`, data);
      setUser((prevState) => {
        return {
          ...prevState,
          fullname: value.fullname,
          email: value.email,
          no_hp: value.no_hp,
          tgl_lahir : value.tgl_lahir,
          gender: genderRef.current
        }
      })
     setEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };


  const deleteAlamat =async (value) => {
    try {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_API}/alamat-user/${value}`
      );
      setHapus(!hapus);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="profile-setting-wrapper">
      <h1>Profile Setting</h1>
      <div className="content-profile-setting">
        <div key={user.id_user} className="wrapper-personal-data">
          <div className="top-personal-data">
            <h1>Personal Data</h1>
            <button
              onClick={() =>{ setEdit(!edit); setUserSelected(user)}}
              className="edit-personal-data"
            >
              <iconify-icon icon="material-symbols:edit" />
              <h1>Edit Profile</h1>
            </button>
          </div>
          <div className="personal-data-detail">
            <div className="personal-detail">
              <h1>Full Name</h1>
              <h1>Gender</h1>
              <h1>Tanggal Lahir</h1>
              <h1>Email</h1>
              <h1>No Hp</h1>
            </div>
            <div className="personal-detail">
              <span>{user.fullname}</span>
              <span>{user.gender}</span>
              <span>{birthdate}</span>
              <span>{user.email}</span>
              <span>{user.no_hp}</span>
            </div>
          </div>
        </div>
        <div className="personal-profile-alamat">
          <div className="top-profile-alamat">
            <h1>Alamat</h1>
            <button
              onClick={() => setAlamat(!alamat)}
              className="profile-tambah-alamat"
            >
              <iconify-icon icon="ic:baseline-plus" />
              <h1>Tambah Alamat</h1>
            </button>
          </div>
          {user.listAddress !== undefined && user.listAddress
            .map((data) => (
              <div key={data.id_alamat_user} className="bottom-profile-alamat">
                <h1>Alamat Utama</h1>
                <div className="data-alamat-utama">
                  <p>
                    {data.alamat_lengkap}, {data.kabupaten_kota}, Kec.
                    {data.kecamatan}, {data.provinsi}, {data.kode_pos}
                  </p>
                  <div className="aksi-btn-alamat">
                    <iconify-icon
                      onClick={() => {
                        setEditAlamat(!editAlamat), setSelected(data);
                      }}
                      id="edit"
                      icon="material-symbols:edit"
                    />
                    <iconify-icon
                      onClick={() => deleteAlamat(data.id_alamat_user)}
                      id="delete"
                      icon="entypo:squared-cross"
                    />
                  </div> 
                </div>
              </div>
            ))}
        </div>
        <div className="personal-profile-alamat">
          <div className="top-profile-alamat">
            <h1>Data Rekening</h1>
            <button className="profile-tambah-alamat">
              <iconify-icon icon="ic:baseline-plus" />
              <h1>Verifikasi Akun Transaksi</h1>
            </button>
          </div>
          <div className="bottom-data-rekening">
            <iconify-icon icon="material-symbols:check-circle-outline-rounded" />
            <div className="wrapper-data-rekening-info">
              <div className="data-rekening-info">
                <div className="detail-data-rekening">
                  <h1>Nama Bank</h1>
                  <span>BRI</span>
                </div>
                <div className="detail-data-rekening">
                  <h1>No Rek</h1>
                  <span>988765519211</span>
                </div>
              </div>
              <iconify-icon id="delete" icon="entypo:squared-cross" />
            </div>
          </div>
        </div>
      </div>
      {edit && <EditProfile onSubmit={onSubmit} data={userSelected} setEdit={setEdit} setKelamin={onSelectGender} />}
      {alamat && <TambahAlamat setAlamat={setAlamat} />}
      {editAlamat && (
        <EditAlamat data={selected} setEditAlamat={setEditAlamat} />
      )}
    </section>
  );
};

export default ProfileSetting;
