import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Poppop from "./Popup/Poppop";
import { BsSearch } from "react-icons/bs";
import PoppopR from "./Popup/PoppopR";
import ReactWhatsapp from "react-whatsapp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import PoppopEmail from "./Popup/PoppopEmail";
import PoppopNewPass from "./Popup/PoppopNewPass";

const Header = (props) => {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const cartitem = useSelector((state) => state.cart.cart);
  const UserLogin = useSelector((state) => state.log.log);
  const show = useSelector((state) => state.reg.reg);
  
  const [data, setdata] = useState("");

  useEffect(() => {
    if (show.length > 0) {
      setdata(show[0].Name);
    }
  }, [show]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const [pop, setpop] = useState(false);
  const [popR, setpopR] = useState(false);
  const [popEmail, setpopEmail] = useState(false);
  const [popNewp, setpopNewp] = useState(false);
  const [cartdata, setcartdata] = useState([]);
  const [LoginId, setLoginId] = useState([]);
  const [Final, setFinal] = useState([]);
  useEffect(() => {
    UserLogin.map((val) => {
      setLoginId(val.Id);
    });
  }, [UserLogin]);

  useEffect(() => {
    if (LoginId !== null) {
      const Finalcart = cartdata.filter((val) => val.UserId === LoginId);
      if (UserLogin.length === 0) {
        setFinal(cartitem);
        // call1();
      } else {
        setFinal(Finalcart);
        // call1();
      }
    }
  }, [cartdata, LoginId]);
  

  const btn = () => {
    setpop(false);
    call1();
  };
  const btnr = () => {
    setpopR(true);
    setpop(false);
  };
  const Rbtnclose = () => {
    setpopR(false);
  };
  const btn1 = () => {
    setpop(true);
    setpopR(false);
  };
  const Emailbtn = () => {
    setpopEmail(false);
  };
  const EmailBtnSecond = () => {
    setpopEmail(false);
    setpopNewp(true);
  };
  const btnForget = () => {
    setpopEmail(true);
    setpop(false);
  };
  const Newpass = () => {
    setpopNewp(false);
  };
  const Newpass2 = () => {
    setpopNewp(false);
    setpop(true);
  };

  const clickup = () => {
    window.scroll(0, 0);
  };
  
  const call1 = () => {
    fetch("http://localhost/cartshow.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setcartdata(result);
      });
  };
  useEffect(() => {
    call1();
  }, [props]);

  return (
    <>
      <header className=" shadow ">
        {pop ? <Poppop pass={btn} pass2={btnr} pass3={btnForget} /> : null}
        {popR ? <PoppopR pass={btn1} pass2={Rbtnclose}></PoppopR> : null}
        {popEmail ? (
          <PoppopEmail pass={Emailbtn} pass2={EmailBtnSecond}></PoppopEmail>
        ) : null}
        {popNewp ? (
          <PoppopNewPass pass={Newpass} pass2={Newpass2}></PoppopNewPass>
        ) : null}
        <ToastContainer
          autoClose={100} // Toast will close after 3 seconds
          closeOnClick={true} // Allow closing the toast by clicking on it
          closeButton={true}
        ></ToastContainer>

        <div className="header-upper-area">
          <ReactWhatsapp
            number="6355797825"
            message={`I am ${data}`}
            style={{ border: "none" }}
          >
            <img src="img/home1/Whatsapp.png" className="Whats"></img>
          </ReactWhatsapp>
          <button className="clicktoup" onClick={() => clickup()}>
            <i class="fa-solid fa-arrow-up" style={{ fontSize: "1.5rem" }}></i>
          </button>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 d-none d-md-block col-md-5">
                <div className="lang-time">
                  <div className="lt-time">
                    <h4
                      className="time"
                      style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
                    >
                      <span>
                        <i className="far fa-clock" />
                      </span>{" "}
                      Mon - Sat 8.00 - 18.00. Sunday CLOSED
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-sm-12 col-md-2 col-12"
                style={{ margin: " 0 0 0 0" }}
              >
                <div className="address-phone">
                  <div className="ap-address">
                    <h4
                      className="address"
                      style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
                    >
                      <span>
                        <i className="fas fa-map-marker-alt" />
                      </span>{" "}
                      Shukan Road Ahemdabad,382350
                    </h4>
                  </div>
                  <div className="ap-phone">
                    <h4
                      className="phone"
                      style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
                    >
                      <span>
                        <i className="fas fa-phone" />
                      </span>{" "}
                      +91 93168 68577
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-12 col-md-12 col-12 mt-2">
                <div className="header-social">
                  <ul>
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
                      <a href="https://www.linkedin.com/feed/" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-10 col-10 logo">
                <div className="logo">
                  <a href="23_index-4.html">
                    <img src="img/home1/hitech2.jpg" alt="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-7 offset-lg-0 col-md-6 offset-md-0 col-sm-10 offset-sm-0 col-12 allmenu">
                <div className="menu">
                  <nav id="mobile_menu_active">
                    <ul
                      style={{ margin: "0 20% 0 0 " }}
                      className={`responcive ${menuOpen ? "open" : ""}`}
                    >
                      <li>
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/About" className="nav-link">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/Service" className="nav-link">
                          Services
                        </Link>
                      </li>

                      <li
                        className={`nav-item dropdown ${
                          activeDropdown === "Shortcode" ? "show" : ""
                        }`}
                        onMouseEnter={() => handleDropdownToggle("Shortcode")}
                        onMouseLeave={() => handleDropdownToggle(null)}
                      >
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown2"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Cases
                        </a>
                        <ul
                          className={`dropdown-menu mega-menu ${
                            activeDropdown === "Shortcode" ? "show" : ""
                          }`}
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <ul>
                              <li>
                                <Link to="/Case" className="nav-link">
                                  Case
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li>
                                <Link to="/CaseD" className="nav-link">
                                  CaseD
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li
                        className={`nav-item dropdown ${
                          activeDropdown === "Shortcode" ? "show" : ""
                        }`}
                        onMouseEnter={() => handleDropdownToggle("Shortcode")}
                        onMouseLeave={() => handleDropdownToggle(null)}
                      >
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown2"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Shortcode
                        </a>
                        <ul
                          className={`dropdown-menu mega-menu ${
                            activeDropdown === "Shortcode" ? "show" : ""
                          }`}
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a href="#" className="dropdown-item">
                              Column 1
                            </a>
                            <ul>
                              <li>
                                <Link
                                  href="26_shortcode-grid.html"
                                  className="nav-link"
                                >
                                  Tracking
                                </Link>
                              </li>
                              <li>
                                <Link to="/List" className="nav-link">
                                  List
                                </Link>
                              </li>
                              <li>
                                <Link to="/Team" className="nav-link">
                                  Team
                                </Link>
                              </li>
                              <li>
                                <Link to="/Gimg" className="nav-link">
                                  Image Box
                                </Link>
                              </li>
                              <li>
                                <Link to="/Gallery" className="nav-link">
                                  Galleries
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" className="nav-link">
                              Column 2
                            </a>
                            <ul>
                              <li>
                                <Link to="/Step" className="nav-link">
                                  Process Steps
                                </Link>
                              </li>
                              <li>
                                <Link to="/Contact" className="nav-link">
                                  Contact
                                </Link>
                              </li>
                              <li>
                                <Link to="/Map" className="nav-link">
                                  Maps
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-8 col-12 mb-3"
                style={{ margin: "0 0 0 0  " }}
              >
                <div className="search-consultant">
                  <div
                    className="sc-search"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto auto auto",
                    }}
                  >
                    <Link
                      className="res"
                      style={{ margin: "8px 0 0 -30px" }}
                      onClick={toggleMenu}
                    >
                      <i className="fa-solid fa-bars text-gray-600"></i>
                    </Link>
                    <span
                      data-toggle="modal"
                      data-target="#search_modal"
                      className="search"
                      style={{ margin: "0 -8% 0 8%" }}
                    >
                      <i className="fa fa-search" />
                    </span>
                    {/* search-modal-start */}
                    <div
                      id="search_modal"
                      className="search-modal modal fade"
                      tabIndex={-1}
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                          <h4 className="modal-title">Type and Press Enter</h4>
                          <form action="#">
                            <input type="text" placeholder="Search Here" />
                            <button className=" btn-success ml-3 rounded-pill w-6   ">
                              Search
                            </button>
                            <BsSearch />
                          </form>
                          <div className="modal-close">
                            <button type="button" data-dismiss="modal">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* search-modal-end */}
                    <div
                      className="sc-consultant"
                      // style={{
                      //   display: "grid",
                      //   gridTemplateColumns: "auto auto",
                      // }}
                    >
                      <div className="Login">
                        {UserLogin.length === 0 ? (
                          <Link
                            as={Link}
                            onClick={() => setpop(true)}
                            className="link nav-link"
                          >
                            Login
                          </Link>
                        ) : (
                          <Link
                            as={Link}
                            to="/Profile"
                            className="link nav-link"
                          >
                            <i class="fa-regular fa-user"></i>
                          </Link>
                        )}
                      </div>
                      <div className="cart">
                        {" "}
                        <Link
                          as={Link}
                          to="/Checkout"
                          className="link nav-link"
                        >
                          <i className="fa-solid fa-cart-shopping" />{" "}
                          {Final.length}
                        </Link>
                        {/* <Link as={Link} to="/MyAdmin" className="link nav-link">admi</Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
