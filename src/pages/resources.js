/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/resources.module.css';
/******* END: IMPORT LOCAL FILES *******/

export default function Resources() {
	const placeholder = 
        <>
            <p>Hello there!</p>
            <p>Yes, this page is basically blank.  No, you're not seeing a 404 error.  Why not, you wonder?</p>
            <p>I'd like to use this page to organize and publicize various resources and tools that I like using.  This will be an effort which is both large and ongoing.  It won't be something which is ever really "done" unless I retire and leave the industry.</p>
            <p>Of course I don't actually need to fully-realize this page to publish it, but I want to spend some time getting a minimum critical mass of content on it.  I also don't want that to hold up publication of this page in general.</p>
            <p>If you check back in a few days I'll have real content here.</p>
            <p>Have a great day!</p>
        </>;
    
    return (
        <Layout>
            <div className={styles.resources_main}>
                <section>
                    <h1>Resources</h1>
                    <hr />
                </section>
                <section className={styles.resources_content}>
                    {placeholder}
                </section>
            </div>
        </Layout>
	);
}