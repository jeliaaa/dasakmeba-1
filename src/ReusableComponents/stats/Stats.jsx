import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import './stats.scss'
const Stats = () => {
    return (
        <Swiper
            modules={[Autoplay, Mousewheel, Keyboard]}
            cssMode={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={4}
            spaceBetween={100}
            className="owl"
        >
            <SwiperSlide>
                <h1>120</h1>
                <h3>კომპანია</h3>
            </SwiperSlide>
            <SwiperSlide>
                <h1>1200</h1>
                <h3>დასაქმებული</h3>
            </SwiperSlide>
            <SwiperSlide>
                <h1>3521</h1>
                <h3>მიიღეს რჩევა</h3>
            </SwiperSlide>
            <SwiperSlide>
                <h1>1178</h1>
                <h3>ორგანიზაცია</h3>
            </SwiperSlide>
            <SwiperSlide>
                <h1>3010</h1>
                <h3>მაძიებელი</h3>
            </SwiperSlide>
        </Swiper>
    )
}

export default Stats