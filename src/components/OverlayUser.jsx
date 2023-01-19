import {UilUserCircle } from '@iconscout/react-unicons';
import { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { LinkButton } from './Button';
import CustomDropDown, { DDTarikPoint, LongDropDown, SecTarikPoint, ThirdTarikPoint } from './CustomDropDown';
import { UilAngleDown } from '@iconscout/react-unicons'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useForm } from 'react-hook-form';

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
  const data = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  const split = data.split(" ")[1];
  const { userId } = jwtDecode(split);

  const navigate = useNavigate()
  const logout = async () =>{
    try{
      const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
      axios.defaults.headers.common['Authorization'] = `${token}`
      await axios.delete(`${import.meta.env.VITE_REACT_APP_API}/logout`);
      localStorage.removeItem(import.meta.env.VITE_REACT_APP_AUTH)
      navigate(0)
    }
      catch(error){
          console.log(error.message)
      }
    }


  return (
    <div ref={menuRef} className="dd-user">
        <div className='dd-profile-saya'>       
            <UilUserCircle  />
            <Link to={`/profile-user/${userId}`} className='nama-poin-user'>
                <h2>Udin</h2>
                <h4>Profile Saya</h4>
                <span>0 Poin</span>
            </Link>
        </div>
        <div className='dd-bot-user'>
            <Link to="/menjadi-pengelola"  className='option-bot-user'>
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
                <button onClick={()=>logout()}>Logout</button>
            </div>
      </div>
    </div>
  );
};


