import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from './style';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";

import { api } from "../../../services/api"
import { useState, useEffect } from "react";

import { DishAdmin } from '../dishesAdmin';

export function CarouselAdmin (){

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
     async function fetchDataDishes (){

        try{

          const response = await api.get("/dish");
          const dishes = response.data

          dishes.forEach(dish => {
            const { id, image, name, price, description } = dish;
            console.log(id, image, name, price, description);

            setDishes(dishes);
          })

          

        }catch(error){() => {
          console.error(error)
        }}
    }
    fetchDataDishes()
  }, [])

  return (

    <Container>
      <Swiper
      spaceBetween={16}
      slidesPerView={2}
      
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



        {dishes.map(dish => (
          <SwiperSlide key={dish.id}>
            <DishAdmin
              image={dish.image}
              name={dish.name}
              price={dish.price}
              description={dish.description}
            />
          </SwiperSlide>
        ))}
    
      

      
    </Swiper>
    </Container>

  );
};