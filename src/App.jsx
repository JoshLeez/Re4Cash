import './App.css'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import {Routes, Route} from 'react-router-dom'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Beranda/>}/>
        </Routes>
    </div>
  )
}

export default App
