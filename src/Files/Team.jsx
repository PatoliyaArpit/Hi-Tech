import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Team() {

  return (
    <div>
      <>
        <Header></Header>

        {/* header-end */}
        {/* breadcumb-area-start */}
        <div className="breadcumb-area bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcumb">
                  <h2 className="name">Team</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="#">Home</a> */}
                      <Link as="Link" to="/" className="links">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="links">Team</a>
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
                  <h2>Team</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-team">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12 col-12">
                <div className="all-team">
                  <div className="single-team">
                    <div className="img">
                      <img src="img/home1/Team1.jpg" alt="" />
                      <div className="content">
                        <span className="default">
                          <i className="flaticon-network" />
                        </span>
                        <ul className="social">
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-team">
                    <div className="img">
                      <img src="img/home1/Team2.jpg" alt="" />
                      <div className="content">
                        <span className="default">
                          <i className="flaticon-network" />
                        </span>
                        <ul className="social">
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12 col-12">
                <div className="all-team">
                  <div className="single-team">
                    <div className="img">
                      <img src="img/home1/Team3.jpg" alt="" />
                      <div className="content">
                        <span className="default">
                          <i className="flaticon-network" />
                        </span>
                        <ul className="social">
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-team">
                    <div className="img">
                      <img src="img/home1/Team4.jpg" alt="" />
                      <div className="content">
                        <span className="default">
                          <i className="flaticon-network" />
                        </span>
                        <ul className="social">
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-start */}
        <Footer></Footer>
      </>
    </div>
  );
}
export default Team;
