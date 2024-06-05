import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function ServiceD() {
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
                  <h2 className="name">Strategic Consulting</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="index.html">Home</a> */}
                      <Link as="Link" to="/" className="links">
                        Home
                      </Link>
                    </li>
                    <li>
                      {/* <a href="05_service.html">Services</a> */}
                      <Link as="Link" to="/Service" className="links">
                        Services
                      </Link>
                    </li>
                    <li>
                      <a href="06_service-details.html" className="links">Service Details</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        {/* service-details-area-start */}
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="service-details">
                  <div className="bd-img">
                    <img src="img/service/details-banner.jpg" alt="" />
                  </div>
                  <h2 className="bd-title">Business Strategic Consulting</h2>
                  <p className="bd-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form by a ac injected humour or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of that Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. <br />
                    <br />
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                  </p>
                  <div className="bd-accordion">
                    <h2 className="bda-title">
                      Not Yet Sure!! Let Us Provide Help Your Business Set Up
                      Tips! You Need This!
                    </h2>
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Which Plan Is Right For Me?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <h5 className="ques">
                              Do I have to Commit to a Contract?
                            </h5>
                            <p className="ans">
                              There are many variations of passages of Lorem
                              Ipsum available but the majority have suffered
                              alteration in the some form by injected humour or
                              randomised words which lightly believable.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              What Payment Methods Are Available?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <h5 className="ques">
                              Do I have to Commit to a Contract?
                            </h5>
                            <p className="ans">
                              There are many variations of passages of Lorem
                              Ipsum available but the majority have suffered
                              alteration in the some form by injected humour or
                              randomised words which lightly believable.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Performance Improvement
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <h5 className="ques">
                              Do I have to Commit to a Contract?
                            </h5>
                            <p className="ans">
                              There are many variations of passages of Lorem
                              Ipsum available but the majority have suffered
                              alteration in the some form by injected humour or
                              randomised words which lightly believable.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Results Delivery
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <h5 className="ques">
                              Do I have to Commit to a Contract?
                            </h5>
                            <p className="ans">
                              There are many variations of passages of Lorem
                              Ipsum available but the majority have suffered
                              alteration in the some form by injected humour or
                              randomised words which lightly believable.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-case-study">
                    <h2 className="bdcs-title">Related Case Studies</h2>
                    <div className="bdcs-carousel owl-carousel">
                      <div className="signle-bdcs">
                        <div className="img">
                          <img src="img/service/case-1.jpg" alt="" />
                        </div>
                        <div className="content">
                          <p className="bdcss-title">
                            Transforming Digital Strategy
                          </p>
                          <p className="bdcss-title-2">
                            There are many variations of that passages of Lorem.
                          </p>
                          <a className="bdcss-link" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="signle-bdcs">
                        <div className="img">
                          <img src="img/service/case-2.jpg" alt="" />
                        </div>
                        <div className="content">
                          <p className="bdcss-title">
                            Transforming Digital Strategy
                          </p>
                          <p className="bdcss-title-2">
                            There are many variations of that passages of Lorem.
                          </p>
                          <a className="bdcss-link" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="signle-bdcs">
                        <div className="img">
                          <img src="img/service/case-3.jpg" alt="" />
                        </div>
                        <div className="content">
                          <p className="bdcss-title">
                            Transforming Digital Strategy
                          </p>
                          <p className="bdcss-title-2">
                            There are many variations of that passages of Lorem.
                          </p>
                          <a className="bdcss-link" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="signle-bdcs">
                        <div className="img">
                          <img src="img/service/case-2.jpg" alt="" />
                        </div>
                        <div className="content">
                          <p className="bdcss-title">
                            Transforming Digital Strategy
                          </p>
                          <p className="bdcss-title-2">
                            There are many variations of that passages of Lorem.
                          </p>
                          <a className="bdcss-link" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="signle-bdcs">
                        <div className="img">
                          <img src="img/service/case-1.jpg" alt="" />
                        </div>
                        <div className="content">
                          <p className="bdcss-title">
                            Transforming Digital Strategy
                          </p>
                          <p className="bdcss-title-2">
                            There are many variations of that passages of Lorem.
                          </p>
                          <a className="bdcss-link" href="#">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
                <div className="sd-sidebar">
                  <div className="sdsw-feature sd-sidebar-widget">
                    <h4 className="title">Featured Cases</h4>
                    <ul className="list">
                      <li>
                        <a href="#">
                          <span className="img">
                            <img src="img/service/f-case-1.jpg" alt="" />
                          </span>
                          <span className="content">
                            <span className="name">
                              Business Planning Strategy in Your Company
                            </span>
                            <span className="type">Business Solutions</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img">
                            <img src="img/service/f-case-2.jpg" alt="" />
                          </span>
                          <span className="content">
                            <span className="name">
                              Business Developing Strategy Roadmap Ready
                            </span>
                            <span className="type">Marketing</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="img">
                            <img src="img/service/f-case-3.jpg" alt="" />
                          </span>
                          <span className="content">
                            <span className="name">
                              Management of Generation Changes in an
                              Organization
                            </span>
                            <span className="type">Business Research</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sdsw-free sd-sidebar-widget">
                    <h4 className="title">Free Consultation</h4>
                    <form action="#">
                      <div className="sdsw-free-input-box">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="sdsw-free-input-box">
                        <input type="email" placeholder="Your Email Addess" />
                      </div>
                      <div className="sdsw-free-input-box">
                        <textarea
                          placeholder="How can we help?"
                          defaultValue={""}
                        />
                      </div>
                      <div className="sdsw-free-input-box">
                        <input type="submit" defaultValue="send" />
                      </div>
                    </form>
                  </div>
                  <div className="sdsw-links sd-sidebar-widget">
                    <ul className="links">
                      <li>
                        <a href="#">
                          <span>
                            <i className="fas fa-angle-right" />
                          </span>{" "}
                          Trades &amp; Stocks
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fas fa-angle-right" />
                          </span>{" "}
                          Strategic Planning
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fas fa-angle-right" />
                          </span>{" "}
                          Secured Transaction
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fas fa-angle-right" />
                          </span>{" "}
                          Private Banking
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fas fa-angle-right" />
                          </span>{" "}
                          Savings &amp; Invesment
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fas fa-angle-right" />
                          </span>{" "}
                          Financial Planning
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sdsw-contact sd-sidebar-widget">
                    <h4 className="title">Contact Info</h4>
                    <div className="sdswc-info-box">
                      <span className="icon">
                        <i className="fas fa-mobile-alt" />
                      </span>
                      <p className="name">Call Us:</p>
                      <p className="info">+01 800 555 2233</p>
                    </div>
                    <div className="sdswc-info-box">
                      <span className="icon">
                        <i className="far fa-envelope-open" />
                      </span>
                      <p className="name">Mail Us:</p>
                      <p className="info">youremail@info.com</p>
                    </div>
                    <div className="sdswc-info-box">
                      <span className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <p className="name">Visit Us Office:</p>
                      <p className="info">24, Lane street New York, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service-details-area-end */}
        {/* brands-area-start */}
        <div className="brands-area">
          <div className="container">
            <div className="brand-carousel owl-carousel">
              <div className="single-brand">
                <img src="img/home1/brand-1.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-2.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-3.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-4.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-5.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* brands-area-end */}
        {/* footer-start */}
        <Footer></Footer>
      </>
    </div>
  );
}
export default ServiceD;
