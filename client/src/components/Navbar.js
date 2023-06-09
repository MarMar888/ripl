import React from 'react';
import { Link } from 'react-router-dom';
import AddExperience from './AddExperience';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='ripl'>
        <img src={process.env.PUBLIC_URL + '/Ripl Dark (1).png'} alt='Ripl Company' className='ripl-image' />
        <span>Ripl</span>
      </h1>

      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
