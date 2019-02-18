import React from 'react'
import { Link } from 'gatsby'
import Facebook from './../svg/facebook'
import Instagram from './../svg/instagram'
import Twitter from './../svg/twitter'
import Youtube from './../svg/youtube'
import styles from './navigationSocial.module.scss'

class NavigationSocial extends React.Component {
  render() {
    return (
      <ul className={styles.socialGrid}>
        <li>
          <Link to="/kontakt">
            <Facebook fill={'#f0be2a'} />
          </Link>
        </li>
        <li>
          <Link to="/kontakt">
            <Instagram fill={'#f0be2a'} />
          </Link>
        </li>
        <li>
          <Link to="/kontakt">
            <Twitter fill={'#f0be2a'} />
          </Link>
        </li>
        <li>
          <Link to="/kontakt">
            <Youtube fill={'#f0be2a'} />
          </Link>
        </li>
      </ul>
    )
  }
}

export default NavigationSocial
