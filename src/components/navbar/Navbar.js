import React, { useEffect, useState } from 'react'
import {  FaCode } from 'react-icons/fa';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
// import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import useDarkTheme from '../../hooks/useDarkTheme';

// Menu
const Menu = () => (
  <ul className='flex justify-between items-center text-xl font-semibold gap-10 pt-2 '>
      {/* <Link to="#header"><li className='hover:text-blue-400 '>Home</li></Link>
      <Link to="#projects"><li className='hover:text-blue-400 '>Projects</li></Link>
      <Link to="#about"><li className='hover:text-blue-400 '>About</li></Link>
      <Link to="#tools"><li className='hover:text-blue-400 '>Tools</li></Link>
      <Link to="#contact"><li className='hover:text-blue-400 '>Contact</li></Link> */}
      <a href="#header"><li className='hover:text-blue-400 '>Home</li></a>
      <a href="#projects"><li className='hover:text-blue-400 '>Projects</li></a>
      <a href="#about"><li className='hover:text-blue-400 '>About</li></a>
      <a href="#tools"><li className='hover:text-blue-400 '>Tools</li></a>
      <a href="#contact"><li className='hover:text-blue-400 '>Contact</li></a>
  </ul>
)

// Menu
const MenuSm = () => (
  <ul className='flex-1 justify-between list-none items-center text-white dark:text-blue-400 pt-2 pb-6 px-2'>
      <a href="#header"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400  px-1 py-3 my-3.5' >Home</li></a>
      <a href="#projects"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400  px-1 py-3 my-3.5' >Projects</li></a>
      <a href="#about"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-3.5'>About</li></a>
      <a href="#tools"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 pt-3 py-3 mt-3.5 mb-1'>Tools</li></a>
      <a href="#contact"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 pt-3 py-3 mt-3.5 mb-1'>Contact</li></a>
  </ul>
)

// Menu
const MenuMd = () => (
  <ul className='flex-1  justify-between list-none items-center text-white dark:text-blue-400 pt-2 pb-6 px-2'>
      {/* <Link to="#header"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5' >Home</li></Link>
      <Link to="#projects"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5' >Projects</li></Link>
      <Link to="#about"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>About</li></Link>
      <Link to="#tools"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>Tools</li></Link>
      <Link to="#contact"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>Contact</li></Link> */}
      <a href="#header"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5' >Home</li></a>
      <a href="#projects"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5' >Projects</li></a>
      <a href="#about"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>About</li></a>
      <a href="#tools"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>Tools</li></a>
      <a href="#contact"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>Contact</li></a>

  </ul>
)

const Navbar = () => {

  const [darkTheme, setDarkTheme] = useDarkTheme()
  const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
      if (darkTheme) {
        document.body.classList.add("dark")
      } else {
        document.body.classList.remove("dark")
      }
   
  }, [darkTheme])

  const handleDarkTheme = () => {
    setDarkTheme(prev => !prev)
  }

  let themeBtn = darkTheme ? 'Light Theme' : 'Dark Theme' 

  const NavLg = (
    <>
      <div className=' hidden lg:flex w-full justify-between items-center px-5 py-3 font-family '>
          <a  href='#header'>
          <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}  className='flex justify-between w-30 h-12 '>
            <h2 className='text-3xl font-bold'>Edwin Matema</h2>
            <FaCode className='text-red-500'/>

          </motion.div>
        </a>
        <div className='flex'>
          <Menu />
        </div>
        <div className='flex items-center gap-3'>
          <button className=' bg-edCol-900 hover:text-blue-500 text-white dark:bg-white dark:text-gray-800  dark:hover:text-blue-500 font-semibold     border-blue-300 hover:border-blue-500 py-2 px-3 rounded-full' onClick={handleDarkTheme}>{themeBtn}</button>
        </div>
      </div>
    </>
  )

  const NavSm = (
    <div className='flex w-full justify-between font-family  px-1 '>
            <a href='#header'>
              <div className='flex justify-between w-30 h-12 '>
                  <h2 className='text-3xl font-bold '>Edhuva</h2>
                  <FaCode className='text-red-500'/>
                </div>
            </a>
              
              <div className='flex items-center gap-3 justify-between'>
                <span className=' text-blue-600  rounded-full pr-2'> 
                  {toggleMenu
                    ? <RiCloseLine className='inline-block border   border-blue-600 rounded-full p-1' size={28} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line className='inline-block border   border-blue-600 rounded-full p-1' size={28} onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className='w-full  min-h-screen col-span-1 bg-gray-900  justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3  border  border-gray-900 shadow-md rounded-md'>
                        <div className=''>
                          <MenuSm />
                        </div>
                        <div className='flex flex-col justify-center gap-4 pt-1 px-2'>
                          <button className= 'bg-black te hover:text-blue-500 text-white dark:bg-white dark:text-gray-800  dark:hover:text-blue-500 font-semibold   py-2 px-3 rounded-full hover:border-blue-400' onClick={handleDarkTheme} >{themeBtn}</button>
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )

  const NavMd = (
    <div className='flex w-full justify-between px-5 py-3 font-family '>
              <a href='/'>
                <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className='flex justify-between w-30 h-12 '>
                  <h2 className=' text-3xl font-bold'>Edwin Matema</h2>
                  <FaCode className='text-red-500'/>
                </motion.div>
              </a>
        
              <div className='flex items-center gap-3  justify-between'>
              <span className=' text-blue-600  rounded-full pr-1'> 
                  {toggleMenu
                    ? <RiCloseLine className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className='bg-gray-900  w-full min-h-screen col-span-1 justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3w-full border  border-gray-900 shadow-md rounded-md'>
                        <div >
                          <MenuMd />
                        </div>
                        <div className='flex justify-center items-center gap-4 pt-1 px-2'>
                           <div className='flex-1 '> 
                            <button className=' w-80 py-2 px-3 rounded-full hover:border-blue-400 bg-black te hover:text-blue-500 text-white dark:bg-white dark:text-gray-800  dark:hover:text-blue-500 font-semibold' onClick={handleDarkTheme} >{themeBtn}</button>
                           </div>
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )

  return (
    <div >
      <nav className=' flex w-full top-0 bg-white z-10 fixed pt-4 shadow-2xl items-center justify-between dark:bg-edCol-900  dark:text:white'>

        {/*large screen*/}
        {NavLg }

        <div className='hidden w-full lg:hidden md:block'>
          {/* medium */}
          {NavMd}
        </div>

        <div className='flex w-full md:hidden'>
          {/* small */}
          {NavSm}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
