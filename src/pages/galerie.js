import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GalerieView from '../components/galerie-view/galerieView'

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

const galeriePage = ({ data, ...props }) => {
  return (
    <Layout currentHref={props.location.href}>
      <SEO title="Galerie" keywords={[`Galerie`, `Bilder`, `Übersicht`]} />
      <h2>
        die <br />
        <span>Galerie</span>
      </h2>

      <GalerieView />
    </Layout>
  )
}

export default galeriePage
