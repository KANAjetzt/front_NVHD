import React from 'react'
import Layout from '../components/layout'
import TerminDetailed from '../components/termin-detailed/terminDetailed'
import { graphql } from 'gatsby'
import styles from './terminTemplate.module.scss'

const TerminTemplate = ({ data }) => {
  return (
    <section className={styles.background}>
      <Layout>
        <TerminDetailed stuff={data} />
      </Layout>
    </section>
  )
}

export const query = graphql`
  query terminTemplate($slug: String!) {
    allSanityTermin(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          id
          date
          featured
          dateText
          startTime
          endTime
          title
          _rawDescription
          locationName
          location {
            lat
            lng
          }
          image {
            asset {
              path
              fluid(maxWidth: 2000) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          showFullImage
        }
      }
    }
  }
`

export default TerminTemplate
