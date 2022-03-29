import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const ReactRouter = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default ReactRouter;