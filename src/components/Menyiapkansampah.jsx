
const MenyiapkanSampah = ({title, description, icon}) => {
  return (
    <div className='content-menyiapkan-sampah'>
        <span className='number-menyiapkan'>
         <iconify-icon icon={icon}/>
        </span>
        <div className='word-menyiapkan-sampah'>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default MenyiapkanSampah