import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4">
      <NavLink to="/">dashboard</NavLink>
      <NavLink to="/student">student</NavLink>
      <NavLink to="/teacher">teacher</NavLink>
      <NavLink to="/class">class</NavLink>
    </nav>
  );
};

export default Navbar;
