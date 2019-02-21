import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlockContent from '@sanity/block-content-to-react'
import styles from './chronik.module.scss'

export const query = graphql`
  query chronikPageQuery {
    page: allSanityChronik {
      edges {
        node {
          id
          title
          text {
            _key
            _type
            style
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
    <section className={styles.chronikPage}>
      <Layout>
        <SEO title="Chronik" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
        <h2 className={styles.heading}>
          Unsere <br />
          <span>Geschichte</span>
        </h2>
        <div className={styles.text}>
          {data.page.edges[0].node.text.map(text => {
            if (text._type === 'block') {
              switch (text.style) {
                case 'h3':
                  return <h3 key={text._key}>{text.children[0].text}</h3>
                default:
                  if (text.children[0].marks[0] === 'strong') {
                    return (
                      <p key={text._key} style={{ fontWeight: 'bold' }}>
                        {text.children[0].text}
                      </p>
                    )
                  }
                  return <p key={text._key}>{text.children[0].text}</p>
              }
            } else if (text._type === 'image') {
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
    </section>
  )
}

export default chronikPage
