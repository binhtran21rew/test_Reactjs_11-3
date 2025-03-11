import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './carousel.scss';

function Carousel({...props}) {
    const { image } = props;
    
    return (
        <div className="Carousel">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                {image.map((data, i) => {
                    return (
                        <div key={i}>
                            <SwiperSlide><img src={data} alt="Slide 1" /></SwiperSlide>
                        </div>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Carousel