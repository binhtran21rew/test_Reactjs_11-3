import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
import "./style.scss";

const Header = ({ ...props }) => {
    const { textPosition, imageHeader } = props;
    const headerRef = useRef(null);
    const [scrollUp, setScrollUp] = useState(false);
    const [showNav, setShowNav] = useState(false);

    let lastScrollTop = 0;

    useEffect(() => {
        const shrinkHeader = () => {
            const position1 = document.body.scrollTop;
            const position2 = document.documentElement.scrollTop;
            if (position1 > 600 || position2 > 600) {
                headerRef.current.classList.remove("shrink");
            } else {
                headerRef.current.classList.add("shrink");
            }
        };

        const handleScroll = () => {
            const position1 = document.body.scrollTop;
            const position2 = document.documentElement.scrollTop;
            let scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;

            if (
                scrollTop < lastScrollTop &&
                (position1 > 600 || position2 > 600)
            ) {
                headerRef.current.classList.add("showMenu");
                setScrollUp(true);
            } else {
                headerRef.current.classList.remove("showMenu");
                setScrollUp(false);
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", shrinkHeader);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", shrinkHeader);
            window.removeEventListener("scroll", handleScroll);
            setScrollUp(false);
        };
    }, []);

    return (
        <div ref={headerRef} className="Header shrink">
            <div className={`Header_top`}>
                <Link to={"/"} className="Header_logo">
                    <img src={logoImg} width={50} height={50} />
                </Link>
                {scrollUp ? (
                    <NavTop />
                ) : (
                    <div className="Header_top_link">
                        <Link to={linkTheHouse} className="header_top_link">
                            the house
                        </Link>
                        <Link to={linkTheFarm} className="header_top_link">
                            the farm
                        </Link>
                        <Link to={linkContact} className="header_top_link">
                            contact
                        </Link>
                        <Link to={linkBookNow} className="header_top_link">
                            book now
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

const NavTop = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="position-fixed top-0 end-0 p-3 d-flex flex-column "
                style={{
                    background: "#E8D9D0",
                    zIndex: 1050,
                    width: isOpen ? "500px" : "200px",
                    height: isOpen ? "100%" : "80px",
                    transition:
                        "width 0.4s ease-in-out, height 0.4s ease-in-out",
                }}
            >
                <div className="row d-flex flex-column h-100 justify-content-between">
                    <div>
                        <div
                            className={`col-md-12 ${isOpen && 'd-flex justify-content-between'}  ${
                                isOpen && "pe-5 pb-5"
                            }`}
                        >
                            {isOpen && (
                                <Link to={"/"} className="Header_logo">
                                    <img src={logoImg} width={50} height={50} />
                                </Link>
                            )}
                            <div className="">
                                <span className="me-auto fw-bold ">
                                    BOOK NOW
                                </span>
                                <Button
                                    variant="link"
                                    className="fs-3 text-dark"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {isOpen ? (
                                        <FontAwesome
                                            icon={faCircleXmark}
                                            size="1x"
                                            color="#000"
                                            className="icon"
                                        />
                                    ) : (
                                        <FontAwesome
                                            icon={faBars}
                                            size="1x"
                                            color="#000"
                                            className="icon"
                                        />
                                    )}
                                </Button>
                            </div>
                        </div>

                        {isOpen && (
                            <div className="col-md-12">
                                <div className="row text-end pe-5 d-flex flex-column g-3">
                                    <Link
                                        to={linkTheHouse}
                                        className="fs-5 fw-bold text-dark "
                                    >
                                        THE HOUSE
                                    </Link>
                                    <Link
                                        to={linkTheFarm}
                                        className="text-dark"
                                    >
                                        THE FARM
                                    </Link>
                                    <Link
                                        to={linkGallery}
                                        className="text-dark"
                                    >
                                        GALLERY
                                    </Link>
                                    <Link
                                        to={linkCuratedServices}
                                        className="text-dark"
                                    >
                                        CURATED SERVICES
                                    </Link>
                                    <Link
                                        to={linkActivities}
                                        className="text-dark"
                                    >
                                        ACTIVITIES
                                    </Link>
                                    <Link
                                        to={linkContact}
                                        className="text-dark"
                                    >
                                        CONTACT
                                    </Link>
                                    <Link
                                        to={linkBookNow}
                                        className="fs-5 fw-bold text-dark"
                                    >
                                        BOOKING
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    {isOpen && (
                        <div className="col-md-12">
                            <div>
                                <img
                                    src={logoName}
                                    alt="logoName"
                                    width={"95%"}
                                    height={"100%"}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
