import React, { useState, useEffect } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Countdown from 'react-countdown'
import YouTube from 'react-youtube'
import styles from './curtain.module.scss'
import ImageCompVereinsfiguren from '../image-comp-Vereinsfiguren/imageCompVereinsfiguren'

const Curtain = () => {
  const { width, height } = useWindowSize()

  // new Date(2021, 1, 12, 20)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [countDownDate, setCountDownDate] = useState(new Date(2021, 1, 12, 20))
  const [player, setPlayer] = useState(null)
  const [startPlaying, setStartPlaying] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setCanvasWidth(width)
    setCanvasHeight(height)
  }, [width, height])

  useEffect(() => {
    // start playing the video
    if (player && startPlaying && !isPlaying) {
      player.playVideo()
    }
  }, [player, startPlaying, isPlaying])

  const checkCountDown = (
    curtainLeft,
    curtainRight,
    content,
    ground,
    bg,
    confetti,
    container,
    ytVideo
  ) => {
    setInterval(() => {
      // Check countdown date
      if (Date.now() < countDownDate) return

      // Start curtain animation
      curtainLeft.style.animationPlayState = 'running'
      curtainRight.style.animationPlayState = 'running'

      // Fade in Ground
      ground.style.animationPlayState = 'running'

      // Fade in dark bg
      bg.style.animationPlayState = 'running'

      // Fade out confetti
      confetti.style.animationPlayState = 'running'

      // fade out container content
      content.style.animationPlayState = 'running'

      // fade down lights
      container.style.animationPlayState = 'running'

      // fade up ytVideo
      ytVideo.style.animationPlayState = 'running'

      // play ytVideo
      setTimeout(() => {
        setStartPlaying(true)
      }, 1000 * 5)

      // change z-index of ytVideo
      setTimeout(() => {
        ytVideo.style.zIndex = 200
      }, 1000 * 7)
    }, 1000)
  }

  const ytOnReady = e => {
    setPlayer(e.target)
  }

  const ytOnPlay = e => {
    setIsPlaying(true)
  }
  useEffect(() => {
    window.dispatchEvent(new Event('resize'))

    const curtainLeft = document.querySelector(`.${styles.left.split(' ')[0]}`)
    const curtainRight = document.querySelector(
      `.${styles.right.split(' ')[0]}`
    )
    const content = document.querySelector(`.${styles.content}`)
    const container = document.querySelector(`.${styles.container}`)
    const ground = document.querySelector(`.${styles.ground}`)
    const bg = document.querySelector(`.${styles.bg}`)
    const confetti = document.querySelector(`.${styles.main} canvas`)
    const ytVideo = document.querySelector(`.${styles.ytVideo}`)

    checkCountDown(
      curtainLeft,
      curtainRight,
      content,
      ground,
      bg,
      confetti,
      container,
      ytVideo
    )

    // DOM Elemente als Variable nutzbar mache
    const GLOW1 = document.querySelector(`.${styles.container__glow1}`)
    const GLOW2 = document.querySelector(`.${styles.container__glow2}`)

    // Größe des Fensters als Variable nutzbar machen
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight

    // Bewegung der Maus erkennen und als Variable nutzbar machen
    const getMouseMovePos = event => {
      // Mouse Koordinaten definieren
      const MOUSE_X = event.clientX
      const MOUSE_Y = event.clientY

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
  }, [player, isPlaying])

  return (
    <section className={styles.main}>
      <Confetti
        width={canvasWidth}
        height={canvasHeight}
        gravity={0.02}
        wind={-0.002}
      />
      <div className={styles.curtainOverlay}>
        <div className={styles.curtainContainer}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.ground}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <ImageCompVereinsfiguren />
          <Countdown zeroPadTime={2} date={countDownDate} />
        </div>
        <div className={styles.container__glow1}></div>
        <div className={styles.container__glow2}></div>
      </div>

      <YouTube
        containerClassName={styles.ytVideo}
        videoId="Moqq5DcntCs"
        opts={{
          height: '390',
          width: '640',
          playerVars: {},
        }}
        onReady={ytOnReady}
        onPlay={ytOnPlay}
      />

      <div className={styles.bg} />
    </section>
  )
}

export default Curtain
