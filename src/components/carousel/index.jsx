import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from './style';

import { Dish } from '../dishes';

import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation";
import { useEffect } from 'react';
import { api } from '../../services/api';
import { useState } from 'react';



export function Carousel({ category, searchValue, setIdPedido, setIds, incluirPedidoCarousel, setQtdRequestDish }) {

  const [filteredDishes, setFilteredDishes] = useState([]);
  
  useEffect(() => {
    async function fetchDataDishes() {
      
      try {
        const response = await api.get("/dish");
        let filteredByCategory = response.data.filter(dish => dish.category === category);
        
        if (searchValue) {
          filteredByCategory = filteredByCategory.filter(dish => 
              dish.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              (Array.isArray(dish.ingredients.split(',')) && dish.ingredients.split(',').some(ingredient => ingredient.trim().toLowerCase().includes(searchValue.toLowerCase())))
          );
      }

        setFilteredDishes(filteredByCategory);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDataDishes();
  }, [category, searchValue]);

  const handleSelectDish = (id) => {
    setIdPedido(id);
    setIds(prevIds => [...prevIds, id]);
    setQtdRequestDish()
  };

  return (

    <Container>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        
        
        grabCursor={true}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          300:{
            slidesPerView: 1,
          },

          500:{
            slidesPerView: 2,
            
          },

          750:{
            slidesPerView: 3,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }}}
      >
        {filteredDishes.map(dish => (
          <SwiperSlide key={dish.id}>
            <Dish
              id={dish.id}
              image={dish.image}
              name={dish.name}
              price={dish.price}
              description={dish.description}
              setIds={setIds}
              setIdPedido={setIdPedido}
              incluirPedidoCarousel={incluirPedidoCarousel}
              setQtdRequestDish={setQtdRequestDish}
              onSelectDish={handleSelectDish}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </Container>

  );
};