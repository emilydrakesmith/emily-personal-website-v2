/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {Link} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../styles/resources.module.css';
import tutorials_icon from '../images/icons/tutorials-icon.svg';
import web_dev_icon from '../images/icons/web-dev-icon.svg';
import html_css_icon from '../images/icons/html-css-icon.svg';
// import javascript_icon from '../images/icons/javascript-icon.svg';
import react_icon from '../images/icons/react-icon.svg';
import gatsby_icon from '../images/icons/gatsby-icon.svg';
import lgbtq_icon from '../images/icons/lgbtq-icon.svg';
/******* END: IMPORT LOCAL FILES *******/

export default function Resources() {
    const resourcesLinkArray = [
        {
            title: 'Tutorials',
            icon: tutorials_icon,
            altText: 'icon for link to Tutorials resources page',
            path: '/resources/tutorials',
        },
        {
            title: 'Web Dev',
            icon: web_dev_icon,
            altText: 'icon for link to Web Development resources page',
            path: '/resources/web-development',
        },
        {
            title: 'HTML & CSS',
            icon: html_css_icon,
            altText: 'icon for link to HTML & CSS resources page',
            path: '/resources/html-css',
        },
        // {
        //     title: 'JavaScript',
        //     icon: javascript_icon,
        //     altText: 'icon for link to JavaScript resources page',
        //     path: '/resources/javascript'
        // },
        {
            title: 'React',
            icon: react_icon,
            altText: 'icon for link to React resources page',
            path: '/resources/react'
        },
        {
            title: 'Gatsby',
            icon: gatsby_icon,
            altText: 'icon for link to Gatsby resources page',
            path: '/resources/gatsby-js'
        },
        {
            title: 'LGBTQ+',
            icon: lgbtq_icon,
            altText: 'icon for link to LGBTQ+ resources page',
            path: '/resources/lgbtq'
        }
    ];

    const resourcesLinkData = resourcesLinkArray.map((link, idx) => (
        <Link to={link.path} className={styles.resource_link} key={idx}>
            <img src={link.icon} alt={link.altText} />
            <h4>{link.title}</h4>
        </Link>
    ));

    return (
            <div className={styles.resources_main}>
                <section>
                    <h1>Resources</h1>
                    <hr />
                </section>
                <section className={styles.resources_content}>
                    {resourcesLinkData}
                </section>
            </div>
	);
}