import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query VorstandPageQuery {
    page: allSanityVorstand {
      edges {
        node {
          id
          title
          name
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
      <p>{data.page.edges.map(e => e.node.title)}</p>
      <p>{data.page.edges.map(e => e.node.name)}</p>
    </Layout>
  )
}

export default vorstandPage
