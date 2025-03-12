import React, { useState, useEffect } from "react";
import "./loadingPage.scss";
import {logoImg} from '../../../constant'; 

const LoadingPage = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className={`loading ${loading ? "visible" : "hidden"}`}>
      <img src={logoImg} alt="Logo" className="logo" />
    </div>
  );
};

export default LoadingPage;

