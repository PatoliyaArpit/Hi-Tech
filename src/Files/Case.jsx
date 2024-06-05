import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
function Case() {
  const cartitem = useSelector((state) => state.cart.cart);
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
                  <h2 className="name">Cases</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="index.html">Home</a> */}
                      <Link className="links" as="Link" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a className="links" href="07_case-study.html">Cases</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        {/* page-case-study-area-start */}
        <div className="page-case-study-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div className="section-title">
                  <h6>Our Work</h6>
                  <h2>Case Studios</h2>
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
              <div className="col-12">
                <div className="case-menu">
                  <button className="button checked" data-filter="*">
                    All Cases
                  </button>
                  <button className="button" data-filter=".business">
                    Business
                  </button>
                  <button className="button" data-filter=".strategy">
                    Strategy
                  </button>
                  <button className="button" data-filter=".marketing">
                    Marketing
                  </button>
                  <button className="button" data-filter=".technology">
                    Technology
                  </button>
                </div>
              </div>
            </div>
            <div className="row grid_container" id="container">
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid strategy strategy technology"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Your Business Transforming Digital Strategy Set up.
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid business marketing"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-2.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Global Business Transformation For Your Business.
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid strategy strategy"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-3.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Your Business Building Competitive a Advantage
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid business marketing technology"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-4.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Smooth Transition and Better Plan For Your Business
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid business strategy"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-5.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Our Team on Meeting Customer Traceability
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid strategy strategy technology"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-6.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Business Groth Predictive Trade Promotion Planning
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid business marketing technology"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-7.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Business Aligning Sales and Product Marketing
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid strategy strategy technology"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-8.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Building the Competitive Advantage Your Business
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 grid strategy marketing"
                data-category="post-transition"
              >
                <div className="single-page-case-study signle-bdcs">
                  <div className="img">
                    <img src="img/case-study/case-9.jpg" alt="" />
                  </div>
                  <div className="content">
                    <p className="bdcss-title">
                      Business Improving The Call Center Experience
                    </p>
                    <p className="bdcss-title-2">
                      There are many variations of passages of Lorem the Ipsum
                      available but the majority have suffered and alteration in
                      by injected humour.
                    </p>
                    <a className="bdcss-link" href="08_case-details.html">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* page-case-study-area-end */}
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
export default Case;
