import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesome} from '../../component/FontAwesome';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import './footer.scss';

import { logoName, linkTheHouse, linkTheFarm, linkContact, linkBookNow, linkGallery, linkActivities, linkCuratedServices } from '../../constant';
function Footer() {
  return (
    <div className="Footer">
      <header>
        <div className="content">
            <h1 className="header">An experience you'll <i>never forget</i></h1>
            <Link to={linkBookNow} className="button">Book Now 
            <FontAwesome icon={faArrowRight} size={'1x'} color="red"/>

            </Link>
        </div>
        <nav className="nav_menu">
            <h5>The House</h5>
            <Link to={linkTheFarm}>The Farm</Link>
            <Link to={linkGallery}>Gallery</Link>
            <Link to={linkCuratedServices}>Curated Services</Link>
            <Link to={linkActivities}>Activities</Link>
            <Link to={linkContact}>Contact</Link>
            <Link to={linkBookNow}>Booking</Link>
            <h5>Weddings</h5>
            <Link to={'#'}>Vendors</Link>
            <Link to={'#'}>Enquiries</Link>
            <Link to={'#'}>Gallery</Link>
            <div className="social_icons">
                <FontAwesome icon={faInstagram} />
                <FontAwesome icon={faFacebook} />
            </div>
        </nav>
      </header>

      <footer className="footer">
        <img src={logoName} alt="logoName" width={'95%'} height={'100%'}/>
        <Link to={'#'}>Terms</Link>
        <Link to={'#'}>Privacy Policy</Link>
      </footer>



    </div>
  )
}

export default Footer