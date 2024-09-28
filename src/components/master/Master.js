import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { delivery, night, dining } from '../../config/MasterDataConfig'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import FoodCard from '../food/FoodCard'

const Master = () => {
    const { type } = useParams();

    let content = (
      type === 'delivery' ?
        <>
          <div className='flex-col mt-2 mb-16 '>
            <motion.div variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.7}}>
              <h3 className='text-gray-500 pt-6 pb-10 text-5xl font-bold '>Delivery</h3>
            </motion.div>
            
            <div >
              <div className='flex flex-wrap gap-6'>
                { 
                  delivery.map( food => (
                    <Link to={`#`} key={food.id}>
                      <FoodCard {...food}  />
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </>
      : type === 'night' ?
        <>
          <div className='flex-col mt-2 mb-16 '>
            <motion.div variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.7}}>
              <h3 className='text-gray-500 pt-6 pb-10 text-5xl font-bold '>Night</h3>
            </motion.div>
            
            <div >
              <div className='flex flex-wrap gap-6'>
                { 
                  night.map( food => (
                    <Link to={`#`} key={food.id}>
                      <FoodCard {...food}  />
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </>
      : type === 'dining' ? 
        <>
          <div className='flex-col mt-2 mb-16 '>
            <motion.div variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.7}}>
              <h3 className='text-gray-500 pt-6 pb-10 text-5xl font-bold '>Dining</h3>
            </motion.div>
          
            <div >
              <div className='flex flex-wrap gap-6'>
                { 
                  dining.map( food => (
                    <Link to={`#`} key={food.id}>
                      <FoodCard {...food}  />
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </>
      : 
      <div className='flex justify-center items-center my-16'>
        <p className='font-bold'>Nothing to Show at this moment, please go back to Home page!</p>
      </div>
      
    )

  return (
    <div className='flex-col mt-2 mb-2 '>
      <div className='flex justify-end pt-2'>
        <Link to='/'>
          <button type='button' className='font-bold bg-gray-50 rounded-full border-2 py-1.5 px-3 hover:shadow-md flex  flex-nowrap justify-center items-center text-center'> <span className='px-0.5 text-red-700'><FaArrowAltCircleLeft /></span> Back</button>
        </Link>
      </div>
    {content}
    </div>
  )
}

export default Master
