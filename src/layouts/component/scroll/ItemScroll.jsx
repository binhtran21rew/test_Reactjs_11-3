import React, { useState, useEffect, Fragment, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FontAwesome } from "../../../component/FontAwesome";

import { customFade, markers } from "../../../constant";

import "./itemScroll.scss";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ItemScroll({ ...props }) {
    const { adress, name, detail, option, images } = props;
    const sections = useRef([]);

    const contentItem = useRef([]);
    
    useGSAP(() => {
        sections.current.forEach((section, index) => {
            const contentLeft = section.querySelectorAll(".ItemScroll_content_left");
            const contentItem = section.querySelectorAll('.ItemScroll_wrapper_item');
            const contentImage = section.querySelectorAll('.ItemScroll_item_image');

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
                "-=0.5" // Overlap animations for a smoother effect
              );

        });


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="ItemScroll h-100 row d-flex">
            {name.map((data, id) => {
                return (
                    <div
                        key={id}
                        ref={(el) => (sections.current[id] = el)}
                        className="ItemScroll_content container d-flex vh-100"
                    >
                        <div className="ItemScroll_item h-100 col-md-4 col-md-4 d-flex align-center">
                            <div className="ItemScroll_wrapper ItemScroll_content_left ">
                                    <div
                                        className={`ItemScroll_wrapper_item d-flex flex-column align-item-start  w-100 h-100 `}
                                    >
                                        <div className="adress">{adress[id]}</div>
                                        <div className="name fs-1">
                                            The <span>{data}</span>
                                        </div>
                                        <div className="detail fs-6">
                                            {detail[id]}
                                        </div>
                                        {option[id] && (
                                            <div className="option fs-5">
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
                        <div className="ItemScroll_item col-md-8">
                            <div className="w-100 h-100 ItemScroll_item_image">
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
