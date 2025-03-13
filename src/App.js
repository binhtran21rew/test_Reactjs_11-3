import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.scss'

import {
  linkHome,
  linkTheHouse,
  linkTheFarm,
  linkContact,
  linkBookNow,
  linkGallery,
  linkCuratedServices,
  linkActivities, } from "./constant";

import Header from "./layouts/Header/header";
import Footer from './layouts/Footer/Footer';
import LoadingPage from './layouts/component/loading/loadingPage';
import Home from "./page/home/Home";
import TheHouse from "./page/theHouse/TheHouse";
import TheFarm from "./page/theFarm/TheFarm";
import Gallery from "./page/gallery/Gallery";
import Contact from "./page/contact/Contact";
import CurateService from "./page/curatedService/CurateService";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && <LoadingPage onLoadingComplete={() => setLoadingComplete(true)} />}
      {loadingComplete &&  
        <Router>
          <Header textPosition={'center'}/>
          <Routes>
            <Route path={linkHome} element={<Home />} />
            <Route path={linkTheHouse} element={<TheHouse />} />
            <Route path={linkTheFarm} element={<TheFarm />} />
            <Route path={linkGallery} element={<Gallery />} />
            <Route path={linkContact} element={<Contact />} />
            <Route path={linkCuratedServices} element={<CurateService />} />


          </Routes>
          <Footer/>
        </Router>
      }
    </>

  );
}

export default App;
