import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FontAwesome } from "../../component/FontAwesome";
import {
    logoImg,
    linkTheHouse,
    linkTheFarm,
    linkContact,
    linkBookNow,
    logoName,
    linkGallery,
    linkCuratedServices,
    linkActivities,
} from "../../constant";
import "./header.scss";

gsap.registerPlugin(ScrollTrigger);

const Header = ({ ...props }) => {
    const { textPosition, imageHeader } = props;
    const headerRef = useRef(null);
    const [scrollUp, setScrollUp] = useState(false);
    let lastScrollTop = 0;

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headerRef.current,
                start: "bottom top",
                scrub: 2,
            },
        });

        tl.fromTo(
            headerRef.current,
            { autoAlpha: 1, y: 50 },
            { autoAlpha: 0, y: 0, duration: 0.8, ease: "power2.out" }
        );
        const handleScroll = () => {
            const position1 = document.body.scrollTop;
            const position2 = document.documentElement.scrollTop;
            let scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;

            if (
                scrollTop < lastScrollTop &&
                (position1 > 600 || position2 > 600)
            ) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            setScrollUp(false);
            window.removeEventListener("scroll", handleScroll);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="Header shrink">
            {scrollUp && <NavTop />}
            <div className={`Header_top`} ref={headerRef}>
                <Link to={"/"} className="Header_logo">
                    <img src={logoImg} />
                </Link>
                <div className="Header_top_link">
                    <Link to={linkTheHouse} className="header_top_link_item">
                        the house
                    </Link>
                    <Link to={linkTheFarm} className="header_top_link_item">
                        the farm
                    </Link>
                    <Link to={linkContact} className="header_top_link_item">
                        contact
                    </Link>
                    <Link to={linkBookNow} className="header_top_link_item">
                        book now
                    </Link>
                </div>
                {/* {scrollUp ? (
                    <NavTop />
                ) : (
                    <div className="Header_top_link">
                        <Link to={linkTheHouse} className="header_top_link_item">
                            the house
                        </Link>
                        <Link to={linkTheFarm} className="header_top_link_item">
                            the farm
                        </Link>
                        <Link to={linkContact} className="header_top_link_item">
                            contact
                        </Link>
                        <Link to={linkBookNow} className="header_top_link_item">
                            book now
                        </Link>
                    </div>
                )} */}
            </div>
        </div>
    );
};

const NavTop = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();
    const tlRef = useRef(null);
    const listRef = useRef(null);

    useGSAP(() => {
        const nav = navRef.current;
        const links = listRef.current.children; // Get all <Link> elements inside listRef

        tlRef.current = gsap.timeline({ paused: true })
            .set(".NavTop_wrapper", { visibility: "hidden" }) // Make nav visible on open
            .to(nav, { width: "200px", duration: 0.1, ease: "power2.out" })
            .to(nav, { height: "8%", duration: 0.1, ease: "power2.out" })
            // .from(links,
            // { 
            //     opacity: 0, 
            //     y: 50, 
            //     duration: 2, 
            //     stagger: 1, // Animate one by one
            //     ease: "power2.out" 
            // }); // Overlap with previous animation

    }, []);

    useEffect(() => {
        if (isOpen) {
            tlRef.current.play(); // Play animation forward
        } else {
            tlRef.current.reverse(); // Reverse animation when closing
        }
    }, [isOpen]); // Runs when `isOpen` changes

    return (
        <div className="NavTop_nav">
            <div
                ref={navRef}
                className="NavTop position-fixed top-0 end-0 d-flex flex-column"
            >
                <div className="NavBar_button">
                    <span className="me-auto fw-bold">BOOK NOW</span>
                    <Button
                        variant="link"
                        className="fs-3 text-dark"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <FontAwesome icon={faCircleXmark} size="1x" color="#000" className="icon" />
                        ) : (
                            <FontAwesome icon={faBars} size="1x" color="#000" className="icon" />
                        )}
                    </Button>
                </div>
                <div className="NavTop_wrapper row d-flex flex-column h-100 justify-content-between">
                    <div className="NavTop_wrapper_content">
                        <div className="col-md-12 d-flex justify-content-between NavTopWidth">
                            <Link to={"/"} className="Header_logo">
                                <img src={logoImg} />
                            </Link>
                        </div>

                        <div className="col-md-12">
                            <div ref={listRef} className="row text-end NavTopLink d-flex flex-column g-3">
                                <Link to={linkTheHouse} className="fw-bold text-dark">THE HOUSE</Link>
                                <Link to={linkTheFarm} className="text-dark">THE FARM</Link>
                                <Link to={linkGallery} className="text-dark">GALLERY</Link>
                                <Link to={linkCuratedServices} className="text-dark">CURATED SERVICES</Link>
                                <Link to={linkActivities} className="text-dark">ACTIVITIES</Link>
                                <Link to={linkContact} className="text-dark">CONTACT</Link>
                                <Link to={linkBookNow} className="fw-bold text-dark">BOOKING</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <img src={logoName} alt="logoName" width={"95%"} height={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;
