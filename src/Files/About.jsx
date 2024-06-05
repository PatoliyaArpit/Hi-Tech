import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  const [data, setdata] = useState([]);
  const cartitem = useSelector((state) => state.cart.cart);

  useEffect(() => {
    call();
  }, [data]);
  const call = () => {
    fetch("http://localhost/About.php")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setdata(res);
      });
  };

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
                  <h2 className="name">About Us</h2>
                  <ul className="links">
                    <li>
                      <Link className="links"  to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a as="Link">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        {/* about-tab-area-start */}
        <div className="about-tab-area">
          <div className="container">
            {data.map((val) => {
              return (
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="about-tab-img">
                      <img src={val.Img} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="about-tab">
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <a
                            className="nav-item nav-link active"
                            id="nav-mission-tab"
                            data-toggle="tab"
                            href="#nav-mission"
                            role="tab"
                            aria-controls="nav-mission"
                            aria-selected="true"
                          >
                            Mission
                          </a>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-mission"
                          role="tabpanel"
                          aria-labelledby="nav-mission-tab"
                        >
                          <div className="about-tab-box">
                            <p>{val.Description}</p>
                            <ul>
                              <li>
                                <span>
                                  <i className="fas fa-check-circle" />
                                </span>{" "}
                                Deliver a high quality web design.
                              </li>
                              <li>
                                <span>
                                  <i className="fas fa-check-circle" />
                                </span>{" "}
                                Support our customers once signing a contract
                              </li>
                              <li>
                                <span>
                                  <i className="fas fa-check-circle" />
                                </span>{" "}
                                Streamline an expanded array of web
                              </li>
                              <li>
                                <span>
                                  <i className="fas fa-check-circle" />
                                </span>{" "}
                                Pursue web-enabled niche markets with
                                professionals
                              </li>
                              <li>
                                <span>
                                  <i className="fas fa-check-circle" />
                                </span>{" "}
                                We love what we do and we do it with passion!
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* about-tab-area-end */}
        {/* about-video-area-start */}
        <div className="about-video-area bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-12">
                <div className="about-video">
                  <a
                    className="popup-youtube"
                    href="https://www.youtube.com/watch?v=huEXwiqXezc"
                    target="_blank"
                  >
                    <i className="fas fa-play" />
                  </a>
                  <h2 className="title">Take a Video</h2>
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since beenLorem Ipsum is simply
                    ithe dummy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about-video-area-end */}
        {/* team-area-start */}
        <div className="team-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div className="section-title">
                  <h6>Our Team</h6>
                  <h2>We Are Team Of Professionals</h2>
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
              <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12 col-12">
                <div className="all-progess">
                  <div className="skills-progress" data-sr="enter">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "91%" }}
                      >
                        <span>91%</span>
                      </div>
                    </div>
                    <h5 className="progressbar-title">Business Consulting</h5>
                  </div>
                  <div className="skills-progress" data-sr="enter">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "82%" }}
                      >
                        <span>82%</span>
                      </div>
                    </div>
                    <h5 className="progressbar-title">Financial Advicing</h5>
                  </div>
                  <div className="skills-progress" data-sr="enter">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "97%" }}
                      >
                        <span>97%</span>
                      </div>
                    </div>
                    <h5 className="progressbar-title">Brand Consulting</h5>
                  </div>
                  <div className="skills-progress" data-sr="enter">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      >
                        <span>77%</span>
                      </div>
                    </div>
                    <h5 className="progressbar-title">Business Idea</h5>
                  </div>
                </div>
              </div>
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
        {/* team-area-end */}
        {/* need-consultant-area-start */}
        <div className="need-consultant-area bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                <div className="need-consultant">
                  <h2 className="title">Need a Consultant?</h2>
                  <p className="text">
                    Looking fo a Business Plan Consultant. Contact some of our
                    Expert or our Agent, We are hear to help you out.
                  </p>

                  <Link className="contact" as="Link" to="/Contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact-details-area-start */}
        <div className="page-cda contact-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="all-contact-details">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="single-contact-details">
                        <div className="icon">
                          <span className="flaticon-placeholder" />
                        </div>
                        <h4 className="title">Our Address</h4>
                        <p className="desc">Level 13, 2 Elizabeth St,</p>
                        <p className="desc">Melbourne, Victoria 3000</p>
                        <a
                          className="link"
                          href="https://www.google.com.bd/maps/@40.703949,-74.0025883,12.71z?hl=bn"
                          target="_blank"
                        >
                          Directions
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="single-contact-details">
                        <div className="icon">
                          <span className="flaticon-message" />
                        </div>
                        <h4 className="title">Email Address</h4>
                        <a
                          className="desc"
                          href="mailto:Support@My.website.com"
                        >
                          patoliyaarpit70@gmail.com
                        </a>
                        <a className="desc" href="tel:+00-015-152-1002">
                          Phone: +91 93168-68577
                        </a>
                        <a
                          className="link"
                          href="mailto:Support@My.website.com"
                          target="_blank"
                        >
                          Send a Message
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="single-contact-details">
                        <div className="icon">
                          <span className="flaticon-group" />
                        </div>
                        <h4 className="title">Our Support</h4>
                        <a className="desc" href="tel:+00-015-152-1002">
                          Phone: +91 93168-68577
                        </a>
                        <a className="desc" href="fax:+358.555.1234567">
                          Fax: +01-215-152-0020
                        </a>
                        <a className="link" href="#" target="_blank">
                          Open a Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact-details-area-end */}
        <div
         className=" shadow p-3 border"
          style={{
            width: "85%",
            margin: "10% 5% 3% 7%",
          }}
        >
          <h4
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "2rem",
              margin: "1% 0 0 1%",
            }}
          >
            Working Time
          </h4>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              margin: "20px",
              fontSize: "1.7rem",
              listStyle: "none",
            }}
          >
            <li style={{ display: "flex" }}>Monday</li>
            <li className=" ml-5">:</li>
            <li className=" ml-5">9:00 am to 1:00 pm & 2:00pm to 7:00 pm</li>

            <li style={{ display: "flex" }}>Tuesday</li>
            <li className=" ml-5">:</li>
            <li className=" ml-5">9:00 am to 1:00 pm & 2:00pm to 7:00 pm</li>

            <li style={{ display: "flex" }}>Wednesday</li>
            <li className=" ml-5">:</li>
            <li className=" ml-5">9:00 am to 1:00 pm & 2:00pm to 7:00 pm</li>

            <li style={{ display: "flex" }}>Tuesday</li>
            <li className=" ml-5">:</li>
            <li className=" ml-5">9:00 am to 1:00 pm & 2:00pm to 7:00 pm</li>

            <li style={{ display: "flex" }}>Friday</li>
            <li className=" ml-5">:</li>
            <li className=" ml-5">9:00 am to 1:00 pm & 2:00pm to 7:00 pm</li>

            <li style={{ display: "flex" }}>Saturday</li>
            <li className=" ml-5">:</li>
            <li className=" ml-5">9:00 am to 1:00 pm & 2:00pm to 7:00 pm</li>

            <li style={{ display: "flex" }}>Sunday</li>
            <li className=" ml-5">:</li>
            <li className=" ml-5">Closed</li>
          </ul>
        </div>
        {/* footer-start */}
        <Footer></Footer>
        {/* footer-end */}
        {/* gmap-script */}
        {/* gmap-script */}
        {/* Scripts */}
      </>
    </div>
  );
}
export default About;
