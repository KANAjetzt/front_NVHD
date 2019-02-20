import React, { Component } from 'react'
import styles from './termin.module.scss'

export default class Termin extends Component {
  formatDate = date => {
    let newDate = date.split('-')
    newDate = newDate.slice(1, 3)
    newDate.splice(0, 1, `${newDate.splice(1, 1, newDate[0])}`)
    newDate = newDate.join('.')
    return newDate
  }

  render() {
    return (
      <div className={styles.termin}>
        <p className={styles.date}>{this.formatDate(this.props.date)}</p>
        <h4 className={styles.heading}> {this.props.title} </h4>
      </div>
    )
  }
}
