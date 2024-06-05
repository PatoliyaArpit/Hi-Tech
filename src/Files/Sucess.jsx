import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { clearCart } from "./redux/CartSlice";
import axios from "axios";

const Sucess = () => {
  const navigat = useNavigate();

  const dispetch = useDispatch();

  setTimeout(() => {
    window.localStorage.removeItem("cart");
    navigat("/");
    dispetch(clearCart());
  }, 3000);

  axios
  .post("http://localhost/Cartallclear.php", {
   
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
 

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
