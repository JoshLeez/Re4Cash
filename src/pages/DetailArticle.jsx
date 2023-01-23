import {useState, useEffect } from 'react'
import HOC from '../components/HOC'
import './styles/detailarticle.css'
import ItemKg, {ItemNumber} from "../components/ItemKg";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailArticle = () => {

  const [data,setData] = useState([])

  const { id } = useParams()

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

  return (
    data.filter((datas)=> datas.id_artikel == id).map((datas)=>{ 
      const date = new Date(datas.tanggal_artikel);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString("id", options); 
      return(     
    <HOC title='Edukasi | Article'>
        <div className="detailarticle-hero">
          <img src="article-hero.png" alt="img" />
        </div>
        <article className="detail-article-container">
          <div className="detail-article-card">
            <Link to="/edukasi">
            <div className="article-back">
              <iconify-icon icon="material-symbols:arrow-back-ios-rounded" />
              <h3>ke halaman Edukasi</h3>
              </div>  
            </Link>
            <div className="detail-article-card-title">
              <h2>Produk Tersedia</h2>
              <p>lihat semua</p>
            </div>
            <div className="detail-article-card-content">
              <ItemKg/>
            </div>
            <div className="detail-article-card-content">
              <ItemNumber/>
            </div>
            <div className="detail-article-card-content">
              <ItemKg/>
            </div>
            <div className="detail-article-card-content">
              <ItemNumber/>
            </div>
          </div>
          <div className="detail-article-kategori">
            <h1>{datas.kategori} | {datas.sub_kategori}</h1>
          <div className="detail-article-content">
            <h1>{datas.judul_artikel}</h1>
            <div className="article-garis" />
            <div className='detail-article-content-paragraf'>
              <div className="article-date">
                <iconify-icon icon="material-symbols:date-range-outline" />
                <p>{formattedDate}</p>
              </div>
              <div className="article-text">
                <p>{datas.artikel}</p>
              </div>
            </div>
          </div>
          </div>
        </article>
    </HOC>
    )
  })
  )
}

export default DetailArticle
