import React, {useState} from 'react'
import ReactSwitch from 'react-switch'
import { useRecoilState } from 'recoil'
import { getCart, toggleChecked } from '../atoms'
import { PlanData } from '../data/PlanData'
import '../styles/pages.css'
import { useNavigate } from 'react-router-dom'

const Page2 = () => {
    const [checked, setChecked] = useRecoilState(toggleChecked)
    const [myCart, setMyCart] = useRecoilState(getCart)
    const [isActive, setIsActive] = useState({activeObject: null,})
    const navigate = useNavigate()

    function toggleActive(index){
      setIsActive({ ...isActive, activeObject: PlanData[index]});
    }
    function handleChange(){
        console.log(checked)
        setChecked(!checked)
    }

    function handleClick(){
        if(isActive.activeObject === null){
            console.log("add item to cart")
        } else if(!checked){
            setMyCart({
                serviceName: isActive.activeObject.name,
                serviceTerms: "Month",
                servicePrice: isActive.activeObject.dollarsPerMonths
            });
            navigate("/page3");
            console.log(myCart)
        } else if(checked) {
            setMyCart({
                serviceName: isActive.activeObject.name,
                serviceTerms: "Year",
                servicePrice: isActive.activeObject.dollarsPerYear
            });
            navigate("/page3");
        } 
        console.log(myCart)
      }

  function toggleActiveClass(index){
    if(PlanData[index] === isActive.activeObject){
      return "plan-ctn-selected"
    } else {
      return "plan-ctn"
    }
  }

    const importedMonthPlanData =  PlanData.map((item, index) => {
        return (
        <div id={index} key={index} className={toggleActiveClass(index)} onClick={() => {toggleActive(index)}}>
          <img src={item.icon} alt={item.alt}/>
          <div className="plan-text">
            <h4>{item.name}</h4>
            <p className="plan-price">${item.dollarsPerMonths}/mo</p>
          </div>
        </div>
      )})
    
      const importedYearPlanData =  PlanData.map((item, index) => {
        return (
        <div key={index} className={toggleActiveClass(index)} onClick={() => {toggleActive(index)}}>
          <img src={item.icon} alt={item.alt}/>
          <div className="plan-text">
            <h4>{item.name}</h4>
            <p className="plan-price">${item.dollarsPerYear}/yr</p>
            <p>2 months free</p>
          </div>
        </div>
      )})

  return (
    <div className='item-wrapper'>
        <h4>Select your plan</h4>
        <p>You have the option of monthly or yearly billing</p>
        {checked ? importedYearPlanData : importedMonthPlanData}
        <div className="switch-ctn">
            <h5>Monthly</h5>    
                <ReactSwitch 
                        className="switch"
                        onChange={handleChange} 
                        checked={checked}
                        uncheckedIcon={false} 
                        checkedIcon={false} 
                        height={20}
                        width={35}
                        handleDiameter={10}
                        offColor='#02295a'
                        onColor='#02295a'
                    />
            <h5>Yearly</h5>    
        </div>
        <button onClick={() => handleClick()}>Test</button>    
    </div>
  )
}

export default Page2 