import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Current from './Current';
import Finished from './Finished';
import Header from './Header';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Routes>
            <Route exact path = "/" element ={<Current />} />
            <Route exact path = "/finished" element ={<Finished />} />
            </Routes>
        </>
    )
}

export default Home