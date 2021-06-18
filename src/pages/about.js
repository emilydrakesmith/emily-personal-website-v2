/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css';
/******* START: IMPORT LOCAL FILES *******/


export default function About() {
	return (
        <Layout>
            <div className={styles.main}>
                <h2>Hi, I'm Marty Smith.</h2>
                <h3>Learn some more about me here.</h3>
            </div>
        </Layout>
	);
}