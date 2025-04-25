import React from 'react'
import { assets } from '../assets/assets'
import latestArraival from '../assets/youngmanfront.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-200'>
            <div className='text-[#414141] px-6'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <Link to="/collection" className='font-semibold text-sm md:text-base'>SHOP NOW</Link>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      
       {/* Hero Right Side */}
       <div className='w-full sm:w-1/2 overflow-hidden'>
          <img className='w-full h-full object-cover' src={latestArraival} alt="Latest Arrivals" />
      </div>
    </div>
  )
}

export default Hero
