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
import Tabungan from './pages/Tabungan'
import History from './pages/History'
import PengelolaProfilAkun from './pages/PengelolaProfilAkun'
import KebijakanPrivasi from './pages/KebijakanPrivasi'
import Notifikasi from './pages/Notifikasi'
import PengelolaDataPenjualan from './pages/PengelolaDataPenjualan'
import PengelolaDataPenjualanEdit from './pages/PengelolaDataPenjualanEdit'
import PengelolaDataPencarian from './pages/PengelolaDataPencarian'
import PengelolaDataPencarianEdit from './pages/PengelolaDataPencarianEdit'
import PengelolaDataTabungan from './pages/PengelolaDataTabungan'
import PengelolaKelolaLapakPenjualan from './pages/PengelolaKelolaLapakPenjualan'
import Keranjang from './pages/Keranjang'
import PengelolaKelolaLapakPenjualanTambah from './pages/PengelolaKelolaLapakPenjualanTambah'

function App() {
  return (
    <>
      {/* <ScrollToTop/> */}
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
          <Route path="/tabungan" element={<Tabungan/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/profil-akun-pengelola" element={<PengelolaProfilAkun/>}/>
          <Route path="/kebijakanprivasi" element={<KebijakanPrivasi/>}/>
          <Route path="/notifikasi" element={<Notifikasi/>}/>
          <Route path="/data-penjualan-pengelola" element={<PengelolaDataPenjualan/>}/>
          <Route path="/data-penjualan-pengelola/edit" element={<PengelolaDataPenjualanEdit/>}/>
          <Route path="/data-pencarian-pengelola" element={<PengelolaDataPencarian/>}/>
          <Route path="/data-pencarian-pengelola/edit" element={<PengelolaDataPencarianEdit/>}/>
          <Route path="/data-tabungan-pengelola" element={<PengelolaDataTabungan/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola" element={<PengelolaKelolaLapakPenjualan/>}/>
          <Route path="/keranjang" element={<Keranjang/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola/tambah" element={<PengelolaKelolaLapakPenjualanTambah/>}/>
        </Routes>
    </>
  );
}

export default App;
