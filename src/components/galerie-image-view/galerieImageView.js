import React from 'react'
import styles from './galerieImageView.module.scss'
import GallerySlider from '../galeire-image-slide/galerieImageSlide'
import Gallery from 'react-photo-gallery'
import ImgPrep from './gatsbyImagePrepare'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { Link } from 'gatsby'
import BtnBack from '../btn-back/btnBack'

export default class galerieImageView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSlider: false,
      imagesID: this.getImageIDs(props),
      images: this.getImages(props),
      currentImage: 0,
    }
    this.closeSlider = this.closeSlider.bind(this)
    this.openSlider = this.openSlider.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.getImages = this.getImages.bind(this)
    this.getImageIDs = this.getImageIDs.bind(this)
  }

  // get the src link for all images in this galery
  getImages(props) {
    const images = []
    props.stuff.galerie.bild.forEach(bild => {
      images.push({
        src: `https://cdn.sanity.io/${bild.asset.path}`,
      })
    })
    return images
  }

  // get the Image Sanity IDs  to later convert them into fluid propertys for gatsby-image
  getImageIDs(props) {
    const imageIDs = []
    props.stuff.galerie.bild.forEach(bild => {
      imageIDs.push({
        src: bild.asset._id,
        width: Math.round(bild.asset.metadata.dimensions.width),
        height: Math.round(bild.asset.metadata.dimensions.height),
      })
    })
    return imageIDs
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

  // Get The Fluid props for gatsby-image from Sanity
  getFluidProps(imagesID) {
    const sanityConfig = { projectId: '74ftimmm', dataset: 'production' }
    const fluidProps = getFluidGatsbyImage(
      imagesID,
      { maxWidth: 1024 },
      sanityConfig
    )

    return fluidProps
  }

  componentDidMount() {
    const imageIDs = this.state.imagesID.map(imageID => imageID.src)
    let imageFluidProps = []
    imageIDs.forEach(imageID => {
      imageFluidProps.push(this.getFluidProps(imageID))
    })
    let imageSrcSet = imageFluidProps.map(image => image.srcSet)
    this.state.images.forEach((image, index) => {
      Object.assign(image, { srcSet: imageSrcSet[index] })
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.semiHeader}>
          <Link to="/galerie">
            <BtnBack />
          </Link>
          {this.props.stuff.title && (
            <h2 className={styles.heading}>{this.props.stuff.title}</h2>
          )}
        </div>
        {this.state.showSlider && (
          <GallerySlider
            images={this.state.images}
            openSlider={this.openSlider}
            closeSlider={this.closeSlider}
            gotoPrevious={this.gotoPrevious}
            gotoNext={this.gotoNext}
            sliderState={this.state.showSlider}
            currentImage={this.state.currentImage}
          />
        )}

        <Gallery
          photos={this.state.imagesID}
          onClick={this.openSlider}
          ImageComponent={ImgPrep}
        />
      </React.Fragment>
    )
  }
}
