import React, { Component } from 'react'
import styles from './termin.module.scss'
import Datum from '../datum/datum'

export default class Termin extends Component {
  render() {
    return (
      <div className={styles.termin}>
        <Datum date={this.props.date} />
        <h4 className={styles.heading}> {this.props.title} </h4>
      </div>
    )
  }
}
