import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./Schema";
import { useFormik } from "formik";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';

function Contact() {
  

  const cartitem = useSelector((state) => state.cart.cart);

  const initialValues = {
    Name: "",
    Email: "",
    Contact: "",
    Messag: "",
  };
  console.log(initialValues);
  const form=useRef();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signup,
      onSubmit: (values) => {
        axios({
          method: "post",
          url: "http://localhost/mi.php",
          data: values,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
          console.log("Result", res);
          alert("Record Inserted Successfully");
        });
        console.log(values);
        emailjs.sendForm('service_ijeva2d', 'template_64nwgfr', form.current, 'VD-BhccAQOUtoewbT');
      },
    });
  return (
    <div>
      <>
        {/* header-start */}
        <Header></Header>
       
        {/* header-end */}
        {/* breadcumb-area-start */}
        <div className="breadcumb-area bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcumb">
                  <h2 className="name">Contact Us</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="index.html">Home</a> */}
                      <Link className="links" as="Link" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a className="links" href="22_contact.html">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        {/* contact-details-area-start */}
        <div className="contact-details-area">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div className="all-contact-details">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="single-contact-details">
                        <div className="icon">
                          <span className="flaticon-placeholder" />
                        </div>
                        <h4 className="title">Our Address</h4>
                        <p className="desc">
                          4,Khodiyae Estat Sukan Road Near Poonam Bekary
                          Ahemdabad,382350
                        </p>
                        {/* <p className="desc">Melbourne, Victoria 3000</p> */}
                        <a
                          className="link"
                          href="https://www.google.com/maps/place/D%2F84,+Parshwanath+Nagar,+Nikol,+Ahmedabad,+Gujarat+382350/@23.0450311,72.6640324,128m/data=!3m1!1e3!4m6!3m5!1s0x395e871e6cf3765f:0xfe57cd2128183f45!8m2!3d23.0451248!4d72.6640491!16s%2Fg%2F11f4rdtd26?authuser=0&entry=ttu"
                          target="_blank"
                        >
                          Directions
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="single-contact-details">
                        <div className="icon">
                          <span className="flaticon-message" />
                        </div>
                        <h4 className="title">Email Address</h4>
                        <a
                          className="desc"
                          href="mailto:patoliyaarpit70@gmail.com"
                        >
                          patoliyaarpit70@gmail.com
                        </a>
                        <a className="desc" href="tel:+00-015-152-1002">
                          Phone: +91 931-686-8577
                        </a>
                        <a
                          className="link"
                          href="mailto:patoliyaarpit70@gmail.com"
                          target="_blank"
                        >
                          Send a Message
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-12">
                      <div className="single-contact-details">
                        <div className="icon">
                          <span className="flaticon-group" />
                        </div>
                        <h4 className="title">Our Support</h4>
                        <a className="desc" href="tel:+00-015-152-1002">
                          Phone: +00-015-152-1002
                        </a>
                        <a className="desc" href="fax:+358.555.1234567">
                          Fax: +01-215-152-0020
                        </a>
                        <a className="link" href="#" target="_blank">
                          Open a Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact-details-area-end */}
        {/* map-start */}
        <div className="map-area">
          <div className="gmap">
            {/* <div id="googleMap" /> */}
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                <h2
                      style={{
                        margin: "0 0 2% 0%",
                        fontFamily: "monospace",
                      }}
                    >
                      Google Map here
                    </h2>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4325983864323!2d72.6634242!3d23.0445966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871e10d7a713%3A0x9055cdb0e128acff!2sPoonam%20bakery!5e0!3m2!1sen!2sin!4v1713872509326!5m2!1sen!2sin" width="1100" height="750"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    // width={1100}
                    // height={750}
                    // frameBorder={0}
                    className=" shadow p-3 border"
                  />
                </div>
                <div className="col-md-4"></div>
              </div>
              <p>
                <a
                  href="http://validator.w3.org/check?uri=http%3A%2F%2Fbootsnipp.com%2Fiframe%2Fb2BWe"
                  className="pull-right"
                  target="_blank"
                ></a>
              </p>
            </div>
          </div>
        </div>
        {/* map-end */}
        {/* contact-send-msg-area-start */}
        <div className="contact-send-msg-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div className="section-title">
                  <h6>Write a Message</h6>
                  <h2>Have Any Questions?</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form by injected humour or randomised words which even
                    slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="question-form-area">
                  <div className="cf-msg" />
                  <form
                  ref={form}
                    action="mail.php"
                    method="post"
                    id="cf"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="cf-box">
                          <input
                            type="text"
                            placeholder="Name"
                            id="Name"
                            name="Name"
                            required=""
                            // onChange={(e) => { setname(e.target.value) }}
                            onChange={handleChange}
                            value={values.Name}
                            onBlur={handleBlur}
                          />
                          {errors.Name && touched.Name ? (
                            <p className="form-error">{errors.Name}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="cf-box">
                          <input
                            type="text"
                            placeholder="Email"
                            id="Email"
                            name="Email"
                            required=""
                            // onChange={(e) => { setemail(e.target.value) }}
                            onChange={handleChange}
                            value={values.Email}
                            onBlur={handleBlur}
                          />
                          {errors.Email && touched.Email ? (
                            <p className="form-error">{errors.Email}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6 col-12">
                        <div className="cf-box">
                          <input
                            type="text"
                            placeholder="Contact"
                            id="Contact"
                            name="Contact"
                            required=""
                            // onChange={(e) => { setcontact(e.target.value) }}
                            onChange={handleChange}
                            value={values.Contact}
                            onBlur={handleBlur}
                          />
                          {errors.Contact && touched.Contact ? (
                            <p className="form-error">{errors.Contact}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-12 col-12">
                        <div className="cf-box">
                          <textarea
                            className="contact-textarea"
                            placeholder="Message"
                            id="Messag"
                            name="Messag"
                            defaultValue={""}
                            // onChange={(e) => { setmessag(e.target.value) }}
                            onChange={handleChange}
                            value={values.Messag}
                            onBlur={handleBlur}
                          />
                          {errors.Messag && touched.Messag ? (
                            <p className="form-error">{errors.Messag}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-12 col-12">
                        <div className="cf-box">
                          <button
                            id="submit"
                            className="cont-submit btn-contact"
                            name="submit"
                          >
                            SEND MESSAGE
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact-send-msg-area-end */}
        {/* brands-area-start */}
        <div className="brands-area">
          <div className="container">
            <div className="brand-carousel owl-carousel">
              <div className="single-brand">
                <img src="img/home1/brand-1.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-2.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-3.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-4.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-5.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="img/home1/brand-6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* brands-area-end */}
        {/* footer-start */}
        <Footer></Footer>
      </>
    </div>
  );
}
export default Contact;
