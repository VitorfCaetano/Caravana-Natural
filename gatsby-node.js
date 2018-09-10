const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/post.js')
    resolve(
      graphql(`
        {
          allContentfulPost (limit: 20) {
            edges {
              node {
                id 
                slug
                category {
                  slug
                }
              }
            }
          }
        }
      `).then((result) => {
        if(result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPost.edges.forEach((edge) => {
          createPage ({
            path: edge.node.category.slug + edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}