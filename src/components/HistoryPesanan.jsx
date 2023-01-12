import "./styles/historypesanan.css"

export const PesananSaya = () => {
    return (
      <div className="pesanan-progress">
      <div className="left-pesanan-progress">
        <img src="/serabut-kelapa.svg"/>
        <div className="detail-pesanan-kami">
          <h3>Serabut Kelapa</h3>
          <p>Pembelian Mentahan</p>
          <h2>Bank Sampah Aisyah</h2>
          <p>12 Desember 2022</p>
        </div>
      </div>
      <div className="right-pesanan-progress">
        <p>x3</p>
        <p>Rp10.000/kg</p>
        <p>Total Transaksi : Rp45.000</p>
        <div className="pesanan-rating">
            <iconify-icon icon="ic:outline-star-border"/>
            <h6>Kasih Rating !</h6>
        </div>
        <div className="pesanan-sukses">
          <h6>Pesanan Selesai</h6>
          <iconify-icon icon="ep:success-filled"/>
        </div>
      </div>
    </div>
    )
  }

  const HistoryPesanan = () => {
    return (
        <div className="container-history">
            <PesananSaya/>
            <PesananSaya/>
            <PesananSaya/>
            <PesananSaya/>
            <PesananSaya/>
            <PesananSaya/>
        </div>
    )
  }

  export default HistoryPesanan