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
            }
          }
        }
      }
    }
  }
`

const figurenPage = ({ data, ...props }) => {
  return (
    <Layout currentPath={props.location.pathname}>
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
