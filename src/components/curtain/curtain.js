import React, { useEffect } from 'react'
import styles from './curtain.module.scss'

const Curtain = () => {
  useEffect(() => {
    // DOM Elemente als Variable nutzbar mache
    console.log(styles)
    console.log(`.${styles.container__glow1}`)
    const GLOW1 = document.querySelector(`.${styles.container__glow1}`)
    console.log(GLOW1)
    const GLOW2 = document.querySelector(`.${styles.container__glow2}`)

    // Größe des Fensters als Variable nutzbar machen
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight

    // Bewegung der Maus erkennen und als Variable nutzbar machen
    const getMouseMovePos = event => {
      // Mouse Koordinaten definieren
      const MOUSE_X = event.clientX
      const MOUSE_Y = event.clientY
      console.log(MOUSE_Y + ' : ' + MOUSE_X)

      // Differenz berechnen
      const DELTA_X1 = Math.round(((MOUSE_X / WIDTH) * 150) / 3, 0)
      const DELTA_Y1 = Math.round(((MOUSE_Y / HEIGHT) * 150) / 3, 0)
      const DELTA_X2 = Math.round(((MOUSE_X / WIDTH) * 150) / 3, 0)
      const DELTA_Y2 = Math.round(((MOUSE_Y / HEIGHT) * 150) / 3, 0)

      // Glow Elemente Bewegen
      GLOW1.style.bottom = `${DELTA_Y1}%`
      GLOW1.style.right = `${DELTA_X1}%`
      GLOW2.style.top = `${DELTA_Y2}%`
      GLOW2.style.left = `${DELTA_X2}%`
    }

    // Function zum triggern eines Events erstellen
    document.onmousemove = getMouseMovePos
  }, [])

  return (
    <section className={styles.main}>
      <div className={styles.curtainOverlay}>
        <div className={styles.curtainContainer}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.container__glow1}></div>
        <div className={styles.container__glow2}></div>
      </div>
    </section>
  )
}

export default Curtain
