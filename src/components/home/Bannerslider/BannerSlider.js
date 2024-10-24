import React from 'react'
import Slider from 'react-slick'
import Banner from '../../../assets/banner5.jpg'
import Banner1 from '../../../assets/banner2.jpg'
import Banner2 from '../../../assets/banner3.jpg'
import Banner3 from '../../../assets/banner2.jpg'
import Banner4 from '../../../assets/banner5.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './carousel.css'


export const PreviousBtn = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{color:'blue'}} fontSize='medium' />
      </div>
    )
  }
  
  export const NextBtn = ({ className, onClick}) => {
    return (
      <div className={className}  onClick={onClick}>
        <ArrowForwardIosIcon style={{color:'blue'}} fontSize='medium' />
      </div>
    )
  }

const BannerSlider = () => {
    

    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };


    return (
        <div className=" w-full rounded-sm relative overflow-hidden">
            <Slider {...settings}>
                    <img loading='lazy' className=' h-72  object-cover' src={Banner} alt="" />
                    <img loading='lazy' className=' h-72  object-cover' src={Banner1} alt="" />
                    <img loading='lazy' className=' h-72  object-cover' src={Banner2} alt="" />
                    <img loading='lazy' className=' h-72  object-cover' src={Banner3} alt="" />
                    <img loading='lazy' className=' h-72  object-cover' src={Banner4} alt="" />
            </Slider>

        </div>
    )
}

export default BannerSlider