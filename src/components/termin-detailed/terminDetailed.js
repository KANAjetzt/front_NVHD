import React, { useRef } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styles from './terminDetailed.module.scss'
import GoogleMap from '../googleMap/googleMap'
import BlockContent from '../block-content/index'
import { getDate, getTime, getWeekDay } from '../../lib/datumUhrzeit'
import CalenderSVG from '../svg/calendar'
import ClockSVG from '../svg/clock'
import LocationSVG from '../svg/location'
import WideArrowSVG from '../svg/wideArrow'
import { useSpring, animated } from 'react-spring'
import { useOnScreen } from '../../lib/useOnScreen'

const TerminDetailed = props => {
  console.log(props)
  const {
    date,
    image,
    location,
    locationName,
    title,
    _rawDescription,
  } = props.stuff.allSanityTermin.edges[0].node

  const spring = useSpring({
    config: {},
    transform: 'translateX(0)',
    from: { transform: 'translateX(-100%)' },
  })

  const ref = useRef()

  const onScreen = useOnScreen(ref)

  console.log(onScreen)

  return (
    <animated.section className={styles.content} style={spring}>
      <section className={styles.description}>
        <BlockContent blocks={_rawDescription} />
      </section>
      <Link to="/termine">
        <section className={onScreen ? styles.heroInPlace : styles.hero}>
          <WideArrowSVG fill="#eee" classname={styles.backArrow} />
          <h2 className={onScreen ? styles.titleInPlace : styles.title}>
            {title}
          </h2>
          <div className={onScreen ? styles.datumInPlace : styles.datum}>
            <p>{getDate(date)}</p>
          </div>

          {image && <Img className={styles.img} fluid={image.asset.fluid} />}
        </section>
      </Link>
      <section className={styles.quickView} ref={ref}>
        <ul>
          <li
            className={
              onScreen ? styles.quickViewDateInPlace : styles.quickViewDate
            }
          >
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
    </animated.section>
  )
}

export default TerminDetailed
