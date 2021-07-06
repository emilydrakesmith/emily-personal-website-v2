const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    // perform a graphql query and deconstruct data from it
    const {data} = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                        group
                        subgroup
                    }
                }
            }
        }
    `)
    
    // deconstruct nodes data from graphql query data
    const {nodes} = data.allMarkdownRemark;
    const projectNodes = nodes.filter(node => node.frontmatter.group === 'projects');
    const resourceNodes = nodes.filter(node => node.frontmatter.group === 'resources');
    const resourceNodeSubgroups = resourceNodes.map(node => node.frontmatter.subgroup);
    const resourceNodeSubgroupsUnique = [...new Set(resourceNodeSubgroups)];

    // iterate through nodes
    projectNodes.forEach(node => {
        // deconstruct slug from each node
        const {slug} = node.frontmatter;
        // create a page using the slug to make a pathway and pass slug to page to get the rest of the data
        actions.createPage({
            path: '/projects/' + slug,
            component: path.resolve('./src/templates/project-details.js'),
            context: {slug: slug}
        });
    });

    // iterate through nodes
    resourceNodeSubgroupsUnique.forEach(subgroup => {
        actions.createPage({
            path: '/resources/' + subgroup,
            component: path.resolve('./src/templates/resource-details.js'),
            context: {subgroup: subgroup}
        });
    });
}