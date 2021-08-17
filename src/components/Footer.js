/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/


export default function Footer() {
    const data = useStaticQuery(graphql`
        query FooterInfo {
            site {
                siteMetadata {
                    copyright
                }
            }
        }
    `);

    const {copyright} = data.site.siteMetadata;

    return (
        <footer id='footer'>
            <p>{copyright}</p>
        </footer>
    );
}