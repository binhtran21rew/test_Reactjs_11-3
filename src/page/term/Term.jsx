import React from "react";
import FormContent from "../../layouts/component/formContent/FormContent";

import "./term.scss";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import ImageSlide from "../../layouts/component/imageSlide/ImageSlide";
import { imageMain3 } from "../../constant";
function Term() {
    return (
        <div className="Term">
            <div className="container">
                <FormContent
                    title="Terms of Service"
                    listName={[
                        "Payment terms",
                        "Cancellation policy",
                        "Changes to a booking",
                    ]}
                    listDetail={[
                        [
                            "A deposit of 20% of the total is required to secure your reservation. The balance is due 30 days prior to your arrival.",
                            "All rates advertised are displayed in NZD including GST of 15%.",
                            "*Surcharge will be applied if additional rooms are used, over and above the paid total number of guest per room occupancy. Property must be advised at least 24 hours before check-in should the booking need to add more guests.",
                        ],
                        [
                            "Cancellation before 30 days prior to check-in date: Deposit is refundable less 20% cancellation fee.",
                            "Cancellation within 30 days of arrival date: 50% deposit is refundable.",
                            "Cancellation within 7 days prior to arrival date: 100% of the booking price is charged.",
                        ],
                        [
                            "Date changes are permitted up to 30 days before check-in date. A reservation can be changed within 1 year of the date the reservation was made. Date changes are subject to availability. An amendment fee of $200 is charged to change the date.",
                            "Date changes are subject to our high & low season rate plan. Any variation in rates will be chargeable to the guest. Should your requested dates not be available, your deposit will be held as a credit. To be used subject to availability within 1 year of the original booking date. A change to a wedding package or guest booking can only be made once.",
                        ],
                    ]}
                />

            </div>
                <ImageSlide
                    image={imageMain3}
                    text="Relax or explore your very own personal playground"
                    textHightlight="personal playground"
                />
        </div>
    );
}

export default Term;
