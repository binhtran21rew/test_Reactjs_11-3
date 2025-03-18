import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
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

    useEffect(() => {
        const shrinkHeader = () => {
          const position1 = document.body.scrollTop;
          const position2 = document.documentElement.scrollTop;
          if( (position1 > 500) || (position2 >  500)){
            headerRef.current.classList.remove('shrink');
            setScrollUp(true)
          } else{        
            headerRef.current.classList.add('shrink');        
            setScrollUp(false)
    
          }
        }

        window.addEventListener('scroll', shrinkHeader);
    
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
            setScrollUp(false);
        }
    }, []);

    return (
        <div ref={headerRef} className="Header shrink">
            { scrollUp && <NavTop/>}
            <div className={`Header_top`} >
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

            </div>
        </div>
    );
};

const NavTop = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();
    const tlRef = useRef(null);
    const listRef = useRef(null);
    const windowScreen = window.innerWidth;


    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY;
    useGSAP(() => {
        const nav = navRef.current;
        const links = listRef.current.children;

        tlRef.current = gsap.timeline({ paused: true })
            .set(".NavTop_wrapper", { visibility: "visible"})
            .fromTo(nav, 
                { height: "8%", width: windowScreen < 420 && '100%' || '200px', duration: 0.1, ease: "power2.out" },
                { height: "100%", width: windowScreen < 420 && '100%' || '500px', duration: 0.1, ease: "power2.out" },
            )
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
              setIsVisible(false);
            } else {
              setIsVisible(true);
            }
            lastScrollY = window.scrollY;
          };
      
          window.addEventListener("scroll", handleScroll);
          
        
        if (isOpen) {
            tlRef.current.play(); // Play animation forward
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            tlRef.current.reverse(); // Reverse animation when closing
            document.body.style.overflow = ""; // Enable scrolling
        }

        return () => {
            document.body.style.overflow = ""; 
            window.removeEventListener("scroll", handleScroll);

        };
    }, [isOpen]);

    return (
        <div className={`NavTop_nav ${!isVisible && 'd-none' } `}>
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
                            <div ref={listRef} className={`row text-end NavTopLink d-flex flex-column g-3`}>
                                <Link to={linkTheHouse} className={"fw-bold text-dark"}>THE HOUSE</Link>
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
