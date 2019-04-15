import React, { Component } from 'react'
import styles from './terminDetailed.module.scss'
import GoogleMap from '../googleMap/googleMap'

export default class Termin extends Component {
  formatDate = date => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }

    return `${this.parseISOString(date).toLocaleDateString(
      'de-DE',
      options
    )} Uhr`
  }

  parseISOString(s) {
    const b = s.split(/\D+/)
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
  }

  render() {
    console.log(this.props)
    return (
      <div className={styles.termin}>
        <h2>{}</h2>

        <GoogleMap
          initialCenter={
            this.props.stuff.allSanityTermin.edges[0].node.location
          }
          markerTitle={
            this.props.stuff.allSanityTermin.edges[0].node.locationName
          }
        />
      </div>
    )
  }
}
