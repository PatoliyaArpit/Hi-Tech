import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

function List() {
    const cartitem = useSelector((state) => state.cart.cart);
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
                                    <h2 className="name">The List</h2>
                                    <ul className="links">
                                        <li>
                                            {/* <a href="#">Home</a> */}
                                            <Link as="Link" className="links" to="/">Home</Link>

                                        </li>
                                        <li>
                                            <a href="#" className="links">The List</a>
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
                                    <h2>Bullet Lists</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bullet-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="bullet-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="bullet-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="bullet-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="bullet-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                        </div>
                        {/* row */}
                    </div>
                </div>
                <div className="shortcode-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                                <div className="section-title">
                                    <h6>Shortcodes</h6>
                                    <h2>Disc Lists</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="disk-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="disc-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="disc-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="disc-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="disc-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                        </div>
                        {/* row */}
                    </div>
                </div>
                <div className="shortcode-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                                <div className="section-title">
                                    <h6>Shortcodes</h6>
                                    <h2>Check Lists</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="check-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="check-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="check-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="check-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="check-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shortcode-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                                <div className="section-title">
                                    <h6>Shortcodes</h6>
                                    <h2>Plus Lists</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plus-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list-2">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list-2">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list-2">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <ul className="plus-list-2">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shortcode-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                                <div className="section-title">
                                    <h6>Shortcodes</h6>
                                    <h2>Standard Lists</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="standard-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5>Unstyled list</h5>
                                <ul className="list-unstyled">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                    <li>Donec efficitur auctor ultrices.</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5>Unordered list</h5>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                    <li>Donec efficitur auctor ultrices.</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5>Ordered list</h5>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Proin sodales ante quis augue</li>
                                    <li>Suspendisse maximus varius</li>
                                    <li>Duis auctor convallis sapien</li>
                                    <li>Donec efficitur auctor ultrices.</li>
                                </ol>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <h5>Description list</h5>
                                <dl>
                                    <dt>Lorem ipsum</dt>
                                    <dd>Donec efficitur auctor ultrices.</dd>
                                    <dt>Dolor sit amet</dt>
                                    <dd>Pellentesque eleifend odio at omis.</dd>
                                </dl>
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
export default List;