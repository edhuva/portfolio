import React from 'react'
import PartnerReviewSlider from 'react-slick'
import PartnersReviewCardConfig from '../../config/PartnersReviewCardConfig'
import PartnersReviewCard from './PartnersReviewCard'
import { NextArrow, PrevArrow } from '../heroCarousal/ArrowsComponent'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
//import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersReviews = () => {

  // const settingsLg = {
  //   arrows: true,
  //   autoplay: true,
  //   centerMode: true,
  //   slidesToShow: 1,
  //   slidesToSroll: 1,
  //   centerPadding: '300px',
  //   infinite: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />
  // }

  const settings = {
    arrows: false,
    dots: true,
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
      <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className='blockHeaderAnim'>
        <h3 className='text-gray-500 pt-10 pb-1 text-5xl font-bold'>Our Happy Partners</h3>
      </motion.div>
      <div className='lg:hidden pt-10 pb-1 mb-32 blockAnim'>
        <PartnerReviewSlider {...settings}>
          {
            PartnersReviewCardConfig.map(partnerReviewer => (
              <div className=' shadow-xl w-20 h-80  md:92 ' key={partnerReviewer.src}>
                <PartnersReviewCard {...partnerReviewer} />
              </div>
            ))
          }
        </PartnerReviewSlider>
      </div>

      <div className='hidden lg:block  shadow-xl rounded-full justify-center mx-32 mt-16 mb-28 blockAnim'>
          <PartnerReviewSlider {...settings}>
            {PartnersReviewCardConfig.map(partnerReviewer => (
              <div className=' w-30 h-96  items-center  rounded-full' key={partnerReviewer.src}>
                <PartnersReviewCard {...partnerReviewer} />
              </div>
            ))}
          </PartnerReviewSlider>
      </div>
    </>
  )
}

export default PartnersReviews
