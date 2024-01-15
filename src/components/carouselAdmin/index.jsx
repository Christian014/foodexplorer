import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { DishAdmin } from '../dishesAdmin';

export function CarouselAdmin (){

  return (

    <Swiper
      spaceBetween={16}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <DishAdmin />
      </SwiperSlide>
      
      <SwiperSlide>
        <DishAdmin />
      </SwiperSlide>

      <SwiperSlide>
        <DishAdmin />
      </SwiperSlide>

      <SwiperSlide>
        <DishAdmin />
      </SwiperSlide>

      <SwiperSlide>
        <DishAdmin />
      </SwiperSlide>

      <SwiperSlide>
        <DishAdmin />
      </SwiperSlide>
      
    </Swiper>

  );
};