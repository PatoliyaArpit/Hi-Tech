import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { schemaPass } from "../Schema/NewPass";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cleareotp, updatepassword } from "../redux/CartSlice";
import axios from "axios";

const PoppopNewPass = (props) => {
  const Dispetch = useDispatch();
  const show = useSelector((state) => state.Otp.Otp);

  console.log(show);
  const initialValues = {
    Otp: "",
    Password: "",
  };
  const [data, setdata] = useState("");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schemaPass,
      onSubmit: (values, { setSubmitting }) => {
        const checkotp = show.some(
          (val) => val.numberotp === Number(values.Otp)
        );
        if (checkotp) {
          const email = show.map((val) => val.Email).join();
          console.log(email);

          // Dispetch(updatepassword({ Email:email, newPassword: values.Password }));
          axios({
            method: "post",
            url: "http://localhost/RegisterPassChange.php",
            data: {
              Email: email,
              Password: values.Password,
            },
            headers: { "Content-Type": "multipart/form-data" },
          }).then((res) => {
            // console.log("Result", res);
            // alert("Record Inserted Successfully");
          });
          alert("Password changed successfully!");
          props.pass2(props.pass2);
          Dispetch(cleareotp());
        } else {
          alert("plese valid otp  ");
        }
      },
    });
  return (
    <section className="modal-wrapper">
      <div className="model-container">
        <button className="close" onClick={props.pass}>
          {" "}
          X
        </button>
        <h2> Password</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="subcontainer">
              <label>Otp</label>
              <input
                type="text"
                placeholder="Enter Otp"
                id="Otp"
                name="Otp"
                onChange={handleChange}
                value={values.Otp}
                onBlur={handleBlur}
              ></input>
              {errors.Otp && touched.Otp ? (
                <p className=" form-error">{errors.Otp}</p>
              ) : null}
              <label>New Password</label>
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
              Change Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PoppopNewPass;
