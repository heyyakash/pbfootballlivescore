import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-5 px-2 flex gap-4'>
            <a href="#">
                <div className='flex flex-col'>
                    <h2 className='text-3xl text-white font-bold'>Live</h2>
                    <h2 className='text-3xl text-white font-bold opacity-60'>Match</h2>
                </div>
            </a>

            <a href="#">
                <div className='flex flex-col opacity-20'>
                    <h2 className='text-3xl text-white font-bold bg-opacity-30'>Finished</h2>
               
                </div>
            </a>
        </nav>
    )
}

export default Navbar