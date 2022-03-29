import React from 'react';
import { Link, Route, Routes, useResolvedPath, useMatch } from 'react-router-dom';
import About from './About/About';
import Friends from './DynamicRoute/Friends/Friends';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const ReactRouter = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><CustomLink to='/'>Home</CustomLink></li>
          <li><CustomLink to='/about'>About</CustomLink></li>
          <li><CustomLink to='/friends'>Friends</CustomLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='friends' element={<Friends/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ color: match ? 'red': 'black', textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default ReactRouter;