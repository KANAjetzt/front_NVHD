import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Termine from '../components/termine/termine'
import styles from './termine.module.scss'

const terminePage = props => {
  return (
    <section className={styles.sectionTermine}>
      <Layout currentPath={props.location.pathname}>
        <SEO title="Termine" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
        <section className={styles.content}>
          <h2>
            Termine <br />
            <span className={styles.h2Span}>2019</span>
          </h2>
          <div className={styles.termine}>
            <Termine />
          </div>
        </section>
      </Layout>
    </section>
  )
}

export default terminePage
