import React from 'react'
import MatchCard from './MatchCard';
import Timeline from './Timeline';

const Current = () => {
  return (
    <>

            <h4 className='font-bold px-2 mt-6  mb-3 text-white'>
                Current Match
            </h4>
            <div className='px-2'>
                <MatchCard />
                <div className="mt-5">
                    <Timeline />
                </div>
            </div>

        </>
  )
}

export default Current