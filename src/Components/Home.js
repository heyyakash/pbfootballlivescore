import React from 'react'
import Header from './Header'
import MatchCard from './MatchCard'
import Navbar from './Navbar'
import Timeline from './Timeline'

const Home = () => {
    return (
        <div className='px-4 mx-auto mb-5 text-white max-w-[700px]'>
            <Header />
            <Navbar />

            <h4 className='font-bold mt-6 px-2 mb-3 text-white'>
                Current Match
            </h4>
            <div className="px-2">
                <MatchCard />
                <div className="mt-4">
                    <Timeline />
                </div>
            </div>

        </div>
    )
}

export default Home