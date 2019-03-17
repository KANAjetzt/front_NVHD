import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'

export default function GatsbyImagePrepare(props) {
  const sanityConfig = { projectId: '74ftimmm', dataset: 'production' }

  const fluidProps = getFluidGatsbyImage(
    props.photo.src,
    { maxWidth: 1024 },
    sanityConfig
  )

  // console.log(fluidProps)

  return (
    <div
      style={{
        margin: props.margin,
        height: props.photo.height,
        width: props.photo.width,
      }}
      onClick={e => props.onClick(e, props)}
    >
      <Img fluid={fluidProps} />
    </div>
  )
}
