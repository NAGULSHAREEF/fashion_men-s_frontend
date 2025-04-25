import React from 'react'
import Title from './Title'

const FabricInfo = () => {
  return (
    <div className='my-16'>
      <div className='text-center text-3xl py-6'>
        <Title text1={'PREMIUM'} text2={'FABRICS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mb-10'>
          At MensFashions, we carefully select the finest fabrics for exceptional comfort and durability.
        </p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='border p-6 flex flex-col gap-3'>
          <h3 className='font-semibold text-lg'>Organic Cotton</h3>
          <p className='text-gray-600 text-sm'>Our breathable cotton is sourced from sustainable farms and processed without harmful chemicals, making it gentle on your skin and the environment.</p>
        </div>
        
        <div className='border p-6 flex flex-col gap-3'>
          <h3 className='font-semibold text-lg'>Premium Denim</h3>
          <p className='text-gray-600 text-sm'>Our denim combines durability with comfort through a special weaving process that ensures flexibility and longevity, even after multiple washes.</p>
        </div>
        
        <div className='border p-6 flex flex-col gap-3'>
          <h3 className='font-semibold text-lg'>Merino Wool</h3>
          <p className='text-gray-600 text-sm'>Luxuriously soft and naturally temperature-regulating, our merino wool garments provide warmth without bulk and remain odor-resistant through multiple wears.</p>
        </div>
      </div>
    </div>
  )
}

export default FabricInfo