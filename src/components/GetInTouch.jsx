import React from 'react'
import headset from '../assets/headset.svg'
const GetInTouch = () => {
  return (
    <section className='h-[20vh] w-screen px-32 flex items-center text-white'>
        <div className='flex items-center px-14 h-full w-full gap-8 rounded-lg bg-blue-500'>
            <div className='flex items-center h-full w-full gap-8'>
                <div className='w-fit bg-white border-4 border-blue-300 rounded-xl'>
                    <img src={headset} alt='' />
                </div>
                <div>
                    <p>Want to delve deeper into the program?</p>
                    <p>Share your details to receive expert insights from our program team!</p>
                </div>
            </div>
            <div className='h-12 w-36'>
                <button className='h-full w-full bg-white text-blue-500 hover:bg-blue-800 rounded-lg font-semibold'>Refer Now</button>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch