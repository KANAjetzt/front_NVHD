import React from 'react'
import styles from './termin.module.scss'
import { Link } from 'gatsby'
import { getDate, getTime } from '../../lib/datumUhrzeit'
import IconWideArrow from '../svg/wideArrow'

const Termin = props => {
  return (
    <div className={styles.termin}>
      <Link to={`/termine/${props.slug}`}>
        <button className={styles.btn}>
          <div className={styles.btnContent}>
            <p className={styles.date}>
              {getDate(props.date)} - {getTime(props.date)}
            </p>
            <h4 className={styles.heading}> {props.title} </h4>
            <div className={styles.iconArrow}>
              <IconWideArrow fill="#eee" />
            </div>
          </div>
        </button>
      </Link>
    </div>
  )
}

export default Termin
