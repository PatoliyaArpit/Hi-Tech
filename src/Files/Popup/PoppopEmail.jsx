import React, { useRef, useEffect, useState } from "react";
import { useFormik } from "formik";
import { schemaL } from "../Schema/Emailpop";
import emailjs from "emailjs-com";
import { useSelector, useDispatch } from "react-redux";
import { addotp } from "../redux/CartSlice";

const PoppopEmail = (props) => {
  const form = useRef();
  const [otp, setOtp] = useState(generateOTP());

  const dispetch = useDispatch();

  function generateOTP() {
    // Generate a 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  

  useEffect(() => {
    setOtp(generateOTP());
  }, []);

  const initialValues = {
    Email: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: schemaL,
    onSubmit: (values, { setSubmitting }) => {
        const numberotp = Number(otp); 
        dispetch(addotp({Email:values.Email,numberotp}));
      emailjs
        .sendForm(
          "service_ijeva2d",
          "template_l2ipqxs",
          form.current,
          "VD-BhccAQOUtoewbT"
        )
        .then(
          (result) => {
            alert("OTP sent successfully!");

            setSubmitting(false);
            resetForm();
            console.log(generateOTP());
            props.pass2(props.pass2);
            setOtp(generateOTP());
          },
          (error) => {
            alert("Failed to send OTP. Please try again.");
            console.error("Error sending email:", error);
            setSubmitting(false);
          }
        );
    },
  });

  return (
    <section className="modal-wrapper">
      <div className="model-container">
        <button className="close" onClick={props.pass}>
          {" "}
          X
        </button>
        <h2>Send Email</h2>
        <div>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="subcontainer">
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
                <p className="form-error">{errors.Email}</p>
              ) : null}

              <input type="hidden" name="text" value={otp} />
            </div>

            <button type="submit" className="model-btn" disabled={isSubmitting}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PoppopEmail;
