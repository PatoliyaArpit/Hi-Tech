import React, { useEffect, useState } from 'react'
import { plan } from '../redux/CartSlice';
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Pack = () => {
    const [data3,setdata3]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate();

    const call3 = () => {
        fetch("http://localhost/pack.php")
          .then((result) => {
            return result.json();
          })
          .then((res) => {
            setdata3(res);
          });
      };
      useEffect(() => {
        call3();
      }, []);
      const byplan = (item) => {
        navigate("/Plan");
    
        // alert("hello");
    
        localStorage.setItem("Title", item.Title);
        localStorage.setItem("Price", item.Price);
        localStorage.setItem("PlanImg", item.PlanImg);
        localStorage.setItem("quantity", item.quantity);
        localStorage.setItem("Img1", item.Img1);
        localStorage.setItem("Img2", item.Img2);
        localStorage.setItem("Img3", item.Img3);
        localStorage.setItem("Img4", item.Img4);
        localStorage.setItem("Row1", item.Row1);
        localStorage.setItem("Row2", item.Row2);
        localStorage.setItem("Row3", item.Row3);
        localStorage.setItem("Row4", item.Row4);
    
        dispatch(plan(item));
      };
  return (
    <div className="pricing-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
          <div className="section-title">
            
            <h2>Our Combo Pack</h2>
            <p>
              There are many variations of passages of Lorem Ipsum
              available but the majority have suffered alteration in
              some form by injected humour or randomised words which
              even slightly believable.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {data3.map((val, index) => (
          <div key={index} className="single-pricing">
            <div className="top">
              {
                val.Title==="Popular"? <p className="popular">Popular Pack</p>:null
              }
              {/* <p className="popular">Popular Pack</p> */}
              <h2 className="name">{val.Title}</h2>
              <h5 className="type">Consulting Pack</h5>
            </div>
            <div className="price">
              <h2 className="tag">
                <span>Rs</span>
                {val.Price}
              </h2>
            </div>
            <div className="bottom">
              <ul className="feature">
                <li>{val.Row1}</li>
                <li>{val.Row2}</li>
                <li>{val.Row3}</li>
                <li>{val.Row4}</li>
              </ul>
              <div className="buy">
                <button
                  className="button"
                  href="#"
                  onClick={() => byplan(val)}
                  
                >
                  Buy this Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Pack