import React from "react";

import {
    imageMain1,
    videoMain,
    imageMain2,
    imageMain3,
    letterAnimation,
    imageContent1,
    imageContent2,
    imageMain4,
    imageContent5,
} from "../../constant";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import Carousel from "../../layouts/component/carousel/Carousel";
import ImageHover from "../../layouts/component/ImageHover/ImageHover";
import { Fade, Slide } from "react-awesome-reveal";
import "./wedding.scss";
import HeroImage from "../../layouts/component/heroImage/HeroImage";

function Wedding() {
    return (
        <div className="Wedding">
            <section>
                <HeroImage image={imageMain2} title="the Farms" />
            </section>
            <div className="wrapper">
                <section>
                    <ContentWrapper
                        name="Your dream wedding venue on the Coromandel Coast"
                        detail="
                            Explore our gallery to experience the beauty and charm of Hillbrook Estate. From stunning interiors to picturesque landscapes, our photos showcase the unique features and unforgettable moments awaiting you.
                        "
                        textHighlight={"dream wedding venue"}
                        option="VIEW ALL SERVICES"
                        textPosition
                    />
                </section>

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

                <section>
                    <ContentWrapper
                        name="Scottish Mansion"
                        detail="
                Welcome to the heart of Hillbrook Estate, the Main House. This 7-bedroom homestead, inspired by the elegance of a Scottish mansion, offers luxurious accommodations and sweeping views of the Pacific Ocean. 
                Perfect for large groups or family gatherings, the Main House serves as the centerpiece of your unforgettable getaway. Booking the Main House is required to access our additional accommodations in The Stables.
                    "
                        option="VIEW ALL SERVICES"
                        flexEnd={true}
                        image={[imageContent5]}
                        moreImage={imageContent1}
                    />
                </section>
                <section>
                    <ContentWrapper
                        name="Scottish Mansion"
                        detail="
                Welcome to the heart of Hillbrook Estate, the Main House. This 7-bedroom homestead, inspired by the elegance of a Scottish mansion, offers luxurious accommodations and sweeping views of the Pacific Ocean. 
                Perfect for large groups or family gatherings, the Main House serves as the centerpiece of your unforgettable getaway. Booking the Main House is required to access our additional accommodations in The Stables.
                    "
                        option="VIEW ALL SERVICES"
                        textPosition
                    />
                </section>

                <section>
                    <video src={videoMain}  className="Main_video"  autoPlay={true} loop ></video>
                </section>
            </div>
        </div>
    );
}

export default Wedding;
