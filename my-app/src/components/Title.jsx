    import React from "react";
    import { Link } from "react-router-dom";
    import { useState } from "react";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fontawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

    function Title(props){
        function HandleCartClick() {
          props.OpenCartPop();
        }
        // const [first_name, SetFirstName] = useState("");


        return (
          <div>
            <section id="title">
              <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-dark">
                  <div class="navbar-brand" href="#">
                    <i className="fa-solid fa-cupcake"></i> flavourly
                  </div>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="#footer">
                          Contact
                        </a>{" "}
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a class="nav-link" href="#pricing">
                          Pricing
                        </a>
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a class="nav-link" href="#cta">
                          Download
                        </a>
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a class="nav-link" href="/Academy">
                          Academy
                        </a>
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a class="nav-link" href="#" onClick={HandleCartClick}>
                          Cart
                        </a>
                      </li>
                      <li class="nav-item">
                        {" "}
                        <a class="nav-link" href="/aboutAuthor">
                          About Founder
                        </a>
                      </li>
                      <li class="nav-item">
                        {" "}
                        <Link class="nav-link" to="/SignUp">
                          {console.log("Currently first name="+props.firstName)}
                          {(props.firstName==="")?"SignUp":"Welcome "+props.firstName}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>

                <div class="row">
                  <div class="col-lg-6">
                    <h1 class="big-heading">
                      Natural Desserts for every taste.
                    </h1>
                    <button
                      type="button"
                      class="btn btn-dark btn-lg download-button"
                    >
                      <i class="fa-brands fa-apple"></i> Download
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-light btn-lg download-button"
                    >
                      <i class="fa-brands fa-google-play"></i> Download
                    </button>
                  </div>

                  <div class="col-lg-6">
                    {/* <img
                      class="title-image"
                      src="images/iphone6.png"
                      alt="iphone-mockup"
                    /> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }

    export default Title;
    






