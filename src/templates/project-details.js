/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/project-details.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function ProjectDetails({data}) {
    const {html} = data.markdownRemark;
    const {title, stack} = data.markdownRemark.frontmatter;
    const {fluid} = data.markdownRemark.frontmatter.fullImg.childImageSharp;

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <Img fluid={fluid} />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query ProjectDetail($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
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
        }
    }
`