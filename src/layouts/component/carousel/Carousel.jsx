import React, { Fragment, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {FontAwesome} from '../../../component/FontAwesome';


import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.scss';

function Carousel({...props}) {
    const { image, isImage = false, content, slidesPerView, selectedIndex } = props;
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(selectedIndex);
        }
    }, [selectedIndex]);
    return (
        <div className="Carousel">
            {isImage ? (
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    allowTouchMove={false}
                    spaceBetween={image.length * 10}
                    slidesPerView={image.length}
                    className='customSwipper'
                    >
                    {image.map((data, i) => {
                        return (
                            <div key={i}>
                                <SwiperSlide className='customSlide'>
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
                        ref={swiperRef}
                        spaceBetween={50}
                        slidesPerView={slidesPerView ? slidesPerView : 2}
                        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                        >
                        {image.map((data, i) => {
                            return (
                                <div key={i}>
                                    <SwiperSlide><img src={data} alt="Slide 1" className='image' style={{objectFit: slidesPerView && 'contain'}}/></SwiperSlide>
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