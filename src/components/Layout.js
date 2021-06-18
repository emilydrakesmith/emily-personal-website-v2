/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Helmet} from "react-helmet";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Header from './Header';
import '../styles/global.css';
/******* END: IMPORT LOCAL FILES *******/


export default function Layout({children}) {
    const data = useStaticQuery(graphql`
        query siteInfo {
            site {
                siteMetadata {
                    title,
                    copyright
                }
            }
        }
    `);

    const {title} = data.site.siteMetadata;
    const {copyright} = data.site.siteMetadata;

    return (
        <div id='layout'>
            <Helmet>
                <link rel="canonical" href="https://martysmith.tech" />
                <link rel="manifest" href="manifest.json" />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main id='main'>
                {children}
            </main>
            <footer id='footer'>
                <p>{copyright}</p>
            </footer>
        </div>
    );
}