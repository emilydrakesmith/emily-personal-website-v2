/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {Link} from 'gatsby';
import {graphql} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../styles/home.module.css';
import about_icon from '../images/icons/about-icon.svg';
import projects_icon from '../images/icons/projects-icon.svg';
import resources_icon from '../images/icons/resources-icon.svg';
import contact_icon from '../images/icons/contact-icon.svg';
/******* END: IMPORT LOCAL FILES *******/


export default function Home({data}) {
	const {email} = data.site.siteMetadata;
	
	const linkArray = [
		{
			title: 'About Me',
			icon: about_icon,
			altText: 'icon for link to About Me page',
			path: '/about',
			css: styles.about_div
		},
		{
			title: 'Projects',
			icon: projects_icon,
			altText: 'icon for link to Projects page',
			path: '/projects',
			css: styles.projects_div
		},
		{
			title: 'Resources',
			icon: resources_icon,
			altText: 'icon for link to Resources page',
			path: '/resources',
			css: styles.resources_div
		},
		{
			title: 'Contact',
			icon: contact_icon,
			altText: 'icon for link to Contact page',
			path: '/contact',
			css: styles.contact_div
		}
	];

	const linkData = linkArray.map((link, idx) => (
		<Link to={link.path} className={link.css} key={idx}>
			<img src={link.icon} alt={link.altText}/>
			<h4>{link.title}</h4>
		</Link>
	));

	return (
			<div className={styles.home_main}>
				<section className={styles.grid_intro}>
					<h4>Hi, my name is</h4>
					<h1>Emily Drake Smith</h1>
					<p>I'm a software engineer in Boston who specializes in creating outstanding solutions for people and professionals alike.  Right now I'm on a team with <a href='https://www.crocswap.com/' target='_blank'>Crocodile Labs</a> building a new DeFi cryptocurrency exchange platform.</p>
					<a href={`mailto:${email}`} className={styles.contact_button}>
						Talk to Me
					</a>
				</section>
				<section className={styles.nav_links}>
					{linkData}
				</section>
			</div>
	);
}

export const query = graphql`
	query IndexPageMetadata {
		site {
			siteMetadata {
				email
			}
		}
	}
`