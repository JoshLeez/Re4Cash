import React from 'react'
import HistoryPesanan from '../components/HistoryPesanan'
import { HOCAkunProfile} from '../components/HOC'
import ProfileCard from '../components/ProfileCard'
import "./styles/history.css"

const History = () => {
  return (
    <HOCAkunProfile title="Profile | History">
        <div className="container-akun-profile">
            <ProfileCard />
            <section className="akun-profile-right-content">
                <h1>History</h1>
                <HistoryPesanan/>
            </section>

        </div>

    </HOCAkunProfile>
  )
}

export default History
