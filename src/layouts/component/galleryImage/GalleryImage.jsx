import React, { useState, useEffect } from "react";

import "./galleryImage.scss";
import DropDown from "../dropDown/DropDown";
import FilterNav from "../filterNav/FilterNav";

function GalleryImage({ ...props }) {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const { list } = props;
    const [imageId, setImageId] = useState();

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (id) => {
        setImageId(id);
    };

    const renderList = () => {
        if(widthScreen < 780){
            return(
                <FilterNav 
                    list={list}
                    onClick={handleClick}
                />
            )
        } else{
            return(
                <ul>
                    {list.map((item, id) => {
                        return (
                            <li onClick={() => handleClick(item.id)}>
                                {item.text}
                            </li>
                        );
                    })}
                </ul>
            )
        }
    }
    return (
        <div className="GallaryImage">
            <div className="title">our Gallery</div>
            <div className="gallery_wrapper">
                <div className="left">

                {renderList()}

                </div>

                {list.map((item, id) => {
                    return (
                        <div
                            className={`right ${
                                imageId === item.id ? "" : "hide"
                            } `}
                        >
                            <ImagePosition
                                images={item.images}
                                widths={[
                                    100, 70, 20, 40, 60, 30, 100, 100, 20, 30,
                                    60, 30,
                                ]}
                            />
                        </div>
                    );
                })}

                {!imageId && (
                    <div className={`right`}>
                        <ImagePosition
                            images={list[0].images}
                            widths={[
                                100, 70, 20, 40, 60, 30, 100, 100, 20, 30, 60,
                                30,
                            ]}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

const ImagePosition = ({ ...props }) => {
    const { images, widths } = props;

    return (
        <div className="Gallery_postion">
            {images?.map((data, id) => {
                return (
                    <img
                        key={id}
                        src={data}
                        alt={data}
                        className={`gallery_image`}
                        width={`${widths[id]}%`}
                        height={"100%"}
                    />
                );
            })}
        </div>
    );
};

export default GalleryImage;
