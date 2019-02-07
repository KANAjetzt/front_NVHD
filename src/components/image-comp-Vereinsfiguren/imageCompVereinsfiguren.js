import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './imageCompVereinsfiguren.module.scss'

const ImageCompVereinsfiguren = () => (
  <StaticQuery
    query={graphql`
      query imageCompVereinsfigurenComponentQuery {
        figurenVerein: allSanityFigur(filter: { einsatz: { eq: "verein" } }) {
          edges {
            node {
              id
              name
              bild {
                asset {
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={styles.figurenImagesBox}>
          {data.figurenVerein.edges.map((figur, figurNum) => (
            <img
              key={`${figur.node.id}-image`}
              src={`https://cdn.sanity.io/${figur.node.bild.asset.path}`}
              className={styles[`Figur-${figurNum}`]}
            />
          ))}
        </div>
      </>
    )}
  />
)

export default ImageCompVereinsfiguren
