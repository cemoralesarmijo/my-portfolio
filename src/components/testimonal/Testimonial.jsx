import React from 'react';
import "./testimonial.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const testimonialData = require('./data')

const Testimonial = () => {
    return (
        <section className="section" id="testimonial">
            <div className="custom-section-title">
                <i className='bx bxs-quote-alt-left text'></i>
                <span className="text">Testimonials</span>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    testimonialData.map( data  => {
                        return <SwiperSlide>
                            <div className="swiper-client-msg">
                                <p>
                                    {data.comment}
                                </p>
                            </div>
                            <div className="swiper-client-data grid grid-two-column">
                                <figure>
                                    <img
                                        src={data.image}
                                        className="slide-img"
                                        alt="client review"/>
                                </figure>
                                <div className="client-data-details">
                                    <p className="coworker-name">{data.name}</p>
                                    <p>{data.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    })

                }
            </Swiper>
        </section>
    );
};

export default Testimonial;