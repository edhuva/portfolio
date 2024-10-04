import React from 'react'
import { useParams } from 'react-router-dom'
import InvestorsRelations from './InvestorsRelations'
import AddRestaurant from './AddRestaurant'

const PublicPages = () => {
    const { page }= useParams();

    let content;

    if ( page === 'investors') {
      content = 
      <>
            <InvestorsRelations />
      </>
    }

    if ( page === 'partner-with-us') {
    
        content =   
        <>
            <AddRestaurant />
        </> 
    }

  return (
    <div className='flex-col mt-2 mb-2 '>
      {content}
    </div>
  )
}

export default PublicPages
