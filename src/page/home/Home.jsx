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
import ImageHover from "../../layouts/component/ImageHover/ImageHover";
import { zoomOut } from "../../constant";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import BoxContent from "../../layouts/component/boxContent/BoxContent";
import ImageSlide from "../../layouts/component/imageSlide/ImageSlide";
import ContactImage from "../../layouts/component/contact/ContactImage";

function Home() {
    return (
        <main className="Main">
            <section className="first">
                <HeroImage image={imageMain2}/>
            </section>
            <section>
                <BoxContent
                    text={
                        "Your luxury escape to disconnect and reconnect"}
                    textPosition={"16.6"}
                    option="book now"
                    textHighlight="luxury escape"
                    detail="                       
                        Hillbrook Estate & Farm is a luxury coastal property and
                        working farm situated just north of Whangamata on New
                        Zealand's Coromandel coast. Available for exclusive
                        rental, our estate is the perfect setting for your next
                        luxury escape."
                    splitPosition={[1, 3]}
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
                <ItemScroll
                    adress={["45HA FARM, NATIVE FOREST, PONDS", "STUNNING SECLUDED BEACH", "45HA FARM, NATIVE FOREST, PONDS"]}
                    name={["farm", "beach", "location"]}
                    detail={
                        ["Experience the perfect blend of luxury and nature. Our working farm, home to 100 dairy calves, features restored ponds, orchards, and permaculture practices, inviting you to connect deeply with nature.",
                            "Being just 10 minutes north of Whangamata, Hillbrook offers the perfect balance of seclusion and convenience, providing easy access to local attractions while ensuring a peaceful retreat.",
                            "Being just 10 minutes north of Whangamata, Hillbrook offers the perfect balance of seclusion and convenience, providing easy access to local attractions while ensuring a peaceful retreat."
                        ]}
                    option={["Learn more","Learn more"]}
                    images={[imageContent1, imageContent2, imageMain1]}
                />

                <ImageSlide
                    image={imageMain2}
                    text="Relax or explore your very own personal playground"
                    textHightlight="personal playground"
                />
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
                    <ImageHover 
                        listImage={
                            [
                                { text: "Surf", img: imageMain2 },
                                { text: "Swim", img: imageMain1 },
                                { text: "Fram Walk", img: imageMain3 },
                                { text: "Beach hikes", img: imageMain4 },
                                { text: "Lawn Games", img: imageContent1 },
                                { text: "Kayak", img: imageContent2 },
                                { text: "Mountain Bike Park", img: imageContent1 },
                                { text: "Surf", img: imageMain2 },
                                { text: "Swim", img: imageMain1 },
                                { text: "Fram Walk", img: imageMain3 },
                                { text: "Beach hikes", img: imageMain4 },
                                { text: "Lawn Games", img: imageContent1 },
                                { text: "Kayak", img: imageContent2 },
                                { text: "Mountain Bike Park", img: imageContent1 },
                                { text: "Surf", img: imageMain2 },
                                { text: "Swim", img: imageMain1 },
                                { text: "Fram Walk", img: imageMain3 },
                                { text: "Beach hikes", img: imageMain4 },
                                { text: "Lawn Games", img: imageContent1 },
                                { text: "Kayak", img: imageContent2 },
                                { text: "Mountain Bike Park", img: imageContent1 },
                            ]
                        }
                    />
                </div>
            </section>
            <section>
                <ImageSlide
                    image={imageMain2}
                    text="Relax or explore your very own personal playground"
                    textHightlight="personal playground"
                />
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

                <ContactImage />
            </section>
        </main>
    );
}

export default Home;
