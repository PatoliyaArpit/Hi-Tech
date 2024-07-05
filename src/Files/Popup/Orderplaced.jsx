import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Orderplaced = (props) => {
  const navigator = useNavigate();
  const [pass, setPass] = useState(props.pass);
  const naviagte = () => {
    navigator("/");
    setPass(pass);
  };
  return (
    <section className="modal-wrapperSucc ">
      <div className="model-containerSucc">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div
                style={{
                  //   boxShadow: "0 15px 25px #00000019",
                  //   padding: 45,
                  width: "500px",
                  textAlign: "center",
                  margin: "40px auto 0 -15rem  ",
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
                  Your Order was successful Plase
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
                <button
                  style={{ margin: "2rem 0 1rem 0",border:"none" ,width:"20%",height:"4rem" }}
                  to="/"
                  className="links"
                  onClick={naviagte}
                >
                  Move to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orderplaced;
