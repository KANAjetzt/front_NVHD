import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.scss'

export const query = graphql`
  query indexPageQuery {
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
    termine: allSanityTermin {
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

const indexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Figuren" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
      <section>
        <p className={styles.brauchtumInSchönsterForm}>
          Brauchtum in seiner schönsten Form erleben
        </p>

        <h2>
          HEU !<br />
          <span>LICHER !</span>
        </h2>
      </section>
      <section className={styles.unserVerein}>
        <h3>
          unser <br />
          <span>Verein</span>
        </h3>

        <div className={styles.figurenImagesBox}>
          {data.figurenVerein.edges.map(figur => (
            <img
              key={`${figur.node.id}-image`}
              src={`https://cdn.sanity.io/${figur.node.bild.asset.path}`}
            />
          ))}
        </div>

        <button>Mehr erfahren</button>
      </section>
      <section>
        <h3>
          Fasnet <br />
          <span>2019</span>
        </h3>

        {data.termine.edges.map(termin => (
          <div key={`${termin.node.id}`}>
            <p key={`${termin.node.id}-date`}>{termin.node.date}</p>
            <h4 key={`${termin.node.id}-title`}> {termin.node.title} </h4>
          </div>
        ))}

        <button>alle Termine</button>
      </section>
      <section>
        <h3>
          Mit <br />
          <span>machen</span>
        </h3>

        <p>
          Du hast lust mit uns um die Häuser zu ziehen oder wolltest schon immer
          mal wissen wie es unter einer Maske aussieht?
        </p>

        <button>schreib uns</button>
      </section>
    </Layout>
  )
}

export default indexPage
