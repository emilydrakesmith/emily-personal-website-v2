/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {graphql, Link} from "gatsby";
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function Projects({data}) {
    const projects = data.allMarkdownRemark.nodes;

	return (
        <Layout>
            <div className={styles.projects_main}>
                <section>
                    <h1>Projects</h1>
                    <hr />
                </section>
                <section className={styles.project_previews}>
                    {projects.map(project => (
                        <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                            <div className={styles.picture_frame}>
                                <Img fluid={project.frontmatter.fullImg.childImageSharp.fluid}/>
                            </div>
                            <h3>{project.frontmatter.title}</h3>
                            <h4>{project.frontmatter.stack}</h4>
                        </Link>
                    ))}
                    <Link to='/projects/other-projects'>
                        <h3>Other Projects</h3>
                    </Link>
                </section>
            </div>
        </Layout>
	);
}

// export page query
export const query = graphql`
    query MainProjects {
        allMarkdownRemark(filter: {frontmatter: {main: {eq: true}}}) {
            nodes {
                frontmatter {
                    main
                    slug
                    stack
                    title
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