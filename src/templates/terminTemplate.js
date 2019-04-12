import React from 'react'
import Layout from '../components/layout'
import TerminDetailed from '../components/termin-detailed/terminDetailed'
import { graphql } from 'gatsby'

const TerminTemplate = ({ data }) => {
  return (
    <Layout>
      <TerminDetailed stuff={data} />
    </Layout>
  )
}

export const query = graphql`
  query terminTemplate($slug: String!) {
    allSanityTermin(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          id
          date
          title
          locationName
          location {
            lat
            lng
          }
          image {
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

export default TerminTemplate
