import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

import "./imageSlide.scss";
import { FontAwesome } from "../../../component/FontAwesome";
import { letterAnimation } from "../../../constant";

function ImageSlide({ ...props }) {
    const { text, textHightlight, image, option } = props;

    return (
        <div className="Image_Slide">
            <div
                className="Image_Slide_image"
                style={{ backgroundImage: `url(${image})` }}
            >
                <Slide keyframes={letterAnimation} style={{ width: "80%" }}>
                    <div className="Image_Slide_image_item">
                      {text.split(" ").map((part, id) => {
                          return textHightlight.split(" ").includes(part) ? (
                              <div
                                  key={id}
                                  style={{
                                      fontWeight: "bold",
                                      fontStyle: "italic",
                                      marginRight: 5,
                                      height: "auto",
                                  }}
                                  className="fs-40 Slide_image_text"
                              >
                                  {part}
                              </div>
                          ) : (
                              <div
                                  style={{ marginRight: 5 }}
                                  className="fs-40 Slide_image_text"
                              >
                                  {part}
                              </div>
                          );
                      })}
                    </div>
                    {option && (
                      <div>
                          <a href="#" className="text-white fw-bold Slide_image_option">
                              {option}
                              <FontAwesome
                                  icon={faArrowRight}
                                  size={"1x"}
                                  color="#D4A373"
                              />
                          </a>
                      </div>
                    )}
                    
                </Slide>
            </div>
        </div>
    );
}

export default ImageSlide;
