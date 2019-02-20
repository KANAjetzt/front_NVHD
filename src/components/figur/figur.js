import React, { Component } from 'react'
import styles from './figur.module.scss'

export default class Figur extends Component {
  render() {
    return (
      <div className={styles.figur}>
        <img className={styles.img} src={this.props.img} />
        <h3 className={styles.heading}> {this.props.heading} </h3>
        <p className={styles.text}>{this.props.text}</p>
      </div>
    )
  }
}
