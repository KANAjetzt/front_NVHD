import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import typography from './typography.module.scss'
import imageStyle from './image.module.scss'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image'

const sanityConfig = { projectId: '74ftimmm', dataset: 'production' }

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <h1 className={typography.responsiveTitle1}>{props.children}</h1>
          )

        case 'h2':
          return (
            <h2 className={typography.responsiveTitle2}>{props.children}</h2>
          )

        case 'h3':
          return (
            <h3 className={typography.responsiveTitle3}>{props.children}</h3>
          )

        case 'h4':
          return (
            <h4 className={typography.responsiveTitle4}>{props.children}</h4>
          )

        case 'blockquote':
          return (
            <blockquote className={typography.blockQuote}>
              {props.children}
            </blockquote>
          )

        default:
          return <p className={typography.paragraph}>{props.children}</p>
      }
    },
    image(data) {
      if (data.node.asset._ref) {
        const fluidProps = getFluidGatsbyImage(
          data.node.asset._ref,
          { maxWidth: 400 },
          sanityConfig
        )
        return <Img fluid={fluidProps} className={imageStyle.imageWrapper} />
      }
      return ''
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    serializers={serializers}
    projectId={`74ftimmm`}
    dataset={`production`}
  />
)

export default BlockContent
