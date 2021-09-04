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
import favicon from '../images/favicons/favicon.ico';
/******* END: IMPORT LOCAL FILES *******/


export default function Layout({children}) {
    const data = useStaticQuery(graphql`
        query siteInfo {
            site {
                siteMetadata {
                    title
                    author
                    long_description
                    url
                }
            }
        }
    `);

    const {title, author, long_description, url} = data.site.siteMetadata;

    return (
        <div id='layout'>
            <Helmet>
                <meta name='author' content={author} />
                <meta name='description' content={long_description} />
                <link rel="canonical" href={url} />
                <link rel="icon" href={favicon} type="image/x-icon" />
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