/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
// Restart the dev server when you change the query

// GENERATE TERMIN PAGES

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query createPagesQuery {
      allSanityGalerie {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityTermin {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  data.allSanityTermin.edges.forEach(termin => {
    actions.createPage({
      path: `/termine/${termin.node.slug.current}/`,
      component: path.resolve(`./src/templates/terminTemplate.js`),
      context: {
        slug: termin.node.slug.current,
      },
    })
  })

  data.allSanityGalerie.edges.forEach(galerie => {
    actions.createPage({
      path: `/galerie/${galerie.node.slug.current}/`,
      component: path.resolve(`./src/templates/galerieTemplate.js`),
      context: {
        slug: galerie.node.slug.current,
      },
    })
  })
}
