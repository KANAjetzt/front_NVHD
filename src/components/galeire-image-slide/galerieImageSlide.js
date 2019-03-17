import React from 'react'
import ImageSlider from 'react-images'
import './image-gallery.scss'

export default class GallerieImageSlide extends React.Component {
  render() {
    console.log(this.props)

    return (
      <ImageSlider
        images={this.props.images}
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
