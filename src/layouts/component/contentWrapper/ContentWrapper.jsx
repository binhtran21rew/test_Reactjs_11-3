import React, { Fragment, useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesome } from "../../../component/FontAwesome";
import "./contentWrapper.scss";
import { imageContent1 } from "../../../constant";

import "./contentWrapper.scss";

function ContentWrapper({ ...props }) {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    name,
    detail,
    option,
    image,
    image_name,
    className,
    moreImage,
    flexEnd,
    rotate,
    widthImg,
    textHighlight,
    textPosition,
  } = props;

  return textPosition ? (
    <div className="ContentWrapper container-fluid m-50 h-100">
      <CustomContent
        text={name}
        detail={detail}
        option={option}
        image={image}
        moreImage={moreImage}
        textHighlight={textHighlight}
        textPosition={textPosition}
      />
    </div>
  ) : (
    <div className={"ContentWrapper container-fluid m-50 h-100"}>
      <div
        class={`Content_title row h-100  ${rotate ? "flex-row-reverse" : ""}`}
      >
        <div
          class={`ContentWrapper_left ${
            widthScreen >= 1000
              ? !image && !moreImage
                ? "col-md-8"
                : "col-md-4"
              : !image && !moreImage
              ? "col-md-8"
              : "col-md-5"
          }   text  text-black d-flex justify-content-center align-items-center `}
        >
          <div
            className={`row ${
              flexEnd ? "flex-column-reverse" : "flex-column"
            }  h-100 justify-content-between ${
              !image && !moreImage && "justify-content-evenly"
            }`}
          >
            <div className="col-md-12">
              <CustomContent
                text={name}
                detail={detail}
                option={option}
                image={image}
                moreImage={moreImage}
                textHighlight={textHighlight}
              />
            </div>

            <div className={`Content_title_moreImage ${rotate && "text-end"}`}>
              {moreImage ? (
                <img
                  src={moreImage}
                  width={`${widthImg ? "300px" : "200px"} `}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div
          class={`ContentWrapper_right ${
            widthScreen >= 1000 ? "col-md-8" : "col-md-7"
          }  text-white d-flex ${
            rotate ? "flex-row-end" : "justify-content-center"
          } align-items-center`}
        >
          {image
            ? image.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`${image.length === 1 ? "h-100 w-100" : ""} ${
                      flexEnd ? "text-start" : "text-end"
                    } `}
                  >
                    <img
                      src={item}
                      className="Content_image object-fit-cover"
                      width={"100%"}
                      height={"100%"}
                    />
                    {image_name ? (
                      <div className="image_name text-dark">
                        <span className="cirle"></span>
                        <span>{image_name[i]}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

const CustomContent = ({ ...props }) => {
  const {
    text,
    detail,
    option,
    image,
    moreImage,
    textHighlight,
    textPosition,
  } = props;

  return textPosition ? (
    <div className="CustomContent row d-flex flex-column w-100 h-100">
      <div className="col-md-6  d-flex h-50 w-50 justify-content-center">
        <div className="d-flex flex-wrap w-50">
          {textHighlight ? (
            text.split(" ").map((part, id) => {
              return textHighlight.split(" ").includes(part) ? (
                <div
                  key={id}
                  style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                    marginRight: 5,
                    height: "auto",
                  }}
                  className="fs-40 CustomContent_text"
                >
                  {part}
                </div>
              ) : (
                <div
                  style={{ marginRight: 5 }}
                  className="fs-40 CustomContent_text"
                >
                  {part}
                </div>
              );
            })
          ) : (
            <div
              style={{ marginRight: 5 }}
              className="fs-40 CustomContent_text"
            >
              {text}
            </div>
          )}
        </div>
      </div>
      <div className="col-md-6 d-flex flex-wrap w-100 justify-content-end">
        <div className="row d-flex flex-column align-items-center w-50">
          {detail && (
            <div className="col-10 mb-5 CustomContent_detail">
              <span>{detail}</span>
            </div>
          )}
          {option && (
            <div className="col-10">
              <a href="#" className="text-dark fw-bold">
                {option}
                <FontAwesome icon={faArrowRight} size={"1x"} color="#D4A373" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="row d-flex flex-column w-100 h-100">
      <div className="col-md-4 flex-row flex-wrap mb-3 w-100 d-flex ">
        {textHighlight ? (
          text.split(" ").map((part, id) => {
            return textHighlight.split(" ").includes(part) ? (
              <span
                key={id}
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  marginRight: 5,
                  height: "auto",
                }}
                className="fs-40"
              >
                {part}
              </span>
            ) : (
              <span style={{ marginRight: 5 }} className="fs-40">
                {part}
              </span>
            );
          })
        ) : (
          <div style={{ marginRight: 5 }} className="fs-40">
            {text}
          </div>
        )}
      </div>
      <div className="col-md-8 w-100 ">
        {detail && (
          <div className="fs-6 mb-3">
            <span>{detail}</span>
          </div>
        )}
        {option && (
          <div>
            <a href="#" className="text-dark fw-bold">
              {option}
              <FontAwesome icon={faArrowRight} size={"1x"} color="#D4A373" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentWrapper;
