import { HOCmarketplace } from "../components/HOC"
import ProfileCard from "../components/ProfileCard"
import StatusTransaksi from "../components/StatusTransaksi"
import "./styles/akunprofile.css"
import { NavLink } from "react-router-dom"
import { useState} from "react"

const AkunProfile = () => {

  const [pagination, setPagination] = useState(0)
  const [active, setActive] = useState(true)

  const style = {
      transform: `translateX(${pagination}px)`
  };

  const className1 = active ? "pesanan-saya-menu" : "pesanan-saya-menu active"

  return (
    <HOCmarketplace>
        <div className="container-akun-profile">
            <ProfileCard/>
            <section className="akun-profile-right-content">
              <div className="wrapper-pesanan-saya">
              <h1>Pesanan Saya</h1>
              <section className="detail-pesanan-saya">
                <header className="pesanan-saya-navigation">
                  <div onClick={()=>{setPagination(0), setActive(false)}}  className={className1}>
                    <iconify-icon icon="material-symbols:payments-outline-rounded"/>
                    <h3>Status Transaksi</h3>
                    <span className="circle-notification">1</span>
                  </div>
                  <div onClick={()=>setPagination(-904)} className={active ? "pesanan-saya-menu" : "pesanan-saya-menu active"}>
                    <iconify-icon icon="lucide:package-open"/>
                    <h3>Dikemas</h3>
                    <span className="circle-notification">3</span>
                  </div>
                  <div  onClick={()=>setPagination(-1808)} className="pesanan-saya-menu">
                    <iconify-icon icon="tabler:truck-delivery"/>
                    <h3>Dikirim</h3>
                  </div>
                  <div  onClick={()=>setPagination(-2712)} className="pesanan-saya-menu">
                  <iconify-icon icon="lucide:package-check"/>
                    <h3>Pesanan Selesai</h3>
                    <span className="circle-notification">1</span>
                  </div>
                </header>
                <section style={style} className="content-nav-pesanan-saya">
                    <StatusTransaksi/>
                    <StatusTransaksi/>
                    <StatusTransaksi/>
                    <StatusTransaksi/>  
                </section>
              </section>
              </div>
              <section className="profile-setting-wrapper">

              </section>
            </section>
        </div>
    </HOCmarketplace>
  )
}

export default AkunProfile