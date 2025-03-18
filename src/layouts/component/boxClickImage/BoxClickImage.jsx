import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";


import './boxClickImage.scss';
function BoxClickImage({ ...props }) {
    const { list } = props;
    const [clickImage, setClickImage] = useState(list[0].img);
    const [textActive, setTextActive] = useState(null);
    const [selected, setSelected] = useState(null);


    const handleClickImage = (item, id) => {
        setTextActive(id);
        setClickImage(item.img);
        setSelected(item.text);
    };

    return (
        <section className="BoxCLickImage">
            <div
                className="image_container"
                style={{
                    background: `url('${clickImage}') no-repeat center center/cover`,
                    width: "100%",
                    height: "100vh",
                }}
            >
                <div className="image_container_wrapper">
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className="item_image"
                            onClick={() => handleClickImage(item, index)}
                        >
                            <p
                                className={`image_text ${
                                    textActive === index ? "active" : ""
                                } `}
                            >
                                {item.text}
                            </p>
                            {selected === item.text ? (
                                <Fade className="fadeText">{item.title}</Fade>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BoxClickImage;
