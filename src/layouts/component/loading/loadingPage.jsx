import React, { useState, useEffect } from "react";
import "./loadingPage.scss";
import {logoImg} from '../../../constant'; 

const LoadingPage = ({ onLoadingComplete }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className={`loading`}>
      <img src={logoImg} alt="Logo" className="logo" />
    </div>
  );
};

export default LoadingPage;

