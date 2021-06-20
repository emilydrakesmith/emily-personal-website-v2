/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects/projects.module.css';
/******* END: IMPORT LOCAL FILES *******/

export default function Projects() {
	return (
        <Layout>
            <div className={styles.projects_main}>
                <section>
                    <h1>Projects</h1>
                    <hr />
                </section>
                <section>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                </section>
            </div>
        </Layout>
	);
}