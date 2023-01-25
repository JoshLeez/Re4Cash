import { HOCAkunProfile } from "../components/HOC";
import ProfileCard from "../components/ProfileCard";
import "./styles/notifikasi.css";

const Notifikasi = () => {
  return (
    <HOCAkunProfile title="Profile | Notifikasi">
      <div className="container-akun-profile">
        <ProfileCard />
        <div className="container-notifikasi">
          <header className="header-notifikasi">
            <h2>Notifikasi (12)</h2>
            <button className="btn-mark-read">
              <div>
                <iconify-icon icon="material-symbols:check-small-rounded" />
                <iconify-icon icon="material-symbols:check-small-rounded" />
              </div>
              <h4>Mark as read</h4>
            </button>
          </header>
          <section className="detail-notification">
            <div className="list-notification">
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
              <div className="wrapper-notification">
                <div className="notification-date-text">
                  <p>Terimakasih akun anda telah kami verifikasi</p>
                  <span>Des 21, 2022 at 09:15 AM</span>
                </div>
                <img src="/logore4cash.svg" />
              </div>
            </div>
            <button>View all notification</button>
          </section>
        </div>
      </div>
    </HOCAkunProfile>
  );
};

export default Notifikasi;
