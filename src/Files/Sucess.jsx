import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { clearCart } from "./redux/CartSlice";
import axios from "axios";

const Sucess = () => {
  const navigat = useNavigate();
  const dispetch = useDispatch();

  const UserLogin = useSelector((state) => state.log.log);

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
      const MergeTitle = Finalcart.map(item => item.Title).join(', '); 
      setFinal(MergeTitle);
    }
  }, [cartdata, LoginId]);

  console.log(Final)
  useEffect(() => {
    if (LoginId !== null && Final !== "") {
      axios.request({
        method: "post",
        url: "http://localhost/Order.php",
        data: { UserId: LoginId, Product: Final },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // Redirect to another page upon successful request
      
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    }
  }, [LoginId, Final]);
  
  
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

//   setTimeout(() => {
//     window.localStorage.removeItem("cart");
//     navigat("/");
//     dispetch(clearCart());
//   }, 3000);

//   axios
//   .post("http://localhost/Cartallclear.php", {
   
//   }, {
//     headers: {
//       "Content-Type": "multipart/form-data"
//     }
//   })
 

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div
            style={{
              boxShadow: "0 15px 25px #00000019",
              padding: 45,
              width: "100%",
              textAlign: "center",
              margin: "40px auto",
              borderBottom: "solid 4px #28a745",
            }}
          >
            <i
              style={{ fontSize: 55, color: "#28a745" }}
              className="fa fa-check-circle"
              aria-hidden="true"
            />
            <h2
              style={{
                marginBottom: 12,
                fontSize: 40,
                fontWeight: 500,
                lineHeight: "1.2",
                marginTop: 10,
              }}
            >
              Your payment was successful
            </h2>
            <p
              style={{
                marginBottom: 0,
                fontSize: 18,
                color: "#495057",
                fontWeight: 500,
              }}
            >
              Thank you for your payment. We will be in contact with more
              details shortly.
            </p>
            <Link style={{ margin: "5% 0 0 0" }} to="/" className="links">
              Move to Home
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sucess;
