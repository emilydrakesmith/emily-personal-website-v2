/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {graphql} from "gatsby";
import Img from 'gatsby-image';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function About({data}) {
	const bar = <span className={styles.orange_separator}>|</span>;
    const bullet = <span className={styles.orange_separator}>•</span>;

    const intro = <p>Hi there!  I'm Marty and I've been building things for the internet since the days of BBCode and Geocities in the early 00s.  It's been a long time since then and now I'm a full-stack software engineer.<br/><br/>
    My work is something in which I take great pride.  While no detail is unimportant, I particularly care about designs being clean and intuitive, code that's efficient and modular, and extensive documentation.<br/><br/>
    Outside of work I love spending time with my wife.  We greatly enjoy playing board games, camping in our trailer, cooking, the New York Rangers, fishing, and wine tasting.<br/><br/>
    Please look around this site to get to know me better.  I'm currently a free agent looking for my next opportunity for professional growth and am open to relocation.  Don't hesitate reach out if you'd like to add me to your team.</p>;

    const mobilePortrait = data.imageSharp.fluid;

    const skillsDesktop = 
        <>
            <p>JavaScript ES6+  {bar}  HTML5  {bar}  CSS3  {bar}  Python3</p>
            <p>React  {bar}  Gatsby.js  {bar}  Node.js  {bar}  Express  {bar}  jQuery  {bar}  Django</p>
            <p>MongoDB  {bar}  Mongoose  {bar}  PostgreSQL  {bar}  GraphQL</p>
            <p>CLI & Git  {bar}  GitHub  {bar}  Agile Process  {bar}  UX/UI</p>
            <p>MERN Stack  {bar}  MEN Stack</p>
        </>;

    const skillsMobileArray = [
        'JavaScript ES6+',
        'HTML5 & CSS3',
        'Python & Django',
        'React',
        'Gatsby.js',
        'Node.js',
        'Express & EJS',
        'jQuery',
        'MongoDB & Mongoose',
        'PostgreSQL',
        'GraphQL & GraphiQL',
        'CLI & Git',
        'GitHub',
        'Agile Process',
        'UX/UI',
        'MERN Stack',
        'MEN Stack'
    ]

    const skillsMobile = skillsMobileArray.map((skill, idx) => <p key={idx}>{bullet} {skill} {bullet}</p>);

    return (
        <Layout>
            <div className={styles.about_main}>
                <section className={styles.about_header}>
                    <h1>About Marty</h1>
                    <hr />
                </section>
                <section className={styles.about_content}>
                    <div className={styles.self_portrait_desktop}></div>
                    <div className={styles.picture_frame_mobile}>
                        <Img className={styles.self_portrait_mobile} fluid={mobilePortrait}/>
                    </div>
                    {intro}
                </section>
                <section className={styles.about_header}>
                    <h1>Key Skills</h1>
                    <hr />
                </section>
                <section className={styles.skills_content}>
                    <div className={styles.skills_desktop}>{skillsDesktop}</div>
                    <div className={styles.skills_mobile}>{skillsMobile}</div>
                </section>
            </div>
        </Layout>
	);
}

export const query = graphql`
    query Portrait {
        imageSharp(id: {eq: "b5b460f1-9594-543d-90c1-217c5b3f3edc"}) {
            id
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`