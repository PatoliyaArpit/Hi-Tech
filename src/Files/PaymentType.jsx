import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import Orderplaced from "./Popup/Orderplaced";
import axios from "axios";
import { plan } from "./redux/CartSlice";

const PaymentType = () => {
  const cartitem = useSelector((state) => state.cart.cart);
  const UserLogin = useSelector((state) => state.log.log);
  const Cart = useSelector((state) => state.Admincart.Admincart);
  const [cartdata, setcartdata] = useState([]);
  const [LoginId, setLoginId] = useState([]);
  const [Final, setFinal] = useState([]);
  const [Paymentmethode, setPaymentmethode] = useState({});
  const [Succpop, setSuccpop] = useState(false);
  const [Address, setAddress] = useState("");
  const [city, setCity] = useState('');
  const [Pincode, setPincode] = useState('');
  const [FName,setFName]=useState('')
  const [LName,setLName]=useState('')
  const [date,setdate]=useState("")
  const [Time,setTime]=useState("")
  const [Day,setDay]=useState("")
  const [cartplan, setcartplan] = useState("");
  const [FinalData,setFinalData]=useState("")
  const SelectAddress = useSelector((state) => state.Address.Address);
  const plancart = useSelector((state) => state.Admincart.Admincart);
  const Plan = useSelector((state) => state.plan.plan);

  const navigator = useNavigate();
  
  useEffect(() => {
    plancart.map((val) => {
      setcartplan(val.Click);
    });
  }, [plancart]);
  useEffect(() => {
    UserLogin.map((val) => {
      setLoginId(val.Id);
    });
  }, []);
  console.log(SelectAddress, "select");
  useEffect(() => {
    SelectAddress.map((val) => {
      setAddress(val.Addressd);
      setCity(val.City);
      setPincode(val.Pincode);
      setFName(val.FName);
      setLName(val.LName);
      
    });
  });
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

  useEffect(() => {
    if (cartplan === "Cart") {
      setFinalData(Final);
    } else {
      setFinalData(Plan);
    }
  }, [cartplan, Final, Plan]);
console.log(FinalData,"plan")
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
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PFvkNSF0uRd81kXkvI0KPn46KKuVWmhdcqVisa6HQ5vccNvpo4TvtuRezoLzA7UtedphYGtxfzq15nx684mYOAw005Sply1iG"
    );
    const body = {
      products: FinalData,
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
  const Payment = (val) => {
    setPaymentmethode(val);
  };
  const makePaymentCod = () => {
    // navigator("/success");

    setSuccpop(true);
    Order();
  };
  const mackalert = () => {
    alert("Please Select Payment Methode");
  };
console.log(FinalData,"fina");
  const Order = () => {
   
    FinalData.map((item) => {
      axios
        .post(
          "http://localhost/Order.php",
          {
            Product: item.Title,
            UserId: LoginId,
            Quantity:item.quantity,
            Address:Address,
            City:city,
            Pincode:Pincode,
            FName:FName,
            LName:LName,
            Date:date,
            Time:Time,
            Day:Day,
            PaymentMethode:Paymentmethode
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log("Item submitted:", res.data);
        })
        .catch((error) => {
          console.error("Error submitting item:", error);
        });
    });
  };
  useEffect(()=>{
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0');
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedDay = dayOfWeek;
    setdate(formattedDate)
    setTime(formattedTime)
    setDay(formattedDay)
    console.log(`Date: ${formattedDate}`);
    console.log(`Time: ${formattedTime}`);
    console.log(`Day: ${formattedDay}`);
    
  },[])
  
  return (
    <>
      <Header />
      {Succpop ? <Orderplaced pass={Succpop}></Orderplaced> : null}

      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center pb-5">
                <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                  <div className="py-4 d-flex flex-row">
                    <h5>
                      <span className="far fa-check-square pe-2" />
                      <b>ELIGIBLE</b> |
                    </h5>
                    <span className="ps-2">Pay</span>
                  </div>

                  <div>
                    <div>
                      {UserLogin.map((val) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              width: "auto",
                              margin: "0 0 7px 0",
                            }}
                            className=" shadow p-3 border"
                          >
                            <label style={{ marginLeft: "8px" }}>
                              <h5
                                style={{
                                  display: "flex",
                                  fontWeight: "bold",
                                  margin: "0 0 5% 0",
                                  textDecoration: "underline",
                                  color: "#8e8e8e",
                                }}
                              >
                                {" "}
                                ✔ Login
                              </h5>
                              <h4 style={{ display: "flex" }}>
                                {val.Name}: {val.Contact}
                              </h4>
                            </label>
                          </div>
                        );
                      })}
                    </div>

                    {SelectAddress.map((val) => {
                      return (
                        <div>
                          <div
                            style={{
                              display: "flex",
                              width: "auto",
                              margin: "0 0 7px 0",
                            }}
                            className=" shadow p-3 border"
                          >
                            <label
                              htmlFor={`radio-${val.Id}`}
                              style={{ marginLeft: "8px" }}
                            >
                              <h5
                                style={{
                                  display: "flex",
                                  fontWeight: "bold",
                                  margin: "0 0 5% 0",
                                  textDecoration: "underline",
                                  color: "#8e8e8e",
                                }}
                              >
                                {" "}
                                ✔ Dispetch This Address
                              </h5>
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <hr />
                  <div className="pt-2">
                    <div className="d-flex pb-2">
                      <div>
                        <p>
                          <b>Payment Methode</b>
                        </p>
                      </div>
                    </div>

                    <form className="pb-3">
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Payment"
                            defaultValue=""
                            aria-label="..."
                            defaultChecked=""
                            onChange={() => Payment("Cod")}
                          />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                            <i className="fab fa-cc-cod fa-lg text-primary pe-2" />
                            Cash On Delevery
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="Payment"
                            defaultValue=""
                            aria-label="..."
                            onChange={() => Payment("Card")}
                          />
                        </div>
                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                          <p className="mb-0">
                            <i className="fab fa-cc-visa fa-lg text-bodu pe-2" />
                            Visa Debit Card
                          </p>
                          <div className="ms-auto">************1038</div>
                        </div>
                      </div>
                    </form>

                    {Paymentmethode === "Cod" ? (
                      <button
                        className="btn btn-success shadow-0 border"
                        style={{
                          width: "90px",
                          height: "35px",
                          backgroundColor: "#3fb698",
                          fontSize: "1.2rem",
                        }}
                        onClick={makePaymentCod}
                      >
                        Plase Order
                      </button>
                    ) : Paymentmethode === "Card" ? (
                      <button
                        className="btn btn-success shadow-0 border"
                        style={{
                          width: "90px",
                          height: "35px",
                          backgroundColor: "#3fb698",
                          fontSize: "1.2rem",
                        }}
                        onClick={makePayment}
                      >
                        Pay
                      </button>
                    ) : (
                      <>
                        <button
                          className="btn btn-success shadow-0 border"
                          style={{
                            width: "90px",
                            height: "35px",
                            backgroundColor: "#3fb698",
                            fontSize: "1.2rem",
                          }}
                          onClick={mackalert}
                        >
                          Pay
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-md-5 col-xl-4 offset-xl-1">
                  <div className="rounded d-flex flex-column p-2 bg-body-tertiary">
                    <div className="p-2 me-3" style={{ margin: "5% 0 0 0" }}>
                      <h4>PRICE DETAILS</h4>
                    </div>
                    {Cart.map((val) => {
                      return (
                        <div>
                          <hr></hr>
                          <div className="p-2 d-flex">
                            <div
                              className="col-8"
                              style={{ fontSize: "1.6rem" }}
                            >
                              {" "}
                              Price({val.quantity} item)
                            </div>
                            <div
                              className="ms-auto"
                              style={{ fontSize: "1.6rem" }}
                            >
                              Rs:{val.Price}
                            </div>
                          </div>
                          <div
                            className="p-2 d-flex"
                            style={{ fontSize: "1.6rem" }}
                          >
                            <div className="col-8">Delivery Charges</div>
                            <div
                              className="ms-auto"
                              style={{ fontSize: "1.6rem" }}
                            >
                              Rs:100
                            </div>
                          </div>

                          <div className="border-top px-2 mx-2" />
                          <div className="border-top px-2 mx-2" />
                          <div className="p-2 d-flex pt-3">
                            <div
                              className="col-8"
                              style={{ fontSize: "1.8rem" }}
                            >
                              <b>Total Payable</b>
                            </div>
                            <div className="ms-auto">
                              <b
                                className="text-success"
                                style={{ fontSize: "1.8rem" }}
                              >
                                Rs:{val.Finalp}
                              </b>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentType;
