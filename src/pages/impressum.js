import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlockContent from '../components/block-content'
import styles from './impressum.module.scss'

export const query = graphql`
  query impressumPageQuery {
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
    impressum: allSanityImpressum {
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

const impressumPage = ({ data }) => {
  console.log(data)

  return (
    <section className={styles.impressumPage}>
      <Layout>
        <SEO title="Figuren" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
        <h2>Impressum</h2>

        <div>
          <p>Narrenverein 'Heuliecher' Heudorf im Hegau 1984 e.V.</p>
          <br />
          <div>
            <h3 className={styles.presi}>Präsident</h3>
            <br />
            <p>
              {data.president.edges[0].node.name} <br />
              {data.president.edges[0].node.adresse.strassehausnummer} <br />
              {data.president.edges[0].node.adresse.postleizahl}{' '}
              {data.president.edges[0].node.adresse.ort} <br />
              {data.president.edges[0].node.telefon} <br />
              {data.president.edges[0].node.email}
            </p>
          </div>

          <br />

          <p>Eingetragen im Vereinsregister, Amtsgericht Stockach, VR590157</p>
          <p>
            Inhaltlich Verantwortlicher gemäß § 6 MDStV:{' '}
            {data.president.edges[0].node.name}
          </p>
        </div>

        <div>
          <BlockContent blocks={data.impressum.edges[0].node._rawText} />
        </div>
      </Layout>
    </section>
  )
}

export default impressumPage
