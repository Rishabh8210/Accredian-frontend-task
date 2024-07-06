import React from 'react'
import SecondMain from '../assets/SecondMain.png'
const Refer = () => {
  return (
    <div className='min-h-[40vh] max-w-screen flex flex-col gap-7 py-7 items-center flex-shrink-0 bg-blue-100'>
        <h1 className='text-4xl font-semibold'>How Do I <span className='font-semibold text-blue-600'>Refer?</span></h1>
        <img className='size-3/4 sm:size-4/6 md:size-3/5 lg:max-h-[60vh] lg:w-7/12' src={SecondMain} alt=''/>
        <button className='h-12 flex-shrink-0 w-32 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Refer Now</button>
    </div>
  )
}

export default Refer


{/* <div className='min-h-[50vh] lg:max-h-[60vh] w-full flex flex-col justify-around gap-7 py-7 items-center flex-shrink-0 bg-blue-100'>
        <h1 className='text-4xl font-semibold'>How Do I <span className='font-semibold text-blue-600'>Refer?</span></h1>
        <img className='h-[50%]' src={SecondMain} alt=''/>
        <button className='h-12 flex-shrink-0 w-32 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Refer Now</button>
    </div> */}