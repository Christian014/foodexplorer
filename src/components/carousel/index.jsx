import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from './style';

import { Dish } from '../dishes';





export function Carousel() {

  return (

    <Container>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          800: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          }}}
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
    </Container>

  );
};