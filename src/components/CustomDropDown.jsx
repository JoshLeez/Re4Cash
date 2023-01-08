import "./styles/dropdown.css"
import {useState} from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'
const CustomDropDown = () => {

const [toggle,setToggle] = useState(false)

const toggleHandler = () =>{
    setToggle(!toggle);
}


    return (
    <div className="custom-dd-container" style={{  height: toggle  && "auto"}}>
        <div role="select" aria-expanded={toggle} onClick={toggleHandler} className={toggle ? "dropdown-custom actived" : "dropdown-custom"}>
            Kami Jemput
            <UilAngleDown className="arrow-rotation" style={{transform: toggle && "rotate(-180deg)"}} size="24px"/>
        </div>
        {toggle && <div className="db-option-custom">
            <div onClick={toggleHandler}>Kami Jemput</div>
            <div onClick={toggleHandler}>Antar Sendiri</div>
            <div onClick={toggleHandler}>Kurir</div>
        </div>}
    </div>
 
  )
}

export default CustomDropDown