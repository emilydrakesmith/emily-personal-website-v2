const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    const {nodes} = data.allMarkdownRemark;
    nodes.forEach(node => {
        const {slug} = node.frontmatter;
        actions.createPage({
            path: '/projects/' + slug,
            component: path.resolve('./src/templates/project-details.js'),
            context: {slug: slug}
        });
    });

}