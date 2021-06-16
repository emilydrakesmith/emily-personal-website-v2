/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',            // creates a graphQL interface for markdown files
	],
	siteMetadata: {
		title: 'Marty Smith | Software Engineer',
		description: 'Personal Website and Portfolio',
		copyright: '© 2021 Marty Smith'
	}
}
