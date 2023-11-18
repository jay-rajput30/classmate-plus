import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-1 items-baseline">
      <h1 className="text-headingText font-heading">classmate plus</h1>
      <div className="flex justify-between gap-2">
        <NavLink to="/">dashboard</NavLink>
        <NavLink to="/student">student</NavLink>
        <NavLink to="/teacher">teacher</NavLink>
        <NavLink to="/class">class</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
