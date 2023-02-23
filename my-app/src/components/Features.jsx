import React from "react";

function Features(){
    return (
      <section id="features">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-4 ">
              <div class="feature-icon">
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <h3 class="feature-headings">Easy to use.</h3>
              <p>So easy to use.</p>
            </div>
            <div class="col-lg-4">
              <div class="feature-icon">
                <i class="fa-solid fa-bullseye"></i>
              </div>
              <h3 class="feature-headings">Elite Clientele</h3>
              <p>We have all the Pastries, the greatest Pastries.</p>
            </div>
            <div class="col-lg-4">
              <div class="feature-icon">
                <i class="fa-solid fa-heart"></i>
              </div>
              <h3 class="feature-headings">Guaranteed to work.</h3>
              <p>Find the love of your Pastries or your money back.</p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Features;