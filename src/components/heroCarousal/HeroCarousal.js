import React from 'react';
import HeroSlider from 'react-slick';
import hero2 from '../../assets/hero2.webp';
import hero4 from '../../assets/hero4.avif';
import hero7 from '../../assets/hero7.jpeg';
import hero8 from '../../assets/hero8.jpeg';
import hero9 from '../../assets/hero9.webp';
import hero10 from '../../assets/hero10.jpeg';
import hero11 from '../../assets/hero11.webp';
import hero12 from '../../assets/hero12.webp';

import { NextArrow, PrevArrow } from './ArrowsComponent';

//import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const imagesAry = [
     hero2, hero4, hero7, hero8, hero9, hero10, hero11, hero12
  ]

  return (
    <>
    <div className=' lg:hidden'>
        <HeroSlider {...settings}>
            {
                imagesAry.map(image => (
                    <div className='w-20 h-72 md:92 py-3' key={image}>
                        <img src={image} alt='hero images' className='w-full h-full rounded-md' />
                    </div>
                ))
            }
        </HeroSlider> 
    </div>
    <div className='hidden lg:block my-3 '>
        <HeroSlider {...settingsLg}>
            {
                imagesAry.map(image => (
                    <div className='w-20 h-96 px-1 rounded-md'  key={image}>
                        <img src={image} alt='hero images' className='w-full h-full rounded-md' />
                        
                    </div>
                ))
            }
        </HeroSlider> 
    </div>
    </>
  )
}

export default HeroCarousal
