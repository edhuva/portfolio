import React, { useState } from 'react'
import { FaPizzaSlice, FaMedal} from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

  const NavLg = () => (
    <>
      <div className='flex justify-between w-full'>
          <Link to='/'>
          <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}  className='flex justify-between w-30 h-12 text-zomatoCol-400'>
            <h2 className='text-blue-400 text-2xl font-bold'>MealMover</h2>
            <FaMedal/>
            {/* <img src={F} alt='logo' className='w-full h-full'/> */}
          </motion.div>
        </Link>
        <div className='flex'>
          <Menu />
        </div>
        <div className='flex items-center gap-3'>
          <button className='border border-blue-300 hover:border-blue-500 hover:text-blue-500 text-blue-400 py-2 px-3 rounded-full' >Login</button>
          <button className='border bg-zomatoCol-400 text-white py-2 px-3 rounded-full hover:border-blue-400 hover:text-blue-400 hover:bg-transparent' >SignUp</button>
        </div>
      </div>
    </>
  )

// Menu
const Menu = () => (
  <ul className='flex justify-between gap-8 pt-2 text-gray-600'>
      <Link to="/"><li className='hover:text-blue-400 border-t-2'>Home</li></Link>
      <Link to="computerrepairs"><li className='hover:text-blue-400 border-t-2'>Investor Relations</li></Link>
      <Link to="parts"><li className='hover:text-blue-400 border-t-2'>Add restaurant</li></Link>
  </ul>
)

// Menu
const MenuSm = () => (
  <ul className='flex-1 justify-between list-none items-center pt-2 pb-6 px-2'>
      <Link to="/"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-3.5' >Home</li></Link>
      <Link to="/computerrepairs"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-3.5'>Investor Relations</li></Link>
      <Link to="/parts"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-3.5'>Add restaurant</li></Link>
  </ul>
)

const MenuMd = () => (
  <ul className='flex-1  justify-between list-none items-center pt-2 pb-6 px-2'>
      <Link to="/"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-5' >Home</li></Link>
      <Link to="computerrepairs"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-5'>Investor Relations</li></Link>
      <Link to="parts"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-5'>Add restaurant</li></Link>
  </ul>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const NavSm = (
    <div className='flex justify-between '>
            <Link to='/'>
              <div className='flex justify-between w-30 h-12 text-zomatoCol-400'>
                  <h2 className='text-blue-400 text-2xl font-bold'>MealMover</h2>
                  <FaMedal/>
                    {/* <img src={F} alt='logo' className='w-full h-full'/> */}
                </div>
            </Link>
              
        
              <div className='flex items-center gap-3 justify-between'>
                <button className='bg-zomatoCol-400 text-white py-2 px-3 rounded-full' >Use App</button>
                <span className='border p-2 border-blue-300 text-blue-400  rounded-full'> 
                  {toggleMenu
                    ? <RiCloseLine className='border-blue-300 text-1sm' size={20} onClick={() => setToggleMenu(false)} /> 
                    : <FaPizzaSlice onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className='w-full h-full col-span-1 bg-gray-900 justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3 w-full border  border-gray-900 shadow-md rounded-md'>
                        <div className=''>
                          <MenuSm />
                        </div>
                        <div className='flex justify-center gap-4 py-3'>
                          <button className='border border-blue-300 text-blue-400 py-2 px-3 rounded-full hover:border-blue-400 hover:text-white' >Login</button>
                          <button className='border bg-zomatoCol-400 text-white py-2 px-3 rounded-full hover:border-blue-400 hover:bg-gray-900' >SignUp</button>
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )

  const NavMd = (
    <div className='flex justify-between '>
              <Link to='/'>
                <motion.div variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} className='flex justify-between w-30 h-12 text-zomatoCol-400'>
                  <h2 className='text-blue-400 text-2xl font-bold'>MealMover</h2>
                  <FaMedal/>
                    {/* <img src={F} alt='logo' className='w-full h-full'/> */}
                </motion.div>
              </Link>
        
              <div className='flex items-center gap-3 justify-between'>
                <button className='bg-zomatoCol-400 text-white py-2 px-3 rounded-full' >Use App</button>
                <span className='border p-2 border-blue-300 text-blue-400  rounded-full'> 
                  {toggleMenu
                    ? <RiCloseLine className='border-blue-300 text-1sm' size={20} onClick={() => setToggleMenu(false)} /> 
                    : <FaPizzaSlice onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className=' w-full h-full col-span-1 bg-gray-900 justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3w-full border  border-gray-900 shadow-md rounded-md'>
                        <div className=''>
                          <MenuMd />
                        </div>
                        <div className='flex justify-center gap-4 py-3'>
                          <button className='border border-blue-300 text-blue-400 py-2 px-3 rounded-full hover:border-blue-400 hover:text-white' >Login</button>
                          <button className='border bg-zomatoCol-400 text-white py-2 px-3 rounded-full hover:border-blue-400 hover:bg-gray-900' >SignUp</button>
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )

  return (
    <>
      <nav className='my-2 p pt-4 px-2 shadow-md items-center justify-between'>

        <div className='hidden lg:flex'>
            {/*Mobile screen*/}
            <NavLg />
        </div>

        <div className='hidden lg:hidden md:block'>
          {/* <NavMd /> */}
          {NavMd}
        </div>

        <div className='md:hidden'>
          {/* <NavSm /> */}
          {NavSm}
        </div>
        
      </nav>
    </>
  )
}

export default Navbar
