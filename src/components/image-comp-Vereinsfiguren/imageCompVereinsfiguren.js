import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './imageCompVereinsfiguren.module.scss'
import Img from 'gatsby-image'

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
                  fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                  }
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <>
          <div className={styles.figurenImagesBox}>
            {data.figurenVerein.edges.map((figur, figurNum) => (
              <figure
                key={`${figur.node.id}-figure`}
                className={styles[`Figur${figurNum}`]}
              >
                <Img fluid={figur.node.bild.asset.fluid} />
                <figcaption>{figur.node.name}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )
    }}
  />
)

export default ImageCompVereinsfiguren
