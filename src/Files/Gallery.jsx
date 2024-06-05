import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
function Gallary() {
  
  const [data, setdata] = useState([]);
  const cartitem = useSelector((state) => state.cart.cart);

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

                <h2>selected pictur</h2>
                {/* <div className="gallery-menu">
                  <button className="button checked" data-filter="*">
                    All Cases
                  </button>
                  <button className="button" data-filter=".finance">
                    Finance
                  </button>
                  <button className="button" data-filter=".economy">
                    Economy
                  </button>
                  <button className="button" data-filter=".money">
                    Money
                  </button>
                </div> */}
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