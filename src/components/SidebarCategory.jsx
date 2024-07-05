import React from 'react';
import { categories } from '../constant';
import downArrow from '../assets/downArrow.svg'
const SidebarCategory = () => {
  return (
    <div className='h-fit w-64 rounded-lg overflow-hidden shadow-xl'>
        <div className='h-fit w-full flex justify-between p-3 bg-blue-600 cursor-pointer'>
            <h2 className='text-white  text-xl  font-semibold'>ALL PROGRAMS</h2>
            <img className='-rotate-90' src={downArrow} alt=''/>
        </div>
        <div className='h-fit'>
            {
                categories && categories.map((category) => {
                    return <p className='text-lg p-3 font-medium border-t-2 hover:text-blue-500 cursor-pointer'>{category}</p>
                })
            }
        </div>
    </div>
  );
};

export default SidebarCategory;


                            