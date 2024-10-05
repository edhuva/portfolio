import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft, FaMarker } from 'react-icons/fa'

const AddRestaurant = () => {

  const contentHeader = (
    <>
      <div className='hidden md:block mt-2 '>
      <div className='relative overflow-hidden rounded-lg md-addrestaurant-bg-img bg-cover bg-no-repeat '>
        <div className='bg-img-text '>
          <div className=' flex justify-end p-2 z-50'>
            <Link to='/'>
              <button type='button' className='bg-img-text font-bold bg-transparent rounded-full border-2 py-1.5 px-3 hover:shadow-md flex  flex-nowrap justify-center items-center text-center text-white'> <span className='px-0.5 text-red-700'><FaArrowAltCircleLeft /></span > Back</button>
            </Link>
          </div>
          <div className='bg-img-text'>
          <motion.div variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}} className='flex justify-center mt-28'>
            <h3 className=' text-blue-100 pt-6 pb-10 text-5xl font-bold '>Partner With Us.</h3>
          </motion.div>
          </div>
        </div>
      </div>
    </div>

    <div className='md:hidden mt-1 '>
      <div className='relative overflow-hidden rounded-lg sm-addrestaurant-bg-img bg-cover bg-no-repeat '>
        <div className='bg-img-text'>
          <div className='flex justify-end p-2'>
            <Link to='/'>
              <button type='button' className='font-bold bg-transparent rounded-full border-2 py-1.5 px-3 hover:shadow-md flex  flex-nowrap justify-center items-center text-center text-white'> <span className='px-0.5 text-red-700'><FaArrowAltCircleLeft /></span > Back</button>
            </Link>
          </div>
          <div className='bg-img-text'>
            <motion.div variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}   viewport={{once: false, amount: 0.7}} 
                className=' bg-img-text flex justify-center mt-10'
              >
              <h3 className='text-white pt-6 pb-10 text-4xl font-bold'  >Partner With Us.</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </>
  )


  return (
    <>
     {contentHeader}

     <div className=' flex justify-center md:py-8 my-10'>
        <div className='md:w-3/4 flex flex-col justify-center items-center py-8 px-6 bg-edCol-900 border-2 rounded-2xl text-white'>
          <h3 className='font-bold text-center text-white text-3xl pb-3 md:pb-5'>Partner With MealMover at 0% commision for the 1st month!</h3>
          <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}   viewport={{once: false, amount: 0.7}}>
              <p className='mb-6'>And get ads wort R500. Valid for new restaurant partners in selected cities</p>
            </motion.div>
          
          <div className='flex flex-col justify-center items-center gap-4 pt-1 px-2 '>
            <div className='flex-1 '> 
            <button className=' w-80 border border-blue-300 text-blue-400 py-2 px-3 rounded-full hover:border-blue-400 hover:text-white ' >Rgister your restaurant</button>
            </div>
            <div className='flex-1 '>
              <button className='w-80 border bg-zomatoCol-400 text-white py-2 px-3 rounded-full hover:border-blue-400 hover:bg-gray-900' >Login to view your existing rastaurants</button>
            </div>
            <motion.div variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}   viewport={{once: false, amount: 0.7}}>
              <p>Need Help? Contact: <a className='hover:bg-gray-700' href='tel:+27628493704'>+2762 849 3704</a><br /></p>
            </motion.div>
          </div>
        </div>
     </div>

        <div className='flex flex-col justify-center items-center bg-gray-50 pt-10 pb-20 px-2 mb-16 md:mb-0'>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold text-4xl pb-6'>Get started with online ordering</h3>
            <motion.p variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}   viewport={{once: false, amount: 0.7}} className='font-semibold text-md'>Please keep the documents ready for a smooth signup!</motion.p>
          </div>
          <div className='md:w-3/4  flex flex-col md:flex-row justify-around my-8 p-3 text-xl'>
            <ul className='flex flex-col md:p-4 font-semibold'>
              <motion.li variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}   viewport={{once: false, amount: 0.7}} className='flex flex-nowrap items-center justify-start p-3 '><span className='px-3 text-blue-700'><FaMarker/></span> ID Copy</motion.li>
              <motion.li variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}   viewport={{once: false, amount: 0.7}} className='flex flex-nowrap items-center justify-start p-3 '><span className='px-3 text-blue-700'><FaMarker/></span> Bank account details</motion.li>
            </ul>
            <ul className='flex flex-col md:p-4  font-semibold'>
            <motion.li variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}   viewport={{once: false, amount: 0.7}} className='flex flex-nowrap items-center justify-start p-3'><span className='px-3 text-blue-700'><FaMarker/></span> Your restaurant menu</motion.li>
            <motion.li variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}   viewport={{once: false, amount: 0.7}} className='flex flex-nowrap items-center justify-start p-3'><span className='px-3 text-blue-700'><FaMarker/></span> Dish images for top 5 items</motion.li>
            </ul>
          </div>
          <div>
            <button type='button' className='font-bold hover:bg-edCol-700 rounded-xl border-2 py-3 px-8 hover:shadow-md  bg-zomatoCol-400 text-white'>Apply Now</button>
          </div>
        <div>
      </div>
    </div>
  </>
   
  )
}

export default AddRestaurant
