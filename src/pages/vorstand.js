import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query vorstandPageQuery {
    elfer: allSanityPerson(filter: { rollen: { eq: "elferat" } }) {
      edges {
        node {
          id
          name
          rollen
        }
      }
    }
    rest: allSanityPerson(filter: { rollen: { ne: "elferat" } }) {
      edges {
        node {
          id
          name
          rollen
        }
      }
    }
  }
`

const vorstandPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO
        title="Vorstand"
        keywords={[`vornstand`, `präsident`, `vizepräsident`]}
      />
      <h2>Der Vorstand</h2>

      {data.rest.edges.map(e => (
        <div key={`${e.node.id}`}>
          <h3 key={`${e.node.id}-rollen`}>{e.node.rollen}</h3>
          <p key={`${e.node.id}-name`}>{e.node.name}</p>
        </div>
      ))}

      <div>
        <h3>{data.elfer.edges[0].node.rollen}</h3>
        {data.elfer.edges.map(e => (
          <ul key={`${e.node.id}`}>
            <li key={`${e.node.id}-name`}>{e.node.name}</li>
          </ul>
        ))}
      </div>
    </Layout>
  )
}

export default vorstandPage
