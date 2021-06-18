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
		'gatsby-plugin-react-helmet',				// customize metadata in website's <head> component
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',            	// creates a graphQL interface for markdown files
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				"name": "Marty Smith Personal Website",
				"background_color": "#181818",
				"categories": ["business"],
				"description": "Professional website of software engineer Marty Smith.",
				"icons": [
					{
						"src": "src/images/favicons/favicon-16x16.png",
						"size": "16x16",
						"type": "image/png"
					},
					{
						"src": "src/images/favicons/favicon-32x32.png",
						"size": "32x32",
						"type": "image/png"
					}
				],
				"lang": "en-US",
				"orientation": "any",
				"short_name": "Marty Smith",
				"shortcuts": [
					{
						"name": "About",
						"url": "/about",
						"description": "Information about the developer Marty Smith."
					},
					{
						"name": "Projects",
						"url": "/projects",
						"description": "Links to items in Marty's portfolio."
					},
					{
						"name": "Resources",
						"url": "/resources",
						"description": "Professional resources Marty uses and would like to share."
					},
					{
						"name": "Contact",
						"url": "/contact",
						"description": "Get in contact with Marty now!"
					}
				],
				"start_url": "https://martysmith.tech"
			}
		}
	],
	siteMetadata: {
		title: 'Marty Smith | Software Engineer',
		description: 'Personal Website and Portfolio',
		copyright: '© 2021 Marty Smith'
	}
}