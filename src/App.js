import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'


import Header from "./layouts/Header/header";
import Footer from './layouts/Footer/Footer';
import LoadingPage from './layouts/component/loading/loadingPage';
import Home from "./page/home/Home";
import TheHouse from "./page/theHouse/TheHouse";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && <LoadingPage onLoadingComplete={() => setLoadingComplete(true)} />}
      {loadingComplete &&  
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thehouse" element={<TheHouse />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer/>
        </Router>
      }
    </>

  );
}

export default App;
