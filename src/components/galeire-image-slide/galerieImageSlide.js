import React from 'react'
import ImageGallery from 'react-image-gallery'
import './image-gallery.scss'

export default class GallerieImageSlide extends React.Component {
  render() {
    const images = this.props.images.map(image => {
      return {
        original: `${image}`,
        thumbnail: `${image}`,
      }
    })

    return <ImageGallery items={images} />
  }
}
