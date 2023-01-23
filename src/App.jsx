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
import PengelolaKelolaLapakPenjualanEdit from './pages/PengelolaKelolaLapakPenjualanEdit'
import PengelolaKelolaLapakPencarian from './pages/PengelolaKelolaLapakPencarian'
import PengelolaKelolaLapakPencarianTambah from './pages/PengelolaKelolaLapakPencarianTambah'
import PengelolaKelolaLapakPencarianEdit from './pages/PengelolaKelolaLapakPencarianEdit'
import MenjadiPengelola from './pages/MenjadiPengelola'

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
          <Route path="/dashboard-pengelola/:id" element={<DashboardPengelola/>}/>
          <Route path="/kontak" element={<KontakKami/>}/>
          <Route path="/marketplace-pembelian" element={<MarketplacePembelian/>}/>
          <Route path='/detailarticle/:id' element={<DetailArticle />}/>
          <Route path="/tabungan" element={<Tabungan/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/profil-akun-pengelola/:id" element={<PengelolaProfilAkun/>}/>
          <Route path="/kebijakanprivasi" element={<KebijakanPrivasi/>}/>
          <Route path="/notifikasi" element={<Notifikasi/>}/>
          <Route path="/data-penjualan-pengelola/:id" element={<PengelolaDataPenjualan/>}/>
          <Route path="/data-penjualan-pengelola/edit" element={<PengelolaDataPenjualanEdit/>}/>
          <Route path="/data-pencarian-pengelola/:id" element={<PengelolaDataPencarian/>}/>
          <Route path="/data-pencarian-pengelola/edit" element={<PengelolaDataPencarianEdit/>}/>
          <Route path="/data-tabungan-pengelola/:id" element={<PengelolaDataTabungan/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola/:id" element={<PengelolaKelolaLapakPenjualan/>}/>
          <Route path="/keranjang" element={<Keranjang/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola/tambah" element={<PengelolaKelolaLapakPenjualanTambah/>}/>
          <Route path="/kelola-lapak-penjualan-pengelola/edit" element={<PengelolaKelolaLapakPenjualanEdit/>}/>
          <Route path="/kelola-lapak-pencarian-pengelola/:id" element={<PengelolaKelolaLapakPencarian/>}/>
          <Route path="/kelola-lapak-pencarian-pengelola/tambah" element={<PengelolaKelolaLapakPencarianTambah/>}/>
          <Route path="/kelola-lapak-pencarian-pengelola/edit" element={<PengelolaKelolaLapakPencarianEdit/>}/>
          <Route path="/menjadi-pengelola" element={<MenjadiPengelola/>}/>
        </Routes>
    </>
  );
}

export default App;
