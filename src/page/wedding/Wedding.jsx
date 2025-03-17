import React from "react";

import {
    imageMain1,
    videoMain,
    imageMain2,
    imageWedding1,
    imageWedding2,
    imageWedding3,
    imageSwiper4,
    imageSwiper5,
} from "../../constant";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import Carousel from "../../layouts/component/carousel/Carousel";

import ImageHover from "../../layouts/component/ImageHover/ImageHover";
import { Fade, Slide } from "react-awesome-reveal";
import "./wedding.scss";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import BoxContent from "../../layouts/component/boxContent/BoxContent";
import BookingFormPrice from "../../layouts/component/bookingFormPrice/BookingFormPrice";
import ImageSlide from "../../layouts/component/imageSlide/ImageSlide";
import DropDown from "../../layouts/component/dropDown/DropDown";
import ScrollImage from "../../layouts/component/scrollVIewImage/ScrollImage";
function Wedding() {
    return (
        <div className="Wedding">
            <section style={{ padding: 0 }}>
                <HeroImage image={imageMain2} title="the Farms" />
            </section>
            <div className="container">
                <section>
                    <BoxContent
                        text={
                            "Your luxury escape to disconnect and reconnect"
                        }
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
                    <video
                        src={videoMain}
                        className="Main_video"
                        autoPlay={true}
                        loop
                    ></video>
                </section>
                <section>
                    <ContentWrapper
                        flexEnd="true"
                        rotate="true"
                        name="
Intimately exclusive celebrations"
                        detail="
                            Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                        "
                        option="VIEW ALL SERVICES"
                        image={[imageWedding1]}
                        textHighlight={"celebrations"}
                    />
                </section>

                <section>
                    <ContentWrapper
                        flexEnd
                        name="Two self contained executive suites"
                        detail="
                            Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                        "
                        option="VIEW ALL SERVICES"
                        image={[imageWedding2]}
                        textHighlight={"self contained"}
                    />
                </section>
                <section>
                    <ContentWrapper
                        flexEnd="true"
                        rotate="true"
                        name="Two self contained executive suites"
                        detail="
                            Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs.
                        "
                        option="VIEW ALL SERVICES"
                        image={[imageWedding2]}
                        textHighlight={"self contained"}
                        moreImage={[imageWedding1]}
                    />
                </section>
                <ContentWrapper
                    name="Your dream wedding in style, with love, Hillbrook."
                    option="VIEW ALL"
                    detail="Your comfort and preferences are our top priority. Whether you seek complete privacy or wish to explore our curated list of exclusive experiences, we are here to create a bespoke escape that perfectly suits your needs."
                    textHighlight={"Hillbrook."}
                />
            </div>
            <section>
                <Carousel
                    image={[imageMain1, imageMain2, imageMain1, imageMain2]}
                />
            </section>
            <div className="container">
                <div class="container-fluid Wedding_form">
                    <div class="row">
                        <div class="col-md-3 text-white d-flex ">
                            <div class="row flex-column w-100">
                                <div class="Wedding_form_text col-md-6 w-100">
                                    <span className="text-dark">
                                        Our{" "}
                                        <strong className="fst-italic">
                                            {" "}
                                            wedding packages
                                        </strong>
                                    </span>
                                </div>
                                <div class="Wedding_form_body col-md-6 w-100 mt-3">
                                    <span className="text-dark">
                                        Whether you envision a grand celebration
                                        or an intimate gathering, our packages
                                        are crafted to provide exceptional
                                        service and unparalleled luxury.
                                        Discover the perfect package that suits
                                        your vision and allows you to focus on
                                        what truly matters – celebrating your
                                        love.
                                    </span>
                                    <br></br>
                                    <div className="mt-3"></div>
                                    <span className="Wedding_form_option text-dark">
                                        Download Brochure
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 d-flex Wedding_form_item">
                            <BookingFormPrice
                                name="Intimate Wedding"
                                dateTo={["may", "now"]}
                                dateFrom={["dev", "apr"]}
                                price={["17,000", "25,000"]}
                                detail="*Small events for 20-30 guests can be held inside the estate and do not require a marquee. We provide cutlery, plates and glassware for up to 30 guests."
                                option="BOOK A VIEWING"
                                listDetail={[
                                    "Main House with 7 bedrooms",
                                    "Exclusive use of the complete property",
                                    "Private beach walking access",
                                    "Breakfast provisions provided",
                                ]}
                            />
                            <BookingFormPrice
                                name="Intimate Wedding"
                                dateTo={["may", "now"]}
                                dateFrom={["dev", "apr"]}
                                price={["17,000", "25,000"]}
                                detail="*Small events for 20-30 guests can be held inside the estate and do not require a marquee. We provide cutlery, plates and glassware for up to 30 guests."
                                option="BOOK A VIEWING"
                                listDetail={[
                                    "Main House with 7 bedrooms",
                                    "Exclusive use of the complete property",
                                    "Private beach walking access",
                                    "Breakfast provisions provided",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ImageSlide
                image={imageWedding1}
                text="Our wedding vendors for effortless planning"
                textHightlight="effortless planning"
                option="VIEW ALL VENDORS"
            />
            <section className="container py-5">
              <h2 className="text-center fw-light">
                    <em>Wedding</em> <span className="fw-normal">FAQs</span>
                </h2>
                <p className="text-center">
                    Find the answers to your most pressing wedding questions or
                    get in touch.
                </p>
                <DropDown
                faqItems={[
                    {
                        title:
                            "Is there road access to the beach for the bride and groom and the bridal party to drive down to the beach for photographs?",
                        more: "Yes, there is direct road access to the beach for convenience.",
                    },
                    {
                         title:
                            "Is the Two berth Luxury Toilet enough toilets for our wedding guests?",
                        more: "The two-berth luxury toilet is sufficient for small gatherings, but we recommend additional facilities for larger weddings.",
                    },
                    {
                         title:
                            "Do you have a maximum number of guests that can attend the wedding?",
                        more: "Our venue can accommodate up to 150 guests.",
                    },
                    {
                         title:
                            "Does Hillbrook have any seats or benches for the ceremony lawn or do we need to hire extra for this area?",
                        more: "We provide a limited number of benches, and extra seating can be arranged upon request.",
                    },
                    {
                         title:
                            "Would our dog be allowed on site to be part of the wedding ceremony?",
                        more: "Yes! We welcome pets as part of your special day.",
                    },
                ]}
                extraFaqs={[
                    {
                        title: "Can we bring our own caterers?",
                        more: "Yes, we allow external caterers with prior arrangement.",
                    },
                    {
                        title:
                            "Do you offer indoor options in case of bad weather?",
                        more: "Yes, we have a beautiful indoor space available as a backup.",
                    },
                    {
                      title: "Can we bring our own caterers?",
                      more: "Yes, we allow external caterers with prior arrangement.",
                  },
                  {
                      title:
                          "Do you offer indoor options in case of bad weather?",
                      more: "Yes, we have a beautiful indoor space available as a backup.",
                  },

                ]}
            />
            </section>
            {/* <div className="container"> */}
                <section>
                    
                    <ScrollImage
                    text="Secure your dream wedding at this exclusive coastal sanctuary"
                    textHightlight="dream wedding exclusive"
                    option="DISCOVER MORE"
                        images={[
                            imageWedding3,
                            imageSwiper4,
                            imageSwiper5,
                            imageSwiper4,
                            imageWedding2,
                        ]}
                        listPosition={[    
                            {top: 0, left: 0},
                            {top: 62, left: 0},
                            {top: 0, left: 83},
                            {top: 22, left: 29},
                            {top: 54, left: 70},]}
                    />

                </section>
            {/* </div> */}
        </div>
    );
}

export default Wedding;
