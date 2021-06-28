/******* START: IMPORT REACT AND DONGLES *******/
import React, {useState} from 'react';
import {Link} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/


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

    const handleToggle = () => {
        setOpen(!open);
    }
    
    return (
        <header>
            <Link to='/' className='navlink'>
                <h1>M</h1>
            </Link>
            <nav id='header-nav'>
                {navLinks}
            </nav>
            
            <nav id="mobile-header-nav">
                <section id='hamburger' onClick={() => handleToggle()}>
                    <div className='burger-bar'></div>
                    <div className='burger-bar'></div>
                    <div className='burger-bar'></div>
                </section>
                <section id='mobile-header-menu' className={open ? 'null' : 'hide-div'}>
                    {navLinks}
                </section>
            </nav>
        </header>
    );
}