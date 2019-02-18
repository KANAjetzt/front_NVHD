import React, { Component } from 'react'
import styles from './btnCta.module.scss'

export default class BtnCta extends Component {
  render() {
    return <button className={styles.btn}>{this.props.children}</button>
  }
}
