import React, { useState } from "react";

import {imageMain2, imageMain3, imageMain4, imageContent1, imageContent2, imageMain1} from '../../../constant';
import "./imageHover.scss"; 

const textImagePairs = [
  { text: "Surf", img: imageMain2 },
  { text: "Swim", img: imageMain1 },
  { text: "Fram Walk", img: imageMain3 },
  { text: "Beach hikes", img: imageMain4 },
  { text: "Lawn Games", img: imageContent1 },
  { text: "Kayak", img: imageContent2 },
  { text: "Mountain Bike Park", img: imageContent1 },
  { text: "Surf", img: imageMain2 },
  { text: "Swim", img: imageMain1 },
  { text: "Fram Walk", img: imageMain3 },
  { text: "Beach hikes", img: imageMain4 },
  { text: "Lawn Games", img: imageContent1 },
  { text: "Kayak", img: imageContent2 },
  { text: "Mountain Bike Park", img: imageContent1 },
  { text: "Surf", img: imageMain2 },
  { text: "Swim", img: imageMain1 },
  { text: "Fram Walk", img: imageMain3 },
  { text: "Beach hikes", img: imageMain4 },
  { text: "Lawn Games", img: imageContent1 },
  { text: "Kayak", img: imageContent2 },
  { text: "Mountain Bike Park", img: imageContent1 },
];

const ImageHover = () => {
  const [hoveredText, setHoveredText] = useState(null);

  return (
    <div className="ContainerImage">
        <div className="text">
          {textImagePairs.map((item, index) => (
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