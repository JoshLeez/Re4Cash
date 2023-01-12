import { LinkButton } from "./Button";

const Artikelcard = () => {
  return (
    <div className="card-artikel">
      <div className="artikel-jenis-tipe">
        <img src="/safety-img.png" />
        <div className="judul-jenis-tipe">
          <h5>Anorganik</h5>
          <h5>Botol</h5>
        </div>
      </div>
      <div className="card-artikel-bottom-judul">
        <h5>Judul Artikel </h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has text...
        </p>
      </div>
      <LinkButton type="SECONDARY" to="/detailarticle">Baca Artikel</LinkButton>
    </div>
  );
};

export default Artikelcard;
