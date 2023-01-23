import Edukasibanner from "../components/Edukasibanner"
import Penjelasanr4card from "../components/Penjelasanr4card"
import "./styles/edukasi.css"
import { UilSearch } from '@iconscout/react-unicons'
import Artikelcard from "../components/Artikelcard"
import HOC from "../components/HOC"
import { useState, useEffect } from "react"
import axios from "axios"

const Edukasi = () => {

  const [data,setData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState("")

  console.log(search)

  const artikelAPI = async() =>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/artikel`);
      console.log(response.data.data)
      setData(response.data.data)
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    artikelAPI()
  },[])


  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
}


  return (
    <HOC title="Re4Cash - Edukasi">
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
            <button onClick={()=> handleCategoryChange("Organik")} onDoubleClick={()=>handleCategoryChange("")} className="organik" type="button">
              <img src="/btn_daun.png"/>
              <span>Organik</span>
            </button>
            <button onClick={()=>handleCategoryChange("Anorganik")} onDoubleClick={()=>handleCategoryChange("")} className="anorganik" type="button">
              <img src="/btn_anorganik.png"/>
              <span>Anorganik</span>
            </button>
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
              <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"/>
            </label>
            <div className="all-list-artikel">
            {data.filter((datas, index)=> (datas.kategori === selectedCategory || selectedCategory === '') 
                                && datas.sub_kategori.toLowerCase().includes(search.toLowerCase())
                                && index < 12).map((datas)=>
      {
        const maxLength = 100;
        const truncatedArtikel = datas.artikel.slice(0, maxLength) + (datas.artikel.length > maxLength ? "..." : "");
        const maxLengthTitle = 30;
        const truncatedTitle = datas.judul_artikel.slice(0, maxLengthTitle) + (datas.judul_artikel.length > maxLengthTitle ? "..." : "");
        return(
            <Artikelcard key={datas.id_artikel} 
                        image = {`artikel/${datas.foto_artikel}`}
                        kategori={datas.kategori}
                        sub_Kategori={datas.sub_kategori}
                        judul_Artikel={truncatedTitle}
                        artikel={truncatedArtikel}
                        id_Artikel={datas.id_artikel}
                        />
                    )})}
            </div>
        </section>
    </HOC>
  )
}

export default Edukasi