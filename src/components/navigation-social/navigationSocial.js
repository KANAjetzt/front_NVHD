import React from 'react'
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
          <a href="https://www.facebook.com/heuliecher/">
            <Facebook fill={'#f0be2a'} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/heuliecher">
            <Instagram fill={'#f0be2a'} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/heuliecher">
            <Twitter fill={'#f0be2a'} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCkkbZhBC039H2zRYIszzSbw">
            <Youtube fill={'#f0be2a'} />
          </a>
        </li>
      </ul>
    )
  }
}

export default NavigationSocial
