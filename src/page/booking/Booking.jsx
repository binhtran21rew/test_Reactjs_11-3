import React from "react";

import "./booking.scss";

import { gallery1 } from "../../constant";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import ContentWrapper from "../../layouts/component/contentWrapper/ContentWrapper";

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
                    option="VIEW ALL SERVICES"
                    textHighlight={["tailored", "Hillbrook"]}
                />
            </section>

            <section className="booking_wrapper">
                
                <div className="Booking_form">
                    <div className="Booking_title">
                        Main House
                    </div>
                    <div className="Booking_price">
                        <div className="Booking_left">
                            <span className="name">GUESTS</span>
                            <span className="seats">0 - 16</span>
                        </div>
                        .
                        <div className="Booking_right">
                            <span className="Booking_top">
                                <span className="date">
                                    <p>Apr - Oct</p>
                                    <p>PRICE (p/n)</p>
                                </span>
                                <span className="price">$4000</span>
                            </span>
                            <span className="Booking_top">
                                <span className="date">
                                        <p>Nov - Mar</p>
                                        <p>PRICE (p/n)</p>
                                    </span>
                                <span className="price">$4000</span>
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li>Main House with 7 bedrooms</li>
                        <li>Exclusive use of the complete property</li>
                        <li>Private beach walking access</li>
                        <li>Private beach walking access</li>
                    </ul>

                    <div className="Booking_bottom"></div>
                </div>
                <div className="Booking_form">
                    <div className="Booking_title">
                        Main House
                    </div>
                    <div className="Booking_price">
                        <div className="Booking_left">
                            <span className="name">GUESTS</span>
                            <span className="seats">0 - 16</span>
                        </div>
                        .
                        <div className="Booking_right">
                            <span className="Booking_top">
                                <span className="date">
                                    <p>Apr - Oct</p>
                                    <p>PRICE (p/n)</p>
                                </span>
                                <span className="price">$4000</span>
                            </span>
                            <span className="Booking_top">
                                <span className="date">
                                        <p>Nov - Mar</p>
                                        <p>PRICE (p/n)</p>
                                    </span>
                                <span className="price">$4000</span>
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li>Main House with 7 bedrooms</li>
                        <li>Exclusive use of the complete property</li>
                        <li>Private beach walking access</li>
                        <li>Private beach walking access</li>
                    </ul>

                    <div className="Booking_bottom"></div>
                </div>
                <div className="Booking_form">
                    <div className="Booking_title">
                        Main House
                    </div>
                    <div className="Booking_price">
                        <div className="Booking_left">
                            <span className="name">GUESTS</span>
                            <span className="seats">0 - 16</span>
                        </div>
                        .
                        <div className="Booking_right">
                            <span className="Booking_top">
                                <span className="date">
                                    <p>Apr - Oct</p>
                                    <p>PRICE (p/n)</p>
                                </span>
                                <span className="price">$4000</span>
                            </span>
                            <span className="Booking_top">
                                <span className="date">
                                        <p>Nov - Mar</p>
                                        <p>PRICE (p/n)</p>
                                    </span>
                                <span className="price">$4000</span>
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li>Main House with 7 bedrooms</li>
                        <li>Exclusive use of the complete property</li>
                        <li>Private beach walking access</li>
                        <li>Private beach walking access</li>
                    </ul>

                    <div className="Booking_bottom"></div>
                </div>
            </section>
        </div>
    );
}

export default Booking;
