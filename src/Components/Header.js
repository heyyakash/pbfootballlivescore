import React from 'react';
import {BsFillMoonFill} from 'react-icons/bs';
import {IoFootball} from 'react-icons/io5';

const Header = () => {
  return (
    <header>
        <div className='flex items-center justify-between pb-4 pt-6'>
            <div className='text-[4rem] font-extrabold flex justify-center leading-[3rem] items-end'>{"<"}<p className='font-bold text-2xl text-white '><IoFootball /></p>&nbsp;{">"} </div>
            <div className='p-2 cursor-pointer shadow-2xl shadow-black bg-[#070f34] rounded-lg'>
                <BsFillMoonFill />
            </div>
        </div>
    </header>
  )
}

export default Header