import React from 'react'
import {programs} from '../constant'
import scolar from '../assets/scolar.svg'
const MainContentBenifits = () => {
    return (
        <div className='h-fit flex rounded-lg overflow-hidden shadow-xl'>
            <div className=''>
                <h2 className='text-white p-4 text-xl bg-blue-600 cursor-pointer font-semibold'>ALL PROGRAMS</h2>
                <div className='h-fit'>
                    {
                        programs && programs.map((program) => {
                            return <div className='flex gap-4 p-4'><img src={scolar} alt='' /><p className='text-lg font-medium hover:text-blue-500 cursor-pointer'>{program?.name}</p></div>
                        })
                    }
                </div>
            </div>
            <span className='border-x'></span>
            <div>
                <h2 className='text-white p-4 text-xl bg-blue-600 cursor-pointer uppercase font-semibold'>referrer Bonus</h2>
                <div className='h-fit'>
                    {
                        programs && programs.map((program) => {
                            return <p className='text-lg p-4 font-medium hover:text-blue-500 cursor-pointer text-center'>{program?.referrerBonus}</p>
                        })
                    }
                </div>
            </div>
            <span className='border-x'></span>
            <div>
                <h2 className='text-white p-4 text-xl bg-blue-600 uppercase cursor-pointer font-semibold'>referee Bonus</h2>
                <div className='h-fit'>
                    {
                        programs && programs.map((program) => {
                            return <p className='text-lg p-4 font-medium hover:text-blue-500 cursor-pointer text-center'>{program?.refereeBonus}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
};
export default MainContentBenifits