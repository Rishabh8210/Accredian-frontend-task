import React from 'react'
import SidebarCategory from './SidebarCategory'
import MainContentBenifits from './MainContentBenifits'
import downArrow2 from '../assets/downArrow2.svg'
const Benifits = () => {
  return (
    <section id='Benifits' className='h-screen w-screen pl-32 pr-32 p-10 flex flex-col items-center'>
        <h1 className='text-4xl font-semibold'>What Are The <span className='text-blue-600'>Referral Benifits?</span></h1>
        <div className='flex gap-16 py-10'>
            <SidebarCategory />
            <MainContentBenifits />
        </div>
        <div className='flex px-auto w-full h-fit flex-row-reverse'>
            <div className='flex w-fit items-center px-2 rounded-lg overflow-hidden border-2'>
                <button className='h-11 w-28  font-semibold text-zinc-500'>Show more</button>
                <img className='h-2' src={downArrow2} alt='' />
            </div>
        </div>
        <button className='h-12 w-36 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Refer Now</button>
    </section>
  )
}

export default Benifits