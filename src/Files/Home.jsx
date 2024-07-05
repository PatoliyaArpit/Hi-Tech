import React, { useEffect, useReducer, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart, clearplan } from "./redux/CartSlice";
import { Logincart } from "./redux/CartSlice";

import { useFormik } from "formik";
import { signup } from "./Schema";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Pack from "./Smallcompo/Pack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home(props) {
  useEffect(() => {
    dispatch(clearplan());
    window.localStorage.removeItem("plan");
  }, []);

  const [model, setmodel] = useState(false);
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState([]);
  const [cartdata, setcartdata] = useState([]);
  const [LoginId, setLoginId] = useState([]);
  const [Final, setFinal] = useState([]);
  const [Logindata, setLogindata] = useState([]);
  const [valueEnergizer, setvalueEnergizer] = useState(" ");
  const [valueaccessories, setvalueaccessories] = useState(" ");

  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart.cart);
  const LoginUser = useSelector((state) => state.log.log);
 

  useEffect(() => {
    if (LoginUser.length === 0) {
      call5();
    } else {
      call5();
    }
  }, [LoginUser]);
  useEffect(() => {
    LoginUser.map((val) => {
      setLoginId(val.Id);
    });
  }, [LoginUser]);

  useEffect(() => {
    if (LoginId !== null) {
      const Finalcart = cartdata.filter((val) => val.UserId === LoginId);
      if (LoginUser.length === 0) {
        setFinal(cartitem);
      } else {
        setFinal(Finalcart);
      }
    }
  }, [cartdata, LoginId]);

  let Energizerbuttontoggal = [];
  useEffect(() => {
    if (LoginUser.length === 0) {
      Final.filter((val) => val.ProductType === "Energizer").map((item) => {
        Energizerbuttontoggal.push(item.Id);
      });
    } else {
      Final.filter((val) => val.ProductType === "Energizer").map((item) => {
        Energizerbuttontoggal.push(item.ItemId);
      });
    }
    setvalueEnergizer(Energizerbuttontoggal);
  }, [LoginUser, Final]);
  let accessoriesbuttontoggal = [];
  useEffect(() => {
    if (LoginUser.length === 0) {
      Final.filter((val) => val.ProductType === "accessories").map((item) => {
        accessoriesbuttontoggal.push(item.Id);
      });
    } else {
      Final.filter((val) => val.ProductType === "accessories").map((item) => {
        accessoriesbuttontoggal.push(item.ItemId);
      });
    }
    setvalueaccessories(accessoriesbuttontoggal);
  }, [LoginUser, Final]);
  const handleClick = (imgUrl) => {
    localStorage.setItem("Img", imgUrl.Img);
    localStorage.setItem("title", imgUrl.Title);
    localStorage.setItem("price", imgUrl.Price);
    localStorage.setItem("Capacity", imgUrl.Capacity);
    localStorage.setItem("Type", imgUrl.Type);
    localStorage.setItem("Color", imgUrl.Color);
    localStorage.setItem("Brand", imgUrl.Brand);
    localStorage.setItem("Material", imgUrl.Material);
    localStorage.setItem("Id", imgUrl.Id);
    localStorage.setItem("ProductType", imgUrl.ProductType);
    localStorage.setItem("LoginId", LoginId);
   
  
  };
  useEffect(() => {
    call();
  }, []);

  const call = () => {
    fetch("http://localhost/masterimg.php")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setdata(res);
      });
  };

  const call2 = () => {
    fetch("http://localhost/Accessories.php")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setdata2(res);
      });
  };
  useEffect(() => {
    call2();
  }, []);

  const call3 = () => {
    fetch("http://localhost/pack.php")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setdata3(res);
      });
  };
  useEffect(() => {
    call3();
  }, []);

  const call4 = () => {
    fetch("http://localhost/Slider.php")
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        setdata4(res);
      });
  };
  useEffect(() => {
    call4();
  }, []);

  const initialValues = {
    Name: "",
    Email: "",
    Contact: "",
    Messag: "",
  };

  const form = useRef();
  const SendMsg = () => {
    toast.success("Send Message", {
      position: "top-center",
    });
  };

  const call5 = () => {
    fetch("http://localhost/cartshow.php")
      .then((val) => {
        return val.json();
      })
      .then((res) => {
        setcartdata(res);
      });
  };
  useEffect(() => {
    call5();
  }, []);

  const call6 = () => {
    fetch("http://localhost/Loginshow.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setLogindata(result);
      });
  };
  useEffect(() => {
    call6();
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit,resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signup,
      onSubmit: (values) => {
        axios({
          method: "post",
          url: "http://localhost/mi.php",
          data: values,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
         
          SendMsg();
          setTimeout(() => {
            resetForm();
          }, 1000);
          ;
        });
        // console.log(values)
        emailjs.sendForm(
          "service_ijeva2d",
          "template_64nwgfr",
          form.current,
          "VD-BhccAQOUtoewbT"
        );
      },
    });
  useEffect(() => {
    setmodel(false);
    setTimeout(() => {
      setmodel(true);
    }, 9000);
  }, []);

  const notify = () => {
    toast.success("Item Store in Cart", {
      position: "top-center",
    });
  };
  const handlecartdata = (data) => {
    axios
      .request({
        method: "post",
        url: "http://localhost/Cart.php",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
      
        call5();
      });
  };
  const handalAccessories = (data) => {
    axios
      .request({
        method: "post",
        url: "http://localhost/Cart.php",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
       
        call5();
      });
    // dispatch(LoginCart({data}))
  };
  return (
    <div>
      <>
        <Header></Header>

        {/* header-end */}
        {/* slider-area-start */}

        <section>
          <div className="oelcar">
            <OwlCarousel
              className="owl-theme"
              items={1}
              autoplay={true}
              nav={false}
              dots={false}
              autoplayHoverPause={true}
              loop={true}
              margin={10}
              autoplayTimeout={3000}
              height={10}
            >
              {data4.map((val) => {
                return (
                  <div className="item">
                    <img src={val.Img} width="10" alt="Image 1" />
                  </div>
                );
              })}
            </OwlCarousel>

            <div className="overlay-text">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1 col-12">
                    <div
                      className="h5-slider-content"
                      style={{ margin: "10% 0 0 0" }}
                    >
                      <h1 className="cd-headline clip">
                        <span className="blc">We Create </span>
                        <span className="cd-words-wrapper">
                          <b className="is-visible">Best Value</b>
                          <b>Dream</b>
                          <b>Confidence</b>
                        </span>
                      </h1>
                      <p className="text">
                        There are many variations of passages of Lorem Ipsum
                        available but the majority to have to suffered
                        alteration injected humour.
                      </p>
                      <Link className="more" to="/About">
                        Read More
                        <span>
                          <i className="fas fa-angle-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            autoClose={3000} // Toast will close after 3 seconds
            pauseOnHover={true} // Pause the toast auto-close timer when hovered
            closeOnClick={true} // Allow closing the toast by clicking on it
            closeButton={true}
          />

          <div className="top-agency-area" id="_top_agency">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                  <div className="section-title">
                    <h6>Welcome To Us</h6>
                    <h2>Top Consulting Agency</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration in
                      some form by injected humour or randomised words which
                      even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="top-agencey-content">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="single-top-agency">
                          <div className="icon">
                            <div>
                              <img src="img/home1/isi.png" alt="" />
                              {/* <span className="flaticon-gears" /> */}
                            </div>
                          </div>
                          <h6 className="name">Good Approach</h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="single-top-agency">
                          <div className="icon">
                            <div>
                              <img src="img/home1/pet.png" alt="" />
                              {/* <span className="flaticon-creativity" /> */}
                            </div>
                          </div>
                          <h6 className="name">Great Ideas</h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="single-top-agency">
                          <div className="icon">
                            <div>
                              <img src="img/home1/best.png" alt="" />

                              {/* <span className="flaticon-piggy-bank" /> */}
                            </div>
                          </div>
                          <h6 className="name">Save Money</h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="single-top-agency">
                          <div className="icon">
                            <span className="flaticon-puzzle" />
                          </div>
                          <h6 className="name">Easy Customize</h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="single-top-agency">
                          <div className="icon">
                            <span className="flaticon-folder" />
                          </div>
                          <h6 className="name">Detailed Report</h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="single-top-agency">
                          <div className="icon">
                            <span className="flaticon-megaphone" />
                          </div>
                          <h6 className="name">Marketing Plan</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="top-agency-img">
                    <img src="img/home1/h4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* service-area-start */}

          <div
            className="explore-service-area"
            // style={{ margin: "0 -10px 0 -10px" }}
            id="Energizer"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                  <div className="section-title">
                    <h2>Energizer</h2>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="row">
                {data.map((val) => {
                  const { Id, Img, Price, Title, Discount, ProductType } = val;
                  let TotalDiscount = (Price * Discount) / 100;
                  let Convert = Number(Price);
                  let Total = Convert + TotalDiscount;

                  

                  return (
                    <div className="col-lg-4 col-sm-6 col-md-6 col-12" key={Id}>
                      <div className="single-service">
                        <div className="img">
                          <Link
                            to={{
                              pathname: `/PDetails/${Id}`,
                            }}
                            onClick={() => handleClick(val)}
                          >
                            <img src={Img} alt="" />
                          </Link>
                        </div>
                        <div className="content">
                          <h2 className="title">{Title}</h2>
                          <p
                            className="text"
                            style={{
                              display: "grid",
                              gridTemplateColumns: "auto auto auto",
                              gap: "0",
                            }}
                          >
                            <h2 style={{ margin: "2% 0 0 0" }}>₹{Price}</h2>
                            <h4
                              style={{
                                textDecoration: "line-through",
                                fontSize: "18px",
                                margin: "3% 0 0 -50%",
                                opacity: "0.5",
                              }}
                            >
                              ₹ {Total}
                            </h4>
                            <h4
                              style={{
                                fontSize: "1.2rem",
                                color: "#388e3c",
                                margin: "5px 0 0 0",
                              }}
                            >
                              {Discount}% off
                            </h4>
                          </p>

                          <div className="order-more">
                            {valueEnergizer.includes(Id) ? (
                              <Link as={Link} to="/Checkout" className="order">
                                Go to Cart
                              </Link>
                            ) : (
                              <Link
                                className="order"
                                href="06_service-details.html"
                                onClick={() => {
                                  const data = {
                                    ItemId: Id,
                                    Img: Img,
                                    Title: Title,
                                    Price: Price,
                                    quantity: 1,
                                    UserId: LoginId,
                                    ProductType: ProductType,
                                  };
                                  if (LoginUser.length === 0) {
                                    dispatch(
                                      addCart({
                                        Id,
                                        Img,
                                        Title,
                                        Price,
                                        quantity: 1,
                                        ProductType
                                      })
                                    );
                                    call5();
                                  } else {
                                    handlecartdata(data);
                                    // dispatch(Logincart( data ));
                                  }

                                  // notify();
                                }}
                              >
                                Add To Cart
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* service-area-end */}
          {/* accessories start */}

          <div className="explore-service-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                  <div className="section-title">
                    <h2>Accessories Department</h2>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="row">
                {data2.map((val) => {
                  const {
                    Id,
                    Img,
                    Price,
                    Title,
                    Quantity,
                    Discount,
                    ProductType,
                  } = val;
                  let TotalDiscount = (Price * Discount) / 100;
                  let Convert = Number(Price);
                  let Total = Convert + TotalDiscount;
                  let fixTotal = Total.toFixed(0);
                  return (
                    <div className="col-lg-4 col-sm-6 col-md-6 col-12" key={Id}>
                      <div className="single-service">
                        <div className="img">
                          <Link
                            to={{
                              pathname: `/PDetails/${Id}`,
                            }}
                            onClick={() => handleClick(val)}
                          >
                            <img src={Img} alt="" />
                          </Link>
                        </div>
                        <div className="content">
                          <h2 className="title">{Title}</h2>
                          <p
                            className="text"
                            style={{
                              display: "grid",
                              gridTemplateColumns: "auto auto auto",
                              gap: "0",
                            }}
                          >
                            <h2 style={{ margin: "2% 0 0 0" }}>₹{Price}</h2>
                            <h4
                              style={{
                                textDecoration: "line-through",
                                fontSize: "18px",
                                margin: "3% 0 0 -70%",
                                opacity: "0.5",
                              }}
                            >
                              ₹ {fixTotal}
                            </h4>
                            <h4
                              style={{
                                fontSize: "1.2rem",
                                color: "#388e3c",
                                margin: "5px 0 0 0",
                              }}
                            >
                              {Discount}% off
                            </h4>
                          </p>
                          {/* <p>One Pack In {Quantity}</p> */}
                          <div className="order-more">
                            {valueaccessories.includes(Id) ? (
                              <Link as={Link} to="/Checkout" className="order">
                                Go to Cart
                              </Link>
                            ) : (
                              <Link
                                className="order"
                                href="06_service-details.html"
                                onClick={() => {
                                  const data = {
                                    ItemId: Id,
                                    Img: Img,
                                    Title: Title,
                                    Price: Price,
                                    quantity: 1,
                                    UserId: LoginId,
                                    ProductType: ProductType,
                                  };
                                  if (LoginUser.length === 0) {
                                    dispatch(
                                      addCart({
                                        Id,
                                        Img,
                                        Title,
                                        Price,
                                        quantity: 1,
                                        ProductType
                                      })
                                    );
                                    call5();
                                  } else {
                                    handalAccessories(data);
                                  }

                                  // notify();
                                }}
                              >
                                Add To Cart
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* accessories end */}
          {/* counter-area-start */}
          <div className="counter-area bg-with-black">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                  <div className="section-title">
                    <h6>Gain a Success With Us!</h6>
                    <h2>Doing the right thing, at the right time.</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="all-counter">
                    <div className="counter-box">
                      <h2
                        className="counter counter-up"
                        data-counterup-time={1500}
                        data-counterup-delay={30}
                      >
                        417
                      </h2>
                      <p className="text">Cases Completed</p>
                    </div>
                    <div className="counter-box">
                      <h2
                        className="counter counter-up"
                        data-counterup-time={1500}
                        data-counterup-delay={30}
                      >
                        39
                      </h2>
                      <p className="text">Consultants</p>
                    </div>
                    <div className="counter-box">
                      <h2
                        className="counter counter-up"
                        data-counterup-time={1500}
                        data-counterup-delay={30}
                      >
                        168
                      </h2>
                      <p className="text">Awards Winning</p>
                    </div>
                    <div className="counter-box">
                      <h2 className="counter">
                        <span
                          className="counter counter-up"
                          data-counterup-time={1500}
                          data-counterup-delay={30}
                        >
                          100{" "}
                        </span>
                        %
                      </h2>
                      <p className="text">Satisfied Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* counter-area-end */}
          {/* Accessories start */}
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
                      available but the majority have suffered alteration in
                      some form by injected humour or randomised words which
                      even slightly believable.
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
                          style={{ width: "99%" }}
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
          {/* pricing-area-start */}

          <Pack></Pack>

         

          <div
            className="contact-details-area"
            // style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}
          >
            <div className="container">
              <div className="row card1" style={{ width: "100%" }}>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="single-contact-details">
                    <div className="icon">
                      <span className="flaticon-placeholder" />
                    </div>
                    <h4 className="title">Our Address</h4>
                    <p className="desc">
                      4, Khodiyae Estate Sukan Road Near Poonam Bakery
                      Ahmedabad, 382350
                    </p>
                    <a
                      className="link"
                      href="https://www.google.com/maps/place/D%2F84,+Parshwanath+Nagar,+Nikol,+Ahmedabad,+Gujarat+382350/@23.0450311,72.6640324,128m/data=!3m1!1e3!4m6!3m5!1s0x395e871e6cf3765f:0xfe57cd2128183f45!8m2!3d23.0451248!4d72.6640491!16s%2Fg%2F11f4rdtd26?authuser=0&entry=ttu"
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
                    <a className="desc" href="mailto:patoliyaarpit70@gmail.com">
                      patoliyaarpit70@gmail.com
                    </a>
                    <a className="desc" href="tel:+91-931-686-8577">
                      Phone: +91 931-686-8577
                    </a>
                    <a
                      className="link"
                      href="mailto:patoliyaarpit70@gmail.com"
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
                    <a className="desc" href="tel:+91-93168-68577">
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
                {/* <button onClick={() => setpop(!pop)}>pop</button> */}
              </div>
            </div>
          </div>

          {/* contact-details-area-end */}
          {/* map-start */}
          <div className="map-area">
            <div className="gmap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2
                      style={{
                        // margin: "5% 5% 2% 50%",
                        fontFamily: "monospace",
                      }}
                    >
                      Google Map here
                    </h2>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.8460108918023!2d72.66377779301342!3d23.044986775563018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871bbbf7f7d5%3A0xd6ef026121e26a8e!2sHi-Tech%20Solar%20Products!5e1!3m2!1sen!2sin!4v1716285584173!5m2!1sen!2sin"
                      width="100%"
                      height="600"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="shadow p-3 border "
                      style={{ margin: "0 0 0 0%" }}
                    />
                  </div>
                  <div
                    className=" shadow p-3 border"
                    style={{
                      width: "100%",
                      // border: "2px solid black",
                      // boxShadow: "5px 10px  #888888",
                      margin: "6% 0 0 0",
                    }}
                  >
                    <h4
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "2rem",
                        margin: "2px",
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
                      <li className=" ml-5">
                        9:00 am to 1:00 pm & 2:00pm to 7:00 pm
                      </li>

                      <li style={{ display: "flex" }}>Tuesday</li>
                      <li className=" ml-5">:</li>
                      <li className=" ml-5">
                        9:00 am to 1:00 pm & 2:00pm to 7:00 pm
                      </li>

                      <li style={{ display: "flex" }}>Wednesday</li>
                      <li className=" ml-5">:</li>
                      <li className=" ml-5">
                        9:00 am to 1:00 pm & 2:00pm to 7:00 pm
                      </li>

                      <li style={{ display: "flex" }}>Tuesday</li>
                      <li className=" ml-5">:</li>
                      <li className=" ml-5">
                        9:00 am to 1:00 pm & 2:00pm to 7:00 pm
                      </li>

                      <li style={{ display: "flex" }}>Friday</li>
                      <li className=" ml-5">:</li>
                      <li className=" ml-5">
                        9:00 am to 1:00 pm & 2:00pm to 7:00 pm
                      </li>

                      <li style={{ display: "flex" }}>Saturday</li>
                      <li className=" ml-5">:</li>
                      <li className=" ml-5">
                        9:00 am to 1:00 pm & 2:00pm to 7:00 pm
                      </li>

                      <li style={{ display: "flex" }}>Sunday</li>
                      <li className=" ml-5">:</li>
                      <li className=" ml-5">Closed</li>
                    </ul>
                  </div>
                </div>
                <p></p>
              </div>
            </div>
          </div>

          {/* map-end */}
          {/* question-area-start */}
          <div className="question-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                  <div className="section-title">
                    <h6>Write a Message</h6>
                    <h2>Have Any Questions?</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="question-form-area">
                    <div className="cf-msg" />
                    <form
                      ref={form}
                      action="mail.php"
                      method="post"
                      id="cf"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="cf-box">
                            <input
                              type="text"
                              placeholder="Name"
                              id="Name"
                              name="Name"
                              onChange={handleChange}
                              value={values.Name}
                              onBlur={handleBlur}
                              className="form-control"
                            />
                            {errors.Name && touched.Name ? (
                              <p className="form-error">{errors.Name}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <div className="cf-box">
                            <input
                              type="text"
                              placeholder="Email"
                              id="Email"
                              name="Email"
                              onChange={handleChange}
                              value={values.Email}
                              onBlur={handleBlur}
                              className="form-control"
                            />
                            {errors.Email && touched.Email ? (
                              <p className="form-error">{errors.Email}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="cf-box">
                            <input
                              type="text"
                              placeholder="Contact"
                              id="Contact"
                              name="Contact"
                              onChange={handleChange}
                              value={values.Contact}
                              onBlur={handleBlur}
                              className="form-control"
                            />
                            {errors.Contact && touched.Contact ? (
                              <p className="form-error">{errors.Contact}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="cf-box">
                            <textarea
                              className="contact-textarea form-control"
                              placeholder="Message"
                              id="Messag"
                              name="Messag"
                              onChange={handleChange}
                              value={values.Messag}
                              onBlur={handleBlur}
                              rows="5"
                            />
                            {errors.Messag && touched.Messag ? (
                              <p className="form-error">{errors.Messag}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="cf-box">
                            <button
                              id="submit"
                              className="cont-submit btn-contact btn btn-primary"
                              name="submit"
                            >
                              SEND MESSAGE
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                 <div className="col-lg-6 col-12 d-flex flex-column justify-content-center  mt-lg-0 ">
                  <div className="sdsw-contact sd-sidebar-widget">
                    <h4 className="title">Contact Info</h4>
                    <div className="sdswc-info-box d-flex align-items-center mb-5">
                      <span className="icon me-2">
                        <i className="fas fa-mobile-alt" />
                      </span>
                      <div className="  ">
                        <p
                          className="name mb-2"
                          style={{ display: "flex", fontSize: "2rem" }}
                        >
                          Call Us:
                        </p>
                        <p
                          className="info mb-0"
                          style={{ margin: "0 0 0 20px", fontSize: "1.7rem" }}
                        >
                          +91 93168-68577
                        </p>
                      </div>
                    </div>
                    <div className="sdswc-info-box d-flex align-items-center mt-3  mb-5">
                      <span className="icon me-2">
                        <i className="far fa-envelope-open" />
                      </span>
                      <div>
                        <p
                          className="name mb-2"
                          style={{ display: "flex", fontSize: "2rem" }}
                        >
                          Mail Us:
                        </p>
                        <p
                          className="info mb-0"
                          style={{ margin: "0 0 0 20px", fontSize: "1.7rem" }}
                        >
                          patoliyaarpit70@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="sdswc-info-box d-flex align-items-center mt-3">
                      <span className="icon me-2">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <div>
                        <p
                          className="name mb-2"
                          style={{ display: "flex", fontSize: "2rem" }}
                        >
                          Visit Us Office:
                        </p>
                        <p
                          className="info mb-0"
                          style={{ margin: "0 0 0 20px", fontSize: "1.7rem" }}
                        >
                          4, Khodiyar Estate, Nikol-Naroda Road, 382350
                        </p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </section>
        {/* question-area-end */}
        {/* footer-start */}

        <Footer></Footer>

        {/* footer-end */}
        {/* gmap-script */}
      </>
    </div>
  );
}
export default Home;
