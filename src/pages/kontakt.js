import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './kontakt.module.scss'

export const query = graphql`
  query kontaktPageQuery {
    schriftfuehrer: allSanityPerson(
      filter: { rollen: { eq: "schriftführer" } }
    ) {
      edges {
        node {
          id
          name
          rollen
          email
          adresse {
            strassehausnummer
            postleizahl
            ort
          }
        }
      }
    }
    president: allSanityPerson(filter: { rollen: { eq: "president" } }) {
      edges {
        node {
          id
          name
          rollen
          email
          telefon
          adresse {
            strassehausnummer
            postleizahl
            ort
          }
        }
      }
    }
    kassierer: allSanityPerson(filter: { rollen: { eq: "kassierer" } }) {
      edges {
        node {
          id
          name
          rollen
          email
          adresse {
            strassehausnummer
            postleizahl
            ort
          }
        }
      }
    }
  }
`

const kontaktPage = ({ data, ...props }) => {
  return (
    <Layout currentPath={props.location.pathname}>
      <section className={styles.pageKontakt}>
        <SEO
          title="Kontakt"
          keywords={[
            `Kontakt`,
            `Info`,
            `Information`,
            `Präsident`,
            `Postadresse`,
          ]}
        />
        <h2>
          dein <br />
          <span>Kontakt</span>
        </h2>

        <div>
          <h3>Postadresse</h3>
          <p>Narrenverein 'Heuliecher' Heudorf e.v.</p>
          <p>Schriftführer {data.schriftfuehrer.edges[0].node.name}</p>
          <p> {data.schriftfuehrer.edges[0].node.adresse.strassehausnummer}</p>
        </div>

        <div>
          <h3>Präsident</h3>
          <p>{data.president.edges[0].node.name}</p>
          <p> {data.president.edges[0].node.adresse.strassehausnummer}</p>
          <p>
            {' '}
            {data.president.edges[0].node.adresse.postleizahl}{' '}
            {data.president.edges[0].node.adresse.ort}
          </p>
          <p>{data.president.edges[0].node.telefon}</p>
          <a href={`mailto:${data.president.edges[0].node.email}`}>
            {data.president.edges[0].node.email}
          </a>
        </div>

        <div>
          <h3>Kassier</h3>
          <p>{data.kassierer.edges[0].node.name}</p>
          <a href={`mailto:${data.kassierer.edges[0].node.email}`}>
            {data.kassierer.edges[0].node.email}
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default kontaktPage
