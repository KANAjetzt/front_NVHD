import React, { Component } from 'react'
import Img from 'gatsby-image'
import styles from './terminDetailed.module.scss'
import GoogleMap from '../googleMap/googleMap'
import Datum from '../datum/datum'
import BlockContent from '../block-content/index'
import { getDate, getTime, getWeekDay } from '../../lib/datumUhrzeit'

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

    console.log(getDate(date))
    console.log(getTime(date))
    console.log(getWeekDay(date))
    return (
      <section className={styles.content}>
        <section className={styles.hero}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.datum}>
            <p>
              {getWeekDay(date)}, {getDate(date)}
            </p>
          </div>
          <div className={styles.uhrzeit}>
            {' '}
            <p> {getTime(date)} </p>{' '}
          </div>
          <Img className={styles.img} fluid={image.asset.fluid} />
        </section>
        <section>
          <BlockContent blocks={_rawDescription} />
        </section>
        <section>
          <ul className={styles.quickView}>
            <li className={styles.quickViewTitle}>{title}</li>
            <li className={styles.quickViewDate}>
              Datum: {getWeekDay(date)}, {getDate(date)}
            </li>
            <li className={styles.quickViewTime}>Zeit: {getTime(date)}</li>
            <li className={styles.quickViewLokationName}>
              Ort: {locationName}
            </li>
          </ul>
        </section>
        <section className={styles.googleMap}>
          <GoogleMap initialCenter={location} markerTitle={locationName} />
        </section>
      </section>
    )
  }
}
