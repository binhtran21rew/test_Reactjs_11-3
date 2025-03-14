import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {FontAwesome} from '../../../component/FontAwesome';


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.scss';

function Carousel({...props}) {
    const { image, isImage = false, content } = props;
    
    return (
        <div className="Carousel">


            {isImage ? (
                <Swiper
                modules={[Navigation]}
                    allowTouchMove={false}
                    spaceBetween={image.length * 10}
                    slidesPerView={image.length}
                    >
                    {image.map((data, i) => {
                        return (
                            <div key={i} className="binh">
                                <SwiperSlide>
                                    <img src={data} alt="Slide 1" className='image' />
                                    <div className="carousel_content">
                                        <div className="top">
                                        {content[i]?.title}

                                        </div>
                                        <div className={`body ${!content[i].title && 'd-flex align-items-center'}`}>
                                            {!content[i].title && (
                                              <span className="cirle"></span>

                                            )}
                                            {content[i]?.detail}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })}
                </Swiper>
            ) : (
                <Fragment>
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
                </Fragment>
                
            )}

        </div>
    )
}

export default Carousel