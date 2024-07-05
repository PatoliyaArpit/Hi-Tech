import { useDispatch, useSelector } from "react-redux";
import { removecart, update, pay, Adcart } from "./redux/CartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const UserLogin = useSelector((state) => state.log.log);
  const cartItems = useSelector((state) => state.cart.cart);

  // Local state
  const [Price, setPrice] = useState(0);
  const [FinalP, setFinalP] = useState(0);
  const [cartdata, setcartdata] = useState([]);
  const [LoginId, setLoginId] = useState(null);
  const [Final, setFinal] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Fetch cart data from server
  const fetchCartData = () => {
   fetch("http://localhost/cartshow.php")
   .then((res)=>{
    return res.json();
   })
   .then((result)=>{
    setcartdata(result);
   
   })
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    if (UserLogin.length > 0) {
      setLoginId(UserLogin[0].Id);
    } else {
      setLoginId(null);
    }
  }, [UserLogin]);

  useEffect(() => {
    if (LoginId !== null) {
      const finalCart = cartdata.filter((item) => item.UserId === LoginId);
      setFinal(finalCart);
      // fetchCartData();
    } else {
      setFinal(cartItems);
    }
    // fetchCartData();
  }, [LoginId, cartdata, cartItems]);

  useEffect(() => {
    const totalPrice = Final.reduce(
      (total, item) => total + item.Price * item.quantity,
      0
    );
    setPrice(totalPrice);
    setFinalP(totalPrice + 100);
    // fetchCartData();
  }, [Final]);

  const increase = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.Id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(update(updatedCartItems));
  };

  const decrease = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.Id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    dispatch(update(updatedCartItems));
  };

  const local = () => {
    localStorage.setItem("Finalp", FinalP);
    dispatch(pay(FinalP));
    dispatch(Adcart({"Price":Price,"Finalp":FinalP,"quantity":Final.length,"Click":"Cart"}))
  };

  const returnHome = () => {
    navigate("/");
  };

  const handleincrease = (data) => {
    axios.post("http://localhost/Increcart.php", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      fetchCartData();
    }).catch((error) => {
      console.error("There was an error increasing the quantity!", error);
    });
  };

 const handledecrease = (data) => {
    axios
      .post("http://localhost/Decrecart.php", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
       
        fetchCartData();
      });
   
  };

  const handleDelete = (data) => {
    axios.post("http://localhost/deletecart.php", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      fetchCartData();
      fetchCartData();
      setcartdata((prevData) => prevData.filter((item) => item.Id !== data.Id));
      setRefresh(!refresh);
    }).catch((error) => {
      console.error("There was an error deleting the item!", error);
    });
  };
  // useEffect(() => {
  //   handleDelete();
  // }, []);

  return (
    <>
      <Header refresh={refresh}></Header>
      <ToastContainer />
      {Final.length === 0 ? (
        <section style={{ margin: "25px 0 0 0 " }}>
          <div style={{ height: "auto" }}>
            <h1> Shoping Cart </h1>
          </div>
          <div>
            <img src="img/home1/cart.png" width="500" alt="" />
          </div>
          <div>
            <p>
              Before Proceed to Checkout you must add some product to your
              shopingcart
            </p>
            <p>you will find lot of interesting products on our "Shop" page</p>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#3fb698",
                borderRadius: "12px",
                height: "40px",
                width: "120px",
                margin: "2% 0 5% 0 ",
                border: "none",
                color: "white",
                fontWeight: "400",
                fontSize: "13px",
              }}
              onClick={() => returnHome()}
            >
              Return To shop
            </button>
          </div>
        </section>
      ) : (
        <section
          className=""
          style={{ backgroundColor: "#eee", height: "100%" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="mb-3">
                          <Link to="/" className="links">
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            Continue shopping
                          </Link>
                        </h5>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                            <p className="mb-0">
                              You have {Final.length} items in your cart
                            </p>
                          </div>
                          <div></div>
                        </div>

                        {Final.map((item) => {
                          
                          return (
                            <div className="card mb-3" key={item.Id}>
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <img
                                        src={item.Img}
                                        className="img-fluid rounded-3"
                                        alt="Shopping item"
                                        style={{ width: 65 }}
                                      />
                                    </div>
                                    <div className="ms-3">
                                      <h5>{item.Title}</h5>
                                      <p className="small mb-0"></p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center quantityb ">
                                    <button
                                      className="incredecre"
                                      onClick={() => {
                                        if (UserLogin.length > 0) {
                                          const data = new FormData();
                                          data.append("Id", item.Id);
                                          handledecrease(data);
                                        } else {
                                          decrease(item.Id);
                                        }
                                      }}
                                    >
                                      -
                                    </button>

                                    <div style={{ width: 50 }}>
                                      <h5 className="fw-normal mb-0">
                                        {item.quantity}
                                      </h5>
                                    </div>
                                    <button
                                      className="incredecre"
                                      onClick={() => {
                                        if (UserLogin.length > 0) {
                                          const data = new FormData();
                                          data.append("Id", item.Id);
                                          handleincrease(data);
                                        } else {
                                          increase(item.Id);
                                        }
                                      }}
                                    >
                                      +
                                    </button>
                                    <div style={{ width: 80 }}>
                                      <h5 className="mb-0">
                                        {item.quantity * item.Price}
                                      </h5>
                                    </div>
                                    <a
                                      href="#!"
                                      style={{ color: "#cecece" }}
                                      onClick={() => {
                                        const data = {
                                          Id: item.Id,
                                        };
                                        if (UserLogin.length > 0) {
                                          handleDelete(data);
                                        } else {
                                          dispatch(removecart({ Id: item.Id }));
                                        }
                                      }}
                                    >
                                      <i className="fas fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="col-lg-5 mt-5">
                        {/* <div className="card bg-primary text-white rounded-3"> */}
                        <div
                          className="card  text-white rounded-3"
                          style={{ backgroundColor: "#4D869C" }}
                        >
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <h5 className="mb-0">Card details</h5>
                              <img
                                src="img/home1/hitech2.jpg"
                                className="img-fluid rounded-3"
                                style={{ width: 90, mixBlendMode: "multiply" }}
                                alt="Avatar"
                              />
                            </div>
                            <p className=" lang-time mb-2 justify-content-center">
                              Card type
                            </p>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-mastercard fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-visa fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-stripe fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <i className="fab fa-cc-paypal fa-2x" />
                            </a>

                            <hr className="my-4" />
                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Subtotal</p>
                              <p className="mb-2">Rs:{Price}</p>
                            </div>

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Shipping</p>
                              <p className="mb-2">Rs:100.00</p>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Total(Incl. taxes)</p>
                              <p className="mb-2">Rs:{FinalP}</p>
                            </div>

                            <button
                              type="button"
                              className="btn btn-info btn-block btn-lg"
                              onClick={local}
                            >
                              <Link
                                to="/Order"
                                className="d-flex justify-content-between text-decoration-none"
                              >
                                <span> Total:{FinalP}</span>
                                <span>
                                  Select Address
                                  <i className="fas fa-long-arrow-alt-right ms-2" />
                                </span>
                              </Link>
                              {/*  */}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer></Footer>
    </>
  );
}
export default Checkout;
