import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import GalerieImageView from '../components/galerie-image-view/galerieImageView'

const GalerieTemplate = ({ data }) => {
  return (
    <Layout>
      <GalerieImageView stuff={data} />
    </Layout>
  )
}

export const query = graphql`
  query galeryTemplate($slug: String!) {
    allSanityGalerie(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          _id
          slug {
            current
          }
          title
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
`

export default GalerieTemplate
