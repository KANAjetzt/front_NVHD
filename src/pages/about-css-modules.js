import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'

const sanityConfig = { projectId: '74ftimmm', dataset: 'production' }
const imageAssetId =
  'image-b9e8fd04217450a145db0ec843322ade090c9930-4032x3024-jpg'

const fluidProps = getFluidGatsbyImage(
  imageAssetId,
  { maxWidth: 1024 },
  sanityConfig
)

export default () => <Img fluid={fluidProps} />
