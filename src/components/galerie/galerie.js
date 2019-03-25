import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import './galerie.scss'

export default function Galerie(props) {
  return (
    <div className={'galerie'}>
      <Link to={`/galerie/${props.data.node.slug.current}/`}>
        <h3>{props.data.node.title}</h3>
        <Img
          fluid={props.data.node.galerie.bild[0].asset.fluid}
          className={'galerieThump'}
        />
      </Link>
    </div>
  )
}
