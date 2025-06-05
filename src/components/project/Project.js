import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ProjectCarousal from '../heroCarousal/ProjectCarousal';

const Project = (props) => {
  return (
    <div className='flex flex-col justify-center mt-9 md:mt-20 mb-20 md:mb-36'>
      {/* Top Section: Carousel + Info */}
      <div className='flex flex-col md:flex-row-reverse items-center gap-10'>

        {/* Carousel Section */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='w-full h-64'>
            <ProjectCarousal project_images={props.project_images} />
          </div>
        </div>

        {/* Text Content Section */}
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-center'>
          {/* Title for md and up */}
          <div className='hidden md:block'>
            <motion.h1
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='pt-1 text-4xl mb-10 font-bold shadow-xl welcome-h2-text'
            >
              {props.title}
            </motion.h1>
          </div>
          {/* Title for mobile */}
          <div className='md:hidden'>
            <h1 className='text-2xl pt-8 mb-6 font-bold drop-shadow-xl welcome-h2-text'>
              {props.title}
            </h1>
          </div>

          <h2 className='text-xl md:text-2xl font-semibold px-4 md:px-6 lg:px-10'>{props.subTitle}</h2>

          <div className='flex justify-center gap-6 my-4 text-md md:text-xl flex-wrap'>
            <Link to={props.site} className='hover:text-blue-500 dark:hover:text-blue-500'>
              <h3>
                Visit the site <FontAwesomeIcon icon={faLink} className='ml-2' />
              </h3>
            </Link>
            <Link to={props.github} className='hover:text-blue-500 dark:hover:text-blue-500'>
              <h3>
                See the code <FontAwesomeIcon icon={faGithub} className='ml-2' />
              </h3>
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className='flex flex-col mt-10'>
        <div className='hidden md:block'>
          <motion.h3
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className='md:pt-6 lg:pt-9 md:text-3xl mb-8 font-bold pl-10 welcome-h2-text'
          >
            Tech Stack
          </motion.h3>
        </div>
        <div className='md:hidden'>
          <h3 className='text-2xl pt-4 mb-8 font-bold pl-4 welcome-h2-text'>Tech Stack</h3>
        </div>

        <div className='flex flex-wrap gap-5 md:gap-10 p-3'>
          {props.techStack?.map((stack) => (
            <div
              key={stack}
              className='bg-edCol-900 text-white dark:bg-gray-200 dark:text-edCol-900 font-semibold border-blue-300 hover:border-blue-500 py-2 px-5 rounded-full'
            >
              <h3>{stack}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;