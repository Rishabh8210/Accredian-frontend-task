import React from 'react'
import '../App.css'
import Logo from '../assets/Logo.png' 
import downArrow from '../assets/downArrow.svg'
import mainContainerImg from '../assets/MainContainerImg.png'
import Widgets from '../assets/Widgets.png'
const Home = () => {
  return (
    <div className='h-fit w-screen'>
        {/* Top bar */}
        <div className='h-12 w-full flex justify-center items-center gap-5 bg-blue-100'>
            <p className='font-medium'>Navigate your ideal career path with tailored expert advice</p>
            <p className='text-blue-600 font-semibold cursor-pointer'>Contact Expert</p>
        </div>
        {/* Nav Bar */}
        <div className='h-24 w-full pl-32 pr-32 flex justify-between items-center'>
            {/* Logo and Courses button */}
            <div className='h-fit w-96  flex justify-between items-center'>
                <img className='h-12' src={Logo} alt='acceredian'/>
                <div className='h-12 w-32 bg-blue-600 text-white flex justify-center gap-2 items-center rounded-lg font-semibold cursor-pointer'>
                    <p>Courses</p> 
                    <img className='h-2'src={downArrow} alt='v'/> 
                </div>
            </div>
            {/* Navigation */}
            <div className='h-fit w-fit flex gap-12 justify-center items-center text-lg'>
                <ul className='flex gap-12 justify-center items-center list-none' >
                    <li className='cursor-pointer'>Refer & Earn</li>
                    <li className='cursor-pointer'>Resourses</li>
                    <li className='cursor-pointer'>About Us</li>
                </ul>
                <button className='h-12 w-24 bg-slate-300 hover:bg-slate-100 rounded-lg font-semibold'>Login</button>
                <button className='h-12 w-36  bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Try for free</button>
            </div>
        </div>
        {/* HomeSection */}
        <div className='h-fit w-full pl-32 pr-32 flex flex-col justify-between items-center'>
            <div className='h-16 mt-6 mb-8 bg-blue-100 w-1/2 rounded-full flex justify-around items-center text-xl font-medium'>
                <div className='relative flex justify-center items-center flex-col'>
                    <p className='text-blue-600'>Refer</p>
                    <span className='absolute -bottom-2 font-extrabold text-blue-600'>.</span>
                </div>
                <a href='#Benifits'>Benifits</a>
                <a href='#FAQs'>FAQ's</a>
                <a href='#Support'>Support</a>
            </div>
            <div className='h-fit w-3/4 bg-blue-50 pl-12 pr-12 pt-16 pb-16 shadow-2xl flex justify-between relative overflow-hidden'>
                <img className='absolute w-32 -top-10 left-0 rotate-180'src={Widgets} alt=''/>
                <div className='flex w-1/3  flex-col gap-16'>
                    <h1 className='text-7xl font-semibold'>Let's Learn & Earn</h1>
                    <p className='text-4xl'>Get a chance to win up-to <span className='font-semibold text-blue-600'>Rs. 15,000</span></p>
                    <button className='h-12 w-36 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Refer Now</button>
                </div>
                <div className='h-fit w-2/3'>
                <img className='absolute w-32 top-4 right-96 rotate-180'src={Widgets} alt=''/>
                <img className='absolute w-32 bottom-8 left-96 rotate-0'src={Widgets} alt=''/>
                <img className='absolute w-32 -top-10 -right-4 rotate-180'src={Widgets} alt=''/>
                <img className='absolute w-32 top-52 right-20'src={Widgets} alt=''/>
                    <img className='w-2/3 absolute -top-32' src={mainContainerImg} alt='MainImage'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home