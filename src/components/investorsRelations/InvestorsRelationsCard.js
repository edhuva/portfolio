import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const InvestorsRelationsCard = ({title, parag, subTitle, subParag}) => {
  return (
    <div  className='md:w-96  p-4 bg-gray-50 rounded-xl border-t-1  border-gray-300 shadow-2xl'>
        <motion.h4 variants={fadeIn("right", 0.4)}
    initial="hidden"
    whileInView={"show"}  className='font-bold text-center  text-3xl pt-3 pb-3 mb-3'>{title}</motion.h4>
        <div>
            <p className='text-gray-500'>{parag}</p>
        </div>
        <motion.div variants={fadeIn("left", 0.4)}
    initial="hidden"
    whileInView={"show"} className='mt-6'>
            <h5  className='font-semibold text-zomatoCol-400 text-lg '>{subTitle}</h5>
            <p  className='text-blue-400'>{subParag}</p>
        </motion.div>
    </div>
  )
}

export default InvestorsRelationsCard