export const EditProfile = ({setEdit}) => {
  const menuRef = useRef();
  const {register, handleSubmit, formState:{errors}} = useForm()

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

  // const updataUser = async (value) =>{
  //   try{
  //     const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
  //     axios.defaults.headers.common['Authorization'] = `${token}`
  //     await axios.patch(`${import.meta.env.VITE_REACT_APP_API}/users`, value);
      
  //     setEdit(false)
  //   }catch(error){
  //     console.log(error.message)
  //   }
  // }

  return (
    <div className='overlay-container'>
      <form ref={menuRef} className='container-edit-profile'>
        <iconify-icon onClick={()=>setEdit(false)} icon="maki:cross"/>
        <h1>Edit Profile</h1>
        <div className='input-edit-profile'>
          <input type="text"/>
          <LongDropDown title="Laki-Laki" title2="Perempuan" width="348"/>
          <input type="datetime-local"/>
          <input type="text"/>
          <input type="text"/>
          <Button tipe="PRIMARY">Simpan</Button>
        </div>
      </form>
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
              <Button tipe="PRIMARY">Tambah</Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export const EditAlamat = ({setEditAlamat, data}) => {

  const menuRef = useRef();
  const initialValues = {
    alamat_lengkap : data[0].alamat_lengkap,
    kabupaten_kota : data[0].kabupaten_kota,
    kecamatan : data[0].kecamatan,
    kode_pos : data[0].kode_pos,
    provinsi : data[0].provinsi
  }


  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: initialValues
  });


  useEffect(()=>{
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setEditAlamat(false);
      }
    };
  
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
  }
  })

  const navigate = useNavigate()

  const onSubmit = async (value) =>{
    try{
        const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_AUTH);
        axios.defaults.headers.common['Authorization'] = `${token}`
        const response = await axios.patch(`${import.meta.env.VITE_REACT_APP_API}/alamat-user/${data[0].id_alamat_user}`, value)
        setEditAlamat(false)
        navigate(0)
      }catch(error){
      console.log(error.message)
    }
  }
  
  return (
    <div  className='overlay-container'>
      <form onSubmit={handleSubmit(onSubmit)} ref={menuRef} className='container-modal-alamat'>
      <iconify-icon onClick={()=>setEditAlamat(false)} icon="maki:cross"/>
          <h1>Edit Alamat</h1>
          <div className='input-tambah-alamat'>
            <div className='tambah-alamat-top'>
              <div className="checkbox-set-alamat">
                <input type="checkbox"/>
                <span>Set Jadi Alamat Utama</span>       
              </div>
              <textarea {...register("alamat_lengkap")} placeholder='Alamat Lengkap (nama jalan dan patokan)'/>
              <div className='alamat-input-2d'>
                <input {...register("kecamatan")} type="text" placeholder='Kecamatan'/>
                <input {...register("kabupaten_kota")} type="text" placeholder='Kabupaten/Kota'/>
                <input {...register("provinsi")} type="text" placeholder='Provinsi'/>
                <input {...register("kode_pos")} type="text" placeholder='Kode Pos'/>
              </div>
              <Button tipe="PRIMARY" type="submit">Simpan</Button>
            </div>
          </div>
      </form>
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


export const LengkapDataDiri = ({setLengkapData, setPaymentSuccess}) => {

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

  const beliHandler = () =>{
    setPaymentSuccess(true)
    setLengkapData(false)
  }

  return (
  <>
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
                <button onClick={beliHandler}>Lanjutkan Beli Rp. 35.000</button>
              </div>
            </form>
        </div>
    </div>
  </>
  )
}


export const PaymentSuccess = () => {
  return (
    <div className='overlay-container'>
      <div className='payment-success-container'>
        <div className='top-payment-success'>
          <iconify-icon icon="mdi:checkbox-marked-circle"/>
          <div className='no-pembayaran-success'>
            <h1>Payment Success</h1>
            <span>Nomor Pembayaran INVRE4CASH_0012351</span>
          </div>
        </div>
        <div className='wrapper-bot-payment-success'>
          <div className='bot-payment-success'>
            <div className='detail-payment-success'>
                <span>Total Pembayaran</span>
                <span>Rp70.000</span>
            </div>
            <div className='detail-payment-success'>
                <span>Metode</span>
                <span>Bank</span>
            </div>
            <div className='detail-payment-success'>
                <span>Nama Bank</span>
                <span>BCA</span>
            </div>
          </div>
          <LinkButton type="PRIMARY_LONG">Lihat Invoice</LinkButton>
        </div>
      </div>
    </div>
  )
}


export const JasaKurir = ({setKurir}) => {

  const menuRef = useRef()
 

  useEffect(()=>{
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setKurir(false);
      }
    };
  
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
  }
  })

  return (
    <div className='overlay-container'>
      <div className='model-tarik-point' ref={menuRef}>
        <iconify-icon onClick={()=>setKurir(false)} icon="maki:cross"/>
        <div className='top-jasa-kurir'>
          <h2>Pilih Jasa Kurir</h2>
          <span>
            Pilih jasa kurir anda serta dengan 
            service yang disediakan
          </span>
        </div>
        <div className='list-option-jasa-kurir'>
          <label className='option-jasa-kurir'>
            <input type="radio" name="kurir"/>
            <div className='detail-jasa-kurir'>
              <img src="/kurir/jnt.svg"/>
              <div className='detail-estimasi-kurir'>
                <span>Reg(1-2Hari)</span>
                <span>Rp. 15.000</span>
                <UilAngleDown className="arrow-rotation"  size="32px"/>
              </div>
            </div>
          </label>
          <label className='option-jasa-kurir'>
            <input type="radio" name="kurir"/>
            <div className='detail-jasa-kurir'>
              <img src="/kurir/jne.svg"/>
              <div className='detail-estimasi-kurir'>
                <span>Reg(3-5Hari)</span>
                <span>Rp. 10.000</span>
                <UilAngleDown className="arrow-rotation"  size="32px"/>
              </div>
            </div>
          </label>
          <label className='option-jasa-kurir'>
            <input type="radio" name="kurir"/>
            <div className='detail-jasa-kurir'>
              <img src="/kurir/sicepat.svg"/>
              <div className='detail-estimasi-kurir'>
                <span>Reg(0-1Hari)</span>
                <span>Rp. 25.000</span>
                <UilAngleDown className="arrow-rotation"  size="32px"/>
              </div>
            </div>
          </label>
          <label className='option-jasa-kurir'>
            <input type="radio" name="kurir"/>
            <div className='detail-jasa-kurir'>
              <img src="/kurir/gosend.svg"/>
              <div className='detail-estimasi-kurir'>
                <span>Reg(1-2Hari)</span>
                <span>Rp. 17.000</span>
                <UilAngleDown className="arrow-rotation"  size="32px"/>
              </div>
            </div>
          </label>
        </div>
        <Button>Pilih</Button>
      </div>
    </div>
  )
}
