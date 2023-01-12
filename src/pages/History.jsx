import React from 'react'
import HistoryPesanan from '../components/HistoryPesanan'
import { HOCmarketplace } from '../components/HOC'
import ProfileCard from '../components/ProfileCard'
import "./styles/history.css"

const History = () => {
  return (
    <HOCmarketplace title="Profile | History">
        <div className="container-akun-profile">
            <ProfileCard />

            <section className="akun-profile-right-content">
                <h1>History</h1>
                <HistoryPesanan/>
                {/* <div className="container-halaman-tabungan">
                    <div className="">
                        
                    </div>
                </div> */}
            </section>

        </div>

    </HOCmarketplace>
  )
}

export default History
