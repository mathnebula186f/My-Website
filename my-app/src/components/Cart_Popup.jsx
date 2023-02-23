import React from 'react'


function Cart_Popup(props) {
  function HandleClick(){
    props.ClosePop();
  }
  return (props.TriggerValue)?(
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={HandleClick}>close</button>
        {/* {props.children} */}
        <h3>Total Price={props.totPrice}</h3>
      </div>
    </div>
  ):"";
}

export default Cart_Popup
