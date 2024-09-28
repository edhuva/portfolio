import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';

 const HomeHOC = ({ component: Component, ...rest }) => {

  return (
    <Routes>
        <Route 
        {...rest} 
        Component={(props) => (
            <HomeLayout>
                <Component {...props} />
            </HomeLayout>
        )}
        />
    </Routes>
  )
}

export default HomeHOC
