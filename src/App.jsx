import './App.css'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Edukasi from './pages/Edukasi'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Beranda/>}/>
          <Route path="/edukasi" element={<Edukasi/>}/>
        </Routes>
        <Footer/>
    </div>
    
  )
}

export default App
