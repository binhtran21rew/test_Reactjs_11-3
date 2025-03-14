import React from "react";
import { Link } from "react-router-dom";


import { FontAwesome } from "../../component/FontAwesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./footer.scss";

import {
    logoName,
    linkTheHouse,
    linkTheFarm,
    linkContact,
    linkBookNow,
    linkGallery,
    linkActivities,
    linkCuratedServices,
} from "../../constant";

function Footer() {


    return (
        <div className="Footer">
            <section className="Footer_wrapper">
                <div className="Footer_content">
                    <h1 className="header">
                        An experience you'll <i>never forget</i>
                    </h1>
                    <Link to={linkBookNow} className="button">
                        Book Now
                        <FontAwesome
                            icon={faArrowRight}
                            size={"1x"}
                            color="red"
                        />
                    </Link>
                </div>
                <nav className="nav_menu">
                    <Link to={linkTheHouse}>
                        <span>The House</span>{" "}
                    </Link>
                    <Link to={linkTheFarm}>
                        <span>The Farm</span>
                    </Link>
                    <Link to={linkGallery}>
                        <span>Gallery</span>
                    </Link>
                    <Link to={linkCuratedServices}>
                        <span>Curated Services</span>
                    </Link>
                    <Link to={linkActivities}>
                        <span>Activities</span>
                    </Link>
                    <Link to={linkContact}>
                        <span>Contact</span>
                    </Link>
                    <Link to={linkBookNow}>
                        <span>Booking</span>
                    </Link>
                    <Link to={linkBookNow}>
                        <span>Weddings</span>
                    </Link>
                    <Link to={"#"}>
                        <span>Vendors</span>
                    </Link>
                    <Link to={"#"}>
                        <span>Enquiries</span>
                    </Link>
                    <Link to={"#"}>
                        <span>Gallery</span>
                    </Link>
                    <div className="social_icons">
                        <FontAwesome icon={faInstagram} />
                        <FontAwesome icon={faFacebook} />
                    </div>
                </nav>
            </section>

            <footer className="footer">
                <img
                    src={logoName}
                    alt="logoName"
                    width={"95%"}
                    height={"100%"}
                />
                <Link to={"#"}>Terms</Link>
                <Link to={"#"}>Privacy Policy</Link>
            </footer>
        </div>
    );
}

export default Footer;
