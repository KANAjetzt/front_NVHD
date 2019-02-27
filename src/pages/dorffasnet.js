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
            }
          }
        }
      }
    }
  }
`

const dorffasnetPage = ({ data, ...props }) => {
  console.log(data)

  return (
    <Layout currentPath={props.location.pathname}>
      <SEO title="Figuren" keywords={[`Figuren`, `Hardmännle`, `Heulicher`]} />
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
