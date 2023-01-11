import "./styles/grafikcardpengelola.css";

const GrafikCardPengelola = (props) => {
  return (
    <div className="card-grafik-dashboard-utama">
        <div className="icon-grafik-dashboard-utama">
            <iconify-icon icon="icons8:buy" />
        </div>
        <div className="content-grafik">
            <p>{props.title}</p>
            <h3>{props.nilai}</h3>
        </div>
        <img src="grafik-dashboard-pengelola.svg" />
    </div>
  );
};

export default GrafikCardPengelola;