import React,{useState} from "react";
import {prodItems} from "../Data";
import Product from "./Product";


function Pricing(props){

    const totalProducts=prodItems.length;
    const [currentProduct,updateCurrentProduct]=useState(1);
    //current Product tells the middle product
    const [addState,setState]=useState([]);
    const [TotalPrice,SetTotalPrice]=useState(0);
    var j=0;
    while(j<totalProducts){
      addState.push(0);
      j++;
    }
    //addState tells the value if its zero it means it is not added if it is one
    function updateState(price){
      console.log("Current  function paased Price="+price);
        var index=price-1;
        
        var newArray=[]
        var p=0;
        while(p<totalProducts){
          if(p===index){
            newArray.push(1);
          }
          else{
            newArray.push(addState[p])
          }
          p++;
        }
        setState(newArray);
        var prevPrice = TotalPrice;
        console.log("Current Total Price value is= "+TotalPrice)
        SetTotalPrice(prevPrice + price);
        console.log("after updation Current Total Price value is= " + TotalPrice);

        props.NewPrice(TotalPrice+price);
    }
    function updateCurrentProductNext(){
      console.log(currentProduct);
      var i=currentProduct%totalProducts;
      updateCurrentProduct((i+3)%totalProducts);
            console.log(currentProduct);

    }
    function updateCurrentProductPrev(){
      console.log(currentProduct);
      var i=currentProduct%totalProducts;
      if(i===1){
        updateCurrentProduct(totalProducts-2);
      }
      else if(i==0){
        updateCurrentProduct(totalProducts-3);
      }
      else if(i==2){
        updateCurrentProduct(totalProducts-1)
      }
      else{
        updateCurrentProduct(i-3);
      }
      console.log(currentProduct);
    }
    // function required

    return (
      <section id="pricing">
        <div id="pricing-carousel" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <Product
                  name={
                    prodItems[
                      currentProduct === 0
                        ? totalProducts - 1
                        : currentProduct - 1
                    ].name
                  }
                  price={
                    prodItems[
                      currentProduct === 0
                        ? totalProducts - 1
                        : currentProduct - 1
                    ].price
                  }
                  state={
                    addState[
                      currentProduct === 0
                        ? totalProducts - 1
                        : currentProduct - 1
                    ]
                  }
                  updateState={updateState}
                />
                <Product
                  name={prodItems[currentProduct].name}
                  price={prodItems[currentProduct].price}
                  state={addState[currentProduct]}
                  updateState={updateState}
                />
                <Product
                  name={
                    prodItems[
                      currentProduct === totalProducts - 1
                        ? 0
                        : currentProduct + 1
                    ].name
                  }
                  price={
                    prodItems[
                      currentProduct === totalProducts - 1
                        ? 0
                        : currentProduct + 1
                    ].price
                  }
                  state={
                    addState[
                      currentProduct === totalProducts - 1
                        ? 0
                        : currentProduct + 1
                    ]
                  }
                  updateState={updateState}
                />
              </div>
            </div>

            {/* <div class="carousel-item">
              <div class="row">
                {prodItems
                  .filter((item, index) => (index<7&&3<index))
                  .map((item) => {
                    return <Product name={item.name} price={item.price} />;
                  })}
              </div>
            </div>  */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#pricing-carousel"
            data-bs-slide="prev"
            onClick={updateCurrentProductPrev}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#pricing-carousel"
            data-bs-slide="next"
            onClick={updateCurrentProductNext}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    );
}

export default Pricing;



























<section id="pricing">
        {/* <h2 class="pricing-heading">A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p> */}
        <div id="pricing-carousel" class="carousel-slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h1>gopal</h1>
            </div>
            <div class="carousel-item ">
              <h1>gopi</h1>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#pricing-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#pricing-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>