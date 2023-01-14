import {UilUserCircle } from '@iconscout/react-unicons';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import CustomDropDown, { DDTarikPoint, SecTarikPoint, ThirdTarikPoint } from './CustomDropDown';

export const OverlayUser = ({ setUser }) => {
  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setUser(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

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

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setEdit(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

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

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setAlamat(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

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
  }
  ,[])

  return (
    <div  className='overlay-container'>
        <div ref={menuRef}  className='model-tarik-point'>
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