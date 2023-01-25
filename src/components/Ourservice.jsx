const Ourservice = ({ icon, title, description }) => {
  return (
    <div className="content-our-service">
      <iconify-icon icon={icon} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Ourservice;
