/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import female_coderto_cat from '../images/pictures/female-coderto-cat.png';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../styles/about.module.css';
/******* END: IMPORT LOCAL FILES *******/


export default function About() {
	const bar = <span className={styles.orange_separator}>|</span>;
    const bullet = <span className={styles.orange_separator}>•</span>;

    const makeLink = (url, text) => <a href={url} target='_blank' rel='external'>{text}</a>;

    const links = {
        crocLabs: makeLink(
            'https://www.crocswap.com/',
            'Crocodile Labs'
        ),
        stockton: makeLink(
            'https://stockton.edu/',
            'Richard Stockton University'
        ),
        mast: makeLink(
            'https://mast.ctemc.org/',
            'Marine Academy of Science and Technology'
        ),
        ga: makeLink(
            'https://generalassemb.ly/',
            'General Assembly'
        )
    };

    const intro = <p>Hi there!  I'm Emily and I've been building things for the internet since the days of BBCode and Geocities in the early 00s.  It's been a long time since then and now I'm a software engineer with {links.crocLabs}, a start-up building a new DeFi cryptocurrency exchange.<br/><br/>
    My work is something in which I take great pride.  While no detail is unimportant, I particularly care about designs being clean and intuitive, code that's efficient and modular, and extensive documentation.<br/><br/>
    Outside of work I love spending time with my wife.  We greatly enjoy playing board games, camping in our trailer, cooking, the New York Rangers, fishing, and wine tasting.<br/><br/>
    Please look around this site to get to know me better.  I'm currently quite happily employed but always interested in making new network contacts or discovering future opportunities. I'm also available for speaking engagements of varying formats.<br/><br/>
    I'm a proud alumnus of {links.stockton}, {links.ga}, and the {links.mast}.  I'm always up for connecting with other alumni or current students from the places I've been; feel free to reach out if that's you!</p>;

    const skillsDesktop = 
        <>
            <p>JavaScript ES6+  {bar}  TypeScript  {bar}  HTML5  {bar}  CSS3</p>
            <p>React  {bar}  GatsbyJS  {bar}  Node.js  {bar}  Express  {bar}  jQuery</p>
            <p>Python 3  {bar}  Django</p>
            <p>MongoDB  {bar}  Mongoose  {bar}  PostgreSQL  {bar}  GraphQL</p>
            <p>CLI & Git  {bar}  GitHub  {bar}  Agile Process  {bar}  UX/UI</p>
            <p>MERN Stack  {bar}  MEN Stack</p>
        </>;

    const skillsMobileArray = [
        'JavaScript ES6+',
        'TypeScript',
        'HTML5 & CSS3',
        'Python & Django',
        'React',
        'Gatsby.js',
        'Node.js',
        'Express & EJS',
        'jQuery',
        'MongoDB & Mongoose',
        'PostgreSQL',
        'GraphQL',
        'CLI & Git',
        'GitHub',
        'Agile Process',
        'UX/UI',
        'MERN Stack',
        'MEN Stack'
    ]

    const skillsMobile = skillsMobileArray.map((skill, idx) => <p key={idx}>{bullet} {skill} {bullet}</p>);

    return (
            <div className={styles.about_main}>
                <section className={styles.about_header}>
                    <h1>About Emily</h1>
                    <hr />
                </section>
                <section className={styles.about_content}>
                    <div className={styles.self_portrait_desktop}>
                        <img src={female_coderto_cat} alt={'emily self portrait'} />
                    </div>
                    <div className={styles.picture_frame_mobile}>
                        <img src={female_coderto_cat} alt={'emily self portrait'} className={styles.self_portrait_mobile} />
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
	);
}

// export const query = graphql`
//     query Portrait {
//         imageSharp(
//             fluid: {src: {eq: "/static/c0192249c8b42d3e5cc638c21d0a7e1b/385a6/female-coderto-cat.png"}}
//         ) {
//             id
//             fluid {
//                 ...GatsbyImageSharpFluid
//             }
//         }
//     }
// `