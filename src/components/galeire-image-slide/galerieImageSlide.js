import React from 'react'
import ImageSlider from 'react-images'
import './image-gallery.scss'

export default class GallerieImageSlide extends React.Component {
  render() {
    const images = this.props.images.map(image => {
      return {
        src: `${image}`,
      }
    })

    return (
      <ImageSlider
        images={images}
        isOpen={this.props.sliderState}
        onClose={this.props.closeSlider}
        onClickPrev={this.props.gotoPrevious}
        onClickNext={this.props.gotoNext}
        currentImage={this.props.currentImage}
        width={2000}
      />
    )
  }
}
