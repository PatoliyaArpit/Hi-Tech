import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Pack from "./Smallcompo/Pack";


function Service() {
  

  
   
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
                  <h2 className="name">Our Services</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="index.html">Home</a> */}
                      <Link className="links" as="Link" to="/" >
                        Home
                      </Link>
                    </li>
                    <li>
                      <a className="links" href="05_service.html">Services</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        {/* explore-service-area-start */}
        <div className="explore-service-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div className="section-title">
                  <h6>What We Offer</h6>
                  <h2>Explore Our Solutions / Services</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form by injected humour or randomised words which even
                    slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="single-service">
                  <div className="img">
                    <a href="06_service-details.html">
                      <img src="http://localhost/master/h1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">Market Research</h2>
                    <p className="text">
                      There are many variations of passages of that Lorem is
                      Ipsum available but the majority have suffered an
                      alteration.
                    </p>
                    <div className="order-more">
                      <a className="order" href="#">
                        Order Now
                      </a>
                      <a className="more" href="06_service-details.html">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="single-service">
                  <div className="img">
                    <a href="06_service-details.html">
                      <img src="http://localhost/master/h2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">Strategic Consulting</h2>
                    <p className="text">
                      There are many variations of passages of that Lorem is
                      Ipsum available but the majority have suffered an
                      alteration.
                    </p>
                    <div className="order-more">
                      <a className="order" href="#">
                        Order Now
                      </a>
                      <a className="more" href="06_service-details.html">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="single-service">
                  <div className="img">
                    <a href="06_service-details.html">
                      <img src="http://localhost/master/h3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">Sales Services</h2>
                    <p className="text">
                      There are many variations of passages of that Lorem is
                      Ipsum available but the majority have suffered an
                      alteration.
                    </p>
                    <div className="order-more">
                      <a className="order" href="#">
                        Order Now
                      </a>
                      <a className="more" href="06_service-details.html">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="single-service">
                  <div className="img">
                    <a href="06_service-details.html">
                      <img src="http://localhost/master/h4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">Market Research</h2>
                    <p className="text">
                      There are many variations of passages of that Lorem is
                      Ipsum available but the majority have suffered an
                      alteration.
                    </p>
                    <div className="order-more">
                      <a className="order" href="#">
                        Order Now
                      </a>
                      <a className="more" href="06_service-details.html">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="single-service">
                  <div className="img">
                    <a href="06_service-details.html">
                      <img src="http://localhost/master/h5.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">Strategic Consulting</h2>
                    <p className="text">
                      There are many variations of passages of that Lorem is
                      Ipsum available but the majority have suffered an
                      alteration.
                    </p>
                    <div className="order-more">
                      <a className="order" href="#">
                        Order Now
                      </a>
                      <a className="more" href="06_service-details.html">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                <div className="single-service">
                  <div className="img">
                    <a href="06_service-details.html">
                      <img src="http://localhost/master/h6.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">Sales Services</h2>
                    <p className="text">
                      There are many variations of passages of that Lorem is
                      Ipsum available but the majority have suffered an
                      alteration.
                    </p>
                    <div className="order-more">
                      <a className="order" href="#">
                        Order Now
                      </a>
                      <a className="more" href="06_service-details.html">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* explore-service-area-end */}
        {/* welcome-area-start */}
        <div className="welcome-area">
          <div className="welcome-banner d-none d-lg-block" />
          <div className="container">
            <div className="row">
              <div className="col-lg-9 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-12">
                <div className="section-title">
                  <h6>What We Do</h6>
                  <h2>Welcome To Our Consulting Agency</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form by injected humour or randomised words which even
                    slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="welcome-faq">
                  <div className="accordion" id="accordion">
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
                            illustration The right team for your project.
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
                          There are many variations of passages of Lorem Ipsum
                          available but the about majority a have suffered
                          alteration in some form by injected humour or that a
                          randomised even slightly believable.
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
                            We Are help you to Grow your Business
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
                          There are many variations of passages of Lorem Ipsum
                          available but the about majority a have suffered
                          alteration in some form by injected humour or that a
                          randomised even slightly believable.
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
                            The Perfect SaaS and WebApp Template.
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
                          There are many variations of passages of Lorem Ipsum
                          available but the about majority a have suffered
                          alteration in some form by injected humour or that a
                          randomised even slightly believable.
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
                            Awesome, Clean, Poweful and Creative!
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
                          There are many variations of passages of Lorem Ipsum
                          available but the about majority a have suffered
                          alteration in some form by injected humour or that a
                          randomised even slightly believable.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wf-contact">
                    <p className="text">
                      Contact Us{" "}
                      <span>
                        <i className="fas fa-angle-right" />
                      </span>
                    </p>
                    <a className="phone" href="tel:02-0106537070">
                      <span>
                        <i className="fas fa-phone-volume" />
                      </span>{" "}
                      02-010 653 7070
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* welcome-area-end */}
        {/* pricing-area-start */}
       <Pack></Pack>

        {/* pricing-area-end */}
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
export default Service;
