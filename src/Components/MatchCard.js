import React from 'react';

const MatchCard = () => {
    return (
        <div className='bg-[#070f34]  relative shadow-2xl rounded-xl shadow-black w-full py-2 px-4'>
            <span className='px-2 py-1 text-black absolute bg-gray-200 rounded-[20px] font-[500] text-sm'>Live</span>
            <div className='flex pt-9 pb-14 items-center px-5 w-full justify-around'>
                
                <div className='flex flex-col justify-center items-center'>
                    <p className='score'>2</p>
                    <p className='score text-lg -mt-4 font-[500]'>Team 1</p>
                </div>

                <p className='score text-lg'>{"<. >"}</p>

                <div className='flex flex-col justify-center items-center'>
                    <p className='score'>2</p>
                    <p className='score text-lg -mt-4 font-[500]'>Team 2</p>
                </div>
            </div>
        </div>
    )
}

export default MatchCard