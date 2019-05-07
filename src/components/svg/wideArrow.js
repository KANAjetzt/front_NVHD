import React from 'react'

export default function wideArrow(props) {
  return (
    <div className={props.classname}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4.46mm"
        height="14.65mm"
        viewBox="0 0 12.65 41.53"
      >
        <title>wideArrow</title>
        <rect
          x="110.08"
          y="217.09"
          width="0.83"
          height="24.17"
          rx="0.25"
          transform="translate(-203.96 -132.64) rotate(-30)"
          fill={props.fill}
        />
        <rect
          x="110.08"
          y="237.44"
          width="0.83"
          height="24.17"
          rx="0.21"
          transform="translate(35.39 -240.41) rotate(30)"
          fill={props.fill}
        />
      </svg>
    </div>
  )
}
