import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
  integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
  crossorigin="anonymous"
></link>;

function Map() {
  const cartitem = useSelector((state) => state.cart.cart);
  return (
    <div>
      <>
        {/* header-start */}
        <Header></Header>
       
        {/* header-end */}
        {/* breadcumb-area-start */}
        <div className="breadcumb-area bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcumb">
                  <h2 className="name">Maps</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="#">Home</a> */}
                      <Link className="links" as="Link" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a className="links" href="#">Maps</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        <div className="shortcode-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div className="section-title">
                  <h6>Shortcodes</h6>
                  <h2>Maps</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 style={{fontFamily:"monospace"}}>Google Map here</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4325983864323!2d72.6634242!3d23.0445966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871e10d7a713%3A0x9055cdb0e128acff!2sPoonam%20bakery!5e0!3m2!1sen!2sin!4v1713872509326!5m2!1sen!2sin"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                
                style={{ border: "3px solid black" }}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
          <p>
            <a
              href="http://validator.w3.org/check?uri=http%3A%2F%2Fbootsnipp.com%2Fiframe%2Fb2BWe"
              className="pull-right"
              target="_blank"
            >
              <small>HTML</small>
              <sup>5</sup>
            </a>
          </p>
        </div>

        
        {/* footer-start */}
        <Footer></Footer>
        
      </>
    </div>
  );
}
export default Map;
