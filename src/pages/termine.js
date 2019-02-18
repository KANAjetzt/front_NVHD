import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query terminePageQuery {
    page: allSanityTermin {
      edges {
        node {
          id
          date
          title
        }
      }
    }
  }
`

const terminePage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Figuren" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
      <h2>
        Fasnet <span>2019</span>
      </h2>

      {data.page.edges.map(termin => (
        <div key={`${termin.node.id}`}>
          <p key={`${termin.node.id}-date`}>{termin.node.date}</p>
          <h2 key={`${termin.node.id}-title`}> {termin.node.title} </h2>
        </div>
      ))}
    </Layout>
  )
}

export default terminePage
