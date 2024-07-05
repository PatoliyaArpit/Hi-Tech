import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ClearLogincart, clearCart, logcleare } from "./redux/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import axios from "axios";
import Editpop from "./Popup/Editpop";

const Profile = () => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.log.log);

  
  
  const [cartdata, setcartdata] = useState([]);
  const [LoginId, setLoginId] = useState([]);
  const [Final, setFinal] = useState([]);
  const [ProfilePic, setProfilepic] = useState();
  const [Profiledata, setprofiledata] = useState([]);
  const [FilterUser, setFilteruser] = useState({});
  const [poppop, setpopop] = useState(false);
  const dispatch = useDispatch();
  const notify = () => {
    toast.error("Account has been logout", {
      position: "top-center", // directly use string value for position
    });
  };
  const handleLogout = () => {
    
    notify();

    setTimeout(() => {
      navigate("/");
      dispatch(clearCart());
      window.localStorage.removeItem("log");
      dispatch(logcleare());
    
      axios.post(
        "http://localhost/LoginCleare.php",
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }, 1500);
  };
 
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

  useEffect(() => {
    profile.map((val) => {
      setLoginId(val.Id);
    });
  }, []);

  useEffect(() => {
    const Finalcart = cartdata.filter((val) => val.UserId === LoginId);
    setFinal(Finalcart);
  }, [cartdata, LoginId]);
  const call3 = () => {
    fetch("http://localhost/Registershow.php")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setprofiledata(result);
      });
  };
  useEffect(() => {
    call3();
  }, []);
 
  useEffect(() => {
    const filter = Profiledata.find((val) => val.Id === LoginId);
    setFilteruser(filter);
  }, [Profiledata, LoginId]);
  console.log(profile);

  useEffect(() => {
    if (FilterUser) {
      setProfilepic(FilterUser.Profile);
    }
  }, [FilterUser]);
  
  const btn = () => {
    setpopop(false);
  };
  console.log(profile,"profile")

  return (
    <>
      <Header></Header>
      {poppop ? <Editpop pass={btn}></Editpop> : null}
      <section style={{ backgroundColor: "#eee" }}>
        <ToastContainer></ToastContainer>
        <div className="container py-5">
          <div className="row" key={""}>
            {
              profile.map((val)=>{
                return<div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    {ProfilePic === "" ? (
                      <img
                        src="img/home1/User.jpg"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150 }}
                      />
                    ) : (
                      <img
                  src={(val.Profile)}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                    )}
  
                    <h5 className="my-3">{""}</h5>
                    <p  style={{fontSize:"1.5rem",fontWeight:"bold"}}>{val.Name}</p>
                    <p className="text-muted mb-4">{val.Bio}</p>
  
                    <div className="row ">
                      <div className="col-sm-3">
                        <p className="mb-0" >Total Cart :{Final.length}</p>
                      </div>
                      
                    </div>
  
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        className="Logoutbtn"
                        onClick={() => handleLogout()}
                        style={{ margin: "0 15% 0 0" }}
                      >
                        {" "}
                        Logout
                      </button>
                      <button
                        className="Editbtn"
                        onClick={() => setpopop(true)}
                        style={{ margin: "0 0 0 0%" }}
                      >
                        {" "}
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
  
                <div className="card mb-4 mb-lg-0">
                 
                      <div className="card-body p-0">
                        <ul className="list-group list-group-flush rounded-3">
                          {val.Github === "" ? null : (
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i className="fab fa-github fa-lg text-body" />
                              <a className="mb-0" href={val.Github} target="_blank">{val.Github}</a>
                            </li>
                          )}
                          {val.Twitter === "" ? null : (
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i
                                className="fab fa-twitter fa-lg"
                                style={{ color: "#55acee" }}
                              />
                              <a href={val.Twitter} className="mb-0" target="_blank">{val.Twitter}</a>
                            </li>
                          )}
                          {val.Instagram === "" ? null : (
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i
                                className="fab fa-instagram fa-lg"
                                style={{ color: "#ac2bac" }}
                              />
                              <a href={val.Instagram} target="_blank">{val.Instagram}</a>
                            </li>
                          )}
                          {val.Facebook === "" ? null : (
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                              <i
                                className="fab fa-facebook-f fa-lg"
                                style={{ color: "#3b5998" }}
                              />
                              <a className="mb-0"  href={val.Facebook} target="_blank" >{val.Facebook}</a>
                            </li>
                          )}
                        </ul>
                      </div>
                   
                </div>
              </div>
              })
            }
            
            {profile.map((val) => {
              return (
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{val.Name}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{val.Email}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{val.Contact}</p>
                        </div>
                      </div>
                      <hr />
                      {/* <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            Bay Area, San Francisco, CA
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
