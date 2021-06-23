import React, {useState} from 'react';
import {Link} from 'gatsby';


export default function Header() {
    const destinations = [
        {path: '/', idString: 'navlink-home', text: 'Home'},
        {path: '/about', idString: 'navlink-about', text: 'About'},
        {path: '/projects', idString: 'navlink-projects', text: 'Projects'},
        {path: '/resources', idString: 'navlink-resources', text: 'Resources'},
        {path: '/contact', idString: 'navlink-contact', text: 'Contact'}
    ];
    const navLinks = destinations.map((dest, idx) => <Link to={dest.path} id={dest.idString} className='navlink' key={idx}>{dest.text}</Link>);

    const [open, setOpen] = useState(false);
    
    return (
        <header>
            <Link to='/' className='navlink'>
                <h1>M</h1>
            </Link>
            <nav id='header-nav'>
                {navLinks}
            </nav>
            
            <nav id="mobile-header-nav">
                <section>
                    X
                </section>
                <section id='mobile-header-menu'>

                </section>
            </nav>

        </header>
    );
}