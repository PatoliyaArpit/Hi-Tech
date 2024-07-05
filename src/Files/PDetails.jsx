import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "./redux/CartSlice";
import axios from "axios";

const PDetails = () => {
  const LoginUser = useSelector((state) => state.log.log);

  const Img = localStorage.getItem("Img");
  const Title = localStorage.getItem("title");
  const Price = localStorage.getItem("price");
  const Capacity = localStorage.getItem("Capacity");
  const Type = localStorage.getItem("Type");
  const Color = localStorage.getItem("Color");
  const Brand = localStorage.getItem("Brand");
  const Material = localStorage.getItem("Material");
  const Id = localStorage.getItem("Id");
  const ProductType = localStorage.getItem("ProductType");
  const LoginId = localStorage.getItem("LoginId");

  let param = useParams();
  const cartitem = useSelector((state) => state.cart.cart);
  const dispetch = useDispatch();

  const [Data, setData] = useState([]);
  const [Totalproduct, setTotalproduct] = useState([]);
  const [cartdata, setcartdata] = useState([]);
  const [Final, setFinal] = useState([]);
  
  
  const [cartcheck, setcartcheck] = useState("");

  useEffect(() => {
    if (LoginId !== null) {
      const Finalcart = cartdata.filter((val) => val.UserId === LoginId);
      if (LoginUser.length === 0) {
        setFinal(cartitem);
      } else {
        setFinal(Finalcart);
      }
    }
  }, [cartdata, LoginId]);

  useEffect(() => {
    if (LoginUser.length === 0) {
      Final.map((val) => {
        setcartcheck(val.Id);
      });
    }
    else{
      Final.map((val)=>{
        setcartcheck(val.ItemId)
      })
    }
  });

  

  useEffect(() => {
    getdata(param.ids);
  }, [param.ids]);

  const call2 = () => {
    fetch("http://localhost/cartshow.php")
      .then((val) => {
        return val.json();
      })
      .then((res) => {
        setcartdata(res);
      });
  };
  useEffect(() => {
    call2();
  }, []);

  const getdata = (Id) => {
    console.log(Id);
    fetch("http://localhost/Details.php?")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result, "result");
  
  call2();
        // let arr = [];
        // result?.map((item) => {
        //   if (item?.Id === Id) {
        //     // console.log(item);
        //     // setData(item)
        //     arr.push(item);
        //   }
        // });
        setData(result);
      });
  };

  const handalcart = (data) => {
    axios({
      method: "post",
      url: "http://localhost/Cart.php",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      // Handle the response if needed
      // console.log("Result", res);
      // alert("Record Inserted Successfully");
      call2()
    });
  };

  return (
    <>
      <>
        <Header></Header>

        {/* content */}
        <section className="py-5">
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100vh",
                        margin: "auto",
                      }}
                      className="rounded-4 fit"
                      src={Img}
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  {Data.filter((val) => val.ProductId === param.ids).map(
                    (val) => {
                      console.log(val);
                      return (
                        <a key={val.Id} href={val.Img} data-fancybox="images">
                          <img
                            width={60}
                            height={60}
                            className="rounded-2"
                            src={val.Img}
                          />
                        </a>
                      );
                    }
                  )}
                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">
                    {Title} <br />
                  </h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>

                    <span className="text-success ms-2">In stock</span>
                  </div>
                  <div className="mb-3">
                    <span className="h5">
                      {" "}
                      <h2>RS:{Price}</h2>
                    </span>
                    {/* <span className="text-muted">/Pic</span> */}
                  </div>
                  <p>
                    Modern look and quality demo item is a streetwear-inspired
                    collection that continues to break away from the conventions
                    of mainstream fashion. Made in Italy, these black and brown
                    clothing low-top shirts for men.
                  </p>
                  <div className="row">
                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">{Type}</dd>
                    <dt className="col-3">Color</dt>
                    <dd className="col-9">{Color}</dd>
                    <dt className="col-3">Material</dt>
                    <dd className="col-9">{Material}</dd>
                    <dt className="col-3">Brand</dt>
                    <dd className="col-9">{Brand}</dd>
                  </div>
                  <hr />
                  <div className="row mb-4">{/* col.// */}</div>
                  <a href="#" className="btn btn-warning shadow-0">
                    Buy now
                  </a>

                  {cartcheck.includes(Id) ? (
                    <a href="#" className="btn btn-primary shadow-0">
                      <i className="me-1 fa fa-shopping-basket" /> Allredy cart
                    </a>
                  ) : (
                    <a
                      className="btn btn-primary shadow-0"
                      onClick={() => {
                        const data = {
                          ItemId: Id,
                          Img: Img,
                          Title: Title,
                          Price: Price,
                          quantity: 1,
                          UserId: LoginId,
                          ProductType: ProductType,
                        };

                        if (LoginUser.length === 0) {
                          dispetch(
                            addCart({
                              Id,
                              Img,
                              Title,
                              Price,
                              quantity: 1,
                              ProductType,
                            })
                          );
                        } else {
                          handalcart(data);
                        }
                      }}
                    >
                      <i className="me-1 fa fa-shopping-basket" />
                      Add to cart
                    </a>
                  )}

                  <a
                    href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                  >
                    <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                  </a>
                </div>
              </main>
            </div>
          </div>
        </section>
        {/* content */}
        <section className="bg-light border-top py-4">
          <div className="container">
            <div className="row gx-4">
              <div className="col-lg-8 mb-4">
                <div className="border rounded-2 px-3 py-2 bg-white">
                  {/* Pills navs */}
                  <ul
                    className="nav nav-pills nav-justified mb-3"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100 active"
                        id="ex1-tab-1"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-1"
                        role="tab"
                        aria-controls="ex1-pills-1"
                        aria-selected="true"
                      >
                        Specification
                      </a>
                    </li>
                    {/* <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100"
                        id="ex1-tab-2"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-2"
                        role="tab"
                        aria-controls="ex1-pills-2"
                        aria-selected="false"
                      >
                        Warranty info
                      </a>
                    </li> */}
                    {/* <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100"
                        id="ex1-tab-3"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-3"
                        role="tab"
                        aria-controls="ex1-pills-3"
                        aria-selected="false"
                      >
                        Shipping info
                      </a>
                    </li> */}
                    <li className="nav-item d-flex" role="presentation">
                      <a
                        className="nav-link d-flex align-items-center justify-content-center w-100"
                        id="ex1-tab-4"
                        data-mdb-toggle="pill"
                        href="#ex1-pills-4"
                        role="tab"
                        aria-controls="ex1-pills-4"
                        aria-selected="false"
                      >
                        Seller profile
                      </a>
                    </li>
                  </ul>
                  {/* Pills navs */}
                  {/* Pills content */}
                  <div className="tab-content" id="ex1-content">
                    <div
                      className="tab-pane fade show active"
                      id="ex1-pills-1"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-1"
                    >
                      <p>
                        With supporting text below as a natural lead-in to
                        additional content. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                      </p>
                      <div className="row mb-2">
                        <div className="col-12 col-md-6">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <i className="fas fa-check text-success me-2" />
                              Some great feature name here
                            </li>
                            <li>
                              <i className="fas fa-check text-success me-2" />
                              Lorem ipsum dolor sit amet, consectetur
                            </li>
                            <li>
                              <i className="fas fa-check text-success me-2" />
                              Duis aute irure dolor in reprehenderit
                            </li>
                            <li>
                              <i className="fas fa-check text-success me-2" />
                              Optical heart sensor
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 mb-0">
                          <ul className="list-unstyled">
                            <li>
                              <i className="fas fa-check text-success me-2" />
                              Easy fast and ver good
                            </li>
                            <li>
                              <i className="fas fa-check text-success me-2" />
                              Some great feature name here
                            </li>
                            <li>
                              <i className="fas fa-check text-success me-2" />
                              Modern style and design
                            </li>
                          </ul>
                        </div>
                      </div>
                      <table className="table border mt-3 mb-2">
                        <tbody>
                          <tr>
                            <th className="py-2">Display:</th>
                            <td className="py-2">
                              13.3-inch LED-backlit display with IPS
                            </td>
                          </tr>
                          <tr>
                            <th className="py-2">Processor capacity:</th>
                            <td className="py-2">{Capacity}</td>
                          </tr>
                          {/* <tr>
                            <th className="py-2">Camera quality:</th>
                            <td className="py-2">720p FaceTime HD camera</td>
                          </tr> */}
                          <tr>
                            <th className="py-2">Memory</th>
                            <td className="py-2">8 GB RAM or 16 GB RAM</td>
                          </tr>
                          <tr>
                            <th className="py-2">Graphics</th>
                            <td className="py-2">
                              Intel Iris Plus Graphics 640
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="tab-pane fade mb-2"
                      id="ex1-pills-2"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-2"
                    >
                      Tab content or sample information now <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                    </div>
                    <div
                      className="tab-pane fade mb-2"
                      id="ex1-pills-3"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-3"
                    >
                      Another tab content or sample information now <br />
                      Dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <div
                      className="tab-pane fade mb-2"
                      id="ex1-pills-4"
                      role="tabpanel"
                      aria-labelledby="ex1-tab-4"
                    >
                      Some other tab content or sample information now <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                  {/* Pills content */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="px-0 border rounded-2 shadow-0">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Similar items</h5>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Rucksack Backpack Large <br />
                            Line Mounts
                          </a>
                          <strong className="text-dark"> $38.90</strong>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            Summer New Men's Denim <br />
                            Jeans Shorts
                          </a>
                          <strong className="text-dark"> $29.50</strong>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <a href="#" className="me-3">
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            {" "}
                            T-shirts with multiple colors, for men and lady{" "}
                          </a>
                          <strong className="text-dark"> $120.00</strong>
                        </div>
                      </div>
                      <div className="d-flex">
                        <a href="#" className="me-3">
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                            style={{ minWidth: 96, height: 96 }}
                            className="img-md img-thumbnail"
                          />
                        </a>
                        <div className="info">
                          <a href="#" className="nav-link mb-1">
                            {" "}
                            Blazer Suit Dress Jacket for Men, Blue color{" "}
                          </a>
                          <strong className="text-dark"> $339.90</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </>
    </>
  );
};
export default PDetails;
