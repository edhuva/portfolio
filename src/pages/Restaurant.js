import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar, FaDirections, FaBookmark, FaShare } from 'react-icons/fa'
import Restaurants from '../config/RestaurantCardConfig'
import Food from '../components/food/Food'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

const Restaurant = () => {
  const { id } = useParams();
  
  let Restaurant = id ? Restaurants.filter(restaurant => restaurant.id === id) : null;
  

  let content = (Restaurant ? 
    <div>
      <div className='hidden md:block pt-2 mt-3'>
        <div className='bg-gray-50 flex py-10 my-5 px-10 shadow-md'>
          <div className=' flex-2'>
            <div>
              <h2 className='text-4xl font-bold pb-4'>{Restaurant[0].title}</h2>
              <p  className='text-gray-600 pr-10 pb-1 text-sm'>{Restaurant[0].address}
              </p>
              <p className='pb-4'><span className='text-red-700 pr-3'>Time:</span>{Restaurant[0].open}</p>
            </div>
            <div className='flex gap-2'>
              <div className=''>
                <button type='button' className='font-bold bg-gray-50 rounded-md border-2 p-1 hover:shadow-md flex  flex-nowrap justify-center items-centers'> <span className='px-0.5 text-red-700'><FaDirections /></span> Direction</button>
              </div>
            
              <button type='button' className='font-bold bg-gray-50 rounded-md border-2 p-1 hover:shadow-md flex  flex-nowrap justify-center items-centers'><span className='px-0.5 text-red-700'><FaBookmark /></span> Bookmark</button>
              <button type='button' className='font-bold bg-gray-50 rounded-md border-2 p-1 hover:shadow-md flex  flex-nowrap justify-center items-centers'><span className='px-0.5 text-red-700'><FaShare /></span> Share</button>
            </div>
          </div>

            <div className='flex flex-1 justify-center items-center'>
              <div> 
              <p className='flex justify-center items-center bg-green-900 text-white text-sm p-0.5 rounded-lg'>{Restaurant[0].rating} <span className='px-0.5'><FaStar /></span></p>
              </div>
              <div className='text-sm pl-2'>
                <p className='font-bold'>{Restaurant[0].countRatings}</p>
                <p>{Restaurant[0].subTitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='md:hidden'>
          <div className=' flex pt-10 pb-5  mb-5 px-1 '>
            <div className=' flex-2'>
              <div>
                <h2 className='text-2xl font-bold pb-4'>{Restaurant[0].title}</h2>
                <p  className='text-gray-600 pr-10 pb-2 text-sm'>{Restaurant[0].address}
                </p>
                <p className='pb-4 text-sm border-t-2'><span className='text-red-700 pr-3 '>Time:</span>{Restaurant[0].open}</p>
              </div>
              <div className='flex flex-1 justify-end items-center py-3 mb-2 shadow-xl border-t-4 '>
              <div>
                <p className='flex justify-center items-center bg-green-900 text-white text-sm p-0.5 rounded-lg'>{Restaurant[0].rating} <span className='px-0.5'><FaStar /></span></p>
                </div>
                <div className='text-sm pl-2'>
                  <p className='font-bold'>{Restaurant[0].countRatings}</p>
                  <p>{Restaurant[0].subTitle}</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className=''>
                  <button type='button' className='font-bold bg-gray-50 rounded-md border-2 p-1 hover:shadow-md flex  flex-nowrap justify-center items-centers'> <span className='px-0.5 text-red-700'><FaDirections /></span> Direction</button>
                </div>
              
                <button type='button' className='font-bold bg-gray-50 rounded-md border-2 p-1 hover:shadow-md flex  flex-nowrap justify-center items-centers'><span className='px-0.5 text-red-700'><FaBookmark /></span> Bookmark</button>
                <button type='button' className='font-bold bg-gray-50 rounded-md border-2 p-1 hover:shadow-md flex  flex-nowrap justify-center items-centers'><span className='px-0.5 text-red-700'><FaShare /></span> Share</button>
              </div>
            </div>
          </div>
        <div>
        </div>
      </div>

      <div>
        <Food {...Restaurant[0]}/>
      </div>
    </div>
    : <div>
      <h2>Restaurant not found!</h2>
    </div>
  )
  return (
    <div className=' py-1 mb-10'>
      <div className='flex justify-end pt-2'>
        <Link to='/'>
          <button type='button' className='font-bold bg-gray-50 rounded-full border-2 py-1.5 px-3 hover:shadow-md flex  flex-nowrap justify-center items-center text-center'> <span className='px-0.5 text-red-700'><FaArrowAltCircleLeft /></span> Back</button>
        </Link>
      </div>
      
      {content}
    </div>
  )
}

export default Restaurant
