import React from "react";
import{Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

function Gimg(){
  const cartitem = useSelector((state) => state.cart.cart);
    return(
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
            <h2 className="name">Image Box</h2>
            <ul className="links">
              <li>
               
                <Link as="Link" className="links" to="/">Home</Link>

              </li>
              <li>
                <a href="" className="links">Image Box</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcumb-area-end */}
  <div className="shortcode-title">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
          <div className="section-title">
            <h6>Shortcodes</h6>
            <h2>Image Boxes</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="image-box">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="single-service">
            <div className="img">
              <a href="#">
                <img src="img/home1/service-1.jpg" alt="" />
              </a>
            </div>
            <div className="content">
              <h2 className="title">Market Research</h2>
              <p className="text">
                There are many variations of passages of that Lorem is Ipsum
                available but the majority have suffered an alteration.
              </p>
              <div className="order-more">
                <a className="order" href="#">
                  Order Now
                </a>
                <a className="more" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="single-service">
            <div className="img">
              <a href="#">
                <img src="img/home1/service-2.jpg" alt="" />
              </a>
            </div>
            <div className="content">
              <h2 className="title">Market Research</h2>
              <p className="text">
                There are many variations of passages of that Lorem is Ipsum
                available but the majority have suffered an alteration.
              </p>
              <div className="order-more">
                <a className="order" href="#">
                  Order Now
                </a>
                <a className="more" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="single-service">
            <div className="img">
              <a href="#">
                <img src="img/home1/service-3.jpg" alt="" />
              </a>
            </div>
            <div className="content">
              <h2 className="title">Market Research</h2>
              <p className="text">
                There are many variations of passages of that Lorem is Ipsum
                available but the majority have suffered an alteration.
              </p>
              <div className="order-more">
                <a className="order" href="#">
                  Order Now
                </a>
                <a className="more" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="single-blog">
            <div className="bimg">
              <a href="#">
                <img src="img/home1/blog-1.jpg" alt="" />
                <span className="icon">
                  <i className="fas fa-link" />
                </span>
              </a>
              <p className="type">Popular</p>
            </div>
            <div className="content">
              <h4 className="title">
                <a href="#">What Planning Process Needs?</a>
              </h4>
              <p className="text">
                There are many variations of passages of Lorem the Ipsum
                available but the majority have suffered that alteration by
                injected humour.
              </p>
              <div className="meta">
                <div className="author">
                  <div className="img">
                    <img src="img/home1/blog-author-1.jpg" alt="" />
                  </div>
                  <div className="name">
                    <p>by Mark Anthony</p>
                  </div>
                </div>
                <div className="date">
                  <p>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>{" "}
                    18 Jan 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="single-blog">
            <div className="bimg">
              <a href="#">
                <img src="img/home1/blog-2.jpg" alt="" />
                <span className="icon">
                  <i className="fas fa-link" />
                </span>
              </a>
              <p className="type">Popular</p>
            </div>
            <div className="content">
              <h4 className="title">
                <a href="#">What Planning Process Needs?</a>
              </h4>
              <p className="text">
                There are many variations of passages of Lorem the Ipsum
                available but the majority have suffered that alteration by
                injected humour.
              </p>
              <div className="meta">
                <div className="author">
                  <div className="img">
                    <img src="img/home1/blog-author-1.jpg" alt="" />
                  </div>
                  <div className="name">
                    <p>by Mark Anthony</p>
                  </div>
                </div>
                <div className="date">
                  <p>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>{" "}
                    18 Jan 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="single-blog">
            <div className="bimg">
              <a href="#">
                <img src="img/home1/blog-3.jpg" alt="" />
                <span className="icon">
                  <i className="fas fa-link" />
                </span>
              </a>
              <p className="type">Popular</p>
            </div>
            <div className="content">
              <h4 className="title">
                <a href="#">What Planning Process Needs?</a>
              </h4>
              <p className="text">
                There are many variations of passages of Lorem the Ipsum
                available but the majority have suffered that alteration by
                injected humour.
              </p>
              <div className="meta">
                <div className="author">
                  <div className="img">
                    <img src="img/home1/blog-author-1.jpg" alt="" />
                  </div>
                  <div className="name">
                    <p>by Mark Anthony</p>
                  </div>
                </div>
                <div className="date">
                  <p>
                    <span>
                      <i className="far fa-calendar-alt" />
                    </span>{" "}
                    18 Jan 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-12">
          <div className="h2-single-case-study">
            <div className="img">
              <img src="img/home2/case-1.jpg" alt="" />
            </div>
            <div className="content">
              <h6 className="name">Energy Solutions</h6>
              <h6 className="link">
                <a href="#">
                  Driving towards the Future of Logistic &amp; Transportation
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-12">
          <div className="h2-single-case-study">
            <div className="img">
              <img src="img/home2/case-2.jpg" alt="" />
            </div>
            <div className="content">
              <h6 className="name">Financing Management</h6>
              <h6 className="link">
                <a href="#">
                  Using Leading Edge Technology and Sources from Modern Tech
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2 col-12">
          <div className="h2-single-case-study">
            <div className="img">
              <img src="img/home2/case-3.jpg" alt="" />
            </div>
            <div className="content">
              <h6 className="name">Business Services</h6>
              <h6 className="link">
                <a href="#">
                  Consumer System Relationship and Management Services
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="h3-single-cosultancy">
            <div className="img">
              <img src="img/home3/top-consultant-1.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <span className="flaticon-gears" />
              </div>
              <h5 className="title">
                <a href="#">Good Approach</a>
              </h5>
              <p className="text">
                It is a long established fact that a reader will be to
                distracted by the readable content of a page when looking at its
                layout.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="h3-single-cosultancy">
            <div className="img">
              <img src="img/home3/top-consultant-2.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <span className="flaticon-creativity" />
              </div>
              <h5 className="title">
                <a href="#">Good Approach</a>
              </h5>
              <p className="text">
                It is a long established fact that a reader will be to
                distracted by the readable content of a page when looking at its
                layout.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="h3-single-cosultancy">
            <div className="img">
              <img src="img/home3/top-consultant-2.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <span className="flaticon-piggy-bank" />
              </div>
              <h5 className="title">
                <a href="#">Good Approach</a>
              </h5>
              <p className="text">
                It is a long established fact that a reader will be to
                distracted by the readable content of a page when looking at its
                layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer-start */}
  <Footer></Footer>
  
</>


        </div>
    )
}
export default Gimg;