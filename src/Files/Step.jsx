import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Pack from "./Smallcompo/Pack";
function Step() {
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
                  <h2 className="name">Proces Steps</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="#">Home</a> */}
                      <Link as="Link" to="/" className="links">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="links">Proces Steps</a>
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
                  <h2>Process steps</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-process-steps">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="h2-step-all-box">
                  <div className="h2-step-box">
                    <div className="icon">
                      <span className="flaticon-graphic" />
                    </div>
                    <div className="content">
                      <h4 className="title">Analize Business</h4>
                      <p className="text">
                        There are many variations of passages Lorem Ipsum
                        available but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                  <div className="h2-step-box">
                    <div className="icon">
                      <span className="flaticon-gestures" />
                    </div>
                    <div className="content">
                      <h4 className="title">Advice Business Plan</h4>
                      <p className="text">
                        There are many variations of passages Lorem Ipsum
                        available but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                  <div className="h2-step-box">
                    <div className="icon">
                      <span className="flaticon-strategical-planning" />
                    </div>
                    <div className="content">
                      <h4 className="title">Strategic Business Plan</h4>
                      <p className="text">
                        There are many variations of passages Lorem Ipsum
                        available but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                  <div className="h2-step-box">
                    <div className="icon">
                      <span className="flaticon-exam" />
                    </div>
                    <div className="content">
                      <h4 className="title">Results of Business Plan</h4>
                      <p className="text">
                        There are many variations of passages Lorem Ipsum
                        available but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <Pack></Pack>
        {/* footer-start */}
        <Footer></Footer>
      </>
    </div>
  );
}
export default Step;
