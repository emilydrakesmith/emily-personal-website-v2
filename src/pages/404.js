/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../styles/404.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function NotFound() {
    const text = 
    <>
        <p>Oh. Well. This is embarrassing.</p>
        <p>There's no page here.  What were you trying to do?</p>
        <p>If there's a dead link somewhere on my page, do me a solid and email me about it?</p>
    </>;

    return (
            <div className={styles.notfound_main}>
                <section>
                    <h1>404</h1>
                    <hr />
                </section>
                <section className={styles.notfound_content}>
                    {text}
                </section>
            </div>
    );
}