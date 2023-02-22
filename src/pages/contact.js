/******* START: IMPORT REACT AND DONGLES *******/
import React from "react";
import {graphql} from 'gatsby';
/******* END: IMPORT REACT AND DONGLES *******/


/******* START: IMPORT LOCAL FILES *******/
import * as styles from '../styles/contact.module.css';
import envelope_icon from '../images/icons/envelope-icon.svg';
import linkedin_solid_icon from '../images/icons/linkedin-solid-icon.svg';
import twitter_solid_icon from '../images/icons/twitter-solid-icon.svg';
/******* START: IMPORT LOCAL FILES *******/


export default function Contact({data}) {
    const {email} = data.site.siteMetadata;

    const bullet = <div className={styles.blue_bullet}>•</div>;

    const speakingTopics = [
        'Developing and marketing a personal brand',
        'How to conduct a robust modern job search',
        'Elevating queer and trans inclusion',
        'The value of workplace diversity',
        'Professional and social advancement of women',
        'Supporting and growing for Junior talent',
        'Creating effective SRGs in your organization',
        'Other topics related to the advocacy of lesbians and trans women'
    ];
    
    const formPreviewText = 'Before sending a note realize you risk it being missed amongst the 10-20 spam messages this form generates daily.  Email & LinkedIn are the best ways to contact me.';

    return (
            <div className={styles.contact_main}>
                <section className={styles.contact_header}>
                    <h1>Messaging</h1>
                    <hr />
                </section>
                <section className={styles.direct_messaging}>
                    <a href={`mailto:${email}`}>
                        <img src={envelope_icon} alt='icon for email'/>
                        <h4>E-mail</h4>
                    </a>
                    <a href='https://www.linkedin.com/in/emily-drake-smith/' target="_blank" rel="noreferrer">
                        <img src={linkedin_solid_icon} alt='icon for linkedin'/>
                        <h4>LinkedIn</h4>
                    </a>
                    <a href='https://twitter.com/emilydrakesmith' target="_blank" rel="noreferrer">
                        <img src={twitter_solid_icon} alt='icon for twitter'/>
                        <h4>Twitter</h4>
                    </a>
                </section>
                <section className={styles.contact_header}>
                    <h1>Booking</h1>
                    <hr />
                </section>
                <section className={styles.booking}>
                    <p className={styles.speaking_info}>I regularly speak to non-profits, corporations, and private groups. Feel free to reach out if you'd like to add my voice to your next event! I'm available for engagements of any size from keynoting a convention to participating in a panel discussion. In general, I do not charge for my time for engagements so long as I can attend remotely and the nature of my appearence does not require extensive advance preparation. For larger events I do request reimbursement for costs (travel, lodging, etc). Topics on which I speak include:</p>
                    {
                        speakingTopics.map(topic => (
                            <>
                                <p
                                    key={`speaking-topic-content-${topic}`}
                                    className={styles.speaking_topic}
                                >
                                    {topic}
                                </p>
                                {bullet}
                            </>
                        ))
                    }
                </section>
                <section className={styles.contact_header}>
                    <h1>Form</h1>
                    <hr />
                </section>
                <section>
                <form className={styles.contact_form} action="https://formspree.io/xdoporzz" method="POST">
                    
                    <div className={styles.contact_meta}>
                        <div className={styles.contact_data}>
                        <label htmlFor="contact-name">Your Name</label>
                        <input id="contact-name" type="text" name="contact-name" required />
                        </div>

                        <div className={styles.contact_data}>
                        <label htmlFor="contact-email">Your Email</label>
                        <input id="contact-email" type="text" name="contact-email" required />
                        </div>
                    </div>

                    <div className={styles.contact_data}>
                    <label htmlFor="form-message">Your Message</label>
                    <textarea id="form-message" name="form-message" placeholder={formPreviewText} required maxLength="1000"></textarea>
                    </div>

                    <div className={styles.form_buttons}>
                        <button type="submit"><h4>Let's Talk!</h4></button>
                        <button type="reset"><h4>Reset</h4></button>
                    </div>
                    </form>
                </section>
                {/* <section className={styles.contact_header}>
                    <h1>Over Coffee</h1>
                    <hr />
                </section> */}
                {/* TODO: in the future I'll embed a Google Map here, see README.md Future Plans/Icebox for more information */}
            </div>
	);
}

export const query = graphql`
	query ContactPageMetadata {
		site {
			siteMetadata {
				email
			}
		}
	}
`