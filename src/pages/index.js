/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {Link} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/

/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import about_icon from '../images/icons/about-icon.svg';
import projects_icon from '../images/icons/projects-icon.svg';
import resources_icon from '../images/icons/resources-icon.svg';
import contact_icon from '../images/icons/contact-icon.svg';
/******* END: IMPORT LOCAL FILES *******/


export default function Home() {
	return (
		<Layout>
			<section className={styles.grid_intro}>
				<h4>Hi, my name is</h4>
				<h2>Marty Smith</h2>
				<p>I'm a software engineer who specializes in creating outstanding solutions for people and professionals alike.  Currently I reside in Columbia, South Carolina.</p>
				<a href='mailto:marty.smith01@yahoo.com' className={styles.contact_button}>
					<div>
						Talk to Me
					</div>
				</a>
			</section>
			<section className={styles.nav_links}>
				<Link to='/about'>
					<div className={styles.about_div}>
						<img src={about_icon} alt='icon for "about" page link'/>
						<h4>About Me</h4>
					</div>
				</Link>
				<Link to='/projects'>
					<div className={styles.projects_div}>
						<img src={projects_icon}  alt='icon for "projects" page link'/>
						<h4>Projects</h4>
					</div>
				</Link>
				<Link to='/resources'>
					<div className={styles.resources_div}>
						<img src={resources_icon}  alt='icon for "resources" page link'/>
						<h4>Resources</h4>
					</div>
				</Link>
				<Link to='/contact'>
					<div className={styles.contact_div}>
						<img src={contact_icon}  alt='icon for "contact" page link'/>
						<h4>Contact</h4>
					</div>
				</Link>
			</section>
		</Layout>
	);
}