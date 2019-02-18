import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query galeriePageQuery {
    page: allSanityGalerie {
      edges {
        node {
          id
          title
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
  }
`

const galeriePage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Figuren" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
      <h2>
        die <span>Galerie</span>
      </h2>

      {data.page.edges.map(galerie => (
        <div key={galerie.node.id}>
          <h3 key={`${galerie.node.id}-galerieTitle`}>{galerie.node.title}</h3>
          {galerie.node.galerie.bild.map(bild => (
            <React.Fragment key={bild.asset.id}>
              <img
                key={`${bild.asset.id}-image`}
                src={`https://cdn.sanity.io/${bild.asset.path}`}
              />
            </React.Fragment>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export default galeriePage
