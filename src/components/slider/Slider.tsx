// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

type SliderType = {
  images: string[]
}

export default function Slider({images}: SliderType) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}><img src={image} alt="image" /></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
