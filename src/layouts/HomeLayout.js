import React from 'react';
import Navbar from '../components/navbar.js/Navbar';
import FoodTab from '../components/foodTab/FoodTab';
import Footer from '../components/Footer';
import BackToTopButton from '../components/backToTop/BackToTopButton';

const HomeLayout = (props) => {
  return (
    <>
      <div className='container mx-auto px-4 lg:px-20'>
        <Navbar />
        {props.children}
      </div>
      <FoodTab />
      <Footer />
      <BackToTopButton />
    </>
  )
}

export default HomeLayout
