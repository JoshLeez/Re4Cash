import "./styles/paginationpesanansaya.css";

export const PesananSaya = ({namaProduk, jenisProduk,
   jenisKurir, namaBank, gambarProduk}) => {
  return (
    <div className="pesanan-progress">
      <div className="left-pesanan-progress">
        <img src={gambarProduk} />
        <div className="detail-pesanan-kami">
          <h3>{namaProduk}</h3>
          <p>{jenisProduk}</p>
          <p>{jenisKurir}</p>
          <h2>{namaBank}</h2>
        </div>
      </div>
      <div className="right-pesanan-progress">
        <p>x3</p>
        <p>Rp10.000/kg</p>
        <p>Total Transaksi : Rp45.000</p>
        <div className="bank-menunggu-transaksi">
          <img src="/bri.svg" />
          <h6>Menunggu Transaksi dalam 23.34.09 Jam</h6>
        </div>
        <div className="batalkan-transaksi">
          <h6>Batalkan Transaksi</h6>
          <iconify-icon icon="gridicons:cross-circle" />
        </div>
      </div>
    </div>
  );
};

const StatusTransaksi = () => {
  return (
    <div className="content-pagination-pesanan-saya">
      <PesananSaya gambarProduk="/serabut-kelapa.svg" namaProduk="Serabut Kelapa" namaBank="Bank Sampah Aisyah" jenisKurir="Ambil Sendiri" />
      <PesananSaya gambarProduk="/pot.png" namaProduk="Pot Bunga Ramah Lingkungan Dari Botol Plastik" jenisProduk="Biru Dove" jenisKurir="Kurir"
       namaBank="Nurhadi" />
     <PesananSaya gambarProduk="/pot.png" namaProduk="Pot Bunga Ramah Lingkungan Dari Botol Plastik" jenisProduk="Biru Dove" 
     jenisKurir="Kurir"   namaBank="Nurhadi"/>
    </div>
  );
};

export default StatusTransaksi;
