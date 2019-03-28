import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlockContent from '../components/block-content/index'
import styles from './datenschutz.module.scss'

export const query = graphql`
  query dateschutzPageQuery {
    page: allSanityDatenschutz {
      edges {
        node {
          id
          title
          _rawText
        }
      }
    }
  }
`

const datenschutzPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Datenschutz" />
      <section className={styles.content}>
        <BlockContent blocks={data.page.edges[0].node._rawText} />
      </section>
    </Layout>
  )
}

export default datenschutzPage
