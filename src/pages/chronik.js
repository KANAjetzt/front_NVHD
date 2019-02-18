import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlockContent from '@sanity/block-content-to-react'

export const query = graphql`
  query chronikPageQuery {
    page: allSanityChronik {
      edges {
        node {
          id
          title
          text {
            _key
            asset {
              path
            }
            children {
              _key
              text
              marks
            }
          }
        }
      }
    }
  }
`

const chronikPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Chronik" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
      <h2>
        die <span>Chronik</span>
      </h2>

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
    </Layout>
  )
}

export default chronikPage
