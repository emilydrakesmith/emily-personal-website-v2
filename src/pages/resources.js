/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {Link} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/resources.module.css';
import web_dev_icon from '../images/icons/web-dev-icon.svg';
import html_css_icon from '../images/icons/html-css-icon.svg';
import javascript_icon from '../images/icons/javascript-icon.svg';
import react_icon from '../images/icons/react-icon.svg';
/******* END: IMPORT LOCAL FILES *******/

export default function Resources() {
    const resourcesLinkArray = [
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
        {
            title: 'JavaScript',
            icon: javascript_icon,
            altText: 'icon for link to JavaScript resources page',
            path: '/resources/javascript'
        },
        {
            title: 'React',
            icon: react_icon,
            altText: 'icon for link to React resources page',
            path: '/resources/react'
        }
    ];

    const resourcesLinkData = resourcesLinkArray.map((link, idx) => (
        <Link to={link.path} className={styles.resource_link} key={idx}>
            <img src={link.icon} />
            <h4>{link.title}</h4>
        </Link>
    ));

    return (
        <Layout>
            <div className={styles.resources_main}>
                <section>
                    <h1>Resources</h1>
                    <hr />
                </section>
                <section className={styles.resources_content}>
                    {resourcesLinkData}
                </section>
            </div>
        </Layout>
	);
}