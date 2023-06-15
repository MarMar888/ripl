import React from 'react';
import { Link } from 'react-router-dom';
import AddExperience from './AddExperience';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-experience">Add Experience</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
