import React, { Fragment } from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {FontAwesome} from '../../../component/FontAwesome';
import './contentWrapper.scss';
import { imageContent1 } from '../../../constant';

import './contentWrapper.scss';

function ContentWrapper({...props}) {
    const {name, detail, option, image, image_name, className, moreImage, flexEnd, rotate, widthImg, textPosition, textHighlight} = props;

    return (
        <section className={`Main_service ${className}`}>

            <div className={`content d-flex ${flexEnd ? 'flex-row-reverse' : ''}`}>
                <div className={`body ${flexEnd ? 'ms-5' : ''}  ${rotate ? 'rotate' : ''}`}>
                    <CustomContent 
                        text={name}
                        detail={detail}
                        option={option}
                        image={image}
                        moreImage={moreImage}
                        textHighlight={textHighlight}
                        textPosition={textPosition}
                    />
                    <div style={ flexEnd || rotate ? {textAlign: 'end'} : {textAlign: 'start'}}>
                        {moreImage ? 
                            <img src={moreImage}  width={`${widthImg ? '300px' : '200px'} `} />
                        : ""}
                    </div>
                </div>
                <div className="left d-flex ">
                {image ? image.map((item, i) => {
                    return(
                        <div key={i} className={`ms-2 ${flexEnd ? 'text-start' : 'text-end'}`}>
                            <img src={item} className='iamge' width={` ${ widthImg ? widthImg : '100% '}`} height={"100%"}/>
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


const CustomContent = ({...props}) => {
    const {text, detail, option,  image, moreImage, textHighlight, textPosition = false} = props;

    if(textHighlight) console.log(textHighlight, text);
    
    
    return(
        <div className={`${image || moreImage ? '' : 'contentWrapper'}`}>
            <div className={`text`}>
                <div className="text_wrapper">
                    {
                        textHighlight ? (
                            text.split(' ').map((part, id) => {
                                return(
                                    
                                    textHighlight.includes(part)? (
                                        <span key={id} style={{ fontWeight: "bold", fontStyle: 'italic', marginRight: 10, height: 'auto' }}>
                                        {part}
                                        </span>
                                    ): (
                                        <span style={{marginRight: 10}}>{part}</span>
                                    )
                                    
                                )
                            }

                            )
                        ) : (text) 
                    }

                </div>

            </div>
            <div className={`detail ${textPosition ? 'd-flex justify-content-end':  'd-flex justify-content-start'}`} >
                    <span>
                        {detail}

                    </span>
            </div>
            {option ?  
            <div className={`option  ${textPosition ? 'd-flex justify-content-end':  'd-flex justify-content-start'}`}>
                <a href='#'>{option}
                    <FontAwesome icon={faArrowRight} size={'1x'} color="#D4A373"/>
                </a>  

            </div>
            : ''}
        </div>
    )
}

export default ContentWrapper