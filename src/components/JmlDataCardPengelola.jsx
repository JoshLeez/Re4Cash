import "./styles/jmldatacardpengelola.css";

const JmlDataCardPengelola = (props) => {
  return (
    <div className="card-jmldata-dashboard-utama">
      <div className="konten-jmldata-dashutama">
        <iconify-icon icon={props.icon} />
        <div className="kontenisi-jmldata-dashutama">
          <h3>{props.jumlah}</h3>
          <p>{props.data}</p>
        </div>
      </div>
      <div className="konten-bawah-jmlhdata-dashutama">
        <h5>Lihat Detail</h5>
      </div>
    </div>
  );
};

export default JmlDataCardPengelola;
