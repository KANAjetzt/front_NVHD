import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import googleMapStyle from './styling.json'

export class GoogleMap extends Component {
  render() {
    console.log(this.props)
    return (
      <Map
        google={this.props.google}
        zoom={17}
        initialCenter={this.props.initialCenter}
        mapTypeControl={false}
        streetViewControl={false}
        zoomControl={false}
        style={{
          width: '100vw',
          height: '40rem',
          marginLeft: '-1rem',
        }}
        containerStyle={{
          width: '100vw',
          height: '40rem',
          marginLeft: '-1rem',
        }}
        styles={googleMapStyle}
      >
        <Marker
          title={this.props.locationName}
          name={this.props.locationName}
          position={this.props.initialCenter}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDZ6iNDdCPHsDUsoE6AZxTJkRFHmJvZIYg',
})(GoogleMap)
