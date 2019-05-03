import React, { Component } from 'react'
import Img from 'gatsby-image'
import styles from './terminDetailed.module.scss'
import GoogleMap from '../googleMap/googleMap'
import BlockContent from '../block-content/index'
import { getDate, getTime, getWeekDay } from '../../lib/datumUhrzeit'
import CalenderSVG from '../svg/calendar'
import ClockSVG from '../svg/clock'
import LocationSVG from '../svg/location'

export default class Termin extends Component {
  render() {
    const {
      date,
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
            <p>{getDate(date)}</p>
          </div>
          <Img className={styles.img} fluid={image.asset.fluid} />
        </section>
        <section className={styles.description}>
          <BlockContent blocks={_rawDescription} />
        </section>
        <section>
          <ul className={styles.quickView}>
            <li className={styles.quickViewTitle}>
              <p>{title}</p>
            </li>
            <li className={styles.quickViewDate}>
              <CalenderSVG fill="#fefefe" />
              <p>
                {getWeekDay(date)}, {getDate(date)}{' '}
              </p>
            </li>
            <li className={styles.quickViewTime}>
              <ClockSVG fill="#fefefe" /> <p>{getTime(date)}</p>
            </li>
            <li className={styles.quickViewLokationName}>
              <LocationSVG fill="#fefefe" /> <p>{locationName}</p>
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
