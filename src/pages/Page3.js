import { Link } from "react-router-dom";
import { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { useRecoilState, useRecoilValue } from 'recoil'
import { toggleChecked } from '../atoms'
import { getCart } from "../atoms";
import { useNavigate } from 'react-router-dom'

function Page3(){
  const navigate = useNavigate();
  const [myCart, setMyCart] = useRecoilState(getCart);
  const yearOrMonth = useRecoilValue(toggleChecked);
  const [serviceChecked, setServiceChecked] = useState(false);
  const [storageChecked, setStorageChecked] = useState(false);
  const [profileChecked, setProfileChecked] = useState(false);

  const handleServiceChecked = (event) => {
        setServiceChecked(event.target.checked)
        console.log(serviceChecked) 
  };

  const handleStorageChecked = (event) => {
        setStorageChecked(event.target.checked) 
  };

  const handleProfileChecked = (event) => {
        setProfileChecked(event.target.checked) 
  };

  function handleClick(){
    if(serviceChecked){
      setMyCart({
          OnlineServiceName: "Online Service",
          OnlineServiceTerms: "mo",
          OnlineServicePrice: "1",
      })
      console.log(myCart)
      
    }
    navigate('/page4')
  }


  return (
    <>
    <div className='form-ctn'>
      <form>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="addOn-item-ctn">
          <Checkbox 
              color="primary"
              checked={serviceChecked} 
              onChange={handleServiceChecked}
              inputProps={{'aria-label': 'Online Services'}} 
              sx={{
                  borderRadius: 5,
                }}
              />
          <div className='addOn-text'>
            <h4>Online Services</h4>
            <p className="addOn-description">Acces to multiplayer games</p>
          </div>
          <p className="addOn-price">{!yearOrMonth ? "+1/mo" : "+10/yr"}</p>
        </div>
        
        <div className="addOn-item-ctn">
          <Checkbox 
              color="primary"
              checked={storageChecked} 
              onChange={handleStorageChecked}
              inputProps={{'aria-label': 'Online Services'}} 
              sx={{
                  borderRadius: 5,
                }}
              />
          <div className='addOn-text'>
            <h4>Larger storage</h4>
            <p className="addOn-description">Extra 1TB of cloud storage</p>
          </div>
          <p className="addOn-price">{!yearOrMonth ? "+2/mo" : "+20/yr"}</p>
        </div>

        <div className="addOn-item-ctn">
          <Checkbox 
              color="primary"
              checked={profileChecked} 
              onChange={handleProfileChecked}
              inputProps={{'aria-label': 'Online Services'}} 
              sx={{
                  borderRadius: 5,
                }}
              />
          <div className='addOn-text'>
            <h4>Online Services</h4>
            <p className="addOn-description">Acces to multiplayer games</p>
          </div>
          <p className="addOn-price">{!yearOrMonth ? "+2/mo" : "+20/yr"}</p>
        </div>
      </form>
      <button onClick={handleClick}>Testing 123</button>
    </div>
    </>
  )
}

export default Page3
