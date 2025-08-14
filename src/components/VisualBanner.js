import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const BannerWrapper = styled.div`
width: 100%;
height: 600px;
padding-top: 100px;


  .swiper-pagination-bullet {
    width: 14px !important;
    height: 14px !important;
    background: #ccc;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: black;
  }
`;

const BannerImage = styled.img`
width: 100%;
height: 600px;
object-fit: cover;
display: block;
`;




const VisualBanner = () => {
  return (
    <BannerWrapper>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide><Link to='/product/2'><BannerImage src={process.env.PUBLIC_URL + '/images/banner01.png'} alt="배너1" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/product/5'><BannerImage  src={process.env.PUBLIC_URL + '/images/banner02.png'} alt="배너2" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/product/3'><BannerImage src={process.env.PUBLIC_URL + '/images/banner03.png'} alt="배너3" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/product/7'><BannerImage src={process.env.PUBLIC_URL + '/images/banner04.jpg'}  alt="배너4" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/product/12'><BannerImage src={process.env.PUBLIC_URL + '/images/banner05.jpg'}  alt="배너5" /></Link></SwiperSlide>
        <SwiperSlide><Link to='/product/8'><BannerImage src={process.env.PUBLIC_URL + '/images/banner06.jpg'}  alt="배너6" /></Link></SwiperSlide>
      </Swiper>
    </BannerWrapper>
  );
};

export default VisualBanner;
