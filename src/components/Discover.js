import { useEffect } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Discover = () => {
    
    useEffect(() => {
      new SplitType('#discover');
      let characters = document.querySelectorAll('.char')

      for(let i=0; i < characters.length; i++) {
        characters[i].classList.add('translate-y-full')
      }

      gsap.to('.char', {
        y: -10,
        stagger: 0.2,
        delay: 0.001,
        duration: 0.5
      })
    }, []) 

    const DiscoverText = (
      <h2 id='discover'>Discover The Best delicious food and drinks in South Africa.</h2>
    )

    const Discover = (
        <>
            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
             className=' relative bg-gray-100 ml-4 w-100 h-full rounded-r-full'>
              <div className='hidden text-center lg:block  group-hover:z-10  text-5xl  py-4 mb-5 mt-6 pr-10 mr-44 pl-8'>
                  {DiscoverText}
              </div>

              <div className=' hidden lg:hidden md:block text-5xl py-6 my-3 mx-4 '>
                {DiscoverText}
              </div>
              <div className='md:hidden text-3xl py-6 my-3 mx-4'>
                {DiscoverText}
              </div>
            </motion.div>
            
        </>
    )
  return (
    <div className='flex justify-center  text-gray-900 font-bold'>
              
      {Discover}
      
    </div>
  )
}

export default Discover