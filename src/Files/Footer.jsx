import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [Feed, setFeed] = useState([]);

  const call1 = () => {
    fetch("http://localhost/feed.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        return setFeed(result);
      });
  };
  useEffect(() => {
    call1();
  }, []);

  // console.log(Feed)
  return (
    <>
      <footer>
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="fw-info footer-widget">
                  <div className="flogo">
                    <img src="img/home1/logo-2.png" alt="" />
                  </div>
                  <p className="text">
                    There are many variations of the dummy passages of Lorem
                    Ipsum dummy that an available but.
                  </p>
                  <div className="address">
                    <h5>
                      <span>
                        <i className="fas fa-map-marker-alt" />
                      </span>{" "}
                      Address:
                    </h5>
                    <p>
                      4,khodiyar Estet
                      <br />
                      Sookan Road Near Poonam Bakary,Ahemdabad 382350
                    </p>
                  </div>
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/home" target="_blank">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.amazon.in/s?k=hi-tech  +zatka&i=lawngarden&crid=IJ9VJVOBQXPS&sprefix=hi-tech+zatka%2Clawngarden%2C276&ref=nb_sb_noss"
                        target="_blank"
                      >
                        <i className="fab fa-amazon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/feed/" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="fw-categories footer-widget">
                  <h4 className="title">Categories</h4>
                  <ul className="list" style={{textAlign:"left",margin:"0 0 0 35%"}}>
                    <li>
                      <Link className="links" to="/Service">
                        <span className=" flex-fill">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>{" "}
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="links" to="/Case">
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>{" "}
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link className="links" href="">
                        <span className="">
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>{" "}
                        Online Support
                      </Link>
                    </li>
                    <li>
                      <Link className="links" href="">
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>{" "}
                        Business Solution
                      </Link>
                    </li>

                    <li>
                      <Link className="links" as="Link" to="/About">
                        <span>
                          <i className="fas fa-long-arrow-alt-right" />
                        </span>{" "}
                        About Our Company
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="fw-insta footer-widget">
                  <h4 className="title">Instagram Feed</h4>
                  <ul className="insta">
                    {Feed.map((val, index) => (
                      <li key={index}>
                        <a href="#">
                          <img
                            src={val.Img}
                            alt={`Instagram image ${index + 1}`}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div className="fw-rpost footer-widget">
                  <h4 className="title">Contact Info</h4>
                  <ul className="rpost">
                    <li style={{ boxSizing: "border-box" }}>
                      <h4 style={{ color: "white", margin: "0 0 0 -40%" }}>
                        Cusromer Care:
                      </h4>
                      <h3 style={{ color: "white" }}>+91 9316868577</h3>
                      <h4 style={{ color: "white", margin: "0 0 0 -62%" }}>
                        Email:
                      </h4>
                      <h4 style={{ color: "white", margin: "0 0 0 30%" }}>
                        patoliyaarpit70@gmail.com
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-12">
                <div className="fba-left">
                  <p>
                    <a href="#">Hi-Tech</a> © 2024. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12">
                <div className="fba-right">
                  <p>Design &amp; Develope by Patoliya Arpit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
