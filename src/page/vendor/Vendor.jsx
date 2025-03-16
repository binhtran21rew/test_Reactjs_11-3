import React from "react";

import "./vendor.scss";

import {
    gallery1,
    gallery2,
    gallery3,
    imageMain1,
    imageMain2,
    imageMain3,
    imageWedding4,
    imageWedding5,
} from "../../constant";

import HeroImage from "../../layouts/component/heroImage/HeroImage";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import GalleryImage from "../../layouts/component/galleryImage/GalleryImage";
import DropDown from "../../layouts/component/dropDown/DropDown";
function Vendor() {
    return (
        <div className="Vendor">
            <HeroImage image={imageMain3} title={"vendor"} />

            <div className="container">
                <section>
                    <ContentWrapper
                        name="We’ve curated a list of the very best wedding vendors for effortless planning"
                        detail="
Choosing our preferred wedding vendors ensures a stress-free planning experience. Dedicated to bringing your vision to life with impeccable service and attention to detail.

Explore our network of selected wedding vendors  and enquire directly with them below"
                        textHighlight={"effortless planning"}
                        option="contact us"
                        textPosition
                    />
                </section>
                <section>
                    <GalleryImage
                        gridPosition={3}
                        position
                        list={[
                            {
                                id: 1,
                                text: "all",
                                images: [
                                    imageWedding4,
                                    imageWedding5,
                                    gallery2,
                                    imageMain1,
                                    gallery1,
                                    gallery2,
                                    imageMain1,
                                    gallery1,
                                    gallery2,
                                    imageMain1,
                                    gallery1,
                                    gallery2,
                                ],
                                name: [
                                    "Flagship Events",
                                    "Whisk",
                                    "Rose's Dining Table",
                                    "One fine day",
                                    "Claire Donaldson Styling",
                                    "Tairua Bus Company",
                                    "Flagship Events",
                                    "Whisk",
                                    "Rose's Dining Table",
                                    "One fine day",
                                    "Claire Donaldson Styling",
                                    "Tairua Bus Company",
                                ],
                                detail: [
                                    "As New Zealand’s exclusive supplier of the iconic Sperry Tent, Flagship Events offers a range of premium hire items to elevate your event. The stunning sailcloth canopy of our Sperry Tents offers shelter from both the sun and unpredictable weather, while our team goes above and beyond to ensure every detail, from lighting to flooring, exceeds your expectations for a truly memorable event.",
                                    "Whisk offers a sumptuous wedding catering experience to compliment your wedding with excellent European style cuisine. Our menu is designed with a high-end farm to table approach and uses some of the best ingredients New Zealand has to offer.",
                                    "Rose's Dining Table offers an experience focussed around connection, with her private Supper Clubs & conceptual dining installations. Rose and her team don't just take care of the food, they will also curate a beautiful and vibrant tablescape guaranteed to evoke conversation and encourage connection.",
                                    "We specialize in creating unforgettable moments that perfectly reflect your unique story. From intimate gatherings to grand affairs, our highly experienced team is dedicated to bringing your dreams to life with meticulous attention to detail and creative flair.",
                                    "For all of life's most celebrated occasions, producing visual magic with full event design and production, giving our clients unparalleled event experiences.",
                                    "As New Zealand’s exclusive supplier of the iconic Sperry Tent, Flagship Events offers a range of premium hire items to elevate your event. The stunning sailcloth canopy of our Sperry Tents offers shelter from both the sun and unpredictable weather, while our team goes above and beyond to ensure every detail, from lighting to flooring, exceeds your expectations for a truly memorable event.",
                                    "Whisk offers a sumptuous wedding catering experience to compliment your wedding with excellent European style cuisine. Our menu is designed with a high-end farm to table approach and uses some of the best ingredients New Zealand has to offer.",
                                    "Rose's Dining Table offers an experience focussed around connection, with her private Supper Clubs & conceptual dining installations. Rose and her team don't just take care of the food, they will also curate a beautiful and vibrant tablescape guaranteed to evoke conversation and encourage connection.",
                                    "We specialize in creating unforgettable moments that perfectly reflect your unique story. From intimate gatherings to grand affairs, our highly experienced team is dedicated to bringing your dreams to life with meticulous attention to detail and creative flair.",
                                    "For all of life's most celebrated occasions, producing visual magic with full event design and production, giving our clients unparalleled event experiences.",
                                    "As New Zealand’s exclusive supplier of the iconic Sperry Tent, Flagship Events offers a range of premium hire items to elevate your event. The stunning sailcloth canopy of our Sperry Tents offers shelter from both the sun and unpredictable weather, while our team goes above and beyond to ensure every detail, from lighting to flooring, exceeds your expectations for a truly memorable event.",
                                    "Whisk offers a sumptuous wedding catering experience to compliment your wedding with excellent European style cuisine. Our menu is designed with a high-end farm to table approach and uses some of the best ingredients New Zealand has to offer.",
                                ],
                                tags: [
                                    "Transport",
                                    "wedding",
                                    "Styling & Planning",
                                    "Catering",
                                    "Marquee Hire",
                                    "Transport",
                                    "wedding",
                                    "Styling & Planning",
                                    "Catering",
                                    "Marquee Hire",
                                    "Marquee Hire",
                                    "Transport",
                                ]
                            },
                            {
                                id: 2,
                                text: "the main house",
                                images: [
                                    gallery1,
                                    gallery2,
                                    imageMain1,
                                    gallery1,
                                    gallery2,
                                ],
                                name: [
                                    "Flagship Events",
                                    "Whisk",
                                    "Rose's Dining Table",
                                    "One fine day",
                                    "Claire Donaldson Styling",
                                ],
                                detail: [
                                    "As New Zealand’s exclusive supplier of the iconic Sperry Tent, Flagship Events offers a range of premium hire items to elevate your event. The stunning sailcloth canopy of our Sperry Tents offers shelter from both the sun and unpredictable weather, while our team goes above and beyond to ensure every detail, from lighting to flooring, exceeds your expectations for a truly memorable event.",
                                    "Whisk offers a sumptuous wedding catering experience to compliment your wedding with excellent European style cuisine. Our menu is designed with a high-end farm to table approach and uses some of the best ingredients New Zealand has to offer.",
                                    "Rose's Dining Table offers an experience focussed around connection, with her private Supper Clubs & conceptual dining installations. Rose and her team don't just take care of the food, they will also curate a beautiful and vibrant tablescape guaranteed to evoke conversation and encourage connection.",
                                    "We specialize in creating unforgettable moments that perfectly reflect your unique story. From intimate gatherings to grand affairs, our highly experienced team is dedicated to bringing your dreams to life with meticulous attention to detail and creative flair.",
                                    "For all of life's most celebrated occasions, producing visual magic with full event design and production, giving our clients unparalleled event experiences.",
                                ],
                                tags: [
                                    "Transport",
                                    "Styling & Planning",
                                    "Catering",
                                    "Marquee Hire",
                                    "Transport",
                                ]
                            },
                            {
                                id: 3,
                                text: "the stables",
                                images: [
                                    gallery3,
                                    imageMain2,
                                    gallery2,
                                    imageMain1,
                                    gallery1,
                                ],
                                name: [
                                    "Flagship Events",
                                    "Whisk",
                                    "Rose's Dining Table",
                                    "One fine day",
                                    "Claire Donaldson Styling",
                                ],
                                detail: [
                                    "As New Zealand’s exclusive supplier of the iconic Sperry Tent, Flagship Events offers a range of premium hire items to elevate your event. The stunning sailcloth canopy of our Sperry Tents offers shelter from both the sun and unpredictable weather, while our team goes above and beyond to ensure every detail, from lighting to flooring, exceeds your expectations for a truly memorable event.",
                                    "Whisk offers a sumptuous wedding catering experience to compliment your wedding with excellent European style cuisine. Our menu is designed with a high-end farm to table approach and uses some of the best ingredients New Zealand has to offer.",
                                    "Rose's Dining Table offers an experience focussed around connection, with her private Supper Clubs & conceptual dining installations. Rose and her team don't just take care of the food, they will also curate a beautiful and vibrant tablescape guaranteed to evoke conversation and encourage connection.",
                                    "We specialize in creating unforgettable moments that perfectly reflect your unique story. From intimate gatherings to grand affairs, our highly experienced team is dedicated to bringing your dreams to life with meticulous attention to detail and creative flair.",
                                    "For all of life's most celebrated occasions, producing visual magic with full event design and production, giving our clients unparalleled event experiences.",
                                ],
                                tags: [
                                    "Transport",
                                    "Styling & Planning",
                                    "Catering",
                                    "Marquee Hire",
                                    "Transport",
                                ]
                            },
                            {
                                id: 4,
                                text: "the property",
                                images: [
                                    gallery2,
                                    imageMain1,
                                    gallery1,
                                    gallery2,
                                ],
                                name: [
                                    "Flagship Events",
                                    "Whisk",
                                    "Rose's Dining Table",
                                    "One fine day",
                                    "Claire Donaldson Styling",
                                ],
                                detail: [
                                    "As New Zealand’s exclusive supplier of the iconic Sperry Tent, Flagship Events offers a range of premium hire items to elevate your event. The stunning sailcloth canopy of our Sperry Tents offers shelter from both the sun and unpredictable weather, while our team goes above and beyond to ensure every detail, from lighting to flooring, exceeds your expectations for a truly memorable event.",
                                    "Whisk offers a sumptuous wedding catering experience to compliment your wedding with excellent European style cuisine. Our menu is designed with a high-end farm to table approach and uses some of the best ingredients New Zealand has to offer.",
                                    "Rose's Dining Table offers an experience focussed around connection, with her private Supper Clubs & conceptual dining installations. Rose and her team don't just take care of the food, they will also curate a beautiful and vibrant tablescape guaranteed to evoke conversation and encourage connection.",
                                    "We specialize in creating unforgettable moments that perfectly reflect your unique story. From intimate gatherings to grand affairs, our highly experienced team is dedicated to bringing your dreams to life with meticulous attention to detail and creative flair.",
                                    "For all of life's most celebrated occasions, producing visual magic with full event design and production, giving our clients unparalleled event experiences.",
                                ],
                                tags: [
                                    "Transport",
                                    "Styling & Planning",
                                    "Catering",
                                    "Marquee Hire",
                                    "Transport",
                                ]
                            },
                            {
                                id: 5,
                                text: "the beach",
                                images: [
                                    imageMain1,
                                    gallery1,
                                    gallery2,
                                    imageMain1,
                                ],
                                name: [
                                    "Flagship Events",
                                    "Whisk",
                                    "Rose's Dining Table",
                                    "One fine day",
                                    "Claire Donaldson Styling",
                                ],
                                detail: [
                                    "As New Zealand’s exclusive supplier of the iconic Sperry Tent, Flagship Events offers a range of premium hire items to elevate your event. The stunning sailcloth canopy of our Sperry Tents offers shelter from both the sun and unpredictable weather, while our team goes above and beyond to ensure every detail, from lighting to flooring, exceeds your expectations for a truly memorable event.",
                                    "Whisk offers a sumptuous wedding catering experience to compliment your wedding with excellent European style cuisine. Our menu is designed with a high-end farm to table approach and uses some of the best ingredients New Zealand has to offer.",
                                    "Rose's Dining Table offers an experience focussed around connection, with her private Supper Clubs & conceptual dining installations. Rose and her team don't just take care of the food, they will also curate a beautiful and vibrant tablescape guaranteed to evoke conversation and encourage connection.",
                                    "We specialize in creating unforgettable moments that perfectly reflect your unique story. From intimate gatherings to grand affairs, our highly experienced team is dedicated to bringing your dreams to life with meticulous attention to detail and creative flair.",
                                    "For all of life's most celebrated occasions, producing visual magic with full event design and production, giving our clients unparalleled event experiences.",
                                ],
                                tags: [
                                    "Transport",
                                    "Styling & Planning",
                                    "Catering",
                                    "Marquee Hire",
                                    "Transport",
                                ]
                            },
                        ]}
                    />
                </section>
                <section className="container py-5">
                    <h2 className="text-center fw-light">
                        <em>Vendor </em> <span className="fw-normal">FAQs</span>
                    </h2>
                    <p className="text-center">
                        Find the answers to your most pressing wedding questions
                        or get in touch.
                    </p>
                    <DropDown
                        faqItems={[
                            {
                                title: "Do you have a local caterer who can provide breakfast for the “recovery brunch” the day after the wedding?",
                                more: "Yes: We have “The day after” recovery brunch and breakfast options available, subject to availability and must be booked in advance. Please inquire.",
                            },
                            {
                                title: "Is there any accommodation on site for vendors to stay in for the wedding?",
                                more: "Yes. We have a 3 bedroom, 2 bathroom farm cottage available for vendors. Your vendors such as catering, photographers may enjoy staying here to avoid late night travel. Please contact our Estate manager to book this. A small nightly rate applies to cover cleaning and sheets, this is generally paid for by your vendor.",
                            },
                            {
                                title: "Are vendors able to make deliveries to the site or start the marquee set up prior to the bride checking in to Hillbrook?",
                                more: "Yes they are. We can arrange times and storage for items arriving at Hillbrook before the wedding day. Please speak with our estate managers to confirm.",
                            },
                            {
                                title: "Does Hillbrook have any seats or benches for the ceremony lawn or do we need to hire extra for this area?",
                                more: "We provide a limited number of benches, and extra seating can be arranged upon request.",
                            },
                            {
                                title: "Would our dog be allowed on site to be part of the wedding ceremony?",
                                more: "Yes! We welcome pets as part of your special day.",
                            },
                        ]}
                        extraFaqs={[
                            {
                                title: "Can we bring our own caterers?",
                                more: "Yes, we allow external caterers with prior arrangement.",
                            },
                            {
                                title: "Do you offer indoor options in case of bad weather?",
                                more: "Yes, we have a beautiful indoor space available as a backup.",
                            },
                            {
                                title: "Can we bring our own caterers?",
                                more: "Yes, we allow external caterers with prior arrangement.",
                            },
                            {
                                title: "Do you offer indoor options in case of bad weather?",
                                more: "Yes, we have a beautiful indoor space available as a backup.",
                            },
                        ]}
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

            <section></section>
        </div>
    );
}

export default Vendor;
