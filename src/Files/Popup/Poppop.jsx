import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { schema1 } from "../Schema/Log";
import { useFormik } from "formik";
import {clearCart, fadd } from "../redux/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Poppop = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.reg.reg);
  const show = useSelector((state) => state.log.log);

  const navigate = useNavigate();
  const [data, setdata] = useState();
  const Login = () => {
    toast.success("Login Successfull", {
      position: "top-center",
    });
  };
  const [Registerdata, setRegisterdata] = useState([]);
  const [Logindata, setLogindata] = useState([]);

  console.log(Logindata);
  const call1 = () => {
    fetch("http://localhost/Registershow.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setRegisterdata(result);
      });
  };
  useEffect(() => {
    call1();
  }, []);
  const call2 = () => {
    fetch("http://localhost/Loginshow.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setLogindata(result);
      });
  };
  useEffect(() => {
    call2();
  }, []);

  const initialValues = {
    Email: "",
    Password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema1,
      onSubmit: (values, { setSubmitting }) => {
        const user = Registerdata.find((user) => user.Email === values.Email);
        const Register = Registerdata.find((val) => val.Email === values.Email);
        console.log(Registerdata);

        if (user && user.Password === values.Password) {
          dispatch(clearCart());
          if (Logindata.Email === values.Email) {
          } else {
            axios({
              method: "post",
              url: "http://localhost/Login.php",
              data: { ...Register, RegisterId: user.Id },
              headers: { "Content-Type": "multipart/form-data" },
            }).then((res) => {
              console.log(res);
            
                props.pass(props.pass);
                call1()
             
              navigate("/Home");
              dispatch(fadd(Register));
            });
           
          }

          
        } else {
          alert("Incorrect email or password. Please try again.");
        }
        setSubmitting(false);
      },
    });
  console.log(values);


  return (
    <>
      <section className="modal-wrapper">
        <div className="model-container">
          <button className="close" onClick={props.pass}>
            {" "}
            X
          </button>
          <h2>Login</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="subcontainer">
                <label>Email</label>
                <input
                  className="logininput"
                  type="email"
                  placeholder="Enter Email"
                  id="Email"
                  name="Email"
                  onChange={handleChange}
                  value={values.Email}
                  onBlur={handleBlur}
                ></input>
                {errors.Email && touched.Email ? (
                  <p className=" form-error">{errors.Email}</p>
                ) : null}
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="Password"
                  name="Password"
                  onChange={handleChange}
                  value={values.Password}
                  onBlur={handleBlur}
                ></input>
                {errors.Password && touched.Password ? (
                  <p className=" form-error">{errors.Password}</p>
                ) : null}

                <Link style={{ display: "flex" }} onClick={props.pass3}>
                  Forgot Password
                </Link>
              </div>

              <button type="submit" className="model-btn">
                Login
              </button>
            </form>
          </div>
          <p className="text-center text-muted mt-5 mb-0">
            Have already an account?{" "}
            <Link as={Link} onClick={props.pass2} className="link-danger">
              Register
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Poppop;
