import React from 'react'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const FoodCard = (props) => {
  return (
    <motion.div variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}}  className=' shadow-md flex flex-col w-64 items-start hover:border-3 hover:border-red-900 rounded-2xl my-4  hover:shadow-lg '>
        <div className='h-40 w-64  rounded-t-2xl'>
          <img src={props.src} alt={props.alt} className='w-full h-full rounded-t-2xl hover:scale-90 transform transition translate-y'/>
        </div>
        <div className='px-3 py-5 flex flex-col items-start justify-center bg-gray-10'>
          <h3 className=' text-gray-800 text-md '>{props.title.length < 25 ? props.title : (`${props.title.substring(0,25)}...`)}</h3>
          <div className='text-sm '>
            <div className='flex gap-2 py-2'>
                <p className='text-gray-600'>{props.stars}</p>
                <p className='flex justify-center items-center bg-green-900 text-white text-sm p-1 rounded-lg'>{props.rating} <span className='px-0.5'><FaStar /></span></p>
                <p className='text-gray-600'>{props.subTitle}</p>
            </div>
            <p  className='text-gray-600 pl-2 font-bold text-xl'><span className='pr-1'>R</span>{props.price}</p>
          </div>
        </div>
      </motion.div>
  )
}

export default FoodCard
