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
            <h2 className="section__title">Testimonials</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
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
                                    <p>{data.name}</p>
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