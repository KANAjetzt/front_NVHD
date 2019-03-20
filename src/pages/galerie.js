import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GalerieView from '../components/galerie-view/galerieView'
import styles from './galerie.module.scss'

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
  console.log(data)

  return (
    <Layout currentPath={props.location.pathname}>
      <SEO title="Figuren" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
      <h2>
        die <br />
        <span>Galerie</span>
      </h2>

      <GalerieView />
    </Layout>
  )
}

export default galeriePage
