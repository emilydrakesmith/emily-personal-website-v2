import React from 'react';
import {Link} from 'gatsby';

export default function Header() {
    return (
        <header>
            <h1>Marty Smith</h1>
            <nav id='header-nav'>
                <Link to='/' className='navlink'>Home</Link>
                <Link to='/about' className='navlink'>About</Link>
                <Link to='/projects' className='navlink'>Projects</Link>
                <Link to='/resources' className='navlink'>Resources</Link>
                <Link to='/contact' className='navlink'>Contact</Link>
            </nav>
        </header>
    );
}