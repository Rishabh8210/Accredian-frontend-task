import React from 'react'
import Logo2 from '../assets/Logo2.png'
import { categories } from '../constant'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import phone from '../assets/phone.svg'
import instagram from '../assets/instagram.svg'
const Footer = () => {
    return (
        <section id='Support' className='min-[70vh] w-full p-7 lg:px-56 bg-gray-700 relative'>
            <div className='h-32 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center  gap-5 '>
                <img className='w-36 sm:h-1/3' src={Logo2} alt='' />
                <div className='h-fit flex flex-col sm:justify-center sm:items-center  text-white'>
                    <button className='h-10 w-fit px-5 text-base bg-blue-600 hover:bg-blue-800 border-x border-y border-white rounded-lg font-semibold'>Schedule 1 on 1 Call Now</button>
                    <p className='text-sm'>Speak with our Learning Advisor</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row pt-3 justify-around'>
                <div className='h-fit w-80'>
                    <div className='h-fit w-full flex p-5 justify-between '>
                        <h2 className='text-white  text-lg'>PROGRAMS</h2>
                    </div>
                    <div className='h-fit'>
                        {
                            categories && categories.map((category) => {
                                return <div className='h-fit text-white w-64 flex justify-between'><p className='text-base pb-4 font-semibold cursor-pointer'>{category}</p><span className='text-2xl'>+</span></div>
                            })
                        }
                    </div>
                </div>

                <div className='h-fit w-fit p-5 text-white'>
                    <div className='h-fit w-full flex  justify-between '>
                        <h2 className= 'text-lg'>CONTACK US</h2>
                    </div>
                    <div className='h-fit py-2 flex flex-col text-base gap-1'>
                        <p>Email us (For Data Science Queries): admissions@accredian.com</p>
                        <p>Email us (For Product Management Queries):pm@accredian.com</p>
                        <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
                        <p>Product Management Admission Helpline:+91 9625811095</p>
                        <p>Enrolled Student Helpline: +91 7969322507</p>
                        <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,</p>
                        <p>Haryana 122015</p>
                    </div>
                    <div className='flex flex-col gap-2 text-xl'>
                        <p>Why Acceredian</p>
                        <p>Follow Us</p>
                        <div className='flex gap-5 h-6'>
                            <img src={facebook} alt=''/>
                            <img src={linkedin} alt=''/>
                            <img src={twitter} alt=''/>
                            <img src={instagram} alt=''/>
                            <img src={youtube} alt=''/>
                        </div>
                    </div>
                </div>

                <div className='h-fit w-fit p-5 text-white'>
                    <div className='h-fit w-full flex  justify-between '>
                        <h2 className= 'text-lg'>Accredian</h2>
                    </div>
                    <div className='h-fit py-2 flex flex-col text-base gap-1'>
                        <p>About</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Admission Pilicy</p>
                        <p>Referral Policy</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Master FAQs</p>
                    </div>  
                </div>
            </div>
            <div className='h-[55px] absolute w-fit bottom-24 right-6 cursor-pointer'>
                <img className='h-full' src={phone} alt='' />
            </div>
            <p className='py-5 text-center text-base text-white'>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </section>
    )
}

export default Footer


