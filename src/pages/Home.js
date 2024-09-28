import React from 'react'
import HeroCarousal from '../components/heroCarousal/HeroCarousal'
import Discover from '../components/Discover'
import Restaurants from '../components/restaurants/Restaurants'
import PartnersReviews from '../components/partnersReview/PartnersReviews'
import ProcessSteps from '../components/processSteps/ProcessSteps'

const Home = () => {
  return (
    <div>
      <HeroCarousal />
        <Discover />
        <Restaurants />
        <ProcessSteps />
        <PartnersReviews />
    </div>
  )
}

export default Home
