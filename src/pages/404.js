import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Nav from '../components/navigation/navigation'
import BtnCta from '../components/Btn-Cta/btnCta'
import styles from './404.module.scss'

const NotFoundPage = () => (
  <Layout>
    <section className={styles.content}>
      <SEO title="404: Seite nicht gefunden" />
      <h2>
        Seite nicht gefunden{' '}
        <span role="img" aria-label="mindblown emoji">
          🤯
        </span>
      </h2>
      <p> Hoffentlich kann dir die Navigation weiterhelfen:</p>
      <br />
      <div className={styles.navbackground}>
        <Nav />
      </div>
      <br />
      <br />
      <p> Ansonsten Melde dich einfach direkt bei uns:</p>
      <BtnCta link="/kontakt">Kontakt</BtnCta>
    </section>
  </Layout>
)

export default NotFoundPage
