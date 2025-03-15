import React, { useState } from "react";

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
import Carousel from "../../layouts/component/carousel/Carousel";
import ImageHover from "../../layouts/component/ImageHover/ImageHover";

import "./theHouse.scss";
import { Fade, Slide } from "react-awesome-reveal";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import ImageSlide from "../../layouts/component/imageSlide/ImageSlide";

const textImagePairs = [
    {
        text: "Surf",
        img: imageMain2,
        title: "Cook up a feast in the fully equipped kitchen",
    },
    {
        text: "Swim",
        img: imageMain1,
        title: "Soak up the scenery from the hot tub",
    },
    {
        text: "Fram Walk",
        img: imageMain3,
        title: "Cook up a feast in thefully equipped kitchen",
    },
    {
        text: "Beach hikes",
        img: imageMain4,
        title: "Relax in the comfort of the living room",
    },
    {
        text: "Lawn Games",
        img: imageContent1,
        title: "Soak up the scenery from the hot tub",
    },
    {
        text: "Kayak",
        img: imageContent2,
        title: "Cook up a feast in the fully equipped kitchen",
    },
    {
        text: "Mountain Bike Park",
        img: imageContent1,
        title: "Relax in the comfort of the living room",
    },
];

function TheHouse() {
    const [clickImage, setClickImage] = useState(textImagePairs[0].img);
    const [textActive, setTextActive] = useState(null);
    const [selected, setSelected] = useState(null);

    const handleClickImage = (item, id) => {
        setTextActive(id);
        setClickImage(item.img);
        setSelected(item.text);
    };

    return (
        <div className="TheHouse">
            <HeroImage image={imageMain3} title={"the house"} />
            <div className="container">
                <section className="TheHouse_content mt-50 ">
                    <div className="TheHouse_content_title">
                        50-hectare <span>luxury estate</span> <br></br>{" "}
                        overlooking Coromandel’s Pacific shores
                    </div>
                </section>
                <section className="content_image">
                    <img src={imageMain1} width={"100%"} />
                    <ul>
                        <li>20 Guests</li>
                        <li>9 Bedrooms</li>
                        <li>6 Bathrooms</li>
                    </ul>
                </section>

                <section className="vh-50">
                    <ContentWrapper
                        name="Scottish Mansion"
                        detail="
                Welcome to the heart of Hillbrook Estate, the Main House. This 7-bedroom homestead, inspired by the elegance of a Scottish mansion, offers luxurious accommodations and sweeping views of the Pacific Ocean. 
                Perfect for large groups or family gatherings, the Main House serves as the centerpiece of your unforgettable getaway. Booking the Main House is required to access our additional accommodations in The Stables.
                    "
                        option="VIEW ALL SERVICES"
                        textHighlight={"Mansion"}
                    />
                </section>
            </div>

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
            </section>

            <div className="container mb-5">
                <section className="image_container">
                    <ContentWrapper
                        moreImage={[imageMain2]}
                        flexEnd="true"
                        name="Two self contained executive suites"
                        detail="
                        Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                    "
                        option="VIEW ALL SERVICES"
                        image={[imageMain1]}
                        textHighlight={"self contained"}
                    />
                </section>
            </div>

            <section style={{ height: "100%" }}>
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
            </section>

            <section className="ChangeImage">
                <div
                    className="image_container"
                    style={{
                        background: `url('${clickImage}') no-repeat center center/cover`,
                        width: "100%",
                        height: "100vh",
                    }}
                >
                    <div className="wrapper">
                        {textImagePairs.map((item, index) => (
                            <div
                                key={index}
                                className="item_image"
                                onClick={() => handleClickImage(item, index)}
                            >
                                <p
                                    className={`image_text ${
                                        textActive === index ? "active" : ""
                                    } `}
                                >
                                    {item.text}
                                </p>
                                {selected === item.text ? (
                                    <Fade className="fadeText">
                                        {item.title}
                                    </Fade>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mb-5">
                <section className="image_container">
                    <ContentWrapper
                        moreImage={[imageMain2]}
                        widthImg="80%"
                        name="Curated Services"
                        detail="
                        Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                    "
                        option="VIEW ALL SERVICES"
                        image={[imageMain1]}
                    />
                </section>
                <section className="image_container">
                    <ContentWrapper
                        rotate
                        flexEnd
                        moreImage={[imageMain2]}
                        widthImg="80%"
                        name="Curated Services"
                        detail="
                        Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                    "
                        option="VIEW ALL SERVICES"
                        textHighlight="Services"
                        image={[imageMain1]}
                    />
                </section>
                <section className="image_container">
                    <ContentWrapper
                        rotate
                        moreImage={[imageMain2]}
                        widthImg="80%"
                        name="Curated Services"
                        detail="
                        Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                    "
                        option="VIEW ALL SERVICES"
                        image={[imageMain1]}
                    />
                </section>
            </div>

            <section className="ChangeImage">
                <div
                    className="image_container"
                    style={{
                        background: `url('${imageMain2}') no-repeat center center/cover`,
                        width: "100%",
                        height: "100vh",
                    }}
                ></div>
            </section>
            <div className="container vh-50">
                <section className="image_container">
                    <ContentWrapper
                        name="Scottish Mansion"
                        detail="
               Hillbrook Estate offers a wealth of activities, from beach exploration to scenic farm walks. For those seeking even more adventure, we are delighted to arrange additional activities to enhance your stay.
                    "
                        option="VIEW ALL SERVICES"
                    />
                </section>
            </div>

            <section>
                <ImageHover />
            </section>
            <section>
                <ImageSlide
                    image={imageMain3}
                    text="Relax or explore your very own personal playground"
                    textHightlight="personal playground"
                />
            </section>
        </div>
    );
}

export default TheHouse;
