import React, { Fragment } from 'react'

import './contentWrapper.scss';

function ContentWrapper({...props}) {
    const {name, detail, option, image, image_name, className} = props;

    return (
        <section className={`Main_service ${className}`}>
            <div className="text">
                {name}
            </div>
            <div className="content d-flex">
                <div className="body">
                    <div className="detail fs-6">{detail}</div>
                   
                    {option ?  <a className="option" href='#'>{option}</a>  : ''}
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