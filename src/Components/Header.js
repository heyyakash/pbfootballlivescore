import React from 'react';
import {BsFillMoonFill} from 'react-icons/bs';

const Header = () => {
  return (
    <header>
        <div className='flex items-center justify-between pb-4 pt-2'>
            <div className='text-[4rem] font-extrabold'>{"<. >"}</div>
            <div className='p-2 cursor-pointer shadow-2xl shadow-black bg-[#070f34] rounded-lg'>
                <BsFillMoonFill />
            </div>
        </div>
    </header>
  )
}

export default Header