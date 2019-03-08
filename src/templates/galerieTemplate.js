import React from 'react'
import Layout from '../components/layout'
import GalerieImageView from '../components/galerie-image-view/galerieImageView'

const GalerieTemplate = props => {
  console.log(props)
  return (
    <Layout>
      <GalerieImageView stuff={props.pageContext.galerie.node} />
    </Layout>
  )
}

export default GalerieTemplate
