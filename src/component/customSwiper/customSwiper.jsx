import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from '@mui/material/Container';
import CustomCard from '../CustomCard/CustomCard'
import img1 from '../../assets/images/img_1.jpg'
import img2 from '../../assets/images/img_2.jpg'
import img3 from '../../assets/images/img_3.jpg'
import img4 from '../../assets/images/img_4.jpg'

import { Navigation, A11y } from 'swiper/modules';
export default function customSwiper(props){
  return (

    <Container>

    
    <Swiper
 

      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop
    >
      <SwiperSlide>
      
        <CustomCard images={img1}/>
      </SwiperSlide>
      <SwiperSlide>
        <CustomCard images={img2}/>
      </SwiperSlide>
      <SwiperSlide>
      <CustomCard images={img3}/>
      </SwiperSlide>
      <SwiperSlide>
        <CustomCard images={img4}/>
      </SwiperSlide>
     
    </Swiper>
    </Container>

  );
};