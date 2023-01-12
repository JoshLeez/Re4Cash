import './App.css'
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
import DashboardPengelola from './pages/DashboardPengelola'
import KontakKami from './pages/KontakKami'
import MarketplacePembelian from './pages/MarketplacePembelian'
import DetailArticle from './pages/DetailArticle'



function App() {
  return (
    <div className="App">
      <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Beranda/>}/>
          <Route path="/edukasi" element={<Edukasi/>}/>
          <Route path="/tentangkami" element={<TentangKami/>}/>
          <Route path="/marketplace" element={<MarketPlaceUtama/>}/>
          <Route path="/detail-product" element={<DetailProduct/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/profile-user" element={<AkunProfile/>}/>
          <Route path="/marketplace-penjualan" element={<MarketplacePenjualan/>}/>
          <Route path="/dashboard-pengelola" element={<DashboardPengelola/>}/>
          <Route path="/kontak" element={<KontakKami/>}/>
          <Route path="/marketplace-pembelian" element={<MarketplacePembelian/>}/>
          <Route path='/detailarticle' element={<DetailArticle />}/>
        </Routes>
    </div>
  );
}

export default App;
