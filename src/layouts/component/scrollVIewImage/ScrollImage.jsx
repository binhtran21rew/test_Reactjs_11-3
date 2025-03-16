import React, { useState, useEffect, useRef } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FontAwesome } from "../../../component/FontAwesome";

import "./scrollImage.scss";

gsap.registerPlugin(ScrollTrigger);

function ScrollImage({ ...props }) {
    const { images, listPosition, text, option, textHightlight } = props;
    const [positions, setPositions] = useState([]);
    const elementsRef = useRef([]);
    const containerRef = useRef(null);
    const animationFrame = useRef(null);

    useEffect(() => {
        const updatePositions = () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
            animationFrame.current = requestAnimationFrame(() => {
                const newPositions = elementsRef.current.map((el) => {
                    if (!el) return 0;
                    const rect = el.getBoundingClientRect();
                    return rect.top * 0.2;
                });
                setPositions(newPositions);
            });
        };

        window.addEventListener("scroll", updatePositions);
        updatePositions();

        return () => {
            window.removeEventListener("scroll", updatePositions);
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=100%",
                scrub: 2,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
            },
        });
        tl.from(".imageScope_item", {
            overflow: "hidden",
            transform: `translate3d(0px, ${positions.map(
                (data) => data || 0
            )}%, 0px)`,
            duration: 1,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            className="imageScroll"
            style={{ height: "100vh" }}
            ref={containerRef}
        >
            <div className="imageScroll_wrapper h-100">
                <div className="imageScroll_wrapper_body imageScope h-100 text-center">
                    <div className="Scroll_body d-flex flex-column justify-content-center h-100 w-100">
                        <div className="title d-flex flex-wrap justify-content-center z-3">
                            {textHightlight ? (
                                text.split(" ").map((part, id) => {
                                    return textHightlight
                                        .split(" ")
                                        .includes(part) ? (
                                        <span
                                            key={id}
                                            style={{
                                                fontWeight: "bold",
                                                fontStyle: "italic",
                                                marginRight: 5,
                                                height: "auto",
                                                zIndex: 999,
                                            }}
                                            className="fs-40"
                                        >
                                            {part}
                                        </span>
                                    ) : (
                                        <span
                                            style={{
                                                marginRight: 5,
                                                zIndex: 999,
                                            }}
                                            className="fs-40"
                                        >
                                            {part}
                                        </span>
                                    );
                                })
                            ) : (
                                <div
                                    style={{ marginRight: 5 }}
                                    className="fs-40"
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

                        {/* <div className="title z-3">
                            <strong>Curated services</strong> & <br />
                            <strong>experiences</strong> at hillbrook
                        </div>
                        <div className="option">
                            DISCOVER MORE
                            <FontAwesome
                                icon={faArrowRight}
                                size={"1x"}
                                color="#D4A373"
                            />
                        </div> */}

                        <div className="imageScroll_image w-100 h-100">
                            {images.map((src, index) => (
                                <motion.img
                                    className="imageScope_item"
                                    ref={(el) =>
                                        (elementsRef.current[index] = el)
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
                                        width: "250px",
                                        height: "250px",
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
