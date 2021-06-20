/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/project-details.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function ProjectDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>Title</h2>
                <h3>Stack</h3>
                <div className={styles.featured}>
                    {/* <Img fluid={} /> */}
                </div>
                {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
            </div>
        </Layout>
    );
}