

const AnorganikKategori = ({img, title}) => {
  return (
    <div className="anorganik-item-wrapper">
    <div className="anorganik-item">
      <img src={img}/>   
    </div>
    <h5>{title}</h5>
  </div>
  )
}

export default AnorganikKategori