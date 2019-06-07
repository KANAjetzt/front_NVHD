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

const chronikPage = ({ data, ...props }) => {
  return (
    <section className={styles.chronikPage}>
      <Layout currentHref={props.location.href}>
        <SEO title="Chronik" keywords={[`Chronik`, `Geschichte`, `Gründung`]} />
        <h2 className={styles.heading}>
          unsere <br />
          <span>Geschichte</span>
        </h2>
        <div className={styles.text}>
          <BlockContent blocks={data.page.edges[0].node._rawText} />
        </div>
      </Layout>
    </section>
  )
}

export default chronikPage
