import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { TechTypeData } from '../config/TechTypeDataConfig'

const TechType = (props) => {
  return (
    <>
      <div className='flex-1  justify-center'>
        <div className='hidden md:flex justify-center items-center mb-6'> 
          <h1  className='text-4xl pt-1 mb-10 flex font-bold shadow-xl welcome-h2-text '>{props.techTitle}</h1>
        </div>
        <div className='md:hidden flex justify-center'>
          <h1 className='text-4xl pt-8 mb-8 flex font-bold shadow-xl  welcome-h2-text '> {props.techTitle}</h1>
        </div>
        <div className='text-xl md:text-2xl font-semibold tracking-wider  '>
          {
            props.techType.map(techtyp => (
              <div key={techtyp} className='bg-edCol-900  text-white dark:text-edCol-900 dark:bg-gray-200 font-semibold py-4 px-5 rounded-md text-center mb-10'>
                <h3>{techtyp}</h3>
            </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

const Tools = () => {
  return (
    <div className='flex flex-col  mx-2 lg:mx-28' id="tools" >
      <div className='hidden md:block '>
      <motion.h2 variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className='font-bold md:text-5xl lg:text-6xl tracking-wide text-center lg:mb-6'>Tools</motion.h2>
      </div>

      <div className='md:hidden'>
        <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl tracking-wide text-center lg:text-left lg:mb-3'>Tools</h2>
      </div>

      <div className=' flex flex-col justify-center mt-9 md:mt-20 mb-20 md:mb-36 '>
        <div className='flex flex-col md:flex-row gap-12'>
          {
            TechTypeData.map(tech => (
              // <div key={}>
                <TechType key={tech.techTitle} {...tech} />
              // </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tools
