import Beranda from './pages/Beranda'
import {Routes, Route, ScrollRestoration} from 'react-router-dom'
import Edukasi from './pages/Edukasi'
import TentangKami from './pages/TentangKami'
import MarketPlaceUtama from './pages/MarketPlaceUtama'
import DetailProduct from './pages/DetailProduct'
import { Checkout } from './pages/Checkout'
import ScrollToTop from './components/ScrollToTop'
import AkunProfile from './pages/AkunProfile'
import MarketplacePenjualan from './pages/MarketplacePenjualan'
import KontakKami from './pages/KontakKami'
import MarketplacePembelian from './pages/MarketplacePembelian'
import DetailArticle from './pages/DetailArticle'
import Tabungan from './pages/Tabungan'
import History from './pages/History'
import KebijakanPrivasi from './pages/KebijakanPrivasi'
import Notifikasi from './pages/Notifikasi'
import Keranjang from './pages/Keranjang'

function App() {
  return (
    <>
      <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Beranda/>}/>
          <Route path="/edukasi" element={<Edukasi/>}/>
          <Route path="/tentangkami" element={<TentangKami/>}/>
          <Route path="/marketplace" element={<MarketPlaceUtama/>}/>
          <Route path="/detail-product" element={<DetailProduct/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/profile-user/:id" element={<AkunProfile/>}/>
          <Route path="/marketplace-penjualan" element={<MarketplacePenjualan/>}/>
          <Route path="/kontak" element={<KontakKami/>}/>
          <Route path="/marketplace-pembelian" element={<MarketplacePembelian/>}/>
          <Route path='/detailarticle/:id' element={<DetailArticle />}/>
          <Route path="/tabungan" element={<Tabungan/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/kebijakanprivasi" element={<KebijakanPrivasi/>}/>
          <Route path="/notifikasi" element={<Notifikasi/>}/>
          <Route path="/keranjang" element={<Keranjang/>}/>
        </Routes>
    </>
  );
}

export default App;
