/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
/******* END: IMPORT REACT AND DONGLES *******/

/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function Home() {
	return (
		<Layout>
				<h2>Hi, I'm Marty.</h2>
				<h3>I like to build things.</h3>
		</Layout>
	);
}