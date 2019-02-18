import React, { Component } from 'react'

export default class Termin extends Component {
  formatDate = date => {
    let newDate = date.split('-')
    newDate = newDate.slice(1, 3)
    console.log(newDate)
    newDate = newDate.splice(1, 0, `${newDate.splice(0, 1)}`)
    console.log(newDate)
    newDate = newDate.join('.')
    return newDate
  }

  render() {
    return (
      <div>
        <p>{this.formatDate(this.props.date)}</p>
        <h4> {this.props.title} </h4>
      </div>
    )
  }
}
