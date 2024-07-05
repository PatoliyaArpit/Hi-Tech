import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './Files/redux/Store';

const Home = lazy(() => import('./Files/Home'));
const About = lazy(() => import('./Files/About'));
const Service = lazy(() => import('./Files/Service'));
const ServiceD = lazy(() => import('./Files/ServiceD'));
const Case = lazy(() => import('./Files/Case'));
const CaseD = lazy(() => import('./Files/CaseD'));
const Gallery = lazy(() => import('./Files/Gallery'));
const List = lazy(() => import('./Files/List'));
const Team = lazy(() => import('./Files/Team'));
const Map = lazy(() => import('./Files/Map'));
const Contact = lazy(() => import('./Files/Contact'));
const Gimg = lazy(() => import('./Files/Gimg'));
const Step = lazy(() => import('./Files/Step'));
const Order = lazy(() => import('./Files/Order'));
const PDetails = lazy(() => import('./Files/PDetails'));
const Checkout = lazy(() => import('./Files/Checkout'));
const Header = lazy(() => import('./Files/Header'));
const Footer = lazy(() => import('./Files/Footer'));
const Loader = lazy(() => import('./Files/Loader'));
const Success = lazy(() => import('./Files/Sucess'));
const Cancel = lazy(() => import('./Files/Cancel'));
const Profile = lazy(() => import('./Files/Profile'));
const Plan = lazy(() => import('./Files/Smallcompo/Plan'));
const PaymentType = lazy(() => import('./Files/PaymentType'));

function App() {
  const [load, setLoad] = useState(false);
  const users = useSelector((state) => state.reg.reg);
  const userLogin = useSelector((state) => state.log.log);
  const cart = useSelector((state) => state.cart.cart);

  // Uncomment this block if you need to show the loader initially
  // useEffect(() => {
  //   setLoad(true);
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 5000);
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback={<Loader/>}>
          <BrowserRouter>
            <Routes>
              {load ? (
                <Route path="/" element={<Loader />} />
              ) : (
                <>
                  <Route path="/" element={<Home />} />
                  {userLogin.length === 0 || userLogin === undefined ? (
                    <Route path="/" element={<Home />} />
                  ) : (
                    <Route path="/" element={<Home />} />
                  )}
                  <Route path="Home" element={<Home />} />
                  <Route path="About" element={<About />} />
                  <Route path="Service" element={<Service />} />
                  <Route path="ServiceD" element={<ServiceD />} />
                  <Route path="Case" element={<Case />} />
                  <Route path="CaseD" element={<CaseD />} />
                  <Route path="Gallery" element={<Gallery />} />
                  <Route path="List" element={<List />} />
                  <Route path="Team" element={<Team />} />
                  <Route path="Map" element={<Map />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Gimg" element={<Gimg />} />
                  <Route path="Step" element={<Step />} />
                  <Route path="Order" element={<Order />} />
                  <Route path="PDetails/:ids" element={<PDetails />} />
                  <Route path="Checkout" element={<Checkout />} />
                  <Route path="Header" element={<Header />} />
                  <Route path="Footer" element={<Footer />} />
                  <Route path="success" element={<Success />} />
                  <Route path="cancel" element={<Cancel />} />
                  <Route path="Plan" element={<Plan />} />
                  {userLogin.length === 0 ? (
                    <Route path="Profile" element={<Home />} />
                  ) : (
                    <Route path="Profile" element={<Profile />} />
                  )}
                  <Route path="Profile" element={<Profile />} />
                  <Route path="PaymentType" element={<PaymentType />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
