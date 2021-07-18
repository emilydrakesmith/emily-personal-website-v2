/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage} from "gatsby-plugin-image";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../styles/project-details.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function ProjectDetails({data}) {
	const {html} = data.markdownRemark;
	const {title, app, repo} = data.markdownRemark.frontmatter;
	const fluid = data.markdownRemark.frontmatter.fullImg.childImageSharp.gatsbyImageData;

	return (
		<article className={styles.details}>
			<h1>{title}</h1>
			<hr />
			<section className={styles.details_content}>
				<div className={styles.project_picture_frame}>
					<GatsbyImage alt={title} image={fluid} />
				</div>
				<div className={styles.details_text} >
					<div className={styles.project_details_html} dangerouslySetInnerHTML={{__html: html}} />
					<div className={styles.details_linkdiv}>
						<a href={app} target="_blank" rel="noreferrer">Link to Live App</a>
					</div>
					<div className={styles.details_linkdiv}>
						<a href={repo} target="_blank" rel="noreferrer">Link to Repo</a>
					</div>
				</div>
			</section>
		</article>
	);
}

export const query = graphql`query ProjectDetail($slug: String) {
	markdownRemark(frontmatter: {slug: {eq: $slug}}) {
		html
		frontmatter {
			title
			app
			repo
			fullImg {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH)
				}
			}
		}
	}
}`