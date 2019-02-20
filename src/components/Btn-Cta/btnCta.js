import React, { Component } from 'react'
import styles from './btnCta.module.scss'
import { Link } from 'gatsby'

export default class BtnCta extends Component {
  render() {
    return <button className={styles.btn} ><Link className={styles.btnText} to={this.props.link}>{this.props.children}</Link></button>
  }
}
