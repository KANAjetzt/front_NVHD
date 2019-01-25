import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

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

const figurenPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Figuren" keywords={[`Figuren`, `Hardmännle`, `Heulicher`]} />
      <h2>
        unsere <span>Figuren</span>
      </h2>
      {data.page.edges.map(e => (
        <div key={`${e.node.id}`}>
          <img
            key={`${e.node.id}-image`}
            src={`https://cdn.sanity.io/${e.node.bild.asset.path}`}
          />
          <h3 key={`${e.node.id}-name`}>{e.node.name}</h3>
          <p key={`${e.node.id}-description`}>{e.node.description}</p>
        </div>
      ))}
    </Layout>
  )
}

export default figurenPage
