import React, { Fragment } from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {FontAwesome} from '../../../component/FontAwesome';
import './contentWrapper.scss';
import { imageContent1 } from '../../../constant';

function ContentWrapper({...props}) {
    const {name, detail, option, image, image_name, className, flexEnd, moreImage} = props;

    return (
        <section className={`Main_service ${className}`}>
            <div className={`text ${flexEnd ? 'd-flex flex-row-reverse' : ''}`}>
                {name}
            </div>
            <div className={`content d-flex ${flexEnd ? 'flex-row-reverse' : ''}`}>
                <div className={`body ${flexEnd ? 'ms-5' : ''}`}>
                    <div className="detail fs-6" >{detail}</div>
                    {option ?  
                    <a className="option" href='#'>{option}
                        <FontAwesome icon={faArrowRight} size={'1x'} color="#D4A373"/>
                    </a>  
                    : ''}

                    {moreImage ? 
                        <img src={moreImage} className='more_image' width={`200px`}/>
                    : ""}
                </div>
                <div className="left d-flex">
                {image ? image.map((item, i) => {
                    return(
                        <div key={i} className='ms-2'>
                            <img src={item} className='iamge' width={`100% / ${image.length}`} height={"100%"}/>
                            {image_name ? 
                                <span><div className="cirle"></div>{image_name[i]}</span>
                            : ''}
                          
                        </div>
                    )
                }) : ''}
            </div>
            </div>

        </section>
    )
}

export default ContentWrapper