import React, {useState, useEffect} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesome } from "../../../component/FontAwesome";

import './contactForm.scss'

function ContactForm({...props}) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        recaptchaValue: null,
    });
    const [sendForm, setSendForm] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRecaptcha = (value) => {
        setFormData({ ...formData, recaptchaValue: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.recaptchaValue) {
            alert("Please complete the reCAPTCHA!");
            return;
        }

        setSendForm(true);
    };
    return (
        <div className={`ContactForm ${props.className} ${props.topTitle && 'align-items-center'}`}>

            <div className={`ContactForm_title  ${props.topTitle && 'text-center mb-50'}`}>
                {
                    props.topTitle?.map((item, id) => {
                        return (
                            <span key={id}>{item}</span>
                                
                        )
                    })
                }
            </div>
            {sendForm ? (
                <div className="sendForm">
                    Thank you! Your submission has been received!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={`${props.classNameForm}`}>
                    <div className="formGroup">
                        <div className="inputGroup">
                            <label>First Name*</label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputGroup">
                            <label>Last Name*</label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="formGroup">
                        <div className="inputGroup">
                            <label>Email*</label>
                            <input
                                type="email"
                                name="email"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="inputGroup">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="formGroup">
                        <label>Message</label>
                        <textarea
                            name="message"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="recaptcha">
                        <ReCAPTCHA
                            sitekey="6LcG7_IqAAAAAPlMkHRAAXzSYcg0cVzqenZhN1J3"
                            onChange={handleRecaptcha}
                        />
                    </div>

                    <button type="submit" className="submitBtn">
                        SUBMIT
                        <FontAwesome
                            icon={faArrowRight}
                            size={"1x"}
                            color="#D4A373"
                        />
                    </button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
