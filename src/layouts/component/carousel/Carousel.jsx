import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {FontAwesome} from '../../../component/FontAwesome';


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.scss';

function Carousel({...props}) {
    const { image } = props;
    
    return (
        <div className="Carousel">
            <div className="button">
                <FontAwesome icon={faArrowLeft} color="#D4A373" className="next-btn"/>
                <FontAwesome icon={faArrowRight} color="#D4A373" className="prev-btn"/>
            </div>

            <Swiper
            modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                >
                {image.map((data, i) => {
                    return (
                        <div key={i}>
                            <SwiperSlide><img src={data} alt="Slide 1" className='image' /></SwiperSlide>
                        </div>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Carousel