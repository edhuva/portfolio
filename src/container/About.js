import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
          <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>I'm a Full Stack Developer who's been building responsive, robust, and scalable industry utilized applications since my final year of university. My technical expertise includes JavaScript, TypeScript, Python, SQL, Html, CSS3, Bootstrap, Tailwind, React, Node.js, Django, Redux, MongoDB, Mysql, Firebase, version control - Git and DevOps. I excel in dynamic, collaborative environment, where creativity, continuous improvement, and innovation are encouraged.</h2>
        </div>

        <div className='flex flex-1 flex-col  justify-center items-center'>
          <div className='hidden md:block '> 
            <motion.h1 variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}  className=' pt-1 text-4xl mt-14 mb-10 flex font-bold shadow-xl welcome-h2-text'>* University of FortHare - 2018</motion.h1>
          </div>
          <div className='md:hidden'>
            <h1 className='text-2xl pt-8 mb-6 flex font-bold shadow-xl text-center welcome-h2-text'>* University of FortHare - 2018</h1>
          </div>

          <div>
            <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>BSC DEGREE IN COMPUTER SCIENCE - majoring in Computer Science and Physics. Focused on designing, testing, and analysing different systems and software. Enhancing variety of specialist tools such as critical thinking, programming, Database Management, Networking and Cyber Security. Implementing logic thinking when solving critical problems.</h2>
          </div>
        </div>

        <div className='flex flex-1 flex-col  justify-center items-center'>
          <div className='hidden md:block '> 
            <motion.h1 variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}  className=' pt-1 text-4xl mt-14 mb-10 flex font-bold shadow-xl welcome-h2-text'>* Stadio Higher Education - 2022</motion.h1>
          </div>
          <div className='md:hidden'>
            <h1 className='text-2xl pt-8 mb-6 flex font-bold shadow-xl text-center welcome-h2-text'>* Stadio Higher Education - 2022</h1>
          </div>

          <div>
            <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>Post Graduate Certificate In Education (PGCE) - Professional capping qualification offering an advanced teaching programme and development of professional competence in educational theory. I was Specializing in Senior Phase - mathematics and FET - Physical Science.</h2>
          </div>
        </div>

        <div className='flex flex-1 flex-col  justify-center items-center'>
          <div className='hidden md:block '> 
            <motion.h1 variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}  className=' pt-1 text-4xl mt-14 mb-10 flex font-bold shadow-xl welcome-h2-text'>* ALAX Africa - 2023</motion.h1>
          </div>
          <div className='md:hidden'>
            <h1 className='text-2xl pt-8 mb-6 flex font-bold shadow-xl text-center welcome-h2-text'>* ALAX Africa - 2023</h1>
          </div>

          <div>
            <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>Software Engineering Training Program - evolves the next generation of Software Engineers who were ethical and entreprenearial leaders, providing safe training space and enabling learning envirnment. enhanced skills included: C and C++ low level programming, algorithms, Linux and shell cmds, Virtual environment using Vagrant, Text Editors such as Emacs, Vim & Vi, and Software Testing.</h2>
          </div>
        </div>

        <div className='flex flex-1 flex-col  justify-center items-center'>
          <div className='hidden md:block '> 
            <motion.h1 variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}  className=' pt-1 text-4xl mt-14 mb-10 flex font-bold shadow-xl welcome-h2-text'>* Devtown - 2024</motion.h1>
          </div>
          <div className='md:hidden'>
            <h1 className='text-2xl pt-8 mb-6 flex font-bold shadow-xl text-center welcome-h2-text'>* Devtown - 2024</h1>
          </div>

          <div>
            <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>Fullstack Web Developer Training - Focused on Web Development, React, Backend Development, and DevOps. Enhancing comprehnsive understanding of Web Protocols, Markup Langauge, Web Presentation, Responsive Design, Version Control with Git, Layout Techniques, CSS Frameworks, and Software Deployment.</h2>
          </div>
        </div>

        <div className='flex flex-1 flex-col  justify-center items-center'>
          <div className='hidden md:block '> 
            <motion.h1 variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}  className=' pt-1 text-4xl mt-14 mb-10 flex font-bold shadow-xl welcome-h2-text'>* Forage - 2024</motion.h1>
          </div>
          <div className='md:hidden'>
            <h1 className='text-2xl pt-8 mb-6 flex font-bold shadow-xl text-center welcome-h2-text'>* Forage - 2024</h1>
          </div>

          <div>
            <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '>JP Morgan Chase Software Engineering Job Simulation, - hands on expirience on interface with a stock price data feed, Use of JPMorgan Chase & Co. frameworks and tools. Displaying data visual for traders, and Open Source Contribution. I have contributed on Perspective github source documentation. Perspective is an open source project for data visualization and analytics for large streaming datasets.</h2>
          </div>
        </div>

        <div className='flex flex-1 flex-col  justify-center items-center'>
          <div className='hidden md:block '> 
            <motion.h1 variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}  className=' pt-1 text-4xl mt-14 mb-10 flex font-bold shadow-xl welcome-h2-text'>* Maths & Science Infinity - 2024</motion.h1>
          </div>
          <div className='md:hidden'>
            <h1 className='text-2xl pt-8 mb-6 flex font-bold shadow-xl text-center welcome-h2-text'>* MSI 2020 - 2024</h1>
          </div>

          <div>
            <h2 className='text-xl md:text-2xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '> Maths & Science Infinity (Physical Science Educator) - Teaching Physical Science and Mathematics to grade 10 - 12 matric learners at Nzululwazi High School. Mentoring Students and Conducting experiments. </h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
