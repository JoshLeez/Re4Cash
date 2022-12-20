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
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.
          </p>
        </div>
      </section>
      <section className="our-mission">
        <img src="/our-mission.png" />
        <div className="content-our-mission">
          <h2>Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id.
          </p>
        </div>
      </section>
      <section className="our-service">
        <h2>Our Service</h2>
        <div className="list-our-service">
          <Ourservice 
          icon="ri:customer-service-2-line"
          title="Layanan Terbaik"
          description="Re4cash dapat menjadi solusi terbaik untuk melakukan pelayanan sebaik
          mungkin kepada para pengguna"/>
          <Ourservice 
          icon="mdi:access-point"
          title="Edukasi"
          description="Re4cash dapat memberi edukasi 
          mengenai penanganan sampah serta cara mengolahnya"/>
          <Ourservice 
          icon="material-symbols:menu-book-outline-sharp"
          title="Akses Luas"
          description="Re4cash dapat membantu mendistribuskan limbah maupun hasil kelola
           langsung ke konsumen disetiap daerah "/> 
          <Ourservice 
          icon="mdi:hand-coin-outline"
          title="Keuntungan"
          description="Re4cash dapat menjadi solusi bagi masyarakat  yang cukup 
          menguntungkan dan tambahan penghasilan."/>
          <Ourservice 
          icon="mdi:shield-check-outline"
          title="Aman"
          description="Re4cash dapat membantu pendistribusian 
            limbah yang dibutuhkan oleh Mitra dengan aman dan terpecaya."/>
        </div>
      </section>
      <div className="our-social-media">

      </div>
    </HOC>
  );
};

export default TentangKami;
