import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import slide_1 from './assets/sl-1.jpg';
import slide_2 from './assets/sl-2.jpg';
import slide_3 from './assets/sl-3.jpg';
import logo from '../../../assets/Sg.ico';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel() {
    return (
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={logo} alt="logo" height="300px" width="300px" /></SwiperSlide>
            <SwiperSlide><img src={slide_3} alt="logo" height="300px" width="300px" /></SwiperSlide>
            <SwiperSlide><img src={slide_2} alt="logo" height="300px" width="300px" /></SwiperSlide>

        </Swiper>
    )
}
