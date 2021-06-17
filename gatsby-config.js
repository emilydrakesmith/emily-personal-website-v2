/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

/**		IMPORTANT!  Any change to this file requires restarting the development server for changes to
 *		take effect.  Exit the server and run `gatsby develop` to do this.
 */

// TODO: consider building URL pathways into siteMetadata

module.exports = {
  /* Your site config here */
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark'            // creates a graphQL interface for markdown files
	],
	siteMetadata: {
		title: 'Marty Smith | Software Engineer',
		description: 'Personal Website and Portfolio',
		copyright: '© 2021 Marty Smith'
	}
}