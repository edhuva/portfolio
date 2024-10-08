import React from 'react'
import ProcessCardData from '../../config/ProcessCardConfig'
import ProcessStepCard from './ProcessStepCard'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const ProcessSteps = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32 mb-14'>
      <motion.div variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}>
        <h3 className='text-gray-500 pt-6 pb-10 text-5xl font-bold'>How it works?</h3>
      </motion.div>
  
      <div className='appear'>
        <div className='flex flex-wrap gap-6 ' >
          { 
            ProcessCardData.map( process => (
              
                <ProcessStepCard {...process} key={process.title} className='blockAnim' />
          
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default ProcessSteps
