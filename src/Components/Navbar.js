import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const {pathname} = location;
    return (
        <nav className='py-5 px-2 flex gap-4'>
            <Link to="/">
                <div className={`flex ${pathname==='/'?"":"opacity-20"} flex-col`}>
                    <h2 className='text-3xl text-white font-bold'>Live</h2>
                    <h2 className='text-3xl text-white font-bold opacity-60'>Match</h2>
                </div>
            </Link>

            <Link to="/finished">
                <div className={`flex ${pathname==='/finished'?"":"opacity-20"} flex-col`}>
                    <h2 className='text-3xl text-white font-bold bg-opacity-30'>Finished</h2>
               
                </div>
            </Link>
        </nav>
    )
}

export default Navbar