/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import github_icon from '../images/icons/github-icon.svg';
import codepen_icon from '../images/icons/codepen-icon.svg';
import linkedin_icon from '../images/icons/linkedin-icon.svg';
import twitter_icon from '../images/icons/twitter-icon.svg';
import pinterest_icon from '../images/icons/pinterest-icon.svg';
import mastodon_icon from '../images/icons/mastodon-icon.svg';
import instagram_icon from '../images/icons/instagram-icon.svg';
/******* END: IMPORT LOCAL FILES *******/


export default function LeftSidenav() {
    const leftSidenavArray = [
        {
            url: 'https://github.com/emilydrakesmith/',
            imgSrc: github_icon,
            altText: 'icon for external link to my GitHub profile'
        },
        {
            url: 'https://codepen.io/mhsmith321/',
            imgSrc: codepen_icon,
            altText: 'icon for external link to my CodePen profile'
        },
        {
            url: 'https://www.linkedin.com/in/emily-drake-smith/',
            imgSrc: linkedin_icon,
            altText: 'icon for external link to my LinkedIn profile'
        },
        {
            url: 'https://twitter.com/emilydrakesmith/',
            imgSrc: twitter_icon,
            altText: 'icon for external link to my Twitter profile'
        },
        {
            url: 'https://mstdn.party/@emilyds/',
            imgSrc: mastodon_icon,
            altText: 'icon for external link to my Mastodon profile'
        },
        {
            url: 'https://www.instagram.com/emily.drake.smith/',
            imgSrc: instagram_icon,
            altText: 'icon for external link to my Instagram profile'
        },
        {
            url: 'https://www.pinterest.com/martysmith58726/',
            imgSrc: pinterest_icon,
            altText: 'icon for external link to my Pinterest profile'
        }
    ];

    const leftSidenavData = leftSidenavArray.map(dest =>
        <a href={dest.url} target='_blank' rel='me' key={JSON.stringify(dest)}>
            <img src={dest.imgSrc} alt={dest.altText} />
        </a>
    );

    return (
        <nav id='sidenav'>
            {leftSidenavData}
        </nav>
    );
}