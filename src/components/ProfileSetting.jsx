import { useState } from "react"
import { EditProfile, TambahAlamat } from "./OverlayUser"

const ProfileSetting = () => {

    const [edit, setEdit] = useState(false)
    const [alamat, setAlamat] = useState(false)

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
                        <p>
                        Jl. Pembangunan 1, Selat Panjang Kota, Kec. 
                        Tebing Tinggi, Kabupaten Kepulauan Meranti, Riau, 213094
                        </p>
                        <div className="aksi-btn-alamat">
                            <iconify-icon id="edit" icon="material-symbols:edit"/>
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
    </section>
  )
}

export default ProfileSetting