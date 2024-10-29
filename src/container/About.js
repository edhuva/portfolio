import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import AboutDetail from '../components/aboutDetail/AboutDetail';
import { AboutDetailData } from '../config/AboutDetailDataConfig';

const About = () => {
  return (
    <div className='flex flex-col  mx-2 lg:mx-28' id="about" >
      <div className='hidden md:block '>
      <motion.h2 variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className='font-bold md:text-5xl lg:text-6xl tracking-wide text-center lg:mb-16'>About</motion.h2>
      </div>

      <div className='md:hidden'>
        <h2 className='font-bold text-4xl tracking-wide text-center'>About</h2>
      </div>

      <div className='flex mt-14 lg:mt-4 mb-4 justify-center gap-4 text-md md:text-xl '>
        <div className='flex gap-6 text-4xl'>
        <Link to='https://github.com/edhuva' className='hover:text-blue-500 dark:hover:text-blue-500'>
          <h3 ><FontAwesomeIcon icon={faGithub} /></h3>
        </Link>
        <Link to='https://x.com/EdwinMatema?t=BCvPx9aQsCyprPLTN23KIQ&s=09' className='hover:text-blue-500 dark:hover:text-blue-500'>
          <h3><FontAwesomeIcon icon={faXTwitter} /></h3>
        </Link>
        <Link to='https://www.Linkedin.com/in/edwin-matema-68101516a?utm_source=share&utm_campaign=sharevia&utm_content=profile&utm_medium=android_app' className='hover:text-blue-500 dark:hover:text-blue-500 '>
          <h3><FontAwesomeIcon icon={faLinkedin} /></h3>
        </Link>
        </div>
      </div>

      <div className=' flex flex-col justify-center mt-9 md:mt-20 mb-20 md:mb-36'>
        <div>
          <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>I'm a Full Stack Developer who's been building responsive, robust, and scalable industry utilized applications since my final year of university. I have +2 years of experience in freelancing. My technical expertise includes JavaScript, TypeScript, Python, SQL, Html, CSS3, Bootstrap, Tailwind, React, Node.js, Django, Redux, RKT Query, AWS, MongoDB, Mysql, Firebase, version control - Git and DevOps. I excel in dynamic, collaborative environment, where creativity, continuous improvement, and innovation are encouraged.</h2>
        </div>

        {
          AboutDetailData.map(data => (
            <AboutDetail key={data.title} {...data} />
          ))
        }
      </div>

    </div>
  )
}

export default About
