import React from 'react';
import {Link} from 'gatsby';

export default function Header() {
    const destinations = [
        {path: '/', idString: 'navlink-home', text: 'Home'},
        {path: '/about', idString: 'navlink-about', text: 'About'},
        {path: '/projects', idString: 'navlink-projects', text: 'Projects'},
        {path: '/resources', idString: 'navlink-resources', text: 'Resources'},
        {path: '/contact', idString: 'navlink-contact', text: 'Contact'}
    ];
    
    return (
        <header>
            <Link to='/' className='navlink'>
                <h1>M</h1>
            </Link>
            <nav id='header-nav'>
                {destinations.map((dest, idx) => <Link to={dest.path} id={dest.idString} className='navlink' key={idx}>{dest.text}</Link>)}
            </nav>
        </header>
    );
}