import React, { Component } from 'react'

export default class Facebook extends React.Component {
  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={this.props.fill}
        className={this.props.className}
        viewBox="0 0 32 32"
      >
        <title>facebook</title>
        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z" />
      </svg>
    )
  }
}
