import React from "react";

import './imageSlide.scss';
function ImageSlide({...props}) {
  return (
    <div className="Image_Slide">
      <div
        className="Main_image"
        style={{ backgroundImage: `url(${imageSwiper1})` }}
      >
        <Slide keyframes={letterAnimation} style={{ width: "80%" }}>
          <div className={`text`}>
            <div className="">
              Relax or explore <br></br> your very own{" "}
              <span>personal playground</span>{" "}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default ImageSlide;
