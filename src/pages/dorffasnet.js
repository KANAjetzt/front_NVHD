import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Figuren from '../components/figuren/figuren'

export const query = graphql`
  query dorffasnetPageQuery {
    page: allSanityFigur(filter: { einsatz: { eq: "dorf" } }) {
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

const dorffasnetPage = ({ data, ...props }) => {
  return (
    <Layout currentHref={props.location.href}>
      <SEO
        title="Dorffasnet"
        keywords={[
          `Figuren`,
          `Dorffasnet`,
          `Eiersammler`,
          `Wischenführer`,
          `Narrenpolizist`,
        ]}
      />
      <section>
        <h2>
          die <br />
          <span>Dorffasnet</span>
        </h2>

        <Figuren data={data} />
      </section>
    </Layout>
  )
}

export default dorffasnetPage
