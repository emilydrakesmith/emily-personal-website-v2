/******* START: IMPORT REACT AND DONGLES *******/
import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage} from "gatsby-plugin-image";
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../styles/resource-details.module.css';
/******* END: IMPORT LOCAL FILES *******/

export default function ResourceDetails({location, data}) {
    const {nodes} = data.allMarkdownRemark;
    const {pathname} = location;
    
    let pageTitle = '';
    switch (pathname) {
        case '/resources/tutorials':
            pageTitle = 'Tutorials';
            break;
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
        case '/resources/gatsby-js':
            pageTitle = 'Gatsby';
            break;
        case '/resources/lgbtq':
            pageTitle = 'LGBTQ+';
            break;
        default:
            pageTitle = 'Resources';
    }

    const resourceLinks = nodes.map((node, idx) => (
        <article id={node.frontmatter.slug} className={styles.resource_article} key={idx}>
            <div className={styles.green_line_left} />
            <div className={styles.resource_article_content}>
                <h2>{node.frontmatter.title}</h2>
                <div className={styles.resource_article_details}>
                    <div className={styles.resource_picture_frame}>
                        <GatsbyImage alt={node.frontmatter.title} image={node.frontmatter.squareImg.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className={styles.resource_article_text}>
                        <div dangerouslySetInnerHTML={{__html: node.html}} />
                        <div className={styles.resource_linkdiv}>
                            <a className={styles.resource_external_hyperlink} href={node.frontmatter.url} target="_blank" rel="noreferrer">
                                Click to View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    ));

    return (
        <div className={styles.resource_subgroup}>
            <section className={styles.resource_subgroup_header}>
                <h1>{pageTitle}</h1>
                <hr />
            </section>
            <section>
                {resourceLinks}
            </section>
        </div>
    );
}

export const query = graphql`query ResourceDetail($subgroup: String) {
    allMarkdownRemark(
        filter: {frontmatter: {subgroup: {eq: $subgroup}}}
        sort: {fields: frontmatter___sequence, order: ASC}
        ) {
        nodes {
            frontmatter {
                title
                url
                slug
                squareImg {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            html
        }
    }
}`