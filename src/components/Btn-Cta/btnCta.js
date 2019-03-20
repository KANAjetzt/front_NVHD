import React, { Component } from 'react'
import styles from './btnCta.module.scss'
import { Link } from 'gatsby'

export default class BtnCta extends Component {
  render() {
    return (
      <Link className={styles.btnText} to={this.props.link}>
        {' '}
        <button className={styles.btn}>{this.props.children}</button>
      </Link>
    )
  }
}
