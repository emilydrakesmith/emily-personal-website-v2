/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/

export default function RightSidenav() {
    const data = useStaticQuery(graphql`
        query RightSidenavInfo {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `);

    const {email} = data.site.siteMetadata;

    return (
        <nav id='right-sidenav'>
            <a href={`mailto:${email}`}>{email}</a>
        </nav>
    );
}