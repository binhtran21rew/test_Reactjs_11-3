import React, { useState } from "react";

import "./contact.scss";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import { imageMain3 } from "../../constant";
import ContactForm from "../../layouts/component/contactForm/ContactForm";
function Contact() {

    return (
        <div className="Contact">
            <section>
                <HeroImage image={imageMain3} title="contact us" />
            </section>
            <section>
                <div className="title">
                    <span>Got questions?</span>
                    <span>We’re here to help</span>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="contactInfo">
                        <h1>
                            <i>Contact</i> Us
                        </h1>
                        <p>
                            Get in touch now, let's make it happen. We're here
                            to help.
                        </p>
                        <p>
                            If you'd like to enquire about weddings, click{" "}
                            <a href="#">here</a>.
                        </p>

                        <p>
                            <strong>Ph:</strong> +64 210 297 7104
                        </p>
                        <p>
                            <strong>Email:</strong> stay@hillbrookestate.co.nz
                        </p>
                        <p>
                            <strong>WhatsApp:</strong> +64 210 297 7104
                        </p>

                        <h3>
                            <i>Address</i>
                        </h3>
                        <p>
                            162F Whitipirorua Road,
                            <br />
                            Whangamata, 3691
                            <br />
                            New Zealand
                        </p>
                    </div>
                    <ContactForm />

                </div>
            </section>

            <section>
                <div className="map">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1336.547922767957!2d175.8807278590331!3d-37.17968866117714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d7274523ea669ad%3A0xf337b22c97837f47!2sHillbrook%20Farm%20%26%20Estate!5e0!3m2!1sen!2snz!4v1741693886160!5m2!1sen!2snz"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default Contact;
