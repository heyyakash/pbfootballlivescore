import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Header from './Components/Header';

function App() {
  return (
    <>
      <div className='px-4 mx-auto mb-5 text-white max-w-[700px]'>
        <Header />
        <Routes>
          <Route exact path='*' element={<Home />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
      </div>


      </>
      );
};

      export default App;
