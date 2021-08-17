/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import github_icon from '../images/icons/github-icon.svg';
import codepen_icon from '../images/icons/codepen-icon.svg';
import linkedin_icon from '../images/icons/linkedin-icon.svg';
import twitter_icon from '../images/icons/twitter-icon.svg';
/******* END: IMPORT LOCAL FILES *******/


export default function LeftSidenav() {
    const leftSidenavArray = [
        {
            url: 'https://github.com/mhsmith321',
            imgSrc: github_icon,
            altText: 'icon for external link to my GitHub profile'
        },
        {
            url: 'https://codepen.io/mhsmith321',
            imgSrc: codepen_icon,
            altText: 'icon for external link to my CodePen profile'
        },
        {
            url: 'https://www.linkedin.com/in/the-marty-smith',
            imgSrc: linkedin_icon,
            altText: 'icon for external link to my LinkedIn profile'
        },
        {
            url: 'https://twitter.com/doctrfed',
            imgSrc: twitter_icon,
            altText: 'icon for external link to my Twitter profile'
        }
    ];

    const leftSidenavData = leftSidenavArray.map(dest =>
        <a href={dest.url} target='blank' rel='noreferrer'>
            <img src={dest.imgSrc} alt={dest.altText} />
        </a>
    );
    
    return (
        <nav id='sidenav'>
            {leftSidenavData}
        </nav>
    );
}