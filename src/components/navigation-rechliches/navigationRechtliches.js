import React from 'react'
import { Link } from 'gatsby'
import styles from './navigatonRechtliches.module.scss'

const NavigationRechtliches = () => {
  return (
    <ul className={styles.linkBox}>
      <li>
        <Link to="/datenschutz">Datenschutz</Link>
      </li>
      <li>
        <Link to="/impressum">Impressum</Link>
      </li>
    </ul>
  )
}

export default NavigationRechtliches
