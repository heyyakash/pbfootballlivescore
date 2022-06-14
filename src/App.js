import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Finished from './Components/Finished';

function App() {
  return (
    <>
      <div className='px-4 mx-auto mb-5 text-white max-w-[700px]'>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path = '/' element = {<Home />} />
          <Route exact path = '/finished' element = {<Finished />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
