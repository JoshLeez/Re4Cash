const Berandawhy = ({ title, description, img }) => {
  return (
    <div className="card-info-re4cash">
      <img src={img} />
      <div className="word-card-re4cash">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Berandawhy;
