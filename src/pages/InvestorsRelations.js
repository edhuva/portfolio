import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import InvestorsRelationsCard from '../components/investorsRelations/InvestorsRelationsCard'

const InvestorsRelations = () => {

  const content = (
    <>
      <div className='hidden md:block mt-2 '>
    {/* <div className='flex-col mt-2 mb-16 '> */}
      <div className='relative overflow-hidden rounded-lg md-investors-bg-img bg-cover bg-no-repeat '>
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
            <h3 className=' text-blue-100 pt-6 pb-10 text-5xl font-bold '>Investors Relations.</h3>
          </motion.div>
          </div>
        </div>
      </div>
    </div>

    <div className='md:hidden mt-1 '>
    {/* <div className='flex-col mt-2 mb-16 '> */}
      <div className='relative overflow-hidden rounded-lg sm-investors-bg-img bg-cover bg-no-repeat '>
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
                className=' flex justify-center mt-10'
              >
              <h3 className='text-white pt-6 pb-10 text-4xl font-bold'  >Inverstors.</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </>
  )

  return (
    <>
      {content}

      <div className='flex flex-col  justify-center md:py-8 mt-10 mb-28 md:mt-10 md:mt-16 '>
        <h3 className='font-bold text-center text-4xl  pt-2 md:text-5xl pb-3 md:pb-5 mb-7'>Our core offerings </h3>
        <div className='flex flex-wrap md:flex-row  justify-center gap-10'>
          <InvestorsRelationsCard title='Food Delivery' parag='Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly' subTitle='10.3 million' subParag='Avg, monthly transacting customers' />
         
          <InvestorsRelationsCard title='Quick Commerce' parag='Quick commerce platform where customers can order everyday needs across thousands of products and have tehem delivered within minutes' subTitle='15.3 million' subParag='Avg, monthly transacting customers' />

          <InvestorsRelationsCard title='Going-out' parag='Going-out enables discovery and ticketing of offline experiences such as in-restaurant dining and live events such as MealMover Show' subTitle='50% Revenue' subParag='Going-out Revenue' />

          <InvestorsRelationsCard title='Hyperpure' parag='Hyperpure is a B2B platform suppling high quality food ingredients and other products' subTitle='9 cities' subParag='cities present in' />
        </div>
      </div>
    </>
    
  )
}

export default InvestorsRelations
