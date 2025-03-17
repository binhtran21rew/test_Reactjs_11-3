import React, { useState, useEffect, useRef } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FontAwesome } from "../../../component/FontAwesome";

import "./scrollImage.scss";

gsap.registerPlugin(ScrollTrigger);
const getY = (element) => {
    const height = element.clientHeight;
    const maxScrollSpeed = -300;
    const minScrollSpeed = 10;
    const referenceHeight = 500;

    const speedFactor = maxScrollSpeed + (height / referenceHeight) * (minScrollSpeed - maxScrollSpeed);
    
    return speedFactor;
}
function ScrollImage({ ...props }) {
    const { images, listPosition, text, option, textHightlight } = props;
    const [positions, setPositions] = useState([]);
    const imageRef= useRef([]);
    const containerRef = useRef(null);

    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%",
                scrub: 2,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
            },
        });
        imageRef.current.forEach((section, index) => {
            
            tl.to(section, {
                y: getY(section),
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2,
                }
            })
        })


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            className="imageScroll"
            style={{ height: "h-100" }}
            ref={containerRef}
        >
            <div className="imageScroll_wrapper">
                <div className="imageScroll_wrapper_body imageScope h-100 text-center">
                    <div className="Scroll_body d-flex flex-column justify-content-center h-100 w-100">
                        <div className="title d-flex flex-wrap justify-content-center z-3">
                            {textHightlight ? (
                                text.split(" ").map((part, id) => {
                                    return textHightlight
                                        .split(" ")
                                        .includes(part) ? (
                                        <span
                                            key={`${id}.${part}`}
                                            style={{
                                                fontWeight: "bold",
                                                fontStyle: "italic",
                                                marginRight: 5,
                                                height: "auto",
                                                zIndex: 999,
                                            }}
                                            className="text_item"
                                        >
                                            {part}
                                        </span>
                                    ) : (
                                        <span
                                            style={{
                                                marginRight: 5,
                                                zIndex: 999,
                                            }}
                                            className="text_item"
                                        >
                                            {part}
                                        </span>
                                    );
                                })
                            ) : (
                                <div
                                    style={{ marginRight: 5 }}
                                    className="text_item"
                                >
                                    {text}
                                </div>
                            )}
                        </div>
                        {option && (
                            <div className="option" style={{ zIndex: 999 }}>
                                <a href="#" className="text-dark fw-bold">
                                    {option}
                                    <FontAwesome
                                        icon={faArrowRight}
                                        size={"1x"}
                                        color="#D4A373"
                                    />
                                </a>
                            </div>
                        )}
                        <div className="imageScroll_image w-100 h-100">
                            {images.map((src, index) => (
                                <motion.img
                                    className="imageScope_item"
                                    ref={(el) =>
                                        (imageRef.current[index] = el)
                                    }
                                    key={index}
                                    src={src}
                                    alt={`Random ${index}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        position: "absolute",
                                        top: `${listPosition[index]?.top}%`,
                                        left: `${listPosition[index]?.left}%`,
                                        borderRadius: "10px",
                                        transition: "transform 0.1s ease-out",
                                        transform: `translate3d(0px, ${
                                            positions[index] || 0
                                        }px, 0px)`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrollImage;
