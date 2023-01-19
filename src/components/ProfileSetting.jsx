import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EditProfile, TambahAlamat, EditAlamat } from "./OverlayUser"

const ProfileSetting = () => {

    const [edit, setEdit] = useState(false)
    const [alamat, setAlamat] = useState(false)
    const [data, setData] = useState([])
    const [editAlamat, setEditAlamat] = useState(false)

    const AlamatUser = async()=>{
        try{
       const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
       const config = {
         headers: {
           Authorization: `${token}`
         }
       };
       const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/alamat-user`, config);
       setData(response.data.data)
     }
     catch(error){
       console.log(error.message)
     }
   }

    useEffect(()=>{
        AlamatUser()
    },[])

    // const [data, setData] = useState([]);

    // const loadData = async() =>{
    //   try{
    //     const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
    //     const config = {
    //       headers: {
    //         Authorization: `${token}`
    //       }
    //     };
    //     const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/users`, config);
    //     setData(response.data.data)
    //   }
    //   catch(error){
    //     console.log(error.message)
    //   }
    // }
  
    // useEffect(()=>{
    //     loadData()
    // },[])
  
   let {id} = useParams();
  

  return (
    <section className="profile-setting-wrapper">
        <h1>Profile Setting</h1>
        <div className="content-profile-setting">
            <div className="wrapper-personal-data">
                <div className="top-personal-data">
                    <h1>Personal Data</h1>
                    <button onClick={()=>setEdit(!edit)} className="edit-personal-data">
                        <iconify-icon icon="material-symbols:edit"/>
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
                        <span>Zainuddin Putra Simanjuntak Agus SalimBi</span>
                        <span>Pria</span>
                        <span>17 Agustus 1945</span>
                        <span>zainuddin.agus21@gmail.com</span>
                        <span>081234567891</span>
                    </div>
                </div>
            </div>
            <div className="personal-profile-alamat">
                <div className="top-profile-alamat">
                    <h1>Alamat</h1>
                    <button onClick={()=>setAlamat(!alamat)} className="profile-tambah-alamat">
                        <iconify-icon icon="ic:baseline-plus"/>
                        <h1>Tambah Alamat</h1>
                    </button>
                </div>
                <div className="bottom-profile-alamat">
                    <h1>Alamat Utama</h1>
                    <div className="data-alamat-utama">
                        {data.map((datas, index)=>(
                             <p key={index}>
                             {datas.alamat_lengkap}, {datas.kabupaten_kota}, Kec. 
                             {datas.kecamatan}, {datas.provinsi}, {datas.kode_pos}
                             </p>
                        ))}
                        <div className="aksi-btn-alamat">
                            <iconify-icon onClick={()=>setEditAlamat(!editAlamat)} id="edit" icon="material-symbols:edit"/>
                            <iconify-icon id="delete" icon="entypo:squared-cross"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal-profile-alamat">
                <div className="top-profile-alamat">
                    <h1>Data Rekening</h1>
                    <button className="profile-tambah-alamat">
                        <iconify-icon icon="ic:baseline-plus"/>
                        <h1>Verifikasi Akun Transaksi</h1>
                    </button>
                </div>
                <div className="bottom-data-rekening">
                    <iconify-icon icon="material-symbols:check-circle-outline-rounded"/>
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
                        <iconify-icon id="delete" icon="entypo:squared-cross"/>
                    </div>
                </div>
            </div>
        </div>
        {edit && <EditProfile setEdit={setEdit}/>}
        {alamat && <TambahAlamat setAlamat={setAlamat}/>}
        {editAlamat && <EditAlamat data={data}  setEditAlamat={setEditAlamat}/>}
    </section>
  )
}

export default ProfileSetting