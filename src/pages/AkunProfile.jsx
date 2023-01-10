import { HOCmarketplace } from "../components/HOC"
import ProfileCard from "../components/ProfileCard"
import "./styles/akunprofile.css"

const AkunProfile = () => {
  return (
    <HOCmarketplace>
        <div className="container-akun-profile">
            <ProfileCard/>
            <section className="wrapper-pesanan-saya">
              <h1>Pesanan Saya</h1>
              <div className="detail-pesanan-saya">
                <header className="pesanan-saya-navigation">

                </header>
              </div>
            </section>
        </div>
    </HOCmarketplace>
  )
}

export default AkunProfile