const OrganikKategori = ({img, title}) => {
  return (
    <div className="organik-item-wrapper">
      <div className="organik-item">
        <img src={img} />
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default OrganikKategori;
