import React from 'react';
import {Link} from 'gatsby';

export default function Header() {
    return (
        <header>
            <Link to='/' className='navlink'>
                <h1>M</h1>
            </Link>
            <nav id='header-nav'>
                <Link to='/about' id='navlink-about' className='navlink'>About</Link>
                <Link to='/projects' id='navlink-projects' className='navlink'>Projects</Link>
                <Link to='/resources' id='navlink-resources' className='navlink'>Resources</Link>
                <Link to='/contact' id='navlink-contact' className='navlink'>Contact</Link>
            </nav>
        </header>
    );
}