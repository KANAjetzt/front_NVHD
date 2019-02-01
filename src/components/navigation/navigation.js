import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './navigation.module.scss'
import Heulicher from '../svg/heulicher'

class Navigation extends React.Component {
  render() {
    console.log(this.props)
    return (
      <nav
        className={
          this.props.showMenu ? styles.backgroundOnClick : styles.background
        }
      >
        <ul className={this.props.showMenu ? styles.navOnClick : styles.nav}>
          <li className={styles.link}>
            <Heulicher className={styles.linkIcon} fill={'#f0be2a'} />
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Heulicher className={styles.linkIcon} fill={'#f0be2a'} />
            <Link to="/figuren">Figuren</Link>
          </li>
          <li className={styles.link}>
            <Heulicher className={styles.linkIcon} fill={'#f0be2a'} />
            <Link to="/dorffasnet">Dorffasnet</Link>
          </li>
          <li className={styles.link}>
            <Heulicher className={styles.linkIcon} fill={'#f0be2a'} />
            <Link to="/chronik">Chronik</Link>
          </li>
          <li className={styles.link}>
            <Heulicher className={styles.linkIcon} fill={'#f0be2a'} />
            <Link to="/galerie">Galerie</Link>
          </li>
          <li className={styles.link}>
            <Heulicher className={styles.linkIcon} fill={'#f0be2a'} />
            <Link to="/vorstand">Vorstand</Link>
          </li>
          <li className={styles.link}>
            <Heulicher className={styles.linkIcon} fill={'#f0be2a'} />
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
