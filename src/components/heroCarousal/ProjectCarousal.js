import React from 'react'
import ProjectSlider from 'react-slick'
import { NextArrow, PrevArrow } from './ArrowsComponent';

//import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ProjectCarousal = ({project_images}) => {

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    
      const settings = {
        arrows: true,
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

  return (
    <>
    <div className=' md:hidden w-full '>
        <ProjectSlider {...settings}>
            {
                project_images.map(image => (
                    <div className='w-20 h-72  py-3' key={image}>
                        <img src={image} alt='hero images' className='w-full h-full rounded-md' />
                    </div>
                ))
            }
        </ProjectSlider> 
    </div>

    <div className=' hidden md:block lg:hidden w-96 '>
        <ProjectSlider {...settings}>
            {
                project_images.map(image => (
                    <div className='w-20 h-72 py-3' key={image}>
                        <img src={image} alt='hero images' className='w-full h-full rounded-md' />
                    </div>
                ))
            }
        </ProjectSlider> 
    </div>

    <div className='flex-1 w-96 h-96 hidden lg:block'>
        <ProjectSlider {...settingsLg}>
            {
                project_images.map(image => (
                    <div className='flex-1 w-96 h-96 px-1 rounded-md'  key={image}>
                        <img src={image} alt='hero images' className='w-full h-full rounded-md' />
                        
                    </div>
                ))
            }
        </ProjectSlider> 
    </div>
    </>
  )
}

export default ProjectCarousal
