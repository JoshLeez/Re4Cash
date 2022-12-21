import AnorganikKategori from "../components/AnorganikKategori";
import OrganikKategori from "../components/OrganikKategori"
import CarouselMarket from "../components/CarouselMarket";
import { HOCmarketplace } from "../components/HOC";
import "./styles/marketplace.css";
import Item from "../components/Item";

const MarketPlaceUtama = () => {
  const kategoriAnorganik = [
    {
      img: "/plastik.svg",
      title: "Plastik",
    },
    {
      img: "/botol.svg",
      title: "Botol Plastik",
    },
    {
      img: "/botol-kaca.svg",
      title: "Botol Kaca",
    },
    {
      img: "/Aluminium.svg",
      title: "Aluminium",
    },
    {
      img: "/Aluminium2.svg",
      title: "Aluminium",
    },
    {
      img: "/karet.svg",
      title: "Karet",
    },
    {
      img: "/kawat.svg",
      title: "Kawat",
    },
    {
      img: "/keramik.svg",
      title: "Keramik",
    },
  ];

  const kategoriOrganik = [
    {
      img : "/buah-buahan.svg",
      title : "Buah-buahan"
    },
    {
      img : "/daun.svg",
      title : "Daun"
    },
    {
      img : "/padi.svg",
      title : "Padi"
    },
    {
      img : "/kelapa.svg",
      title : "Kelapa"
    },
    {
      img : "/sayur-sayuran.svg",
      title : "Sayur-Sayuran"
    },
    {
      img : "/tulang.svg",
      title : "Tulang"
    },
    {
      img : "/kayu.svg",
      title : "Kayu"
    },
    {
      img : "/kotoran-hewan.svg",
      title : "Kotoran Hewan"
    },
  ]

  return (
    <HOCmarketplace title="Re4Cash - Marketplace">
      <CarouselMarket />
      <div className="kategori-sampah">
        <h4>Kategori Sampah</h4>
        <div className="anorganik-kategori">
          {kategoriAnorganik.map((kategoris) => {
            return (
              <AnorganikKategori 
              img={kategoris.img} 
              title={kategoris.title} />
            )
          })}
        </div>
        <div className="organik-kategori">
          {kategoriOrganik.map((kategoris)=>{
            return(
              <OrganikKategori
              img={kategoris.img}
              title={kategoris.title}/>
            )
          })}
      
        </div>
      </div>
      <div className="marketplace-utama-penjualan">
        <h4>Penjualan</h4>
        <div className="utama-list-penjualan">
          <div className="utama-produk-mentahan">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </div>
          <div className="utama-produk-daur-ulang">
              <div className="card-penjualan">
              </div>
            </div>
        </div>       
      </div>
    </HOCmarketplace>
  );
};

export default MarketPlaceUtama;
