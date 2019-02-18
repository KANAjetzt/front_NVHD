import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const query = graphql`
  query dateschutzPageQuery {
    page: allSanityDatenschutz {
      edges {
        node {
          id
          title
          text {
            _key
            children {
              _key
              text
            }
          }
        }
      }
    }
  }
`

const datenschutzPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Figuren" keywords={[`Datenschutz`]} />
      <h2>Datenschutz</h2>

      <div>
        {data.page.edges[0].node.text.map(text => {
          if (text.children) {
            return <p key={text._key}>{text.children[0].text}</p>
          } else {
            return (
              <img
                src={`https://cdn.sanity.io/${text.asset.path}`}
                key={text._key}
              />
            )
          }
        })}
      </div>
    </Layout>
  )
}

export default datenschutzPage
