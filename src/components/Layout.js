/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
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
        <div className='layout'>
            <Helmet>
                <title>{title}</title>
                <link rel="canonical" href="https://martysmith.tech" />
            </Helmet>
            <Header />
            <main className='content'>
                {children}
            </main>
            <footer>
                <p>{copyright}</p>
            </footer>
        </div>
    );
}