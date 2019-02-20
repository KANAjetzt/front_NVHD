import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Termine from '../components/termine/termine'
import styles from './termine.module.scss'

const terminePage = () => {
  return (
    <section className={styles.sectionTermine}>
      <Layout>
        <SEO title="Figuren" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />

        <h2>
          Fasnet <br />
          <span className={styles.h2Span}>2019</span>
        </h2>
        <div className={styles.termine}>
          <Termine />
        </div>
      </Layout>
    </section>
  )
}

export default terminePage
