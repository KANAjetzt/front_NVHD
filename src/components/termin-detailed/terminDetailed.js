import React, { Component } from 'react'
import Img from 'gatsby-image'
import styles from './terminDetailed.module.scss'
import GoogleMap from '../googleMap/googleMap'
import Datum from '../datum/datum'
import BlockContent from '../block-content/index'

export default class Termin extends Component {
  render() {
    console.log(this.props)
    const {
      date,
      id,
      image,
      location,
      locationName,
      title,
      _rawDescription,
    } = this.props.stuff.allSanityTermin.edges[0].node
    return (
      <section className={styles.content}>
        <section className={styles.hero}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.datum}>
            <Datum date={date} />
          </div>
          <Img className={styles.img} fluid={image.asset.fluid} />
        </section>
        <section>
          <BlockContent blocks={_rawDescription} />
        </section>
        <section>
          <ul>
            <li>{title}</li>
            <li>
              Datum:
              <Datum date={date} />
            </li>
            <li>Ort: {locationName}</li>
          </ul>
        </section>
        <GoogleMap initialCenter={location} markerTitle={locationName} />
      </section>
    )
  }
}
