const path = require("path")

exports.createPages = async ({ graphql, actions}) => {
    const { data } = await graphql(`
        query Notes {
            allMdx {
                edges {
                    node {
                        id,
                        slug
                    }
                }
           }
        } 
    `)

    data.allMdx.edges.forEach(edge => {
        actions.createPage({
            path: `/notes/${edge.node.slug}`,
            component: path.resolve('./src/components/posts-layout.js'),
            context: {id: edge.node.id}
        })
    })
}