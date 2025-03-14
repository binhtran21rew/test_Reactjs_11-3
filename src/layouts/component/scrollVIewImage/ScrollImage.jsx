import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import ContentWrapper from "../../../layouts/component/contentWrapper/ContentWrapper";
import "./scrollImage.scss";
import {
    imageContent1,
    imageSwiper1,
    imageSwiper2,
    imageSwiper3,
    imageSwiper4,
    imageSwiper5,
} from "../../../constant";
gsap.registerPlugin(ScrollTrigger);
const images = [imageSwiper3, imageSwiper4, imageSwiper5];
function ScrollImage() {
    const containerRef = useRef(null);
    const imageRefs = useRef([]);

    useGSAP(() => {
        const container = containerRef.current;
        const newHeight = `100vh`; // 👈 Longer scroll effect
        gsap.set(container, { height: newHeight });
        gsap.from(".imageScope", {
            scrollTrigger: {
                trigger: container,
                start: "top 30%", // Start when the top of the container reaches the top of the viewport
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
        <div className="imageScroll" ref={containerRef}>
            <div className="imageScroll_wrapper">
                <div className="imageScroll_wrapper_body imageScope">
                    <ContentWrapper
                        name="Curated services & experiences at Hillbrook"
                        textHighlight={"Curated services experiences"}
                        option="discover more"
                    />
                  <div className="imageScroll_image">
                  {images.map((item, id) => {

                  return (
                    <div key={id} className="image">
                      <img src={item}/>
                    </div>
                  )
                  })}
                  </div>

                </div>
            </div>
        </div>
    );
}

export default ScrollImage;
