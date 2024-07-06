import React from 'react'
import SidebarCategory from './SidebarCategory'
import MainContentBenifits from './MainContentBenifits'
import downArrow2 from '../assets/downArrow2.svg'
const Benifits = () => {
  return (
    <section id='Benifits' className='min-h-screen w-full overflow-hidden lg:px-32 px-8 flex flex-col items-center'>
        <h1 className='text-4xl font-semibold'>What Are The <span className='text-blue-600'>Referral Benifits?</span></h1>
        <div className='flex flex-col lg:flex-row gap-10 py-10'>
            <SidebarCategory />
            <MainContentBenifits />
        </div>
        <div className='flex w-full h-fit flex-row-reverse pb-7'>
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