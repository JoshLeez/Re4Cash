import { LinkButton } from "./Button";

const Artikelcard = (props) => {
  return (
    <div className="card-artikel">
      <div className="artikel-jenis-tipe">
        <img src={props.image} />
        <div className="judul-jenis-tipe">
          <h5>{props.kategori}</h5>
          <h5>{props.sub_Kategori}</h5>
        </div>
      </div>
      <div className="card-artikel-bottom-judul">
        <h5>{props.judul_Artikel}</h5>
        <p>
          {props.artikel}
        </p>
      </div>
      <LinkButton type="SECONDARY" to={`/detailarticle/${props.id_Artikel}`}>Baca Artikel</LinkButton>
    </div>
  );
};

export default Artikelcard;
