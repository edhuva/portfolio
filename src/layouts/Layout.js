import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../container/Header'
import Work from '../container/Work'
import About from '../container/About'
import Tools from '../container/Tools'
import Contact from '../container/Contact'
import Footer from '../container/Footer'

const Layout = () => {

  return (
    <div>
      <div className='flex flex-col min-h-screen dark:bg-edCol-900 text-gray-700 dark:text-white'>
        <Navbar />
        <Header />
        <Work />
        <About />
        <Tools />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
