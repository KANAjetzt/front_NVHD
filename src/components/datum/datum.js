import React from 'react'
import styles from './datum.module.scss'
import { getDate, getTime, getWeekDay } from '../../lib/datumUhrzeit'

const checkDateType = (dateType, date) => {
  switch (dateType) {
    case 'date':
      return getDate(date)
    case 'time':
      return getTime(date)
    case 'weekDay':
      return getWeekDay(date)
    default:
      return getDate(date)
  }
}

export default function Datum(props) {
  return (
    <p className={styles.date}> {checkDateType(props.dateType, props.date)} </p>
  )
}
