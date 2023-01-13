import "./styles/dropdown.css"
import {useState} from 'react';
import { UilAngleDown } from '@iconscout/react-unicons'

const CustomDropDown = () => {

const [toggle,setToggle] = useState(false)
const [value, setValue] = useState("Kami Jemput")

const toggleHandler = () =>{
    setToggle(!toggle);
}

const DdValue = (e) =>{
    setToggle(!toggle)
    setValue(e.target.getAttribute('data-value'))
}


    return (
        <div className="custom-dd-container">
            <div role="select"  defaultValue={"Kami Jemput"} aria-expanded={toggle} onClick={toggleHandler} className={toggle ? "dropdown-custom actived" : "dropdown-custom"}>
                {value}
                <UilAngleDown className="arrow-rotation" style={{transform: toggle && "rotate(-180deg)"}} size="24px"/>
            </div>
            {toggle && <div className="db-option-custom">
                <div data-value="Kami Jemput" onClick={(e)=>DdValue(e)}>Kami Jemput</div>
                <div data-value="Antar Sendiri" onClick={(e)=>DdValue(e)}>Antar Sendiri</div>
                <div data-value="Kurir" onClick={(e)=>DdValue(e)}>Kurir</div>
            </div>}
        </div>
  )
}

export default CustomDropDown


export const LongDropDown = () => {

    const [toggle,setToggle] = useState(false)
    const [value, setValue] = useState("Kami Jemput")

    const toggleHandler = () =>{
        setToggle(!toggle);
    }

    const DdValue = (e) =>{
        setToggle(!toggle)
        setValue(e.target.getAttribute('data-value'))
    }

  return (
        <div className="custom-dd-container">
            <div role="select"  defaultValue={"Kami Jemput"} aria-expanded={toggle} onClick={toggleHandler} className={toggle ? "long-dropdown-custom actived" : "long-dropdown-custom"}>
                {value}
                <UilAngleDown className="arrow-rotation" style={{transform: toggle && "rotate(-180deg)"}} size="24px"/>
            </div>
            {toggle && <div className="long-dd-option-custom">
                <div data-value="Kami Jemput" onClick={(e)=>DdValue(e)}>Kami Jemput</div>
                <div data-value="Antar Sendiri" onClick={(e)=>DdValue(e)}>Antar Sendiri</div>
                <div data-value="Kurir" onClick={(e)=>DdValue(e)}>Kurir</div>
            </div>}
        </div>
  )
}
