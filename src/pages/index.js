import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>
      Narrenverein Heulicher <span>Heudorf im Hegau</span>
    </h1>
    <p>Brauchtum in seiner schönsten Form erleben</p>
    <p>
      HEU! <span>LICHER!</span>
    </p>
  </Layout>
)

export default IndexPage
