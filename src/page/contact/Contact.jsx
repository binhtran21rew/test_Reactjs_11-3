import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {FontAwesome} from '../../component/FontAwesome';
import './contact.scss';
function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        recaptchaValue: null
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
        console.log("Form Submitted:", formData);
        setSendForm(true);
        
      };
  return (
    <div className="Contact">
        <div className="title">
            <span>
                Got questions?

            </span>
            <span>
                We’re here to help
            </span>
        </div>

        <div className='container'>
            <div className='contactInfo'>
                <h1><i>Contact</i> Us</h1>
                <p>Get in touch now, let's make it happen. We're here to help.</p>
                <p>If you'd like to enquire about weddings, click <a href="#">here</a>.</p>

                <p><strong>Ph:</strong> +64 210 297 7104</p>
                <p><strong>Email:</strong> stay@hillbrookestate.co.nz</p>
                <p><strong>WhatsApp:</strong> +64 210 297 7104</p>

                <h3><i>Address</i></h3>
                <p>162F Whitipirorua Road,<br />Whangamata, 3691<br />New Zealand</p>
            </div>

            
            <div className='contactForm'>
                {sendForm ? (
                    <div className="sendForm">
                          Thank you! Your submission has been received!

                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className='formGroup'>
                            <div className='inputGroup'>
                            <label>First Name*</label>
                            <input type="text" name="firstName" required onChange={handleChange} />
                            </div>
                            <div className='inputGroup'>
                            <label>Last Name*</label>
                            <input type="text" name="lastName" required onChange={handleChange} />
                            </div>
                        </div>
        
                        <div className='formGroup'>
                            <div className='inputGroup'>
                            <label>Email*</label>
                            <input type="email" name="email" required onChange={handleChange} />
                            </div>
                            <div className='inputGroup'>
                            <label>Phone</label>
                            <input type="text" name="phone" onChange={handleChange} />
                            </div>
                        </div>
        
                        <div className='formGroup'>
                            <label>Message</label>
                            <textarea name="message" required onChange={handleChange}></textarea>
                        </div>
        
                        <div className='recaptcha'>
                            <ReCAPTCHA sitekey="6LcG7_IqAAAAAPlMkHRAAXzSYcg0cVzqenZhN1J3" onChange={handleRecaptcha} />
                        </div>
        
                        <button type="submit" className='submitBtn'>SUBMIT 
                            <FontAwesome icon={faArrowRight} size={'1x'} color="#D4A373"/>
                        </button>
                    </form>
                )}
               
            </div>
        </div>

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

    </div>
  )
}

export default Contact