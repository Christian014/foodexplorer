import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from './style';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";

import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import { DishAdmin } from '../dishesAdmin';

export function CarouselAdmin({ category, searchValue }) {
  const [filteredDishes, setFilteredDishes] = useState([]);

  console.log(filteredDishes)

  useEffect(() => {
    async function fetchDataDishes() {
      try {
        const response = await api.get("/dish");
        let filteredByCategory = response.data.filter(dish => dish.category === category);

        if (searchValue) {
          filteredByCategory = filteredByCategory.filter(dish => dish.name.toLowerCase().includes(searchValue.toLowerCase()));
        }

        setFilteredDishes(filteredByCategory);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDataDishes();
  }, [category, searchValue]);

  return (
    <Container>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        grabCursor={true}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
            
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }}
      >
        {filteredDishes.map(dish => (
          <SwiperSlide key={dish.id}>
            <DishAdmin
              id={dish.id}
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
}
