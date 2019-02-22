import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlockContent from '../components/block-content'
import styles from './chronik.module.scss'

export const query = graphql`
  query chronikPageQuery {
    page: allSanityChronik {
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

const chronikPage = ({ data }) => {
  console.log(data)
  return (
    <section className={styles.chronikPage}>
      <Layout>
        <SEO title="Chronik" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
        <h2 className={styles.heading}>
          Unsere <br />
          <span>Geschichte</span>
        </h2>
        <div className={styles.text}>
          <BlockContent blocks={data.page.edges[0].node._rawText || []} />
        </div>
      </Layout>
    </section>
  )
}

export default chronikPage
