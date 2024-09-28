import React from 'react'
import RestaurantsData from '../../config/RestaurantCardConfig'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { BsHandbag } from 'react-icons/bs';
import { IoIosBeer } from 'react-icons/io';
import {GiMorgueFeet } from 'react-icons/gi';

const Restaurants = () => {
  return (
    <div className='flex-col my-16 '>
      <div className='flex  justify-between items-center'>
        <motion.div variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}>
          <h3 className='text-gray-500 pt-6 pb-10 text-5xl font-bold '>Restaurants</h3>
        </motion.div>

        <div className='hidden lg:flex gap-2  p-1 rounded-lg border-t-1 border-b-1 shadow-sm text-xl' >
          <Link to={`/delivery`} >
            <button type='button' className='font-bold  rounded-md border-1 p-1 hover:shadow-md flex  flex-nowrap justify-center items-center'> <span className='px-0.5 text-red-700'><BsHandbag /></span> Delivery</button>
          </Link>
          <div className='h-8 w-0.5 bg-black'>
          </div>
          <Link to={`/night`} >
            <button type='button' className='font-bold  rounded-md border-1 p-1 hover:shadow-md flex  flex-nowrap justify-center items-center'><span className='px-0.5 text-red-700'><IoIosBeer /></span> Night</button>
          </Link>
          <div className='h-8 w-0.5 bg-black'>
          </div>
          <Link to={`/dining`} >
            <button type='button' className='font-bold  rounded-md border-1 p-1 hover:shadow-md flex  flex-nowrap justify-center items-center'><span className='px-0.5 text-red-700'><GiMorgueFeet /></span> Dining</button>
          </Link>
        </div>
      </div>
      
      <div >
        <div className='flex flex-wrap gap-6'>
          { 
            RestaurantsData.map( restaurant => (
              <Link to={`restaurant/${restaurant.id}`} key={restaurant.id}  >
                <RestaurantCard {...restaurant}  />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Restaurants
