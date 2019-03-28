import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './vorstand.module.scss'

export const query = graphql`
  query vorstandPageQuery {
    schriftfuehrer: allSanityPerson(
      filter: { rollen: { eq: "schriftführer" } }
    ) {
      edges {
        node {
          id
          name
        }
      }
    }
    president: allSanityPerson(filter: { rollen: { eq: "president" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
    vizePresident: allSanityPerson(
      filter: { rollen: { eq: "vizepresident" } }
    ) {
      edges {
        node {
          id
          name
        }
      }
    }
    kassierer: allSanityPerson(filter: { rollen: { eq: "kassierer" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
    elferrat: allSanityPerson(filter: { rollen: { eq: "elferrat" } }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const vorstandPage = ({ data, ...props }) => {
  return (
    <Layout currentPath={props.location.pathname}>
      <section className={styles.pageVorstand}>
        <SEO
          title="Vorstand"
          keywords={[
            `vornstand`,
            `präsident`,
            `vizepräsident`,
            `Kassier`,
            `Schriftführer`,
            `Elferrat`,
          ]}
        />
        <h2>
          Der <br />
          <span>Vorstand</span>
        </h2>

        <div>
          <h3>Präsident</h3>
          <p>{data.president.edges[0].node.name}</p>
        </div>

        <div>
          <h3>Vizepräsident</h3>
          <p>{data.vizePresident.edges[0].node.name}</p>
        </div>

        <div>
          <h3>Kassiererin</h3>
          <p>{data.kassierer.edges[0].node.name}</p>
        </div>

        <div>
          <h3>Schriftführer</h3>
          <p>{data.schriftfuehrer.edges[0].node.name}</p>
        </div>

        <div>
          <h3>Elferräte</h3>
          <p>
            {data.elferrat.edges.map(elfer => (
              <React.Fragment key={elfer.node.id}>
                {elfer.node.name} <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default vorstandPage
