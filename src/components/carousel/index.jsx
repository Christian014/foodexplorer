import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Dish } from '../dishes';

export function Carousel (){

  return (

    <Swiper
      spaceBetween={16}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Dish />
      </SwiperSlide>
      
      <SwiperSlide>
        <Dish />
      </SwiperSlide>

      <SwiperSlide>
        <Dish />
      </SwiperSlide>

      <SwiperSlide>
        <Dish />
      </SwiperSlide>

      <SwiperSlide>
        <Dish />
      </SwiperSlide>

      <SwiperSlide>
        <Dish />
      </SwiperSlide>
      
    </Swiper>

  );
};