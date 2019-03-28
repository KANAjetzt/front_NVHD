/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
// Restart the dev server when you change the query
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query galerytemplate {
      allSanityGalerie {
        edges {
          node {
            _id
            title
            slug {
              current
            }
            galerie {
              bild {
                asset {
                  _id
                  path
                  metadata {
                    dimensions {
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  data.allSanityGalerie.edges.forEach(galerie => {
    actions.createPage({
      path: `/galerie/${galerie.node.slug.current}/`,
      component: path.resolve(`./src/templates/galerieTemplate.js`),
      context: {
        _id: galerie.node._id,
        galerie,
      },
    })
  })
}
