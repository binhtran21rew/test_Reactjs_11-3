import React, {useState, useEffect, useRef, Fragment} from 'react'
import {Link, Links} from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


import {FontAwesome} from '../../component/FontAwesome';
import { logoImg, linkTheHouse, linkTheFarm, linkContact, linkBookNow, logoName} from '../../constant';
import './style.scss';
import { Nav } from 'react-bootstrap';


const Header = ({...props}) => {
  const {textPosition, imageHeader} = props;
  const headerRef = useRef(null);
  const [scrollUp, setScrollUp] = useState(false);
  const [showNav, setShowNav] = useState(false);

  let lastScrollTop = 0;

  useEffect(() => {
    const shrinkHeader = () => {
      const position1 = document.body.scrollTop;
      const position2 = document.documentElement.scrollTop;
      if( (position1 > 600) || (position2 >  600)){
        headerRef.current.classList.remove('shrink')
      } else{        
        headerRef.current.classList.add('shrink');        

      }
    }

    const handleScroll = () => {
      const position1 = document.body.scrollTop;
      const position2 = document.documentElement.scrollTop;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop && ((position1 > 600) || (position2 >  600))) {
        headerRef.current.classList.add('showMenu')
        setScrollUp(true);
      } else {
        headerRef.current.classList.remove('showMenu');
        setScrollUp(false);
      }

      lastScrollTop = scrollTop;
      
    };

    
    window.addEventListener('scroll', shrinkHeader);
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener('scroll', shrinkHeader);
        window.removeEventListener("scroll", handleScroll);
        setScrollUp(false);
    }
}, []);

// const [isClicked, setIsClicked] = useState(false);
  return (
    <div ref={headerRef} className='Header shrink'>
        {/* <motion.div
          layout
          data-isOpen={isClicked}
          initial={{ borderRadius: 20 }}
          className="Header_top"
          onClick={() => setIsClicked(!isClicked)}
        >
        </motion.div> */}
        <div className={`Header_top  ${showNav ?  '' : 'nav'}`}>
          <Link to={'/'} className='Header_logo'>
            <img src={logoImg} width={50} height={50}/>
          </Link>
          {scrollUp ? (
                <NavTop showNav={showNav} setShowNav={setShowNav}/>
              ) : (
            <div className="Header_top_link">
              <Link to={linkTheHouse} className='header_top_link'>the house</Link>
              <Link to={linkTheFarm} className='header_top_link'>the farm</Link>
              <Link to={linkContact} className='header_top_link'>contact</Link>
              <Link to={linkBookNow} className='header_top_link'>book now</Link>
            </div>
            
          )}

        </div>
    </div>
  )
}

const NavTop = ({...props}) => {
  const {showNav, setShowNav} = props;
  
  const handleShowNav = () => {
    setShowNav(false);
    
  }

  const handleCloseNav = () => {
    setShowNav(true)
  }

  return (
    <div className="NavTop">

      <div className="top">
        <div className="top_wrapper">
          <Link to={"/#"} className="link">Book now</Link>
          {showNav ? (
            <FontAwesome onClick={handleShowNav} icon={faCircleXmark} color="#000" className="icon"/>
          ) : (
            <FontAwesome onClick={handleCloseNav} icon={faBars} color="#000" className="icon"/>
          )}
        </div>
      </div>

      <div className={`NavTop_wrapper ${showNav ? 'show' : ''}`}>
        <Link to={'/'} className='logo'>
            <img src={logoImg} width={50} height={50}/>
        </Link>
        <div className="Nav_link">
            <Link to={linkTheHouse} className='Nav_link_item'>the house</Link>
            <Link to={linkTheFarm} className='Nav_link_item'>the farm</Link>
            <Link to={linkContact} className='Nav_link_item'>contact</Link>
            <Link to={linkBookNow} className='Nav_link_item'>book now</Link>
        </div>
        <div className="bottom">
          <img src={logoName} alt="logoName" width={'95%'} height={'100%'}/>
        </div>

      </div>
    </div>
  )
}

export default Header
