/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/resource-details.module.css';
/******* END: IMPORT LOCAL FILES *******/

export default function ResourceDetails({data}) {
    const {nodes} = data.allMarkdownRemark;
    console.log(nodes);
    const resourceLinks = nodes.map((node, idx) => (
        <article className={styles.resource_article} key={idx}>
            <div className={styles.green_line_left}></div>
            <div className={styles.resource_article_content}>
                <h2>{node.frontmatter.title}</h2>
                <div className={styles.resource_details_html} dangerouslySetInnerHTML={{__html: node.html}} />
            </div>
        </article>
    ))

    return (
        <Layout>
            <div className={styles.resource_subgroup}>
                <section className={styles.resource_subgroup_header}>
                    <h1>Web Development</h1>
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
    query ResourceDetails {
        allMarkdownRemark(filter: {frontmatter: {subgroup: {eq: "web-development"}}}) {
            nodes {
                frontmatter {
                    title
                    url
                    pageTitle
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