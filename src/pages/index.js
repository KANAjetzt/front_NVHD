import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.scss'
import BtnCta from '../components/Btn-Cta/btnCta'
import ImageCompVereinsfiguren from '../components/image-comp-Vereinsfiguren/imageCompVereinsfiguren'
import Termine from '../components/termine/termine'
import { useSpring, animated } from 'react-spring'

const IndexPage = props => {
  const [showTermine, setShowTermine] = useState(true)

  const handleTerminAppearance = termine => {
    // Termine section soll nur angezeigt werden wenn welche vorhanden sind
    // 1) überprüfen ob Termine vorhanden sind
    termine[0] === undefined ? setShowTermine(false) : setShowTermine(true)
  }

  const peter = useSpring({
    config: { duration: 200 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <Layout currentHref={props.location.href}>
      <SEO
        title="Wilkommen"
        keywords={[
          `Narrenverein Heuliecher`,
          `Heuliecher`,
          `Heudorf`,
          `Heudorf im Hegau`,
        ]}
      />
      <section>
        <p className={styles.brauchtumInSchönsterForm}>
          Brauchtum in seiner schönsten Form erleben
        </p>

        <h2 className={styles.h2}>
          HEU !<br />
          <span className={styles.h2Span}>LIECHER !</span>
        </h2>
      </section>
      <animated.section className={styles.unserVerein} style={peter}>
        <h3>
          unser <br />
          <span>Verein</span>
        </h3>

        <ImageCompVereinsfiguren />

        <BtnCta link="/figuren">Mehr erfahren</BtnCta>
      </animated.section>

      <section className={styles.newsSection}>
        <h3 className={styles.newsSectionH3}>
          2021 <br />
          <span className={styles.newsSectionH3Span}>Dreikönigsitzung</span>
        </h3>
        <iframe
          className={styles.ytVideo}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Moqq5DcntCs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>

      {showTermine && (
        <section className={styles.terminSection}>
          <Termine showTermine={handleTerminAppearance} someProp={'test'} />

          <BtnCta link="/termine">alle Termine</BtnCta>
        </section>
      )}
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
      <div />
    </Layout>
  )
}

export default IndexPage
