import React, { useState, useEffect } from "react";

import "./galleryImage.scss";
import DropDown from "../dropDown/DropDown";
import FilterNav from "../filterNav/FilterNav";

function GalleryImage({ ...props }) {
    const { list, position, gridPosition } = props;
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
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
                                gridPosition={gridPosition}
                                position={position}
                                name={item?.name}
                                detail={item?.detail}
                                tags={item?.tags}
                                images={item.images}
                            widthScreen={widthScreen}

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
                            gridPosition={gridPosition}
                            position={position}
                            name={list[0]?.name}
                            detail={list[0]?.detail}
                            tags={list[0]?.tags}
                            images={list[0].images}
                            widthScreen={widthScreen}
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
    const { images, name, detail, tags, widths, position, gridPosition, widthScreen } = props;    
    if(position && name && detail){
        return(
            <div className="Gallery_postion row">
                {images?.map((data, id) => {
                    return (
                        <div key={id} className={`Gallery_postion_item col-md-${(widthScreen > 1140 && gridPosition + 1)  || (widthScreen > 780 && widthScreen <= 1140 && 5)} `}>
                            <div className="row d-flex flex-column h-100">
                                <div className="col">
                                    <img 
                                        key={id}
                                        src={data}
                                        alt={data}
                                        // className={`gallery_image`}
                                        width={`100%`}
                                        height={"500px"}
                                        style={{objectFit: 'cover'}}

                                    />
                                    <div className="Gallery_item_tags row d-flex flex-row justify-content-evenly w-100">
                                        <div className={`item_tags col-md-8  ${widthScreen < 780 && "w-50"}`}>
                                            <span>
                                                {tags[id]}
                                            </span>

                                        </div>
                                        <div className={`item_tags col-md-4 ${widthScreen < 780 && "w-50 text-end"} text-end`}>
                                            <span>
                                                website
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="Gallery_item_body row d-flex flex-column h-100">
                                        <div className="item_body col ">
                                            <span>
                                                {name[id]}

                                            </span>

                                        </div>
                                        <div className="item_body col ">
                                            <span>
                                                {detail[id]}
                                            </span>
                                        </div>
                                        <div className="item_body col">
                                            <span>
                                                contact
                                            </span>
                                        </div>
                                    </div>
                                
                                </div>

                            </div>

                        </div>
                    );
                })}
            </div>
        )
    }
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
