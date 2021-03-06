import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Figuren from '../components/figuren/figuren'

export const query = graphql`
  query figurenPageQuery {
    page: allSanityFigur(filter: { einsatz: { eq: "verein" } }) {
      edges {
        node {
          id
          name
          einsatz
          description
          bild {
            _type
            asset {
              path
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const figurenPage = ({ data, ...props }) => {
  return (
    <Layout currentHref={props.location.href}>
      <SEO title="Figuren" keywords={[`Figuren`, `Hardmännle`, `Heulicher`]} />
      <section>
        <h2>
          unsere <br />
          <span>Figuren</span>
        </h2>

        <Figuren data={data} />
      </section>
    </Layout>
  )
}

export default figurenPage
