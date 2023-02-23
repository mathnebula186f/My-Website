import React from "react";

function Product(props){

    function HandleState(){
      props.updateState(props.price);
    }
    return (
      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="dog-names">{props.name}</h3>
          </div>
          <div class="card-body">
            <h2 class="prices">{props.price}</h2>
            <p>Delicious</p>
            <button type="button" onClick={HandleState} class="btn btn-lg btn-outline-dark w-100">
              {props.state===0?"Add":"Added"}
            </button>
          </div>
        </div>
      </div>
    );
}

export default Product;