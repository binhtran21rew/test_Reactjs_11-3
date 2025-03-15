import React, { useState, useEffect, useRef } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FontAwesome } from "../../../component/FontAwesome";
import ContentWrapper from "../../../layouts/component/contentWrapper/ContentWrapper";
import "./scrollImage.scss";


gsap.registerPlugin(ScrollTrigger);

const postion = [
    {top: 465.193, left: 980},
    {top: 0, left: 54},
    {top: 100, left: 345},
    {top: 482, left: 157},
    {top: 0, left: 940.136},

]

function ScrollImage({...props}) {

    const{images} = props;
    const containerRef = useRef(null);
    const imageRefs = useRef([]);

    useGSAP(() => {
        const container = containerRef.current;
        const newHeight = `100vh`; // 👈 Longer scroll effect
        gsap.set(container, { height: newHeight });
        gsap.from(".imageScope", {
            scrollTrigger: {
                trigger: container,
                start: "top", // Start when the top of the container reaches the top of the viewport
                end: "+=200%", // End when the bottom of the container reaches the top
                scrub: 5, // Smooth scroll effect
                pin: true, // Makes the image sticky
                pinSpacing: true,
                anticipatePin: 1,
            },
            opacity: 1,
            scale: 1,
            ease: "power1.out",
        });
    }, []);

    return (
        <div className="imageScroll" style={{height: '100vh'}} ref={containerRef}>
            <div className="imageScroll_wrapper h-100">
                <div className="imageScroll_wrapper_body imageScope h-100 text-center">
                  <div className="Scroll_body d-flex flex-column justify-content-center h-100">
                    <div className="title z-3">
                       <strong>
                        Curated services
                        </strong>  & 
                        <br></br>
                        <strong>
                            experiences
                        </strong>
                         at hillbrook
                    </div>
                    <div className="option">DISCOVER MORE
                        <FontAwesome icon={faArrowRight} size={"1x"} color="#D4A373" />

                    </div>
                  </div>
                  <div className="imageScroll_image w-100 h-100" style={{position: 'absolute'}}>
                        {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Random ${index}`}
                            style={{
                            position: 'absolute',
                            top: `${postion[index]?.top}px`,
                            left: `${postion[index]?.left}px`,
                            borderRadius: "10px",
                            width: "250px",
                            height: "250px"
                            }}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrollImage;
