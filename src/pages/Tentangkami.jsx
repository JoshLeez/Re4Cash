import HOC from "../components/HOC";
import Ourservice from "../components/Ourservice";
import "./styles/tentangkami.css";

const TentangKami = () => {
  return (
    <HOC title="Re4Cash - Tentang Kami">
      <div className="tentangkami-banner">
        <img src="/tentang-kami-hero.png" />
        <h1>Tentang Kami</h1>
      </div>
      <section className="our-vision">
        <div className="content-our-vision">
          <div className="title-content-vision">
            <h2>Our Vision</h2>
            <div className="garis" />
          </div>
          <p>
            Menciptakan sebuah website yang yang dapat menjadi pelopor yang
            paling berharga di Indonesi dan Champion of financial Income for
            society. Dan dapat membantu lingkungan kembali bersih , aman, dan
            nyaman. Tindakan Ekologi mencantumkan Visi Daur Ulang. Kami juga
            mengajak masyarakat ke Vision Recycling. Mewujudkan Pengelolaan
            Lingkungan Hidup Yang Berkualitas Menuju Masyarakat Yang Berwawasan
            Kreatif dan paduli terhadap Lingkungan.
          </p>
        </div>
      </section>
      <section className="our-mission">
        <img src="/our-mission.png" />
        <div className="content-our-mission">
          <h2>Our Mission</h2>
          <ol>
            <li>
              Meningkatkan Kualitas Sumberdaya Manusia dan Data Serta Penyediaan
              Edukasi Untuk Pengelolaan Limbah Agar Bernilai Ekonomis
            </li>
            <li>
              Meningkatkan Rasa Peduli Terhadap Pengendalian Pencemaran dan/
              atau kerusakan Lingkungan Hidup dalam rangka pelestarian
              lingkungan hidup.
            </li>
            <li>
              Meningkatkan Pengelolaan Sumber Daya Manusia, Sumber Daya Alam dan
              Lingkungan Hidup yang terintegrasi
            </li>
            <li>
              Mewujudkan Peningkatan Peran dan Partisipasi Masyarakat Untuk
              Berfikir Kreatif dan Inovatif.
            </li>
          </ol>
        </div>
      </section>
      <section className="our-service">
        <h2>Our Service</h2>
        <div className="list-our-service">
          <Ourservice
            icon="ri:customer-service-2-line"
            title="Layanan Terbaik"
            description="Re4cash dapat menjadi solusi terbaik untuk melakukan pelayanan sebaik
          mungkin kepada para pengguna"
          />
          <Ourservice
            icon="mdi:access-point"
            title="Edukasi"
            description="Re4cash dapat memberi edukasi 
          mengenai penanganan sampah serta cara mengolahnya"
          />
          <Ourservice
            icon="material-symbols:menu-book-outline-sharp"
            title="Akses Luas"
            description="Re4cash dapat membantu mendistribuskan limbah maupun hasil kelola
           langsung ke konsumen disetiap daerah "
          />
          <Ourservice
            icon="mdi:hand-coin-outline"
            title="Keuntungan"
            description="Re4cash dapat menjadi solusi bagi masyarakat  yang cukup 
          menguntungkan dan tambahan penghasilan."
          />
          <Ourservice
            icon="mdi:shield-check-outline"
            title="Aman"
            description="Re4cash dapat membantu pendistribusian 
            limbah yang dibutuhkan oleh Mitra dengan aman dan terpecaya."
          />
        </div>
      </section>
      <div className="our-social-media">
        <div className="icon-nama-social">
          <iconify-icon icon="ph:tiktok-logo-light" />
          <h3>@re4Cash</h3>
        </div>
        <div className="icon-nama-social">
          <iconify-icon icon="radix-icons:twitter-logo" />
          <h3>@re4Cash</h3>
        </div>
        <div className="icon-nama-social">
          <iconify-icon icon="radix-icons:twitter-logo" />
          <h3>re4cash</h3>
        </div>
        <div className="icon-nama-social">
          <iconify-icon icon="ant-design:facebook-outlined" />
          <h3>@re4cash</h3>
        </div>
      </div>
      <div className="team-kami">
        <h1>Team</h1>
        <div className="profile-team-kami">
          <div className="card-profile-team">
            <img src="/team-kami/zainuddin.svg" />
            <div className="nama-role">
              <h3>Zainuddin</h3>
              <h6>Project Manager</h6>
            </div>
          </div>
          <div className="card-profile-team">
            <img src="/team-kami/bintang.svg" />
            <div className="nama-role">
              <h3>Muhammad Bintang S</h3>
              <h6>Hipster</h6>
            </div>
          </div>
          <div className="card-profile-team">
            <img src="/team-kami/adelia.svg" />
            <div className="nama-role">
              <h3>Adelia Hana Kuncoro</h3>
              <h6>Hipster</h6>
            </div>
          </div>
          <div className="card-profile-team">
            <img src="/team-kami/mustika.svg" />
            <div className="nama-role">
              <h3>Mustika Lutfiani Kodir</h3>
              <h6>Hacker</h6>
            </div>
          </div>
          <div className="card-profile-team">
            <img src="/team-kami/rezal.svg" />
            <div className="nama-role">
              <h3>Muhammad Rezal S</h3>
              <h6>Hacker</h6>
            </div>
          </div>
          <div className="card-profile-team">
            <img src="/team-kami/josh.svg" />
            <div className="nama-role">
              <h3>Josh Lee</h3>
              <h6>Hacker</h6>
            </div>
          </div>
        </div>
      </div>
    </HOC>
  );
};

export default TentangKami;
