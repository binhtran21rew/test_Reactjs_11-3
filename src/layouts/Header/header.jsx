import React from 'react'
import {Link} from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { logoImg, linkTheHouse, linkTheFarm, linkContact, linkBookNow} from '../../constant';
import './style.scss';


const Header = () => {

  return (
    <div className='Header'>
        <div className='Header_top'>
          <Link to={'/'}>
            <img src={logoImg} width={50} height={50}/>
          
          </Link>
            <div className="Header_top_link">
              <Link to={linkTheHouse} className='header_top_link'>the house</Link>
              <Link to={linkTheFarm} className='header_top_link'>the farm</Link>
              <Link to={linkContact} className='header_top_link'>contact</Link>
              <Link to={linkBookNow} className='header_top_link'>book now</Link>
            </div>
            <h1 className='Header_top_text'>the house</h1>
        </div>
    </div>
  )
}

export default Header
