import React from 'react'
import styles from './wideArrow.module.scss'

export default function wideArrow(props) {
  return (
    <div className={props.classname}>
      <div className={styles.iconBox}>
        <span className={styles.icon} />
      </div>
    </div>
  )
}
