import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const InvestorsRelationsCard = ({title, parag, subTitle, subParag}) => {
  return (
    <div  className='md:w-96  p-4  rounded-md shadow-xl'>
        <motion.h4 variants={fadeIn("right", 0.4)}
    initial="hidden"
    whileInView={"show"}  className='font-bold text-center text-3xl pt-3 pb-6 md:pb-6 '>{title}</motion.h4>
        <div>
            <p className='text-gray-500'>{parag}</p>
        </div>
        <motion.div variants={fadeIn("left", 0.4)}
    initial="hidden"
    whileInView={"show"} className='mt-4'>
            <h5  className='font-semibold text-lg '>{subTitle}</h5>
            <p  className='text-blue-400'>{subParag}</p>
        </motion.div>
    </div>
  )
}

export default InvestorsRelationsCard
