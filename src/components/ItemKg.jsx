import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";
import Button, { ButtonNumber } from "./Button";
import { useState } from "react";

const ItemKg = (props) => {

  const [item, setItem] = useState("");

  const inputHandler = (e) => {
    e.preventDefault();
    setItem(parseInt(e.target.value) || "");
  };

  return (
    <div className="wrapper-penjualan-card">
      <div className="penjualan-card">
        <img src={props.src} />
        <div className="content-detail-produk">
            <div className="bottom-detail-card">
               <h6>{props.title}</h6>
               <div className="rating-produk">
                  <p>{props.subKategori}</p>
                  <div className="rating-star">
                  <div className="total-star">
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                  </div>
                  <p>
                     5,0 <span>(65)</span>
                  </p>
                  </div>
               </div>
               <h4 className="price-card">
               {props.harga} <span>/ Kg</span>
               </h4>
            </div>
            <div className="lokasi-bottom">
               <div className="lokasi-place">
                  <UilLocationPoint color="black" />
                  <p>{props.lokasi}</p>
               </div>
               <p>{props.namaPengelola}</p>
            </div>
        </div>
      </div>
      <div className="penjualan-hover">
        <h4>Jumlah Pembelian</h4>
        <div className="card-input-nilai">
          <input  placeholder="Masukan Nilai"
                  type="text"
                  value={item}
                  onChange={inputHandler} />
          <h6>Kg</h6>
        </div>
        <div className="card-total-price">
          <h5>Total Pembelian</h5>
          <h4>{props.harga}</h4>
        </div>
        <div className="card-button-buy-cart">
          <Button tipe="PRIMARY_LONG">Tambah ke Keranjang</Button>
          <Button tipe="SECONDARY_LONG">Beli</Button>
        </div>
        <div className="card-profile-verifikasi">
          <img src="/profile-mitra.svg" />
          <div className="card-checklist-verifikasi">
            <UilCheckCircle color="#0EA601" size="16px" />
            <p>Terverifikasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemKg;

export const ItemNumber = (props) => {
   return (
     <div className="wrapper-penjualan-card">
       <div className="penjualan-card">
         <img src={props.src} />
         <div className="content-detail-produk">
             <div className="bottom-detail-card">
                <h6>{props.title}</h6>
                <div className="rating-produk">
                   <p>{props.subKategori}</p>
                   <div className="rating-star">
                   <div className="total-star">
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                   </div>
                   <p>
                      5,0 <span>(65)</span>
                   </p>
                   </div>
                </div>
                <h4 className="price-card">
                {props.harga} <span>/ Pcs</span>
                </h4>
             </div>
             <div className="lokasi-bottom">
                <div className="lokasi-place">
                   <UilLocationPoint />
                   <p>{props.lokasi}</p>
                </div>
                <p>{props.namaPengelola}</p>
             </div>
         </div>
       </div>
       <div className="penjualan-hover">
         <h4>Jumlah Pembelian</h4>
         <div className="card-input-nilai">
          <ButtonNumber/>
          <h6>Pcs</h6>
         </div>
         <div className="card-total-price">
           <h5>Total Pembelian</h5>
           <h4>{props.harga}</h4>
         </div>
         <div className="card-button-buy-cart">
            <Button tipe="PRIMARY_LONG">Tambah ke Keranjang</Button>
            <Button tipe="SECONDARY_LONG">Beli</Button>
         </div>
         <div className="card-profile-verifikasi">
           <img src="/profile-mitra.svg" />
           <div className="card-checklist-verifikasi">
             <UilCheckCircle color="#0EA601" size="16px" />
             <p>Terverifikasi</p>
           </div>
         </div>
       </div>
     </div>
   );
 };

export const ItemKgTabung = (props) => {

   const [item, setItem] = useState("");
 
   const inputHandler = (e) => {
     e.preventDefault();
     setItem(parseInt(e.target.value) || "");
   };
 
   return (
     <div className="wrapper-penjualan-card">
       <div className="penjualan-card">
         <img src={props.src} />
         <div className="content-detail-produk">
             <div className="bottom-detail-card">
                <h6>{props.title}</h6>
                <div className="rating-produk">
                   <p>{props.subKategori}</p>
                   <div className="rating-star">
                   <div className="total-star">
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                      <iconify-icon icon="typcn:star" />
                   </div>
                   <p>
                      5,0 <span>(65)</span>
                   </p>
                   </div>
                </div>
                <div className="content-mid">
                  <h4 className="price-card">
                  {props.harga} <span>/ Pcs</span>
                  </h4>
                  <div className="bisa-menabung-status">
                     <iconify-icon icon="material-symbols:check-small-rounded"/>
                     <span>Bisa Menabung</span>
                  </div>
               </div>
             </div>
             <div className="lokasi-bottom">
                <div className="lokasi-place">
                   <UilLocationPoint color="black" />
                   <p>{props.lokasi}</p>
                </div>
                <p>{props.namaPengelola}</p>
             </div>
         </div>
       </div>
       <div className="penjualan-hover">
         <h4>Jumlah Penjualan</h4>
         <div className="card-input-nilai">
           <input  placeholder="Masukan Nilai"
                   type="text"
                   value={item}
                   onChange={inputHandler} />
           <h6>Kg</h6>
         </div>
         <div className="card-total-price">
           <h5>Total Penjualan</h5>
           <h4>{props.harga}</h4>
         </div>
         <div className="card-button-buy-cart">
            <Button tipe="PRIMARY_LONG">Menabung</Button>
            <Button tipe="SECONDARY_LONG">Jual</Button>
         </div>
         <div className="card-profile-verifikasi">
           <img src="/profile-mitra.svg" />
           <div className="card-checklist-verifikasi">
             <UilCheckCircle color="#0EA601" size="16px" />
             <p>Terverifikasi</p>
           </div>
         </div>
       </div>
     </div>
   );
 };

export const ItemNumberTabung = (props) => {
  return (
    <div className="wrapper-penjualan-card">
      <div className="penjualan-card">
        <img src={props.src} />
        <div className="content-detail-produk">
            <div className="bottom-detail-card">
               <h6>{props.title}</h6>
               <div className="rating-produk">
                  <p>{props.subKategori}</p>
                  <div className="rating-star">
                  <div className="total-star">
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                     <iconify-icon icon="typcn:star" />
                  </div>
                  <p>
                     5,0 <span>(65)</span>
                  </p>
                  </div>
               </div>
               <div className="content-mid">
                  <h4 className="price-card">
                  {props.harga} <span>/ Pcs</span>
                  </h4>
                  <div className="bisa-menabung-status">
                     <iconify-icon icon="material-symbols:check-small-rounded"/>
                     <span>Bisa Menabung</span>
                  </div>
               </div>
            </div>
            <div className="lokasi-bottom">
               <div className="lokasi-place">
                  <UilLocationPoint />
                  <p>{props.lokasi}</p>
               </div>
               <p>{props.namaPengelola}</p>
            </div>
        </div>
      </div>
      <div className="penjualan-hover">
        <h4>Jumlah Penjualan</h4>
        <div className="card-input-nilai">
         <ButtonNumber/>
         <h6>Pcs</h6>
        </div>
        <div className="card-total-price">
          <h5>Total Penjualan</h5>
          <h4>{props.harga}</h4>
        </div>
        <div className="card-button-buy-cart">
          <Button tipe="PRIMARY_LONG">Menabung</Button>
          <Button tipe="SECONDARY_LONG">Jual</Button>
        </div>
        <div className="card-profile-verifikasi">
          <img src="/profile-mitra.svg" />
          <div className="card-checklist-verifikasi">
            <UilCheckCircle color="#0EA601" size="16px" />
            <p>Terverifikasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Item = () => {
  return (
    <div className="wrapper-item">
        <img src="/serabut-kelapa.svg"/>
        <h6>Saya mencari minyak jelantah kiloan</h6>
        <p>Minyak</p>
        <h4>Rp. 15.000 <span>/ kilo</span></h4>
    </div>
  )
}

export const ItemTabung = () => {
   return (
     <div className="wrapper-item">
         <img src="/serabut-kelapa.svg"/>
         <h6>Butuh sampah kantong plastik dalam kiloan</h6>
         <div className="rating-produk">
             <p>Kelapa</p>
             <div className="rating-star">
               <div className="total-star">
                 <iconify-icon icon="typcn:star" />
                 <iconify-icon icon="typcn:star" />
                 <iconify-icon icon="typcn:star" />
                 <iconify-icon icon="typcn:star" />
                 <iconify-icon icon="typcn:star" />
               </div>
               <p>
                 5,0 <span>(65)</span>
               </p>
             </div>
           </div>
         <h4>Rp. 15.000 <span>/ kilo</span></h4>
         <div className="bisa-menabung-status">
           <iconify-icon icon="material-symbols:check-small-rounded"/>
           <span>Bisa Menabung</span>
         </div>
     </div>
   )
 }