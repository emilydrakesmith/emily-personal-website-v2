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
    return (
        <nav id='sidenav'>
            <a href='https://github.com/mhsmith321' target="_blank">
                <img src={github_icon} alt='icon for external link to my GitHub profile'/>
            </a>
            <a href='https://codepen.io/mhsmith321' target="_blank">
                <img src={codepen_icon} alt='icon for external link to my CodePen profile'/>
            </a>
            <a href='https://www.linkedin.com/in/the-marty-smith/' target="_blank">
                <img src={linkedin_icon} alt='icon for external link to my LinkedIn profile'/>
            </a>
            <a href='https://twitter.com/doctrfed' target="_blank">
                <img src={twitter_icon} alt='icon for external link to my Twitter profile'/>
            </a>
        </nav>
    );
}