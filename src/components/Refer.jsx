import React from 'react'
import SecondMain from '../assets/SecondMain.png'
const Refer = () => {
  return (
    <div className='min-h-[50vh] lg:max-h-[70vh] w-full flex flex-col justify-around gap-7 py-7 items-center flex-shrink-0 bg-blue-100'>
        <h1 className='text-4xl font-semibold'>How Do I <span className='font-semibold text-blue-600'>Refer?</span></h1>
        <img className='h-[80%]' src={SecondMain} alt=''/>
        <button className='h-12 flex-shrink-0 w-32 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Refer Now</button>
    </div>
  )
}

export default Refer