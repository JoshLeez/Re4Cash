import {UilUserCircle } from '@iconscout/react-unicons';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import CustomDropDown, { DDTarikPoint, SecTarikPoint, ThirdTarikPoint } from './CustomDropDown';

export const OverlayUser = ({ setUser }) => {
  const menuRef = useRef();

  useEffect(()=>{
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setUser(false);
      }
    };
  
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
  }
  })

  return (
    <div ref={menuRef} className="dd-user">
        <div className='dd-profile-saya'>       
            <UilUserCircle  />
            <Link to="/profile-user" className='nama-poin-user'>
                <h2>Udin</h2>
                <h4>Profile Saya</h4>
                <span>0 Poin</span>
            </Link>
        </div>
        <div className='dd-bot-user'>
            <Link to="/dashboard-pengelola"  className='option-bot-user'>
                <iconify-icon icon="mdi:clipboard-user-outline"/>
                <h4>Menjadi Pengelola</h4>
            </Link>
            <div className='option-bot-user'>
                <iconify-icon icon="mdi:piggy-bank-outline"/>
                <h4>Tabungan</h4>
            </div>
            <div className='option-bot-user'>
                <iconify-icon icon="mdi:clipboard-text-clock-outline"/>
                <h4>Histori</h4>
            </div>
            <div className='option-bot-user'>
                <iconify-icon icon="mdi:bell-outline"/>
                <h4>Notifikasi</h4>
            </div>
            <div className='option-bot-user logout'>
                <iconify-icon icon="mi:log-out"/>
                <h4>Logout</h4>
            </div>
      </div>
    </div>
  );
};


export const EditProfile = ({setEdit}) => {
  const menuRef = useRef();

  useEffect(()=>{
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setEdit(false);
      }
    };
  
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
  }
  })

  return (
    <div className='overlay-container'>
      <div ref={menuRef} className='container-edit-profile'>
        <iconify-icon onClick={()=>setEdit(false)} icon="maki:cross"/>
        <h1>Edit Profile</h1>
        <div className='input-edit-profile'>
          <input type="text"/>
          <CustomDropDown/>
          <input type="datetime-local"/>
          <input type="text"/>
          <input type="text"/>
          <Button type="PRIMARY">Simpan</Button>
        </div>
      </div>
    </div>
  )
}


export const TambahAlamat = ({setAlamat}) => {

  const menuRef = useRef();

  useEffect(()=>{
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setAlamat(false);
      }
    };
  
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
  }
  })

  return (
    <div  className='overlay-container'>
      <div ref={menuRef} className='container-modal-alamat'>
      <iconify-icon onClick={()=>setAlamat(false)} icon="maki:cross"/>
          <h1>Tambah Alamat</h1>
          <div className='input-tambah-alamat'>
            <div className='tambah-alamat-top'>
              <div className="checkbox-set-alamat">
                <input type="checkbox"/>
                <span>Set Jadi Alamat Utama</span>
              </div>
              <textarea placeholder='Alamat Lengkap (nama jalan dan patokan)'/>
              <div className='alamat-input-2d'>
                <input type="text" placeholder='Kecamatan'/>
                <input type="text" placeholder='Kabupaten/Kota'/>
                <input type="text" placeholder='Provinsi'/>
                <input type="text" placeholder='Kode Pos'/>
              </div>
              <Button type="PRIMARY">Tambah</Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export const MetodeTarik = ({setModel}) => {

  const menuRef = useRef()

  useEffect(()=>{
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setModel(false);
      }
    };
  
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
  }
  })

  return (
    <div  className='overlay-container'>
        <div ref={menuRef}  className='model-tarik-point'>
          <iconify-icon onClick={()=>setModel(false)} icon="maki:cross"/>
          <h1>Pilih Metode Transaksi</h1>
          <div className='option-metode-tarik-point'>
            <DDTarikPoint />
            <SecTarikPoint/>
            <ThirdTarikPoint/>
          </div>
          <Button>Pilih</Button>
        </div>
    </div>
  )
}

export const GantiAlamat = ({setModelAlamat}) => {
  
  const menuRef = useRef()

useEffect(()=>{
  let handler = (event) => {
    if (!menuRef.current.contains(event.target)) {
      setModelAlamat(false);
    }
  };

  document.addEventListener("mousedown", handler);
  return () => {
    document.removeEventListener("mousedown", handler);
}
})
  

  return (
    <div className='overlay-container'>
        <div ref={menuRef}  className='model-tarik-point'>
        <iconify-icon onClick={()=>setModelAlamat(false)} icon="maki:cross"/>
          <h1>Ganti Alamat</h1>
          <div className='pilih-alamat-container'>
            <h2>Alamat</h2>
            <div className='option-pilih-alamat'>
              <div className='option-pilih-left'>
                <iconify-icon icon="mi:location"/>
                <span>
                  Jl. Pembangunan 1, Selat Panjang Kota, Kec. 
                  Tebing Tinggi, Kabupaten Kepulauan Meranti, Riau, 
                  213094
                </span>
              </div>
              <div className='option-pilih-right'>
                <button>Pilih Alamat</button>
                <label className='set-alamat'>
                  <input type="checkbox"/>
                  <span>Set Jadi Alamat Utama</span>
                </label>
              </div>
            </div>
          </div>
          <form className='form-tambah-alamat'>
            <h2>Tambah Alamat</h2>
            <textarea placeholder='Alamat Lengkap (nama jalan dan patokan)'/>
            <div className='tambah-alamat'>
              <input type="text" placeholder='Kecamatan'/>
              <input type="text" placeholder='Kabupaten/Kota'/>
              <input type="text" placeholder='Provinsi'/>
              <input type="text" placeholder='Kode Pos'/>
            </div>
            <Button>Tambah</Button>
          </form>
        </div>
    </div>
  )
}


export const LengkapDataDiri = ({setLengkapData}) => {

  const menuRef = useRef()

  useEffect(()=>{
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setLengkapData(false);
      }
    };
  
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
  }
  })

  return (
    <div className='overlay-container'>
       <div ref={menuRef}  className='model-tarik-point'>
       <iconify-icon onClick={()=>setLengkapData(false)} icon="maki:cross"/>
          <h2>Lengkapi Data Diri</h2>
          <div className='overlay-total-pembelian'>
            <h6>Total Pembelian</h6>
            <div className="overlay-total-bonus">
              <div className='detail-total-bonus'>
                <h6>Total Harga</h6>
                <span>Rp. 35.000</span>
              </div>
              <div className='detail-total-bonus'>
                <h6>Bonus Point</h6>
                <span>600</span>
              </div>
            </div>
          </div>
          <form>
              <div className='form-lengkap-data'>
                <p>
                  Jika anda belum masuk di Re4Cash, segera isi data diri
                   anda dibawah ini untuk keperluan distribusi atau 
                   <Link>masuk disini!</Link>
                </p>
                <div className='input-lengkap-data'>
                  <input type="text" placeholder='Nama Lengkap'/>
                  <input type="text" placeholder='Jenis Kelamin'/>
                  <input type="text" placeholder='Email'/>
                  <input type="text" placeholder='No Handphone'/>
                  <input type="text" placeholder='No. Rekening/Akun E-Wallet'/>
                  <input type="text" placeholder='Nama Rekening Tujuan'/>
                </div>
                <button className=''>Lanjutkan Beli Rp. 35.000</button>
              </div>
            </form>
        </div>
    </div>
  )
}
