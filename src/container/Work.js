import React from 'react';
import Project from '../components/project/Project';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Project_Data from '../config/ProjectsDataConfig';


const Work = () => {

  return (
    <div className='flex flex-col  mx-2 lg:mx-28' id="projects" >
      <div className='hidden md:block '>
      <motion.h2 variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className='font-bold md:text-5xl lg:text-6xl tracking-wide text-center lg:mb-16'>Projects</motion.h2>
      </div>

      <div className='md:hidden'>
        <h2 className='font-bold text-4xl tracking-wide text-center'>Projects</h2>
      </div>

      <div>
        {Project_Data.map(project => (
          <Project key={project.title} {...project} />
          )
        )}
      </div>
    </div>
  )
}

export default Work
