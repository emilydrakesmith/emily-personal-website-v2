/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/resource-details.module.css';
/******* END: IMPORT LOCAL FILES *******/

export default function ResourceDetails({location, data}) {
    const {nodes} = data.allMarkdownRemark;
    const {pathname} = location;
    
    let pageTitle = '';
    switch (pathname) {
        case '/resources/web-development':
            pageTitle = 'Web Development';
            break;
        case '/resources/html-css':
            pageTitle = 'HTML & CSS';
            break;
        case '/resources/javascript':
            pageTitle = 'JavaScript';
            break;
        case '/resources/react':
            pageTitle = 'React';
            break;
        default:
            pageTitle = 'Resources';
    }

    const resourceLinks = nodes.map((node, idx) => (
        <article className={styles.resource_article} key={idx}>
            <div className={styles.green_line_left} />
            <div className={styles.resource_article_content}>
                <h2>{node.frontmatter.title}</h2>
                <div className={styles.resource_article_details}>
                    <div className={styles.resource_picture_frame}>
                        {/* <Img fluid={node.frontmatter.squareImg.childImageSharp.fluid} /> */}
                    </div>
                    <div className={styles.resource_article_text}>
                        <div className={styles.resource_details_html} dangerouslySetInnerHTML={{__html: node.html}} />
                        <div className={styles.resource_linkdiv}>
                            <a href={node.frontmatter.url} target="_blank" rel="noreferrer">Click to Open</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    ));

    return (
        <Layout>
            <div className={styles.resource_subgroup}>
                <section className={styles.resource_subgroup_header}>
                    <h1>{pageTitle}</h1>
                    <hr />
                </section>
                <section>
                    {resourceLinks}
                </section>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query ResourceDetails($subgroup: String) {
        allMarkdownRemark(filter: {frontmatter: {subgroup: {eq: $subgroup}}}) {
            nodes {
                frontmatter {
                    title
                    url
                    squareImg {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                html
            }
        }
    }
`