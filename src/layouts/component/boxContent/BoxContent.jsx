import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesome } from "../../../component/FontAwesome";

import "./boxContent.scss";
function BoxContent({ ...props }) {
    const { text, textPosition, detail, option, textHighlight } = props;

    return (
        <div className="BoxContent">
            <div className="BoxContent_text w-50">
                {text?.split(" ").map((part, id) => {
                    console.log(id + 1);
                
                        return textHighlight.split(" ").includes(part) ? (
                            <span
                                key={id}
                                className="text"
                                style={{
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                    // marginLeft: textPosition * (id + 1),
                                    height: "auto",
                                }}
                            >
                                {part}
                            </span>
                        ) : (
                            <span className="text" >{part}</span>
                        );

                })}
            </div>
            <span
                className="BoxContent_detail mt-3 lh-2"
            >
                {detail}

            </span>

            <div className="BoxContent_option mt-3 lh-2">
                <span>
                    {option}

                </span>
                <FontAwesome
                    icon={faArrowRight}
                    size={"1x"}
                    color="#D4A373"
                />{" "}
            </div>
        </div>
    );
}

export default BoxContent;
