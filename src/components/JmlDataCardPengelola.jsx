import "./styles/jmldatacardpengelola.css";

const JmlDataCardPengelola = (props) => {
  return (
    <div className="card-jmldata-dashboard-utama">
        <div className="konten-jmldata-dashutama">
            <iconify-icon icon="icons8:buy" />
            <div className="kontenisi-jmldata-dashutama">
                <h3>{props.jumlah}</h3>
                <p>{props.data}</p>
            </div>
        </div>
        <div className="konten-bawah-jmlhdata-dashutama">
            <span>Lihat Detail</span>
        </div>
    </div>
  );
};

export default JmlDataCardPengelola;