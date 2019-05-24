import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Termine from '../components/termine/termine'
import styles from './termine.module.scss'
import { useSpring, animated } from 'react-spring'

const terminePage = props => {
  const spring = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(100%)' },
  })
  return (
    <section className={styles.sectionTermine}>
      <Layout currentHref={props.location.href}>
        <SEO title="Termine" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
        <animated.section className={styles.content} style={spring}>
          <h2>
            Termine <br />
            <span className={styles.h2Span}>2019</span>
          </h2>
          <div className={styles.termine}>
            <Termine />
          </div>
        </animated.section>
      </Layout>
    </section>
  )
}

export default terminePage
