import React, { Component } from 'react'
import styles from './figur.module.scss'
import Img from 'gatsby-image'

export default class Figur extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={styles.figur}>
        <Img className={styles.img} fluid={this.props.fluid} />
        <h3 className={styles.heading}> {this.props.heading} </h3>
        <p className={styles.text}>{this.props.text}</p>
      </div>
    )
  }
}
