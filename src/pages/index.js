import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.scss'
import BtnCta from '../components/Btn-Cta/btnCta'
import ImageCompVereinsfiguren from '../components/image-comp-Vereinsfiguren/imageCompVereinsfiguren'
import Termine from '../components/termine/termine'

const indexPage = props => {
  return (
    <Layout currentPath={props.location.pathname}>
      <SEO title="Figuren" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
      <section>
        <p className={styles.brauchtumInSchönsterForm}>
          Brauchtum in seiner schönsten Form erleben
        </p>

        <h2 className={styles.h2}>
          HEU !<br />
          <span className={styles.h2Span}>LIECHER !</span>
        </h2>
      </section>
      <section className={styles.unserVerein}>
        <h3>
          unser <br />
          <span>Verein</span>
        </h3>

        <ImageCompVereinsfiguren />

        <BtnCta link="/figuren">Mehr erfahren</BtnCta>
      </section>

      <section className={styles.terminSection}>
        <h3>
          Termine <br />
          <span>2019</span>
        </h3>

        <Termine />

        <BtnCta link="/termine">alle Termine</BtnCta>
      </section>
      <section className={styles.kontaktSection}>
        <h3 className={styles.kontaktSectionH3}>
          Mit <br />
          <span className={styles.kontaktSectionH3Span}>Machen</span>
        </h3>

        <p className={styles.kontaktSectionP}>
          Du hast lust mit uns um die Häuser zu ziehen oder wolltest schon immer
          mal wissen wie es unter einer Maske aussieht?
        </p>

        <BtnCta link="/kontakt">schreib uns</BtnCta>
      </section>
    </Layout>
  )
}

export default indexPage
