import React, { Fragment } from "react";

import "./enquiries.scss";
import { imageMain3 } from "../../constant";
import HeroImage from "../../layouts/component/heroImage/HeroImage";
import ContactForm from "../../layouts/component/contactForm/ContactForm";

function Enquiries() {
    return (
        <div className="Enquiries">
            <HeroImage image={imageMain3} title={"Enquiries"} />
            <section>
                <div className="Contactcontainer">
                    <div className="contactInfo">
                        <h1>
                            <i>Wedding</i> Enquiry
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

                        <h1>
                            <i>Address</i>
                        </h1>
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
                <Fragment/>
            </section>
        </div>
    );
}

export default Enquiries;
