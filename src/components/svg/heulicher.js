import React from 'react'

export default class Heulicher extends React.Component {
  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill={this.props.fill}
        className={this.props.className}
        viewBox="0 0 37.23 46.67"
      >
        <title>heulicher</title>
        <path
          className="cls-1"
          d="M7.45,22.63a1.27,1.27,0,0,1-.37,1.52A1.28,1.28,0,0,1,6,24.44c-.93-.31-2.18-5.16-2.18-5.16L3.45,9,0,1S-.3-.56,1.74.22L14.08,15.84,26.11,31l3.44,1.56L37.2,42.72A1.51,1.51,0,0,1,36.89,44c-.47.47-3,2.66-3,2.66A1.39,1.39,0,0,1,32.36,46c-.62-.94-24.84-32-24.84-32S6,12.25,6.27,14.44a17.51,17.51,0,0,0,.31,4.37A12.72,12.72,0,0,0,7.45,22.63Z"
        />
      </svg>
    )
  }
}
