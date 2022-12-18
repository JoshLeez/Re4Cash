import Edukasibanner from "../components/Edukasibanner"
import Penjelasanr4card from "../components/Penjelasanr4card"
import "./styles/edukasi.css"
import { UilSearch } from '@iconscout/react-unicons'
import Artikelcard from "../components/Artikelcard"

const Edukasi = () => {
  return (
    <>
        <Edukasibanner/>
        <section className="penjelasan-r4">
          <img src="/what-is-r4-background.png"/>
          <div className="content-penjelasan-r4">
           <Penjelasanr4card 
           title="Reduce"
           description="Reduce adalah mengurangi penggunaan 
           barang. Kata reduce biasa ditemukan dalam pengelolaan 
           sampah dan gaya hidup yang ramah lingkungan alias go 
           green. Reduce juga berarti mengurangi penggunaan barang
            sama halnya dengan mengurangi sesuatu yang mengakibatkan sampah."/>
           <Penjelasanr4card
           title="Reuse"
           description="Reduce adalah mengurangi penggunaan barang. Kata reduce
            biasa ditemukan dalam pengelolaan sampah dan gaya 
            hidup yang ramah lingkungan alias go green. Reduce 
            juga berarti mengurangi penggunaan barang sama halnya 
            dengan mengurangi sesuatu yang mengakibatkan sampah."/>
           <Penjelasanr4card
           title="Recycle"
           description="Reduce adalah mengurangi penggunaan barang. Kata 
           reduce biasa ditemukan dalam pengelolaan sampah dan gaya hidup 
           yang ramah lingkungan alias go green. Reduce juga 
           berarti mengurangi penggunaan barang sama halnya dengan
            mengurangi sesuatu yang mengakibatkan sampah."/>
           <Penjelasanr4card
           title="Responsible"
           description="Reduce adalah mengurangi penggunaan barang. 
           Kata reduce biasa ditemukan dalam pengelolaan sampah 
           dan gaya hidup yang ramah lingkungan alias go green. 
           Reduce juga berarti mengurangi penggunaan barang sama 
           halnya dengan mengurangi sesuatu yang mengakibatkan 
           sampah.
           "/>
          </div>
        </section>
        <div className="artikel-kategori-tombol">
          <h2>Artikel Edukasi</h2>
          <div className="two-btn-kategori">
            <button className="organik"></button>
            <button className="anorganik"></button>
          </div>
          <p>
          Limbah padat lebih dikenal sebagai sampah. 
          Menurut World Health Organization (WHO), 
          sampah adalah barang yang berasal dari kegiatan 
          manusia yang tidak lagi digunakan, baik tidak dipakai,
           tidak disenangi, ataupun yang dibuang. Terdapat 
           beberapa jenis sampah berdasarkan senyawanya di bagi 
           menjadi 2 yaitu organik dan anorganik
          </p>
        </div>
        <section className="artikel-list-search">
            <label className="artikel-search-container">
              <UilSearch size="24px" color="#FFAF00"/>
              <input placeholder="Search"/>
            </label>
            <div className="all-list-artikel">
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
             <Artikelcard/>
            </div>
        </section>
    </>
  )
}

export default Edukasi