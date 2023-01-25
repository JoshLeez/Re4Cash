import "./styles/paginationpesanansaya.css";

export const PesananSaya = () => {
  return (
    <div className="pesanan-progress">
      <div className="left-pesanan-progress">
        <img src="/serabut-kelapa.svg" />
        <div className="detail-pesanan-kami">
          <h3>Serabut Kelapa</h3>
          <p>Ambil Sendiri</p>
          <h2>Bank Sampah Aisyah</h2>
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
      <PesananSaya />
      <PesananSaya />
      <PesananSaya />
      <PesananSaya />
    </div>
  );
};

export default StatusTransaksi;
