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
import ArrowRightSVG from '../svg/arrowRight'
import ArrowLeftSVG from '../svg/arrowLeft'
import { useSpring, animated } from 'react-spring'
import { useOnScreen } from '../../lib/useOnScreen'

const TerminDetailed = props => {
  const {
    date,
    dateText,
    startTime,
    endTime,
    image,
    showFullImage,
    location,
    locationName,
    title,
    _rawDescription,
  } = props.stuff.allSanityTermin.edges[0].node

  console.log(showFullImage)

  const spring = useSpring({
    config: {},
    transform: 'translateX(0)',
    from: { transform: 'translateX(-100%)' },
  })

  const ref = useRef()

  const onScreen = useOnScreen(ref)

  return (
    <animated.section
      className={showFullImage ? styles.contentFullImg : styles.content}
      style={spring}
    >
      <section className={styles.description}>
        <BlockContent blocks={_rawDescription} />
      </section>

      {showFullImage ? (
        <section>
          {' '}
          <Img fluid={image.asset.fluid} />{' '}
        </section>
      ) : null}

      <div className={onScreen ? styles.stickyHeroInPlace : styles.stickyHero}>
        <Link to="/termine">
          <section className={styles.hero}>
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
      </div>
      <section className={styles.quickView} ref={ref}>
        <ul>
          <li
            className={
              onScreen ? styles.quickViewDateInPlace : styles.quickViewDate
            }
          >
            <CalenderSVG fill="#fefefe" />
            <p>
              {dateText ? dateText : `${getWeekDay(date)}, ${getDate(date)}`}
            </p>
          </li>
          {date.length > 10 && (
            <li className={styles.quickViewTime}>
              <ClockSVG fill="#fefefe" /> <p>{getTime(date)}</p>
            </li>
          )}
          {startTime && (
            <li className={styles.quickViewStartTime}>
              <ArrowRightSVG fill="#fefefe" />{' '}
              <p>
                {`${startTime
                  .split(':')
                  .splice(0, 2)
                  .join(':')} Uhr`}
              </p>
            </li>
          )}
          {endTime && (
            <li className={styles.quickViewEndTime}>
              <ArrowLeftSVG fill="#fefefe" />{' '}
              <p>{`${endTime
                .split(':')
                .splice(0, 2)
                .join(':')} Uhr`}</p>
            </li>
          )}

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
