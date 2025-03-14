import React from "react";
import { Slide } from "react-awesome-reveal";

import "./curateService.scss";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import {
    imageMain4,
    imageMain2,
    imageMain1,
    letterAnimation,
    zoomOut,
    imageContent1,
    imageSwiper1,
    imageSwiper2,
    imageSwiper3,
} from "../../constant";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import Carousel from "../../layouts/component/carousel/Carousel";
function CurateService() {
    return (
        <div className="CurateService">
            <HeroImage
                image={imageMain4}
                title={"crafted for you"}
                center={true}
            />
            <section>
                <ContentWrapper
                    name="Discover our tailored services at Hillbrook"
                    detail="
            Welcome to the heart of Hillbrook Estate, the Main House. This 7-bedroom homestead, inspired by the elegance of a Scottish mansion, offers luxurious accommodations and sweeping views of the Pacific Ocean. 
            Perfect for large groups or family gatherings, the Main House serves as the centerpiece of your unforgettable getaway. Booking the Main House is required to access our additional accommodations in The Stables.
            "
                    option="VIEW ALL SERVICES"
                    textHighlight={"tailored Hillbrook"}
                    textPosition={true}
                />
            </section>

            <section>
                <Carousel
                    image={[imageMain1, imageMain2, imageMain4]}
                    content={[
                        {
                            title: "Private Chef",
                            detail: "Fine dining to family style meals, our local private chefs are available to meet your daily needs or cater for those special occasions.",
                        },
                        {
                            title: "Massages at Hillbrook",
                            detail: "Truly relax and unwind with the healing hands of our incredible masseuses.",
                        },
                        {
                            title: "Private Chef",
                            detail: "Fine dining to family style meals, our local private chefs are available to meet your daily needs or cater for those special occasions.",
                        },
                    ]}
                />
            </section>

            <div
                className="Main_image"
                style={{ backgroundImage: `url(${imageMain4})` }}
            >
                <Slide keyframes={zoomOut} style={{ width: "80%" }}>
                    <div className={`text`}>
                        <div className="">
                            Relax or explore <br></br> your very own{" "}
                            <span>personal playground</span>{" "}
                        </div>
                    </div>
                </Slide>
            </div>

            <section>
                <ContentWrapper
                    name="Feast on discovery with our culinary experiences"
                    detail="
              Become intimate with your food and join our chef in foraging, hunting and gathering, or let us create a truly memorable dining experience just for you.
              "
                    option="VIEW ALL SERVICES"
                    textHighlight={"Feast culinary experiences"}
                    textPosition={true}
                />
            </section>

            <section>
                <Carousel
                    isImage = {true}
                    image={[imageMain1, imageMain2, imageMain4, imageContent1]}
                    content={[
                        {
                            title: "Private Chef",
                            detail: "Fine dining to family style meals, our local private chefs are available to meet your daily needs or cater for those special occasions.",
                        },
                        {
                            title: "Massages at Hillbrook",
                            detail: "Truly relax and unwind with the healing hands of our incredible masseuses.",
                        },
                        {
                            title: "Private Chef",
                            detail: "Fine dining to family style meals, our local private chefs are available to meet your daily needs or cater for those special occasions.",
                        },
                        {
                          title: "Massages at Hillbrook",
                          detail: "Truly relax and unwind with the healing hands of our incredible masseuses.",
                      },
                    ]}
                />
            </section>
            <section>
                <Carousel
                    isImage = {true}
                    image={[imageSwiper1, imageSwiper2, imageSwiper3, imageContent1]}
                    content={[
                        {
                            title: "Foraging on the Farm",
                            detail: "Fine dining to family style meals, our local private chefs are available to meet your daily needs or cater for those special occasions.",
                        },
                        {
                            title: "Massages at Hillbrook",
                            detail: "Truly relax and unwind with the healing hands of our incredible masseuses.",
                        },
                        {
                            title: "Private Chef",
                            detail: "Fine dining to family style meals, our local private chefs are available to meet your daily needs or cater for those special occasions.",
                        },
                        {
                          title: "Massages at Hillbrook",
                          detail: "Truly relax and unwind with the healing hands of our incredible masseuses.",
                      },
                    ]}
                />
            </section>

            <div
                className="Main_image"
                style={{ backgroundImage: `url(${imageMain4})` }}
            >
                <Slide keyframes={zoomOut} style={{ width: "80%" }}>
                    <div className={`text`}>
                        <div className="">
                            Relax or explore <br></br> your very own{" "}
                            <span>personal playground</span>{" "}
                        </div>
                    </div>
                </Slide>
            </div>
            
        </div>
    );
}

export default CurateService;
