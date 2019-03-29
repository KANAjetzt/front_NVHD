import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import styles from './gatsbyImagePrepare.module.scss'

export default function GatsbyImagePrepare(props) {
  const sanityConfig = { projectId: '74ftimmm', dataset: 'production' }

  const fluidProps = getFluidGatsbyImage(
    props.photo.src,
    { maxWidth: 1024 },
    sanityConfig
  )

  return (
    <div
      style={{
        margin: props.margin,
        height: props.photo.height,
        width: props.photo.width,
      }}
      className={styles.image}
      onClick={e => props.onClick(e, props)}
    >
      <Img fluid={fluidProps} />
    </div>
  )
}
