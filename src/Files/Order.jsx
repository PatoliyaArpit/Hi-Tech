// import React, { useMemo, useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js";

import { useNavigate } from "react-router-dom";
import Poppop from "./Popup/Poppop";
import PoppopR from "./Popup/PoppopR";
import PoppopEmail from "./Popup/PoppopEmail";
import PoppopNewPass from "./Popup/PoppopNewPass";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Order(props) {
  const navigate = useNavigate();
  const dispetch = useDispatch();
  const lastp = localStorage.getItem("Finalp");
  console.log(lastp);
  // const [cartdata,setcartdata]=useState([]);

  const cartitem = useSelector((state) => state.cart.cart);
  // console.log(cartitem);
  const UserLogin = useSelector((state) => state.log.log);
  console.log(UserLogin.length);
  const pay = useSelector((state) => state.payment.payment);

  console.log(pay);
  const [cartdata, setcartdata] = useState([]);
  const [LoginId, setLoginId] = useState([]);
  const [Final, setFinal] = useState([]);
  useEffect(() => {
    UserLogin.map((val) => {
      setLoginId(val.Id);
    });
  }, []);

  useEffect(() => {
    if (LoginId !== null) {
      const Finalcart = cartdata.filter((val) => val.UserId === LoginId);
      if (UserLogin.length === 0) {
        setFinal(cartitem);
      } else {
        setFinal(Finalcart);
      }
    }
  }, [cartdata, LoginId]);
  console.log(Final);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PFvkNSF0uRd81kXkvI0KPn46KKuVWmhdcqVisa6HQ5vccNvpo4TvtuRezoLzA7UtedphYGtxfzq15nx684mYOAw005Sply1iG"
    );
    const body = {
      products: Final,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:8080/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  const recoll = () => {
    navigate("/Log");
  };
  const Login = () => {
    toast.success("Login Successfull", {
      position: "top-center",
    });
  };
  const [pop, setpop] = useState(false);
  const [popR, setpopR] = useState(false);
  const [popEmail, setpopEmail] = useState(false);
  const [popNewp, setpopNewp] = useState(false);

  const btn = () => {
    setpop(false);
    Login();
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
  }, []);

  return (
    <>
      <Header></Header>
      {pop ? <Poppop pass={btn} pass2={btnr} pass3={btnForget} /> : null}
      {popR ? <PoppopR pass={btn1} pass2={Rbtnclose}></PoppopR> : null}
      {popEmail ? (
        <PoppopEmail pass={Emailbtn} pass2={EmailBtnSecond}></PoppopEmail>
      ) : null}
      {popNewp ? (
        <PoppopNewPass pass={Newpass} pass2={Newpass2}></PoppopNewPass>
      ) : null}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mb-4">
              {/* Checkout */}
              <div className="card shadow-0 border">
                <div className="p-4">
                  <h5 className="card-title mb-3">Guest checkout</h5>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <p className="mb-0" style={{ display: "flex" }}>
                        First name
                      </p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                          style={{ fontSize: "10pxx" }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <p className="mb-0" style={{ display: "flex" }}>
                        Last name
                      </p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0" style={{ display: "flex" }}>
                        Phone
                      </p>
                      <div className="form-outline">
                        <input
                          type="tel"
                          id="typePhone"
                          defaultValue={+91}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <p className="mb-0" style={{ display: "flex" }}>
                        Email
                      </p>
                      <div className="form-outline">
                        <input
                          type="email"
                          id="typeEmail"
                          placeholder="example@gmail.com"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <h5 className="card-title mb-3" style={{ display: "flex" }}>
                    Shipping info
                  </h5>
                  <div className="row mb-3">
                    <div className="col-lg-4 mb-3">
                      {/* Default checked radio */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Express delivery <br />
                            <small className="text-muted">
                              3-4 days via Fedex{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      {/* Default radio */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Post office <br />
                            <small className="text-muted">
                              20-30 days via post{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                      {/* Default radio */}
                      <div className="form-check h-100 border rounded-3">
                        <div className="p-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Self pick-up <br />
                            <small className="text-muted">
                              Come to our shop{" "}
                            </small>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 mb-3">
                      <p className="mb-0" style={{ display: "flex" }}>
                        Address
                      </p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <p className="mb-0" style={{ display: "flex" }}>
                        City
                      </p>
                      <select className="form-select">
                        <option value={1}>Gujrat</option>
                        <option value={2}>MadhyaPradesh</option>
                        <option value={3}>Shrilanka</option>
                      </select>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <p className="mb-0" style={{ display: "flex" }}>
                        House
                      </p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-6 mb-3">
                      <p className="mb-0">Postal code</p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder="Type Postal code"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-6 mb-3">
                      <p className="mb-0" style={{ display: "flex" }}>
                        Zip
                      </p>
                      <div className="form-outline">
                        <input
                          type="text"
                          id="typeText"
                          placeholder=" Type Zip Code "
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="mb-0" style={{ display: "flex" }}>
                      Message to seller
                    </p>
                    <div className="form-outline">
                      <textarea
                        className="form-control"
                        id="textAreaExample1"
                        placeholder=" Type Message"
                        rows={2}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="float-end">
                    <button
                      className="btn btn-light border"
                      style={{ width: "90px", height: "35px" }}
                    >
                      Cancel
                    </button>
                    {UserLogin.length === 0 ? (
                      <button
                        className="btn btn-success shadow-0 border"
                        style={{
                          width: "90px",
                          height: "35px",
                          backgroundColor: "#3fb698",
                        }}
                        onClick={() => {
                          setpop(true);
                        }}
                      >
                        Pay
                      </button>
                    ) : (
                      <button
                        className="btn btn-success shadow-0 border"
                        style={{
                          width: "90px",
                          height: "35px",
                          backgroundColor: "#3fb698",
                        }}
                        onClick={() => {
                          makePayment();
                        }}
                      >
                        Pay
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {/* Checkout */}
            </div>

            <div
              className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-start"
              style={{
                width: "380px",
                // margin: "0 0 0 20px",
                background: "grey",
              }}
            >
              <div
                className="ms-lg-4 mt-4 mt-lg-4 w-100"
                style={{ maxWidth: "450px" }}
              >
                <h4 className="mb-3">Summary</h4>
                {/* <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">Rs:{Price}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Discount:</p>
                  <p className="mb-2 text-danger">- $60.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping cost:</p>
                  <p className="mb-2">+ Rs:100.00</p>
                </div> */}
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">Rs:{lastp}</p>
                </div>

                <hr />
                <h4 className="text-dark my-4">Total Item</h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  {Final.map((val) => (
                    <div
                      key={val.id}
                      style={{
                        background: "white",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="me-3 position-relative">
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary"></span>
                          <img
                            src={val.Img}
                            style={{ height: 96, width: "96x" }}
                            className="img-sm rounded border"
                          />
                        </div>
                        <div className="">
                          <a href="#" className="nav-link">
                            {val.Title} <br />
                            Quantity:{val.quantity}
                          </a>
                          <div className="price text-muted">
                            Total:{val.Price * val.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
export default Order;
