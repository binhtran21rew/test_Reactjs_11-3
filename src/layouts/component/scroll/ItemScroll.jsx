import React, { useState, useEffect, Fragment, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FontAwesome } from "../../../component/FontAwesome";


import "./itemScroll.scss";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ItemScroll({ ...props }) {
    const { adress, name, detail, option, images } = props;
    const sections = useRef([]);
    
    
    useGSAP(() => {
        sections.current.forEach((section, index) => {

            if(section.clientWidth > 780){
                const contentLeft = section.querySelectorAll(".ItemScroll_content_left");
                const contentItem = section.querySelectorAll('.ItemScroll_wrapper_item');
                const contentImage = section.querySelectorAll('.image');
                gsap.fromTo(
                    contentImage,
                    {
                      scale: 1,

                    },
                    { 
                        scale: 1.3,
                        scrollTrigger: {
                            trigger: contentImage,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },

                    }
                  );
                const tl = gsap.timeline({
                    
                    scrollTrigger: {
                        trigger: contentLeft,
                        start: "top 50%",
                        end: "+=100%",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        anticipatePin: 3,
                    },
                });
                tl.fromTo(
                    contentItem,
                    { autoAlpha: 0, y: 50 }, // Start faded & shifted
                    { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" } // Smooth fade-in
                );
                
                tl.fromTo(
                    contentLeft,
                    { autoAlpha: 1 },
                    { autoAlpha: 0, duration: 0.8, ease: "power2.out" },
                    // Overlap animations for a smoother effect
                );
                
            }else{
                const contentImage = section.querySelectorAll('.image');
                gsap.fromTo(
                    contentImage,
                    {
                      scale: 1,

                    },
                    { 
                        scale: 1.6,
                        scrollTrigger: {
                            trigger: contentImage,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },

                    }
                  );


            }

        });


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="ItemScroll h-100 w-100 row d-flex">
            {name.map((data, id) => {
                return (
                    <div
                        key={id}
                        ref={(el) => (sections.current[id] = el)}
                        className="ItemScroll_content container d-flex "
                    >
                        <div className="ItemScroll_item_left h-100 col-md-4 d-flex align-center">
                            <div className="ItemScroll_wrapper ItemScroll_content_left ">
                                    <div
                                        className={`ItemScroll_wrapper_item d-flex flex-column align-item-start  w-100 h-100 `}
                                    >
                                        <div className="address">{adress[id]}</div>
                                        <div className="name">
                                            The <span>{data}</span>
                                        </div>
                                        <div className="detail">
                                            {detail[id]}
                                        </div>
                                        {option[id] && (
                                            <div className="option">
                                                {option[id]}{" "}
                                                <FontAwesome
                                                    icon={faArrowRight}
                                                    size={"1x"}
                                                    color="#D4A373"
                                                />
                                            </div>
                                        )}
                                    </div>
                            </div>

                        </div>
                        <div className="ItemScroll_item_right col-md-8">
                            <div className=" ItemScroll_item_image">
                                <img
                                    src={images[id]}
                                    className="image"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ItemScroll;
