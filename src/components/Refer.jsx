import React from 'react'
import SecondMain from '../assets/SecondMain.png'
const Refer = () => {
  return (
    <div className='h-[80vh] w-screen flex flex-col p-8 gap-10 items-center flex-shrink-0 bg-blue-100'>
        <h1 className='text-4xl font-semibold'>How Do I <span className='font-semibold text-blue-600'>Refer?</span></h1>
        <img className='h-4/5 ' src={SecondMain} alt=''/>
        <button className='h-12 w-36 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Refer Now</button>
    </div>
  )
}

export default Refer