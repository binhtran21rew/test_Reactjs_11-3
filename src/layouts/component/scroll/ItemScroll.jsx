import React, {useState, useEffect} from 'react'
import { Fade } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.css';
import { keyframes } from "@emotion/react";

import {customFade} from '../../../constant';

import './itemScroll.scss';

function ItemScroll({...props}) {
    const {adress, name, detail, option, className} = props;
    
    return (
        <Fade keyframes={customFade} style={{width: '80%'}}>

            <div className={`wrapper ${className}`}>
                <div className="adress">{adress}</div>
                <div className="name fs-1">The <span>{name}</span></div>
                <div className="detail fs-6">{detail}</div>

                <div className="option fs-5">{option ? option : ""}</div>
            </div>
        </Fade>
    )
}

export default ItemScroll