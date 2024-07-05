// import React, { useMemo, useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Poppop from "./Popup/Poppop";
import PoppopR from "./Popup/PoppopR";
import PoppopEmail from "./Popup/PoppopEmail";
import PoppopNewPass from "./Popup/PoppopNewPass";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Address } from "./Schema/Address";
import { useFormik } from "formik";
import { Addressselect, cleareAddress } from "./redux/CartSlice";

function Order(props) {
  const navigate = useNavigate();
  const dispetch = useDispatch();
  const lastp = localStorage.getItem("Finalp");

  // const [cartdata,setcartdata]=useState([]);

  const cartitem = useSelector((state) => state.cart.cart);
  // console.log(cartitem);
  const UserLogin = useSelector((state) => state.log.log);
  // console.log(UserLogin.length);
  const pay = useSelector((state) => state.payment.payment);

  const [cartdata, setcartdata] = useState([]);
  const [LoginId, setLoginId] = useState([]);
  const [Final, setFinal] = useState([]);
  const [pop, setpop] = useState(false);
  const [popR, setpopR] = useState(false);
  const [popEmail, setpopEmail] = useState(false);
  const [popNewp, setpopNewp] = useState(false);
  const [allstate, setallstate] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [AddressDetails, setAddressDetails] = useState([]);
  const [FinalAddress, setFinalAddress] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [Edit, setEdit] = useState([]);
  const [SelecetAddress, setSelecetAddress] = useState([]);
  const [Price, setPrice] = useState("");
  const [cartplan, setcartplan] = useState("");
  const plancart = useSelector((state) => state.Admincart.Admincart);
  const Plan = useSelector((state) => state.plan.plan);

  useEffect(() => {
    plancart.map((val) => {
      setPrice(val.Finalp);
      setcartplan(val.Click);
    });
  }, [plancart]);
  // console.log("id",LoginId)
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

  const Payment = () => {
    if (SelecetAddress.length === 0) {
      alert("Select Address");
    } else {
      navigate("/PaymentType");
    }
  };

  const Login = () => {
    toast.success("Login Successfull", {
      position: "top-center",
    });
  };

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

  const call2 = () => {
    let config = {
      method: "get",
      url: "http://api.nightlights.io/districts",
      headers: {
        Authorization:
          "Bearer j7krDJVN_CE1fSQte66X-mdlL9Gc6_YX-2UXDHz7Gx8ZJ1i6-OTFBlyUvW9sMh-9IQU",
      },
    };

    axios
      .request(config)
      .then((res) => {
        setallstate(res.data.regions);
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    call2();
  }, []);
  const uniqueStates = [...new Set(allstate.map((state) => state.state_name))];
  const handleStateChange = (e) => {
    const selectedState = e.target.value; // Use the value from the event
    setSelectedState(selectedState);
    const filteredDistricts = allstate.filter(
      (val) => val.state_name === selectedState
    );
    setDistricts(filteredDistricts);
  };

  const initialValues = {
    FName: "",
    LName: "",
    Contact: "",
    Addressd: "",
    State: "",
    City: "",
    Pincode: "",
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Address,
    onSubmit: (values) => {
      axios({
        method: "post",
        url: "http://localhost/Address.php",
        data: {
          ...values,
          UserId: LoginId,
        },

        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        call3();
        setTimeout(() => {
          resetForm();
          settoggle(false);
        }, 500);
      });
    },
  });

  const handleCombinedStateChange = (e) => {
    handleChange(e);
    handleStateChange(e);
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  const call3 = () => {
    fetch("http://localhost/AddressShow.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setAddressDetails(result);
      });
  };
  useEffect(() => {
    call3();
  }, []);
  useEffect(() => {
    const LoginAddress = AddressDetails.filter(
      (item) => item.UserId === LoginId
    );
    setFinalAddress(LoginAddress);
  }, [AddressDetails]);

  const passId = (Id) => {
    const selectedAddress = FinalAddress.find((item) => item.Id === Id);
    setEdit(selectedAddress);
    settoggle(false);
  };

  // useEffect(() => {
  //   Edit.map((val) => {
  //     setfinaledit(val.Id);
  //   });
  // }, [Edit]);

  const initial = {
    FName: "",
    LName: "",
    Contact: "",
    Addressd: "",
    State: "",
    City: "",
    Pincode: "",
  };
  const formik = useFormik({
    initialValues: initial,
    validationSchema: Address,
    onSubmit: (values) => {
      // dispetch(updatelog({ ...values, Id: LoginId }));
      axios
        .post(
          "http://localhost/AddressEdit.php",
          { ...values, Id: Edit.Id },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
          call3();
          setEdit("");
        });
    },
  });

  // console.log(formik.values);
  useEffect(() => {
    if (Edit) {
      formik.setValues({
        FName: Edit.FName,
        LName: Edit.LName,
        Contact: Edit.Contact,
        Addressd: Edit.Addressd,
        State: Edit.State,
        City: Edit.City,
        Pincode: Edit.Pincode,
      });
    }
  }, [Edit]);
  const closenew = () => {
    settoggle(false);
    resetForm();
  };
  const closeedit = () => {
    setEdit("");
  };
  const selectaddress = (val) => {
    setSelecetAddress(val);
    dispetch(Addressselect(val));
  };

  const opennewaddress = () => {
    settoggle(!toggle);
    setEdit("");
  };
  // dispetch(cleareAddress())
  // console.log(SelecetAddress, "formik");
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
                <div>
                  {/* Main Form */}
                  {FinalAddress.length === 0 ? (
                    <div className="p-4">
                      <form onSubmit={handleSubmit}>
                        <h5 className="card-title mb-3">Guest checkout</h5>
                        <div className="row">
                          <div className="col-6 mb-3">
                            <p className="mb-0" style={{ display: "flex" }}>
                              First name
                            </p>
                            <div className="form-outline">
                              <input
                                type="text"
                                id="FName"
                                name="FName"
                                placeholder="Type here"
                                className="form-control"
                                style={{ fontSize: "10pxx" }}
                                onChange={handleChange}
                                value={values.FName}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors.FName && touched.FName ? (
                              <p className="form-error">{errors.FName}</p>
                            ) : null}
                          </div>
                          <div className="col-6">
                            <p className="mb-0" style={{ display: "flex" }}>
                              Last name
                            </p>
                            <div className="form-outline">
                              <input
                                type="text"
                                id="LName"
                                name="LName"
                                placeholder="Type here"
                                className="form-control"
                                onChange={handleChange}
                                value={values.LName}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors.LName && touched.LName ? (
                              <p className="form-error">{errors.LName}</p>
                            ) : null}
                          </div>
                          <div className="col-6 mb-3">
                            <p className="mb-0" style={{ display: "flex" }}>
                              Phone
                            </p>
                            <div className="form-outline">
                              <input
                                type="tel"
                                id="Contact"
                                name="Contact"
                                placeholder="Enter Contact number"
                                // defaultValue={+91}
                                className="form-control"
                                onChange={handleChange}
                                value={values.Contact}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors.Contact && touched.Contact ? (
                              <p className="form-error">{errors.Contact}</p>
                            ) : null}
                          </div>
                        </div>

                        <hr className="my-4" />
                        <h5
                          className="card-title mb-3"
                          style={{ display: "flex" }}
                        >
                          Shipping info
                        </h5>

                        <div className="row">
                          <div className="col-sm-4 mb-3">
                            <p className="mb-0" style={{ display: "flex" }}>
                              State
                            </p>
                            <select
                              className="form-select"
                              // value={selectedState}
                              // onChange={handleStateChange}
                              name="State"
                              id="State"
                              onChange={handleCombinedStateChange}
                              value={values.State}
                              onBlur={handleBlur}
                            >
                              <option>--Select State--</option>
                              {uniqueStates.map((state, index) => (
                                <option key={index} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                            {errors.State && touched.State ? (
                              <p className="form-error">{errors.State}</p>
                            ) : null}
                          </div>

                          <div className="col-sm-4 col-6 mb-3">
                            <p className="mb-0" style={{ display: "flex" }}>
                              City/villge
                            </p>
                            <div className="form-outline">
                              <input
                                type="text"
                                id="City"
                                name="City"
                                placeholder=" Type Zip Code "
                                className="form-control"
                                onChange={handleChange}
                                value={values.City}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors.City && touched.City ? (
                              <p className="form-error">{errors.City}</p>
                            ) : null}
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
                                id="Addressd"
                                name="Addressd"
                                placeholder="Type here"
                                className="form-control"
                                onChange={handleChange}
                                value={values.Addressd}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors.Addressd && touched.Addressd ? (
                              <p className="form-error">{errors.Addressd}</p>
                            ) : null}
                          </div>

                          <div className="col-sm-4 col-6 mb-3">
                            <p className="mb-0">Pin code</p>
                            <div className="form-outline">
                              <input
                                type="Number"
                                id="Pincode"
                                name="Pincode"
                                placeholder="Type Pin code"
                                className="form-control"
                                onChange={handleChange}
                                value={values.Pincode}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors.Pincode && touched.Pincode ? (
                              <p className="form-error">{errors.Pincode}</p>
                            ) : null}
                          </div>
                        </div>

                        <button type="submit" className="model-btn">
                          save
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div
                      className=" shadow p-3 border"
                      style={{
                        width: "100%",
                        // border: "2px solid black",
                        // boxShadow: "5px 10px  #888888",
                        margin: "6% 0 0 0",
                      }}
                    >
                      {FinalAddress.map((val) => {
                        return (
                          <>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  width: "auto",
                                  margin: "0 0 7px 0",
                                }}
                                className=" shadow p-3 border"
                              >
                                <input
                                  type="radio"
                                  id={`radio-${val.Id}`}
                                  value={val.Id}
                                  onChange={() => selectaddress(val)}
                                  name="Address"
                                />
                                <label
                                  htmlFor={`radio-${val.Id}`}
                                  style={{ marginLeft: "8px" }}
                                >
                                  <h4 style={{ display: "flex" }}>
                                    {val.FName} {val.LName}: {val.Contact}
                                  </h4>
                                  <div>
                                    <p>
                                      {val.Addressd}, {val.City}, {val.State} -{" "}
                                      {val.Pincode}
                                    </p>
                                  </div>
                                </label>
                                <button
                                  style={{
                                    border: "none",
                                    width: "60px", // Increased width for better clickability
                                    height: "30px", // Adjusted height
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: "auto", // Pushes the button to the right
                                    cursor: "pointer", // Indicate clickability
                                  }}
                                  onClick={(e) => passId(val.Id)}
                                >
                                  Edit
                                </button>{" "}
                              </div>
                            </div>
                            {val.Id === Edit.Id ? (
                              // Edit Form
                              <div>
                                <section className="">
                                  <div className="">
                                    <button
                                      className="close"
                                      onClick={closeedit}
                                    >
                                      {" "}
                                      X
                                    </button>
                                    <h2
                                      style={{
                                        display: "inline-block",
                                        margin: "0 0 10px 0",
                                      }}
                                    >
                                      Edit Address
                                    </h2>
                                    <div>
                                      <form onSubmit={formik.handleSubmit}>
                                        <div className="subcontainer1">
                                          <div className="subin">
                                            <label
                                              style={{ margin: "3% 4% 0 1%" }}
                                            >
                                              FName:
                                            </label>
                                            <div>
                                              <input
                                                // className="logininput"
                                                type="text"
                                                placeholder="Enter Bio"
                                                id="FName"
                                                name="FName"
                                                onChange={formik.handleChange}
                                                value={formik.values.FName}
                                                onBlur={formik.handleBlur}
                                                style={{ width: "300px" }}
                                              ></input>
                                              {formik.errors.FName &&
                                              formik.touched.FName ? (
                                                <p className="form-error">
                                                  {formik.errors.FName}
                                                </p>
                                              ) : null}
                                            </div>
                                          </div>

                                          <div className="subin">
                                            <label
                                              style={{ margin: "2% 4% 0 0" }}
                                            >
                                              LName:
                                            </label>
                                            <div>
                                              {" "}
                                              <input
                                                className="logininput"
                                                type="text"
                                                placeholder="Enter Name"
                                                id="Name"
                                                name="Name"
                                                onChange={formik.handleChange}
                                                value={formik.values.LName}
                                                onBlur={formik.handleBlur}
                                                style={{ width: "300px" }}
                                              ></input>
                                              {formik.errors.LName &&
                                              formik.touched.LName ? (
                                                <p className="form-error">
                                                  {formik.errors.LName}
                                                </p>
                                              ) : null}
                                            </div>
                                          </div>
                                          <div className="subin">
                                            <label
                                              style={{ margin: "3% 4% 0 0" }}
                                            >
                                              Contact:
                                            </label>
                                            <div>
                                              <input
                                                type="text"
                                                placeholder="Enter Number"
                                                id="Contact"
                                                name="Contact"
                                                onChange={formik.handleChange}
                                                value={formik.values.Contact}
                                                onBlur={formik.handleBlur}
                                                style={{ width: "300px" }}
                                              ></input>
                                              {formik.errors.Contact &&
                                              formik.touched.Contact ? (
                                                <p className="form-error">
                                                  {formik.errors.Contact}
                                                </p>
                                              ) : null}
                                            </div>
                                          </div>
                                          <div
                                            className="subin"
                                            style={{ margin: "3% 0 0 0" }}
                                          >
                                            <label
                                              style={{ margin: "0% 7% 0 0" }}
                                            >
                                              State:
                                            </label>
                                            <div>
                                              <select
                                                style={{
                                                  width: "300px",
                                                  height: "30px",
                                                  fontSize: "1.4rem",
                                                }}
                                                name="State"
                                                id="State"
                                                onChange={
                                                  handleCombinedStateChange
                                                }
                                                value={formik.values.State}
                                                onBlur={formik.handleBlur}
                                              >
                                                <option disabled>
                                                  --Select State--
                                                </option>
                                                {uniqueStates.map(
                                                  (state, index) => (
                                                    <option
                                                      key={index}
                                                      value={state}
                                                    >
                                                      {state}
                                                    </option>
                                                  )
                                                )}
                                              </select>
                                              {formik.errors.State &&
                                              formik.touched.State ? (
                                                <p className="form-error">
                                                  {formik.errors.State}
                                                </p>
                                              ) : null}
                                            </div>
                                          </div>
                                          <div className="subin">
                                            <label
                                              style={{ margin: "3% 4% 0 0" }}
                                            >
                                              Address:
                                            </label>
                                            <div>
                                              {" "}
                                              <input
                                                type="text"
                                                placeholder="Enter Twitter"
                                                id="Addressd"
                                                name="Addressd"
                                                onChange={formik.handleChange}
                                                value={formik.values.Addressd}
                                                onBlur={formik.handleBlur}
                                                style={{ width: "300px" }}
                                              ></input>
                                              {formik.errors.Addressd &&
                                              formik.touched.Addressd ? (
                                                <p className="form-error">
                                                  {formik.errors.Addressd}
                                                </p>
                                              ) : null}
                                            </div>
                                          </div>
                                          <div className="subin">
                                            <label
                                              style={{ margin: "3% 9% 0 0" }}
                                            >
                                              City:
                                            </label>
                                            <div>
                                              {" "}
                                              <input
                                                type="text"
                                                placeholder="Enter Instagram"
                                                id="City"
                                                name="City"
                                                onChange={formik.handleChange}
                                                value={formik.values.City}
                                                onBlur={formik.handleBlur}
                                                style={{ width: "300px" }}
                                              ></input>
                                              {formik.errors.City &&
                                              formik.touched.City ? (
                                                <p className="form-error">
                                                  {formik.errors.City}
                                                </p>
                                              ) : null}
                                            </div>
                                          </div>
                                          <div className="subin">
                                            <label
                                              style={{ margin: "3% 4% 0 0" }}
                                            >
                                              Pincode:
                                            </label>
                                            <div>
                                              <input
                                                type="text"
                                                placeholder="Enter Pincode"
                                                id="Pincode"
                                                name="Pincode"
                                                onChange={formik.handleChange}
                                                value={formik.values.Pincode}
                                                onBlur={formik.handleBlur}
                                                style={{ width: "300px" }}
                                              ></input>
                                              {formik.errors.Pincode &&
                                              formik.touched.Pincode ? (
                                                <p className="form-error">
                                                  {formik.errors.Pincode}
                                                </p>
                                              ) : null}
                                            </div>
                                          </div>
                                        </div>

                                        <button
                                          type="submit"
                                          className="model-btn"
                                        >
                                          Change
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            ) : null}
                          </>
                        );
                      })}
                    </div>
                  )}
                  <button
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center", // Ensure contents are vertically centered
                      border: "1px solid black",
                      padding: "10px 20px", // Add some padding for better clickability
                      cursor: "pointer",
                      background: "", // Change cursor to pointer to indicate clickability
                    }}
                    // className="btn"
                    onClick={() => opennewaddress()}
                  >
                    Add New Address
                  </button>

                  {toggle ? (
                    // new Form
                    <div>
                      <section className="">
                        <div className="">
                          <button className="close" onClick={closenew}>
                            {" "}
                            X
                          </button>
                          <h2
                            style={{
                              display: "inline-block",
                              margin: "0 0 10px 0",
                            }}
                          >
                            New Address
                          </h2>
                          <div className="shadow p-3 border">
                            <form onSubmit={handleSubmit}>
                              <div className="subcontainer1">
                                <div className="subin">
                                  <label
                                    htmlFor="FName"
                                    style={{ margin: "3% 4% 0 1%" }}
                                  >
                                    FName:
                                  </label>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <input
                                      type="text"
                                      placeholder="Enter FName"
                                      id="FName"
                                      name="FName"
                                      onChange={handleChange}
                                      value={values.FName}
                                      onBlur={handleBlur}
                                      style={{ width: "300px" }}
                                    />

                                    <div>
                                      {errors.FName && touched.FName ? (
                                        <p className="form-error">
                                          {errors.FName}
                                        </p>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>

                                <div className="subin">
                                  <label
                                    htmlFor="LName"
                                    style={{ margin: "2% 4% 0 0" }}
                                  >
                                    LName:
                                  </label>
                                  <div>
                                    <input
                                      className="logininput"
                                      type="text"
                                      placeholder="Enter LName"
                                      id="LName"
                                      name="LName"
                                      onChange={handleChange}
                                      value={values.LName}
                                      onBlur={handleBlur}
                                      style={{ width: "300px" }}
                                    />
                                    {errors.LName && touched.LName ? (
                                      <p className="form-error">
                                        {errors.LName}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>

                                <div className="subin">
                                  <label
                                    htmlFor="Contact"
                                    style={{ margin: "3% 4% 0 0" }}
                                  >
                                    Contact:
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      placeholder="Enter Number"
                                      id="Contact"
                                      name="Contact"
                                      onChange={handleChange}
                                      value={values.Contact}
                                      onBlur={handleBlur}
                                      style={{ width: "300px" }}
                                    />
                                    {errors.Contact && touched.Contact ? (
                                      <p className="form-error">
                                        {errors.Contact}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>

                                <div
                                  className="subin"
                                  style={{ margin: "3% 0 0 0" }}
                                >
                                  <label
                                    htmlFor="State"
                                    style={{ margin: "0% 7% 0 0" }}
                                  >
                                    State:
                                  </label>
                                  <div>
                                    {" "}
                                    <select
                                      style={{
                                        width: "300px",
                                        height: "30px",
                                        fontSize: "1.4rem",
                                      }}
                                      name="State"
                                      id="State"
                                      onChange={handleCombinedStateChange}
                                      value={values.State}
                                      onBlur={handleBlur}
                                    >
                                      <option>--Select State--</option>
                                      {uniqueStates.map((state, index) => (
                                        <option key={index} value={state}>
                                          {state}
                                        </option>
                                      ))}
                                    </select>
                                    {errors.State && touched.State ? (
                                      <p className="form-error">
                                        {errors.State}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>

                                <div className="subin">
                                  <label
                                    htmlFor="Addressd"
                                    style={{ margin: "3% 4% 0 0" }}
                                  >
                                    Address:
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      placeholder="Enter Address"
                                      id="Addressd"
                                      name="Addressd"
                                      onChange={handleChange}
                                      value={values.Addressd}
                                      onBlur={handleBlur}
                                      style={{ width: "300px" }}
                                    />
                                    {errors.Addressd && touched.Addressd ? (
                                      <p className="form-error">
                                        {errors.Addressd}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>

                                <div className="subin">
                                  <label
                                    htmlFor="City"
                                    style={{ margin: "3% 8% 0 0" }}
                                  >
                                    City:
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      placeholder="Enter City"
                                      id="City"
                                      name="City"
                                      onChange={handleChange}
                                      value={values.City}
                                      onBlur={handleBlur}
                                      style={{ width: "300px" }}
                                    />
                                    {errors.City && touched.City ? (
                                      <p className="form-error">
                                        {errors.City}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>

                                <div className="subin">
                                  <label
                                    htmlFor="Pincode"
                                    style={{ margin: "3% 4% 0 0" }}
                                  >
                                    Pincode:
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      placeholder="Enter Pincode"
                                      id="Pincode"
                                      name="Pincode"
                                      onChange={handleChange}
                                      value={values.Pincode}
                                      onBlur={handleBlur}
                                      style={{ width: "300px" }}
                                    />
                                    {errors.Pincode && touched.Pincode ? (
                                      <p className="form-error">
                                        {errors.Pincode}
                                      </p>
                                    ) : null}
                                  </div>
                                </div>
                              </div>

                              <button type="submit" className="model-btn">
                                Change
                              </button>
                            </form>
                          </div>
                        </div>
                      </section>
                    </div>
                  ) : null}

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
                        Payment
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
                          Payment();
                        }}
                      >
                        Payment
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
                  <p className="mb-2 fw-bold">Rs:{Price}</p>
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
                  {cartplan === "Plan"
                    ? Plan.map((val) => (
                        <div
                          // key={val.id}
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
                                src={val.PlanImg}
                                style={{ height: 96, width: 96 }}
                                className="img-sm rounded border"
                                alt="Product"
                              />
                            </div>
                            <div className="">
                              <a href="#" className="nav-link">
                                {val.Title} <br />
                                Quantity: {val.quantity}
                              </a>
                              <div className="price text-muted">
                                Total: {val.Price * val.quantity}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : Final.map((val) => (
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
                                style={{ height: 96, width: 96 }}
                                className="img-sm rounded border"
                                alt="Product"
                              />
                            </div>
                            <div className="">
                              <a href="#" className="nav-link">
                                {val.Title} <br />
                                Quantity: {val.quantity}
                              </a>
                              <div className="price text-muted">
                                Total: {val.Price * val.quantity}
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
