import React from 'react'

import './heroImage.scss';

function HeroImage({...props}) {
    const {image, title} = props;

    return (
        <div className='HeroImage' style={{background: `url(${image}) no-repeat center center/cover`}}>
            <div className="HeroImage_title">{title}</div>
        </div>
    )
}

export default HeroImage