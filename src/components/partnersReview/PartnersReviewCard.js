import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const PartnersReviewCard = (props) => {
  return (
    <>
      <div className='md:hidden flex flex-col flex-1 justify-center items-center mb-3'>
      <div className='w-24 h-24 rounded-full my-4 flex-1'>
        <img src={props.src} alt={props.alt} className='w-full h-full rounded-full ' />
      </div>
      <div className='text-sm m-3 text-gray-600 '>
        <div className=' text-center'>
          <p className=' flex  justify-center '><span className='text-xl'><FaQuoteLeft /></span>{props.review}<span className='text-xl'><FaQuoteRight /></span></p>
        </div>
        <div className='py-3'>
          <p className='py-1 text-blue-500 font-bold'>{props.name}</p>
          <p className='font-bold'>{props.title}</p>
        </div>
      </div>
    </div>

    <div className='hidden md:flex flex-row h-full bg-gray-50  rounded-full justify-center items-center shadow-md p-3'>
      <div className='w-40 h-40 p-2 flex rounded-full m-3'>
        <img src={props.src} alt={props.alt} className='w-full h-full rounded-full' />
      </div>
      <div className='flex-1 text-xl m-3 text-gray-600'>
        <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}  className='text-center shadow-xl'>
          <p className=' flex  justify-center pb-2'><span className='text-2xl pr-2'><FaQuoteLeft /></span>{props.review}<span className='text-2xl pl-2'><FaQuoteRight /></span></p>
        </motion.div>
        <div className='pt-3'>
          <p className='py-1 text-blue-500 font-bold'>{props.name}</p>
          <p className='font-bold'>{props.title}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default PartnersReviewCard
