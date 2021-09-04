/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

/**		IMPORTANT!  Any change to this file requires restarting the development server for changes to
 *		take effect.  Exit the server and run `gatsby develop` in the terminal to do this.
 */

// TODO: consider building URL pathways into siteMetadata

module.exports = {
  /* Your site config here */
	plugins: [
		'gatsby-plugin-react-helmet',				// customize metadata in website's <head> component
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				icon: `src/images/favicons/favicon-16x16.png`
			}
		},
		`gatsby-plugin-image`,
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',            	// creates a graphQL interface for markdown files
		{
			resolve: `gatsby-source-filesystem`,			// loads data from .txt and .md files to website
			options: {
				name: `projects`,							// name of this instance of the plugin
				path: `${__dirname}/src/data/projects/`	// directory this plugin will access
			},
		},
		{
			resolve: `gatsby-source-filesystem`,			// loads data from .txt and .md files to website
			options: {
				name: `images`,							// name of this instance of the plugin
				path: `${__dirname}/src/images/`	// directory this plugin will access
			},
		},
		{
			resolve: `gatsby-source-filesystem`,			// loads data from .txt and .md files to website
			options: {
				name: `resources`,							// name of this instance of the plugin
				path: `${__dirname}/src/data/resources/`	// directory this plugin will access
			},
		}
	],
	siteMetadata: {
		title: 'Marty Smith | Software Engineer',
		author: 'Marty Smith',
		description: 'Personal Website and Portfolio',
		long_description: "I'm Marty Smith, a full-stack software engineer currently based in the Raleigh-Durham area.  Check out my website to learn more about me, view my portfolio of works, and get in touch.",
		copyright: '© 2021 Marty Smith',
		email: 'marty.smith01@yahoo.com',
		url: 'https://martysmith.tech'
	}
}