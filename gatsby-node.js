/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

console.log('I should create some pages here')
/*
async function createGalerieImageViewPages(graphql, actions, reporter) {
  console.log('I think we are out of sync')
  const { createPage, createPageDependency } = actions
  const result = await graphql(`
    allSanityGalerie {
        edges {
          node {
            id
            title
            slug {
                current
            }
            galerie {
              bild {
                asset {
                  id
                  path
                }
              }
            }
          }
        }
      }
    `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityGalerie || {}).edges || []

  postEdges.forEach((edge, index) => {
    const id = edge.node.id
    const galerieTitle = edge.node.title
    const slug = edge.node.slug.current
    const path = `/galerie/${slug}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/galerieTemplate.js'),
      context: { id, slug, galerieTitle },
    })

    createPageDependency({ path, nodeId: id })
  })
}
*/
/*
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
console.log('I dont know what Im doing here')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const galerieTemplate = path.resolve(`./src/templates/galerieTemplate.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          allSanityGalerie {
            edges {
              node {
                id
                title
                slug {
                    current
                }
                galerie {
                  bild {
                    asset {
                      id
                      path
                    }
                  }
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.allSanityGalerie.edges.forEach(edge => {
          const path = `/galerie/${edge.node.slug.current}`
          createPage({
            path: `/my-sweet-new-page/`,
            component: galerieTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              path,
            },
          })
        })
      })
    )
  })
}
*/

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
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
  console.log(data.allSanityGalerie)
  data.allSanityGalerie.edges.forEach(galerie => {
    console.log(galerie)
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
