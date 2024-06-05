import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
function CaseD() {
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
                      {/* <a href="07_case-study.html">Cases</a> */}
                      <Link as="Link" className="links" to="/Case">
                        Cases
                      </Link>
                    </li>
                    <li>
                      <a className="links" href="08_case-details.html">Case Details</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        {/* page-case-details-area-start */}
        <div className="page-case-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="page-case-details">
                  <div className="banner">
                    <img src="img/case-study/details-banner.jpg" alt="" />
                  </div>
                  <div className="cd-video-details">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="video-details">
                          <h2 className="name">
                            Global Business Transformation For Your Business.
                          </h2>
                          <p className="details">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority to have the suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't to look even slightly
                            believable.
                            <br />
                            <br />
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have the suffered
                            alteration in some form.
                            <br />
                            <br />
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="video-box">
                          <div className="img">
                            <img src="img/case-study/video-banner.jpg" alt="" />
                          </div>
                          <a
                            className="popup-youtube"
                            href="https://www.youtube.com/watch?v=kNz82r5nyUw"
                          >
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="brief-case">
                    <h2 className="name">Brief Case Detail</h2>
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="brief-case-box">
                          <p>
                            Client Name <span>Johnson charles</span>
                          </p>
                        </div>
                        <div className="brief-case-box">
                          <p>
                            Location <span>93057 Mountain View CA, USA</span>
                          </p>
                        </div>
                        <div className="brief-case-box">
                          <p>
                            StartedJun 15, 2017 <span>Johnson charles</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="brief-case-box">
                          <p>
                            Completed <span>Agu 24, 2017</span>
                          </p>
                        </div>
                        <div className="brief-case-box">
                          <p>
                            Value <span>$ 175 000</span>
                          </p>
                        </div>
                        <div className="brief-case-box">
                          <p>
                            Category <span>Business Solutions</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case-details-tab">
                    <ul
                      className="cdt-menu nav nav-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div
                      className="cd-tab-content tab-content"
                      id="myTabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <p className="tc-text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum to TO generators
                          on the Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet.There are many variations of passages of
                          Lorem a Ipsum available, but the majority have
                          suffered alteration in some formdden in the middle of
                          text. All the Lorem Ipsum generators on the Internet
                          tend to repeat that now predefined chunks as
                          necessary.
                        </p>
                        <div className="point-box">
                          <h4 className="pb-title">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Sales and operations planning process flow
                          </h4>
                          <p className="tc-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum to
                            TO generators on the Internet tend to repeat
                            predefined chunks as necessary.
                          </p>
                        </div>
                        <div className="point-box">
                          <h4 className="pb-title">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            International partners production operations manager
                          </h4>
                          <p className="tc-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of making this the first true
                            generator on the Internet.There are many variations
                            of passages of Lorem a jority have suffered
                            alteration.
                          </p>
                        </div>
                        <div className="point-box">
                          <h4 className="pb-title">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            How to collect all ideas in a single project
                          </h4>
                          <p className="tc-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum to
                            TO generators on the Internet tend to repeat
                            predefined chunks as necessary, making this the
                            first true generator.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <p className="tc-text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum to TO generators
                          on the Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet.There are many variations of passages of
                          Lorem a Ipsum available, but the majority have
                          suffered alteration in some formdden in the middle of
                          text. All the Lorem Ipsum generators on the Internet
                          tend to repeat that now predefined chunks as
                          necessary.
                        </p>
                        <div className="point-box">
                          <h4 className="pb-title">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            Sales and operations planning process flow
                          </h4>
                          <p className="tc-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum to
                            TO generators on the Internet tend to repeat
                            predefined chunks as necessary.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <p className="tc-text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum to TO generators
                          on the Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet.There are many variations of passages of
                          Lorem a Ipsum available, but the majority have
                          suffered alteration in some formdden in the middle of
                          text. All the Lorem Ipsum generators on the Internet
                          tend to repeat that now predefined chunks as
                          necessary.
                        </p>
                        <div className="point-box">
                          <h4 className="pb-title">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            International partners production operations manager
                          </h4>
                          <p className="tc-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of making this the first true
                            generator on the Internet.There are many variations
                            of passages of Lorem a jority have suffered
                            alteration.
                          </p>
                        </div>
                        <div className="point-box">
                          <h4 className="pb-title">
                            <span>
                              <i className="fas fa-angle-right" />
                            </span>{" "}
                            How to collect all ideas in a single project
                          </h4>
                          <p className="tc-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum to
                            TO generators on the Internet tend to repeat
                            predefined chunks as necessary, making this the
                            first true generator.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* page-case-details-area-end */}
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
export default CaseD;
