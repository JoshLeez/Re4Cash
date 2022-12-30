import AnorganikKategori from "../components/AnorganikKategori";
import OrganikKategori from "../components/OrganikKategori"
import CarouselMarket from "../components/CarouselMarket";
import { HOCmarketplace } from "../components/HOC";
import "./styles/marketplace.css";
import { UilAngleRightB } from '@iconscout/react-unicons'
import ItemKg, {ItemNumber} from "../components/ItemKg";

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
      <section className="marketplace-utama-penjualan">
        <h4>Penjualan</h4>
        <div className="utama-list-penjualan">
          <div className="utama-produk-mentahan">
            <ItemKg/>
            <ItemKg/>
            <ItemKg/>
            <ItemKg/>
            <div className="marketplace-penjualan-button">
            <div className="penjualan-button-title">
                <h4>Mentahan</h4>
                <UilAngleRightB size="32px"/>
              </div>
            </div>
          </div>
        </div>       
        <div className="utama-list-penjualan">
          <div className="utama-produk-mentahan">
            <ItemKg/>
            <ItemKg/>
            <ItemKg/>
            <ItemKg/>
            <div className="marketplace-penjualan-button">
              <div className="penjualan-button-title">
                <h4>Produk Daur Ulang</h4>
                <UilAngleRightB size="42px"/>
              </div>
            </div>
          </div>
        </div>       
      </section>
      <section className="marketplace-utama-pembelian">
        <h4>Pembelian</h4>
        <div className="utama-list-penjualan">
          <div className="utama-produk-mentahan">
            <ItemNumber/>
            <ItemNumber/>
            <ItemNumber/>
            <ItemNumber/>
            <div className="marketplace-pembelian-button">
            <div className="penjualan-button-title">
                <h4>Lapak Pencari Pembeli</h4>
                <UilAngleRightB size="64px"/>
              </div>
            </div>
          </div>
        </div>       
      </section>
    </HOCmarketplace>
  );
};

export default MarketPlaceUtama;
