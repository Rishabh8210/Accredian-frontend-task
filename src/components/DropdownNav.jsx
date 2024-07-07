import React, { useEffect, useState } from 'react'
const DropdownNav = ({triggerNav, setTriggerNav, triggerRegistration, setTriggerRegistration}) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token)
            setIsVisible(true)
    }, [])
    return (
        <div className='absolute z-10 top-0 left-0 h-screen w-full flex justify-center items-center bg-zinc-800 bg-opacity-50' onClick={() => setTriggerNav(!triggerNav)}>
            <div className='min-h-[40vh] w-[80%] bg-white shadow-lg flex flex-col justify-center items-center rounded-lg p-5'>
                <div className='h-10 w-full px-2 flex justify-between'>
                    <p className='font-semibold text-4xl'>Welcome</p>
                    <button className='h-full w-10 text-base bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-bold' onClick={() => setTriggerNav(!triggerNav)}>X</button>
                </div>
                <ul className='list-none py-5 flex flex-col justify-center items-center gap-3 w-full'>
                    
                    {
                        isVisible ? <li className='cursor-pointer font-semibold text-blue-500 text-3xl border-b-2 border-blue-600' onClick = {() => window.location = '/dashboard'}>Dashboard</li> : <li className='cursor-pointer font-semibold text-blue-500 text-3xl border-b-2 border-blue-600' onClick={() => setTriggerRegistration(!triggerRegistration)}>Sign in</li>
                    }

                    <li className='cursor-pointer font-semibold text-blue-500 text-3xl border-b-2 border-blue-600'>Refer & Earn</li>
                    <li className='cursor-pointer font-semibold text-blue-500 text-3xl border-b-2 border-blue-600'>Resources</li>
                    <li className='cursor-pointer font-semibold text-blue-500 text-3xl border-b-2 border-blue-600'>About Us</li>
                </ul>
            </div>
        </div>
    )
}
export default DropdownNav
