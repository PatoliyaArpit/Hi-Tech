import './App.css';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from './Files/Home';
import About from './Files/About';
import Service from './Files/Service';
import ServiceD from './Files/ServiceD';
import Case from './Files/Case';
import CaseD from './Files/CaseD';
import Gallary from './Files/Gallery';
import List from './Files/List';
import Team from './Files/Team';
import Map from './Files/Map';
import Contact from './Files/Contact';
import Gimg from './Files/Gimg';
import Step from './Files/Step';
import Order from './Files/Order';
import PDetails from './Files/PDetails';
import { Provider } from 'react-redux';
import store from './Files/redux/Store';
import Checkout from './Files/Checkout';
import { useDispatch, useSelector } from "react-redux";
import Header from './Files/Header';
import Footer from './Files/Footer';
import Loader from './Files/Loader';
import { useEffect, useState } from 'react';
import Sucess from './Files/Sucess';
import Cancel from './Files/Cancel';

import Profile from './Files/Profile';
import Plan from './Files/Smallcompo/Plan';



function App() {

  const [Load,setLoad]=useState(false)
  const users = useSelector((state) => state.reg.reg);
  const UserLogin = useSelector((state) => state.log.log);
  const Cart=useSelector((state)=>state.cart.cart)


  // useEffect(()=>{
  //   setLoad(true)
  //   setTimeout(()=>{
  //   setLoad(false)
  //   },5000)
  // },[])
  return (

   
    <Provider store={store}>
    <div className="App">
      {/* <Home></Home> */}
      {/* <Nav></Nav> */}
      <BrowserRouter>
      <Routes>
      
        {
          Load? <Route path='/' element={<Loader></Loader>}></Route>:
          <>
       <Route path='/' element={<Home></Home>}></Route>
           {
          UserLogin.length==0||UserLogin===undefined? <Route path='/' element={<Home></Home>}></Route>: <Route path='/' element={<Home></Home>}></Route>
        }
       
          {/* <Route path='Register' element={<PoppopR></PoppopR>}></Route> */}
      {/* <Route path='Log' element={<Log></Log>}></Route> */}
        <Route path='Home'element={<Home></Home>}></Route>
        <Route path='About' element={<About></About>}></Route>
        <Route path='Service' element={<Service></Service>}></Route>
        <Route path='ServiceD' element={<ServiceD></ServiceD>}></Route>
        <Route path='Case' element={<Case></Case>}></Route>
        <Route path='CaseD' element={<CaseD></CaseD>}></Route>
        <Route path='Gallery' element={<Gallary></Gallary>}></Route>
        <Route path='List' element={<List></List>}></Route>
        <Route path='Team' element={<Team></Team>}></Route>
        <Route path='Map' element={<Map></Map>}></Route>
        <Route path='Contact' element={<Contact></Contact>}></Route>
        <Route path='Gimg' element={<Gimg></Gimg>}></Route>
        <Route path='Step' element={<Step></Step>}></Route>
        <Route path='Order' element={<Order></Order>}></Route>
        <Route path='PDetails/:ids' element={<PDetails></PDetails>}></Route>
       <Route path='Checkout' element={<Checkout></Checkout>}></Route>
        <Route path='Header' element={<Header></Header>}></Route>
        <Route path='Footer' element={<Footer></Footer>}></Route> 
        <Route path='success' element={<Sucess></Sucess>}></Route> 
        <Route path='cancel' element={<Cancel></Cancel>}></Route> 
        <Route path='Plan' element={<Plan></Plan>}></Route> 
        {
          UserLogin.length===0?   <Route path='Profile' element={<Home></Home>}></Route>:<Route path='Profile' element={<Profile></Profile>}></Route>
        }
        <Route path='Profile' element={<Profile></Profile>}></Route> 
       
          </>
        }
      </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
