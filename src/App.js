import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";
import './App.scss'

import {
  linkHome,
  linkTheHouse,
  linkTheFarm,
  linkContact,
  linkBookNow,
  linkGallery,
  linkCuratedServices,
  linkActivities,
  linkWedding,
  linkVendor,
  linkEnquiries,
  linkWeddingGallery,
  linkTerm,
  linkPolicy, } from "./constant";

import Header from "./layouts/Header/header";
import Footer from './layouts/Footer/Footer';
import LoadingPage from './layouts/component/loading/loadingPage';
import Home from "./page/home/Home";
import TheHouse from "./page/theHouse/TheHouse";
import TheFarm from "./page/theFarm/TheFarm";
import Gallery from "./page/gallery/Gallery";
import Contact from "./page/contact/Contact";
import CurateService from "./page/curatedService/CurateService";
import Booking from "./page/booking/Booking";
import Activities from "./page/activities/Activities";
import Wedding from "./page/wedding/Wedding";
import Vendor from "./page/vendor/Vendor";
import Enquiries from "./page/enquiries/Enquiries";
import WeddingGallery from "./page/weddingGallery/WeddingGallery";
import Term from "./page/term/Term";
import Policy from "./page/policy/Policy";


function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <>
      {/* {!loadingComplete && <LoadingPage onLoadingComplete={() => setLoadingComplete(true)} />}
      {loadingComplete &&   */}
        <Router>
          <PageTransition />
          <Header textPosition={'center'}/>
          <Routes>
            <Route path={linkHome} element={<Home />} />
            <Route path={linkTheHouse} element={<TheHouse />} />
            <Route path={linkTheFarm} element={<TheFarm />} />
            <Route path={linkGallery} element={<Gallery />} />
            <Route path={linkContact} element={<Contact />} />
            <Route path={linkCuratedServices} element={<CurateService />} />
            <Route path={linkBookNow} element={<Booking />} />
            <Route path={linkActivities} element={<Activities/>} />
            <Route path={linkWedding} element={<Wedding/>} />
            <Route path={linkVendor} element={<Vendor/>} />
            <Route path={linkEnquiries} element={<Enquiries/>} />
            <Route path={linkWeddingGallery} element={<WeddingGallery/>} />
            <Route path={linkTerm} element={<Term/>} />
            <Route path={linkPolicy} element={<Policy/>} />
          </Routes>
          <Footer/>
        </Router>
      {/* } */}
    </>

  );
}

function PageTransition() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return loading ? <LoadingPage /> : null;
}


export default App;