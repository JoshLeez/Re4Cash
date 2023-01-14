import "./styles/dropdown.css"
import { useState} from 'react';
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



export const DDTarikPoint = () => {
    const [toggle,setToggle] = useState(false)

    return (
    <div className="custom-dd-tarik-point">
        <div className={toggle ? "tarik-point-dropdown active" : "tarik-point-dropdown"} onClick={()=>setToggle(!toggle)}>
            <h3>Bank</h3>
            <UilAngleDown className="arrow-rotation" style={{transform: toggle && "rotate(-180deg)"}} size="32px"/>
        </div>
    {toggle &&
        <div  className="list-option-tarikpoint">
            <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                    <img src="/bank/bri.svg"/>
                    <span>transfer ke (ATM, BRI Mobile, Internet Banking)</span>    
                </div>
                <span>Rp.0</span>
            </label> 
            <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                    <img src="/bank/bca.svg"/>
                    <span>transfer ke (ATM, m_BCA, Internet Banking)</span>    
                </div>
                <span>Rp. 2.500</span>
            </label> 
            <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                    <img src="/bank/mandiri.svg"/>
                    <span>transfer ke (ATM, mandiri Mobile, Internet Banking)</span>    
                </div>
                <span>Rp. 1.000</span>
            </label> 
            <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                    <img src="/bank/bni.svg"/>
                    <span>transfer ke (ATM, BNI Mobile, Internet Banking)</span>    
                </div>
                <span>Rp. 2.500</span>
            </label> 
        </div>
    }
    </div>
  )
}


export const SecTarikPoint = () => {
    const [toggle,setToggle] = useState(false)
    
    return (
    <div className="custom-dd-tarik-point-sec">
        <div className="tarik-point-dropdown-sec" onClick={()=>setToggle(!toggle)}>
            <h3>Gerai</h3>
            <UilAngleDown className="arrow-rotation" style={{transform: toggle && "rotate(-180deg)"}} size="32px"/>
        </div>
    {toggle &&
        <div  className="list-option-tarikpoint-sec">
             <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                    <img src="/gerai/alfamart.svg"/>
                    <span>bayar langsung ke alfamart</span>    
                </div>
                <span>Rp.2.500</span>
            </label> 
            <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                    <img src="/gerai/indomaret.svg"/>
                    <span>bayar langsung ke indomaret</span>    
                </div>
                <span>Rp. 2.500</span>
            </label> 
        </div>
    }
    </div>
  )
}

export const ThirdTarikPoint = () => {
    const [toggle,setToggle] = useState(false)
    
    return (
    <div className="custom-dd-tarik-point-sec">
        <div className="tarik-point-dropdown-sec" onClick={()=>setToggle(!toggle)}>
            <h3>Gerai</h3>
            <UilAngleDown className="arrow-rotation" style={{transform: toggle && "rotate(-180deg)"}} size="32px"/>
        </div>
    {toggle &&
        <div  className="list-option-tarikpoint-third">
             <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                    <img src="/dompet/dana.svg"/>
                    <span>bayar lewat Dana</span>    
                </div>
                <span>Rp.1.000</span>
            </label> 
            <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                       <img src="/dompet/gopay.svg"/>
                    <span>bayar lewat Gopay</span>    
                </div>
                <span>Rp. 3.000</span>
            </label> 
            <label className="wrapper-radio-btn-tarikpoint">
                <div className="radio-btn-tarikpoint">
                    <input type="radio" name="option-bank"/>
                       <img src="/dompet/ovo.svg"/>
                    <span>bayar lewat Ovo</span>    
                </div>
                <span>Rp. 2.500</span>
            </label>    
        </div>
    }
    </div>
  )
}
