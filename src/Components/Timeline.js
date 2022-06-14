import React from 'react'
import {BiFootball} from 'react-icons/bi';
import {TbRectangleVertical} from 'react-icons/tb';

const Timeline = () => {
  return (
    <div className='bg-[#070f34] flex flex-col relative shadow-2xl  rounded-xl shadow-black w-full py-2 px-4'>
        
        <h3 className='p-2 text-white font-bold flex justify-center items-center'>
            Timeline
        </h3>

        <div className="flex my-4 text-white justify-between">
            <div className='flex gap-2 flex-col items-start'>
                <div className='flex gap-2 justify-center items-center'>
                    <p className='font-extrabold'>12'</p>
                    <p className='font-bold'>Ronaldo</p>
                    <p className='font-bold'><BiFootball /></p>
                </div>
                <div className='flex  gap-2 justify-center items-center'>
                    <p className='font-extrabold'>88'</p>
                    <p className='font-bold'>Ronaldo</p>
                    <p className='font-bold'><BiFootball /></p>
                </div>
                <div className='flex  gap-2 justify-center items-center'>
                    <p className='font-extrabold'>58'</p>
                    <p className='font-bold'>H. Maguire</p>
                    <p className='font-bold text-red-600'><TbRectangleVertical /></p>
                </div>
            </div>

            <div className='flex gap-2 flex-col items-end'>
                <div className='flex gap-2 flex-row-reverse justify-center items-center'>
                    <p className='font-extrabold'>18'</p>
                    <p className='font-bold'>L. Messi</p>
                    <p className='font-bold'><BiFootball /></p>
                </div>
                <div className='flex gap-2 flex-row-reverse justify-center items-center'>
                    <p className='font-extrabold'>78'</p>
                    <p className='font-bold'>L. Messi</p>
                    <p className='font-bold'><BiFootball /></p>
                </div>
                <div className='flex gap-2 flex-row-reverse justify-center items-center'>
                    <p className='font-extrabold'>90'</p>
                    <p className='font-bold'>S. Ramos</p>
                    <p className='font-bold text-red-600'><TbRectangleVertical /></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Timeline