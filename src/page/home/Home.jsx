import React, { useState, useEffect, useRef } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import {
    imageMain1,
    videoMain,
    imageMain2,
    imageMain3,
    letterAnimation,
    imageContent1,
    imageContent2,
    map,
    imageMain4,
} from "../../constant";

import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import ItemScroll from "../../layouts/component/scroll/ItemScroll";
import MapMarker from "../../layouts/component/mapMarker/MapMarker";
import Carousel from "../../layouts/component/carousel/Carousel";
import Contact from "../../layouts/component/contact/Contact";
import ImageHover from "../../layouts/component/ImageHover/ImageHover";
import { zoomOut } from "../../constant";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import BoxContent from "../../layouts/component/boxContent/BoxContent";

function Home() {
    return (
        <main className="Main">
            <section className="first">
                <HeroImage image={imageMain2} title="the houses" />
            </section>
            <section>
                <BoxContent 
                    text={["Your", "luxury escape", "to disconnect and reconnect"]}
                    textPosition={"16.6"}
                    option="book now"
                    textHighlight="luxury escape"
                    detail="                       
                        Hillbrook Estate & Farm is a luxury coastal property and
                        working farm situated just north of Whangamata on New
                        Zealand's Coromandel coast. Available for exclusive
                        rental, our estate is the perfect setting for your next
                        luxury escape."
                    splitPosition={[1,3]}
                />


            </section>
            <section>
                <video className="Main_video" controls>
                    <source src={videoMain} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section>
                <ContentWrapper
                    name="
                        Enjoy the beauty of the Coromandel from the sanctuary of your own private retreat"
                    textHighlight={"the beauty of the Coromandel"}
                />
            </section>
            <section className="">


                <div style={{ textAlign: "center" }}>
                    <section className="Main_section">
                        <ItemScroll
                            adress="45HA FARM, NATIVE FOREST, PONDS"
                            name="farm"
                            detail="Experience the perfect blend of luxury and nature. Our working farm, home to 100 dairy calves, features restored ponds, orchards, and permaculture practices, inviting you to connect deeply with nature."
                            option="Learn more"
                        />

                        <img
                            src={imageMain1}
                            className="iamgeFade"
                            width={"80%"}
                            height={"80%"}
                        />
                    </section>
                    <section className="Main_section">
                        <ItemScroll
                            adress="45HA FARM, NATIVE FOREST, PONDS"
                            name="farm"
                            detail="Experience the perfect blend of luxury and nature. Our working farm, home to 100 dairy calves, features restored ponds, orchards, and permaculture practices, inviting you to connect deeply with nature."
                            option="Learn more"
                        />
                        <img
                            src={imageMain2}
                            className="iamgeFade"
                            width={"80%"}
                            height={"80%"}
                        />
                    </section>
                    <section className="Main_section">
                        <ItemScroll
                            adress="45HA FARM, NATIVE FOREST, PONDS"
                            name="farm"
                            detail="Experience the perfect blend of luxury and nature. Our working farm, home to 100 dairy calves, features restored ponds, orchards, and permaculture practices, inviting you to connect deeply with nature."
                            option="Learn more"
                        />
                        <img
                            src={imageMain3}
                            className="iamgeFade"
                            width={"80%"}
                            height={"80%"}
                        />
                    </section>
                </div>
            </section>
            <section>
                <div
                    className="Main_image"
                    style={{ backgroundImage: `url(${imageMain4})` }}
                >
                    <Slide keyframes={letterAnimation} style={{ width: "80%" }}>
                        <div className={`text`}>
                            <div className="">
                                Relax or explore <br></br> your very own{" "}
                                <span>personal playground</span>{" "}
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
            <section>
                <ContentWrapper
                    name="Curated Services"
                    detail="
                    Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                "
                    option="VIEW ALL SERVICES"
                    image={[imageContent1, imageContent2, imageContent1]}
                    image_name={["Private Chef", "Massages", "Private Chef"]}
                />
            </section>
            <section>
                <MapMarker map={map} />
            </section>
            <section>
                <ContentWrapper
                    name="Crafting your stay"
                    detail="
                Hillbrook Estate offers a wealth of activities, from beach exploration to scenic farm walks. For those seeking even more adventure, we are delighted to arrange additional activities to enhance your stay.
                "
                    option="VIEW ALL SERVICES"
                    textPosition={true}

                />
            </section>
            <section>
                <div className="">
                    <ImageHover />
                </div>
            </section>
            <section>
                <div
                    className="Main_image"
                    style={{ backgroundImage: `url(${imageContent2})` }}
                >
                    <Slide keyframes={letterAnimation} style={{ width: "80%" }}>
                        <div className={`text`}>
                            <div className="">
                                Relax or explore <br></br> your very own{" "}
                                <span>personal playground</span>{" "}
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
            <section>
                <ContentWrapper
                    name="Our Gallery"
                    detail="
                    Explore our gallery to experience the beauty and charm of Hillbrook Estate. From stunning interiors to picturesque landscapes, our photos showcase the unique features and unforgettable moments awaiting you.
                "
                    option="VIEW ALL SERVICES"
                />
            </section>
            <section>
                <Carousel
                    image={[
                        imageMain1,
                        imageMain2,
                        imageMain3,
                        imageMain4,
                        imageMain1,
                        imageMain2,
                    ]}
                />

                <Contact />
            </section>
        </main>
    );
}

export default Home;
