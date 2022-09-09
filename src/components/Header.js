/******* START: IMPORT REACT AND DONGLES *******/
import React, {useState} from 'react';
import {Link} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import hamburger_icon from '../images/icons/hamburger-icon.svg';
/******* END: IMPORT LOCAL FILES *******/


export default function Header() {
    const destinations = [
        {path: '/', idString: 'navlink-home', text: 'Home'},
        {path: '/about', idString: 'navlink-about', text: 'About'},
        {path: '/projects', idString: 'navlink-projects', text: 'Projects'},
        {path: '/resources', idString: 'navlink-resources', text: 'Resources'},
        {path: '/contact', idString: 'navlink-contact', text: 'Contact'}
    ];
    
    const links = destinations.map((dest, idx) => <Link to={dest.path} id={dest.idString} className='navlink' key={idx}>{dest.text}</Link>);

    const mobileHeaderMenu = <section id='mobile-header-menu'>
        {links}
    </section>;

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <header>
            <Link to='/' className='navlink'>
                <h1>E</h1>
            </Link>
            <nav id='header-nav'>
                {links}
            </nav>
            
            <nav id="mobile-header-nav">
                <img src={hamburger_icon} alt='hamburger menu icon' id='hamburger' onClick={() => handleToggle()}/>
                {open && mobileHeaderMenu}
            </nav>
        </header>
    );
}