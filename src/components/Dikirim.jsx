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
        <div className="pesanan-progress-estimasi">
          <h6>Estimasi waktu 0- 1 Hari</h6>
        </div>
        <h6>Batalkan Transaksi</h6>
      </div>
    </div>
  );
};

const Dikirim = () => {
  return (
    <div className="content-pagination-pesanan-saya kosong">
      <div className="pesanan-kosong">
        <iconify-icon icon="mdi:package-variant-closed-remove" />
        <h2>Belum Ada Pesanan</h2>
      </div>
    </div>
  );
};

export default Dikirim;
