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
        <div className="pesanan-rating">
          <iconify-icon icon="ic:outline-star-border" />
          <h6>Kasih Rating !</h6>
        </div>
        <div className="pesanan-sukses">
          <h6>Pesanan Selesai</h6>
          <iconify-icon icon="ep:success-filled" />
        </div>
      </div>
    </div>
  );
};

const PesananSelesai = () => {
  return (
    <div className="content-pagination-pesanan-saya">
      <PesananSaya />
      <PesananSaya />
    </div>
  );
};

export default PesananSelesai;
