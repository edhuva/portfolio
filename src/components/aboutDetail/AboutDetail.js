import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const AboutDetail = (props) => {
  return (
    <div className='flex flex-1 flex-col  justify-center items-center'>
        <div className='hidden md:block '> 
        <motion.h1 variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}  className=' pt-1 text-4xl mt-14 mb-10 flex font-bold shadow-xl welcome-h2-text'>{props.title}</motion.h1>
        </div>
        <div className='md:hidden'>
        <h1 className='text-2xl pt-8 mb-6 flex font-bold shadow-xl text-center welcome-h2-text'>{props.title}</h1>
        </div>

        <div>
        <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>{props.subTitle}</h2>
        </div>
    </div>
  )
}

export default AboutDetail