import React from 'react'
import '../App.css'
import Logo from '../assets/Logo.png'
import downArrow from '../assets/downArrow.svg'
import mainContainerImg from '../assets/MainContainerImg.png'
import Widgets from '../assets/Widgets.png'
const Home = () => {
    return (
        <section className='min-h-screen'>
            <header className='h-fit w-full'>
                <div className='h-fit w-full p-3 bg-blue-100 flex justify-center items-center sm:text-base'>
                    <p className='text-sm'>Navigate your ideal career path with tailored expert advice <span className='sm:pl-5 text-blue-500 text-base font-semibold'>Contact Expert</span></p>
                </div>

                <nav className='h-16 w-full'>
                    <div className='h-full w-full px-5 flex justify-between items-center sm:px-10 md:px-24'>
                        <div className='flex items-center gap-7'>
                            <img className='h-10' src={Logo} alt='acceredian' />
                            <div className='h-12 hidden w-28 bg-blue-600 text-white lg:flex justify-center gap-2 items-center rounded-lg font-semibold cursor-pointer'>
                                <p>Courses</p>
                                <img className='h-2' src={downArrow} alt='v' />
                            </div>
                        </div>
                        <div className='hidden lg:flex h-fit w-fit gap-6 justify-center items-center text-lg'>
                            <ul className='flex gap-6 justify-center items-center list-none' >
                                <li className='cursor-pointer'>Refer & Earn</li>
                                <li className='cursor-pointer'>Resourses</li>
                                <li className='cursor-pointer'>About Us</li>
                            </ul>
                            <button className='h-12 w-20 text-base bg-slate-300 hover:bg-slate-100 rounded-lg font-bold'>Login</button>
                            <button className='h-12 w-28 text-base bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-bold'>Try for free</button>
                        </div>
                        <p className='text-4xl lg:hidden'>#</p>
                    </div>
                </nav>
            </header>
            <div className='h-20 py-5 px-3 w-full flex flex-col justify-between items-center sm:h-24 md:h-28'>
                <div className='h-full bg-blue-100 w-full sm:w-3/6 rounded-full md:text-xl flex justify-around items-center text-base sm:text-lg font-bold'>
                    <a className='text-blue-500 font-semibold relative' href='#Refer'>Refer<span className='absolute -bottom-2 left-[50%] font-extrabold text-3xl text-blue-600'>.</span></a>
                    <a href='#Benifits'>Benifits</a>
                    <a href='#FAQs'>FAQ's</a>
                    <a href='#Support'>Support</a>
                </div>
            </div>
            <div className='flex p-5 min-h-[60vh] sm:p-10 w-full justify-center items-center flex-shrink-0'>
                <div className='min-h-[50vh] px-4 py-10 sm:pt-10 sm:pb-0 w-full md:w-[80%] lg:max-w-[75vw] sm:px-12  md:flex-row lg:py-16 shadow-2xl flex sm:flex-col justify-between gap-10 relative flex-wrap bg-blue-100'>
                    <img className='hidden sm:block absolute w-32 top-0 left-0 rotate-180' src={Widgets} alt='' />
                    <div className='flex w-full lg:w-[30%] text-center flex-col justify-center items-center md:items-start gap-10 shrink-0'>
                        <h1 className='text-6xl sm:text-7xl font-semibold md:text-left'>Let's Learn & Earn</h1>
                        <p className='text-3xl sm:text-4xl md:text-left'>Get a chance to win up-to <span className='font-semibold text-blue-600'>Rs. 15,000</span></p>
                        <button className='h-12 w-36 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold'>Refer Now</button>
                    </div>
                    <div className='hidden sm:h-[50vh] sm:w-full lg:w-[60%]  sm:flex w-full flex-col justify-center items-center sm:overflow-hidden sm:relative shrink-0 flex-wrap'>
                        <img className='absolute w-32 -top-10 rotate-180' src={Widgets} alt='' />
                        <img className='absolute w-32 top-30 left-10 rotate-0' src={Widgets} alt='' />
                        <img className='absolute w-32 z-10 -bottom-10 left-32 rotate-180' src={Widgets} alt='' />
                        <img className='absolute w-32 top-52 right-20' src={Widgets} alt='' />
                        <img className='h-full  sm:scale-150 '  src={mainContainerImg} alt='MainImage' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

