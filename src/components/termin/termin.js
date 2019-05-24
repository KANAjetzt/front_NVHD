import React from 'react'
import styles from './termin.module.scss'
import { Link } from 'gatsby'
import { getDate, getTime } from '../../lib/datumUhrzeit'
import IconWideArrow from '../svg/wideArrow'

const checkDate = props => {
  const { date, dateText } = props

  // Wenn es ein grobes Datum gibt --> etwas in das Textfeld eingegeben wurde
  if (dateText) {
    return dateText
  }

  // Wenn es ein Festes Datum gibt --> etwas wurde im Datepicker ausgewählt
  return date.length > 10
    ? `${getDate(date)} - ${getTime(date)}`
    : getDate(date)
}

const Termin = props => {
  return (
    <div className={styles.termin}>
      <Link to={`/termine/${props.slug}`}>
        <button className={styles.btn}>
          <div className={styles.btnContent}>
            <p className={styles.date}>{checkDate(props)}</p>
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
