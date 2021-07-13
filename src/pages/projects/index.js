/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {graphql, Link} from "gatsby";
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../../styles/projects.module.css';
/******* END: IMPORT LOCAL FILES *******/


/**     IMPORTANT!
 * 
 *      I know for a fact that at some point I'm going to ask why this page is alone in its own
 *      directory.  The reason is that once I make a /projects/other-projects sub-directory that
 *      page will need to be coded in here.  Then Gatsby will make that page a sub-directory of
 *      the directory this index page is sitting in.  Don't take this file out of the folder it's
 *      in until I'm absolutely sure I know how I want to arrange the pathways for main and other
 *      projects when this site is fully-realized.
 */


export default function Projects({data}) {
    const projects = data.allMarkdownRemark.nodes;
    // TODO: format tech stack data with bullets:
    // const bullet = <span className={styles.yellow_separator}> • </span>;

    const projectLinkData = projects.map(project => (
        <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
            <div className={styles.picture_frame}>
                <Img fluid={project.frontmatter.fullImg.childImageSharp.fluid}/>
            </div>
            <h3>{project.frontmatter.title}</h3>
            <h4>{project.frontmatter.stack}</h4>
        </Link>
    ));

	return (
            <div className={styles.projects_main}>
                <section>
                    <h1>Projects</h1>
                    <hr />
                </section>
                <section className={styles.project_previews}>
                    {projectLinkData}
                    {/* TODO: make an 'other projects page featuring minor projects */}
                    {/* <Link to='/projects/other-projects'>
                        <h3>Other Projects</h3>
                    </Link> */}
                </section>
            </div>
	);
}

// export page query
export const query = graphql`
    query MainProjects {
        allMarkdownRemark(
            filter: {frontmatter: {main: {eq: true}}}
            sort: {fields: frontmatter___sequence}
            ) {
            nodes {
                frontmatter {
                    main
                    slug
                    stack
                    title
                    sequence
                    fullImg {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                id
            }
        }
    }
`