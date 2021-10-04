const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const {data} = await graphql(`
        query Notes {
            allMdx {
              nodes {
                slug
                id
                frontmatter {
                  title
                }
              }
           }
        }
    `)

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: `/notes/${node.slug}`,
      component: path.resolve('./src/components/posts-layout.js'),
      context: {
        id: node.id,
        titleRegex: new RegExp(String.raw `${node.frontmatter.title}`)
      }
    })
  })
}
