import React from 'react'
import { Link } from 'react-router-dom'
import FoodCard from './FoodCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Food = (props) => {
  
  return (
    <div className='flex-col my-14'>
      <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}>
        <h3 className='text-gray-500 pt-6 pb-10 text-4xl font-bold'>Our Menu</h3>
      </motion.div>
      
      {/* <p className='text-sm py-2'>Brand new release every Friday</p> */}
      <div className='flex flex-wrap gap-6'>
        { 
          props.menu.map( food => (
            <Link to={`#`} key={food.id}>
              <FoodCard {...food}  />
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default Food
