import React from 'react'

const Footer = () => {

    const created = new Date().toLocaleString('en-SA', { year: 'numeric' });

  return (
    <div>
        <footer className='flex justify-center  rounded bottom-0'>
            <div className='flex justify-center items-baseline text-sm md:text-xl tracking-wider mt-24 pb-8 md:pb-14'>
                <p>© {created} Edwin Matema, All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
    
}

export default Footer