import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import $ from 'jquery';

function Gallary() {
  
  const [data, setdata] = useState([]);
  useEffect(() => {
    call();
  }, [])
  
  const call = () => {
    fetch("http://localhost/masterg.php").then((result) => {
      return result.json()
    }).then((res) => {
      setdata(res);
    });
  }

  return (
    <div>
      <>
      <Header></Header>
        
        {/* header-end */}
        {/* breadcumb-area-start */}
        <div className="breadcumb-area bg-with-black">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcumb">
                  <h2 className="name">Gallery Cobbles</h2>
                  <ul className="links">
                    <li>
                      {/* <a href="index.html">Home</a> */}
                      <Link as="Link" className="links" to="/">Home</Link>

                    </li>
                    
                    <li>
                      <a href="11_gallery-cobbles.html" className="links">Gallery Cobbles</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcumb-area-end */}
        {/* page-gallery-area-start */}
        <div className="page-gallery-area">
          <div className="container">
            <div className="row">
              <div className="col-12">

                <h2>Gallery </h2>
               
              </div>
            </div>

            <div className="row grid_container" id="container">
              {

                data.map((val)=>{
                  return<div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 grid economy"
                  data-category="post-transition"
                >
                  <div className="page-single-gallery">
                    <a href={val.Img} data-fancybox="images">
                      <i className="fas fa-expand" aria-hidden="true" />
                      <img src={val.Img} alt="" />
                    </a>
                   
                  </div>
                </div>
                })
                
              }
             
            </div>
          </div>
        </div>
        {/* page-gallery-area-end */}
        
        {/* footer-start */}
        <Footer></Footer>
        
      </>

    </div>
  )
}
export default Gallary;