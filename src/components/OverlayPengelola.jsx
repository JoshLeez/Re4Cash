import {UilUserCircle } from '@iconscout/react-unicons';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export const OverlayPengelola = ({ setPengelola, pengelola }) => {
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(event.target)) {
        setPengelola(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={menuRef} className="dd-pengelola">
        <div className='dd-profile-saya'>       
            <UilUserCircle  />
            <Link onClick={()=>setPengelola(user)} to="/profile-user" className='nama-poin-user'>
                <h2>Udin</h2>
                <h4>Profile Saya</h4>
                <span>0 Poin</span>
            </Link>
        </div>
        <div className='dd-bot-user'>
        <Link to="/profile-user"  className='option-bot-user'>
                <iconify-icon icon="mdi:clipboard-user-outline"/>
                <h4>Menjadi Customer</h4>
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


export const ButtonUbah = ({setButtonUbah, link}) => {
  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setButtonUbah(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className='overlay-container'>
      <div ref={menuRef} className='container-button-ubah'>
        <div className='button-ubah-tulisan'>
          <img src='/icon-overlay-button-ubah.png' />
          <h1>Apakah Anda Yakin Ingin Mengubah?</h1>
        </div>
        <div className='wrapped-overlay-button-ubah'>
          <Button onClick={()=>setButtonUbah(false)} className='tiru-overlay-button-batal'>
            <h4>Batal</h4>
          </Button>
          <Link to={link} className='tiru-overlay-button-ubah'>
            <h4>Ubah</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};