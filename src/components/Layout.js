/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Helmet} from "react-helmet";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Header from './Header';
import LeftSidenav from './LeftSidenav';
import RightSidenav from './RightSidenav';
import Footer from './Footer';
import '../styles/global.css';
/******* END: IMPORT LOCAL FILES *******/


export default function Layout({children}) {
    const data = useStaticQuery(graphql`
        query siteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const {title} = data.site.siteMetadata;

    return (
        <div id='layout'>
            <Helmet>
                <link rel="canonical" href="https://martysmith.tech" />
                <link rel="icon" href="../images/favicons/favicon-16x16.png" type="image/png" />
                <title>{title}</title>
            </Helmet>
            <Header />
            <LeftSidenav />
            <main id='main'>
                {children}
            </main>
            <RightSidenav />
            <Footer />
        </div>
    );
}