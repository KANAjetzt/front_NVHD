import React from 'react'
import styles from './galerieImageView.module.scss'
import GallerySlider from '../galeire-image-slide/galerieImageSlide'
import Gallery from 'react-photo-gallery'
import Img from 'gatsby-image'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'

export default class galerieImageView extends React.Component {
  constructor() {
    super()
    this.state = {
      showSlider: false,
      imagesID: [],
      images: [],
      currentImage: 0,
    }
    this.closeSlider = this.closeSlider.bind(this)
    this.openSlider = this.openSlider.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  openSlider(event, obj) {
    this.setState({
      currentImage: obj.index,
      showSlider: true,
    })
  }

  closeSlider() {
    this.setState({
      currentImage: 0,
      showSlider: false,
    })
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  componentDidMount() {
    console.log(this.props)
    this.props.stuff.galerie.bild.forEach(bild => {
      this.setState(prevState => ({
        imagesID: [...prevState.imagesID, bild.asset._id],
        images: [
          ...prevState.images,
          {
            src: `https://cdn.sanity.io/${bild.asset.path}`,
            width: Math.round(bild.asset.metadata.dimensions.width),
            height: Math.round(bild.asset.metadata.dimensions.height),
          },
        ],
      }))
    })
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {this.props.stuff.title && <h2>{this.props.stuff.title}</h2>}
        {this.state.showSlider && (
          <GallerySlider
            images={this.state.images.map(imgObj => imgObj.src)}
            openSlider={this.openSlider}
            closeSlider={this.closeSlider}
            gotoPrevious={this.gotoPrevious}
            gotoNext={this.gotoNext}
            sliderState={this.state.showSlider}
            currentImage={this.state.currentImage}
          />
        )}

        <Gallery photos={this.state.images} onClick={this.openSlider} />
      </React.Fragment>
    )
  }
}
