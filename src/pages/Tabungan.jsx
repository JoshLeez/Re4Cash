import { HOCmarketplace } from "../components/HOC"
import ProfileCard from "../components/ProfileCard"
import "./styles/tabungan.css";

const Tabungan = () => {
  return (
    <HOCmarketplace title="">
        <div className="container-akun-profile">
            <ProfileCard/>
            <section className="akun-profile-right-content">
                <h1>Tabungan</h1>
                <div className="container-halaman-tabungan">
                    <div className="">

                    </div>
                </div>
            </section>
        </div>
    </HOCmarketplace>
  )
}

export default Tabungan