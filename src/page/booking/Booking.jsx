import React from "react";

import "./booking.scss";

import { gallery1 } from "../../constant";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";
import BookingFormPrice from "../../layouts/component/bookingFormPrice/BookingFormPrice";
import ContactForm from "../../layouts/component/contactForm/ContactForm";
import Contact from "../../layouts/component/contact/Contact";

function Booking() {
    return (
        <div className="Booking">
            <HeroImage image={gallery1} title="stay with us" />

            <section>
                <ContentWrapper
                    name="Hillbrook Rates"
                    detail="
          
Escape to Hillbrook Estate during the low season from April 1st to October 30th (minimum 2-night stay) or the high season 1st November to 31st March (minimum 3-night stay).
Enjoy exclusive access to our Main House. It's the perfect retreat for your getaway.
            "
                    textHighlight={"Hillbrook"}
                />
            </section>

            <section className="booking_wrapper">
                <BookingFormPrice
                    name="Main House"
                    to="0"
                    from="16"
                    dataTo1="Apr"
                    dataFrom1="Oct"
                    price1="4000"
                    dataTo2="Apr"
                    dataFrom2="Oct"
                    price2="4000"
                    listDetail={[
                        "Main House with 7 bedrooms",
                        "Exclusive use of the complete property",
                        "Private beach walking access",
                        "Breakfast provisions provided",
                    ]}
                    detail="Main House can accommodate up to 16 guests with 7 bedrooms. An Extra 4 guests can be accommodated in the stables. ($500 per stable per night)"
                />
                <BookingFormPrice
                    name="Main House & 1 Stable"
                    to="0"
                    from="16"
                    dataTo1="Apr"
                    dataFrom1="Oct"
                    price1="4000"
                    dataTo2="Apr"
                    dataFrom2="Oct"
                    price2="4000"
                    listDetail={[
                        "Main House with 7 bedrooms",
                        "Exclusive use of the complete property",
                        "Private beach walking access",
                        "Breakfast provisions provided",
                    ]}
                    detail="Main House can accommodate up to 16 guests with 7 bedrooms. An Extra 4 guests can be accommodated in the stables. ($500 per stable per night)"
                />
                <BookingFormPrice
                    name="Main House & 2 Stables"
                    to="0"
                    from="16"
                    dataTo1="Apr"
                    dataFrom1="Oct"
                    price1="4000"
                    dataTo2="Apr"
                    dataFrom2="Oct"
                    price2="4000"
                    listDetail={[
                        "Main House with 7 bedrooms",
                        "Exclusive use of the complete property",
                        "Private beach walking access",
                        "Breakfast provisions provided",
                    ]}
                    detail="Main House can accommodate up to 16 guests with 7 bedrooms. An Extra 4 guests can be accommodated in the stables. ($500 per stable per night)"
                />
            </section>

            <section>
                <ContactForm
                    topTitle={[
                        "Book your Hillbrook escape",
                        "Get in touch now, and we'll come back to you shortly.",
                        "Or you can check our availability first, here.",
                        "If you’d like to enquire about weddings, visit this page.",
                    ]}
                    className="d-flex justify-content-center flex-column"
                    classNameForm="w-60"
                />
            </section>

            <Contact />

        </div>
    );
}

export default Booking;
