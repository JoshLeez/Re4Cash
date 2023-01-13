import "./styles/tarikpoint.css"

const TarikPoint = () => {
  return (
    <section className="tarik-point-container">
        <div className="top-tarik-point">
          <div className="wrapper-detail-isi-nominal">
            <div className="detail-isi-nominal">
              <h1>Isi Nominal Tarik Poin</h1>
              <p>Harap tentukan jumlah uang yang ingin anda tarik untuk keperluan. kamu 
                bisa pilih salah satu opsi di bawah ini</p>
              <div className="option-isi-nominal">
                  <button>Rp. 10.000,-</button>
                  <button>Rp. 150.000,--</button>
                  <button>Rp. 50.000,-</button>
                  <button>Rp. 200.000,-</button>
                  <button>Rp. 100.000,-</button>
                  <button>Rp. 500.000,-</button>
              </div>
            </div>
            <div className="input-jumlah-tarik">
              <h2>Atau masukkan jumlah yang ingin anda inginkan disini:</h2>
              <input placeholder="Rp. 850.000" type="text"/>
            </div>
          </div>  
          <div className="tarik-point-catatan">
            <div className="input-catatan-tarik-point">
              <h1>Catatan</h1>
              <textarea placeholder="Silahkan masukan catatan untuk kami"/>
            </div>
            <div className="metode-transaksi-tarik-point">
              <div className="jenis-bank-tarik-point">
                 <iconify-icon icon="fluent:building-bank-16-regular"/>
                 <img src="/bri.svg"/>
              </div>
              <button>Pilih Metode Transaksi</button>
            </div>
          </div>
        </div>
        <p>
        Proses pencaraian dana penarikan poin dilakukan selama dalam 48 jam jam kerja. Jika belum masuk
         ke rekening anda silahkan hubungi kami. 
        </p>
    </section>
  )
}

export default TarikPoint