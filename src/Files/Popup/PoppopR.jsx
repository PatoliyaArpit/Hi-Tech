import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { schema1 } from "../Schema/Log";
import { useFormik } from "formik";
import { add, fadd } from "../redux/CartSlice";
import { schema } from "../Schema/RegisterCheck";
import axios from "axios";

const PoppopR = (props) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.reg.reg);
  // console.log(show);
  const [data, setdata] = useState([]);

  const call1 = () => {
    fetch("http://localhost/Registershow.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setdata(result);
      });
  };
  useEffect(() => {
    call1();
  }, []);

  const initialValues = {
    Name: "",
    Email: "",
    Contact: "",
    Password: "",
  };
  const [check,setcheck]=useState("")
 
   data.map((val)=>{
    console.log(val.Email)
   })
  
  // console.log(check)
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } =
  useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting }) => {
     
        // Check if the email already exists in data
        if (data.length === 0 || data.every((val) => val.Email !== values.Email)) {
          // dispatch(add(values)); // Assuming this action is defined in your redux slice
          setSubmitting(true);
          props.pass(props.pass); // Assuming pass is a prop for a callback function

          const response = await axios.post("http://localhost/Register.php", values, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          console.log("Result", response);
          alert("complete Register");
        } else {
          alert("This email already exists.");
        }
      
    },
  });

  return (
    <>
      <section className="modal-wrapper">
        <div className="model-container">
          <button className="close" onClick={props.pass2}>
            {" "}
            X
          </button>
          <h2>Register</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="subcontainer">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  id="Name"
                  name="Name"
                  onChange={handleChange}
                  value={values.Name}
                  onBlur={handleBlur}
                ></input>
                {errors.Name && touched.Name ? (
                  <p className=" form-error">{errors.Name}</p>
                ) : null}
                <label>Email</label>
                <input
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
                <label>Contact</label>
                <input
                  type="contact"
                  placeholder="Enter Password"
                  id="Contact"
                  name="Contact"
                  onChange={handleChange}
                  value={values.Contact}
                  onBlur={handleBlur}
                ></input>
                {errors.Contact && touched.Contact ? (
                  <p className=" form-error">{errors.Contact}</p>
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
              </div>

              <button type="submit" className="model-btn">
                Register
              </button>
            </form>
          </div>
          <p className="text-center text-muted mt-5 mb-0">
            Have already an account?{" "}
            <Link as={Link} onClick={props.pass} className="link-danger">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default PoppopR;
