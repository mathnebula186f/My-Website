import React from "react";
import MyImage from "../images/Logo1.png"
import Title from "./Title"
import Features from "./Features";
import Testimonials from "./Testimonials";
import Press from "./Press";
import Pricing from "./Pricing";
import Cta from "./cta";
import Footer from "./Footer";
import Cart_Popup from "./Cart_Popup";
import { useState } from "react";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fontawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function App(props){
  const [TriggerState, SetTrigger] = useState(0);
  const [totalPrice,SetPrice]=useState(0);
  function HandleClick() {
    if(TriggerState===0){
      SetTrigger(1);
    }
    else{
      SetTrigger(0);
    }
    
  }
  function HandlePrice(price){
    SetPrice(price);
  }
  

  return (
    <div>
      <Cart_Popup TriggerValue={TriggerState} ClosePop={HandleClick} totPrice={totalPrice} />
      <Title OpenCartPop={HandleClick} firstName={props.firstName}/>
      {/* <img src={MyImage}/> */}
      <Features/>
      <Testimonials/>
      {/* <Press/>   */}
      <Pricing NewPrice={HandlePrice}/>
      <Cta/>
      <Footer/>
    </div>
);
}

export default App;