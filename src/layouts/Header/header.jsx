import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { logoImg} from '../../constant';
import './style.scss';
import './header';

const Header = () => {

  return (
    <div className='Header'>
        <div className='Header_top'>
            <img src={logoImg} width={50} height={50}/>
            <div className="Header_top_link">
              <a href="" className='header_top_link'>the house</a>
              <a href="" className='header_top_link'>the farm</a>
              <a href="" className='header_top_link'>contact</a>
              <a href="" className='header_top_link'>book now</a>
            </div>
            <h1 className='Header_top_text'>the house</h1>
        </div>
    </div>
  )
}

export default Header
