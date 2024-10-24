import React from 'react'
import {  FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const Header = () => {

  const headerLg = (
    <div className='hidden md:hidden lg:block ' >
      <div className='flex  justify-between items-start my-40 mx-28 p-10'>
        <div className='mt-16 flex flex-1 flex-col '>
          <div className=' inline-block'>
            <h2 className='  font-bold text-6xl tracking-wider whitespace-nowrap w-full overflow-hidden shadow-xl welcome_h2'>Hello, I'm Edwin 👋</h2>
          </div>
          <div className=' mt-14 flex flex-col justify-center'>
            <h2 className='  font-bold text-4xl tracking-wide my-2 mr-5 welcome-h2-text text-center'>I'm a Full Stack Developer. </h2>
            <h2 className='  font-bold text-4xl tracking-wide my-2 mr-5 welcome-h2-text text-center'>Developing web based applications. </h2>
            <motion.h2 variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className=' mt-3 font-bold text-2xl tracking-wide welcome-h2-text text-center'>Strongly practice self and professional development.</motion.h2>
          </div>
        </div>

        <div className='flex flex-1 justify-center'>
          <div className='flex  justify-center items-center header-img-lg text-6xl  '>
          <FaCode className='text-red-900 dark:text-red-700'/>
          </div>
        </div>
      </div>
    </div>
  )

  const headerMd = (
    <div className='hidden md:block lg:hidden' >
      <div className='flex  justify-between items-start my-36 mx-2 p-10'>
        <div className='mt-16 flex flex-1 flex-col '>
          <div className=' inline-block'>
            <h2 className='  font-bold text-4xl tracking-wider whitespace-nowrap w-full overflow-hidden shadow-xl welcome_h2'>Hello, I'm Edwin 👋</h2>
          </div>
          <div className=' mt-14 flex flex-col justify-center'>
           
            <h2 className='  font-bold text-3xl tracking-wide my-2 mr-5 welcome-h2-text text-center'>I'm a Full Stack Developer. </h2>
            <h2 className='  font-bold text-3xl tracking-wide my-2 mr-5 welcome-h2-text text-center'>Developing web based applications. </h2>
            <motion.h2 variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className=' mt-3 font-bold text-md tracking-wide welcome-h2-text text-center'>Strongly practice self and professional development.</motion.h2>
          </div>
        </div>

        <div className='flex flex-1 justify-center'>
          <div className='flex  justify-center items-center header-img-md text-6xl  '>
          <FaCode className='text-red-900 dark:text-red-700'/>
          </div>
        </div>
      </div>
    </div>
  )

  const headerSm = (
    <div className='md:hidden' >
    <div className='flex  justify-between items-start my-20 mx-1 py-10 px-2 '>
      <div className='mt-8 flex flex-1 flex-col '>
        <div className=' inline-block'>
          <h2 className='  font-bold text-3xl tracking-wider whitespace-nowrap w-full overflow-hidden shadow-xl welcome_h2'>Hello, I'm Edwin 👋</h2>
        </div>
        <div className=' mt-12 flex flex-col justify-center'>
          <h2 className='  font-bold text-3xl tracking-wide my-2 mr-5 welcome-h2-text text-center'>I'm a Full Stack Developer. </h2>
          <h2 className='  font-bold text-3xl tracking-wide my-2 mr-5 welcome-h2-text text-center'>Developing web based applications. </h2>
          <motion.h2 variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}} className=' mt-3 font-bold text-md tracking-wide welcome-h2-text text-center'>Strongly practice self and professional development.</motion.h2>
        </div>
      </div>
    </div>
  </div>
  )

  return (
    <div id ="header">
      {headerLg}
      {headerMd}
      {headerSm}
    </div>
  )
}

export default Header
