import React, { useState } from "react";

import {imageMain2, imageMain3, imageMain4, imageContent1, imageContent2, imageMain1} from '../../../constant';
import "./imageHover.scss"; 


const ImageHover = ({...props}) => {

  const {listImage} = props
  const [hoveredText, setHoveredText] = useState(null);

  return (
    <div className="ContainerImage">
        <div className="text">
          {listImage.map((item, index) => (
            <span
              key={index}
              className={`hover-text ${hoveredText === index ? "" : "active"}`}
              onMouseEnter={() => setHoveredText(index)}
              onMouseLeave={() => setHoveredText(null)}
            >
              {item.text},
              {hoveredText === index && (
              <img src={item.img} alt="image" className="image" />
              )}
            </span>
          ))}
        </div>
      </div>
  );
};

export default ImageHover;