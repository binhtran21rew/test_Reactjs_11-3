import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './contact.scss';

import {FontAwesome} from '../../../component/FontAwesome';



import { imageContent1} from '../../../constant';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Example: San Francisco
  lng: -122.4194,
};

function Contact() {
  return (
    <div className='Contaier'>
      <div className="content-section">
         <h2>
           Where to <i>find us?</i>
         </h2>
         <p>
           With a helipad near the main house and a 500m grass landing field for fixed-wing aircraft.
           You’re only a short distance away from domestic airports.
         </p>
         <p>Or enjoy a spectacular North Island road trip:</p>
         <ul>
           <li>Auckland: 2hrs</li>
           <li>Hamilton: 2hrs</li>
           <li>Whangamata: 10mins</li>
         </ul>
         <h3>CONTACT US 
            <FontAwesome icon={faArrowRight} size={'1x'} color="#D4A373"/>

         </h3>
         <div className="map">
           <iframe
             title="Google Maps"
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1336.547922767957!2d175.8807278590331!3d-37.17968866117714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d7274523ea669ad%3A0xf337b22c97837f47!2sHillbrook%20Farm%20%26%20Estate!5e0!3m2!1sen!2snz!4v1741693886160!5m2!1sen!2snz"
             width="100%"
             height="250"
             allowFullScreen
             loading="lazy"
           ></iframe>
         </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="image-section"></div>

    // </div>
  )
}

export default Contact