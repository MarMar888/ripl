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
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/services'>Services</a>
        <a href='/contact'>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
