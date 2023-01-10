import { HOCmarketplace } from "../components/HOC"
import ProfileCard from "../components/ProfileCard"


const AkunProfile = () => {
  return (
    <HOCmarketplace>
        <div className="container-akun-profile">
            <ProfileCard/>
        </div>
    </HOCmarketplace>
  )
}

export default AkunProfile