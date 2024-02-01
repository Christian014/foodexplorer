import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from './style';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";

import { DishAdmin } from '../dishesAdmin';

export function CarouselAdmin (){

  return (

    <Container>
      <Swiper
      spaceBetween={16}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      grabCursor={true}
        modules={[Navigation]}
        navigation={true}
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
    </Container>

  );
};