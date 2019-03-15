import React from 'react'
import styles from './galerieImageView.module.scss'
import GallerySlider from '../galeire-image-slide/galerieImageSlide'
import Img from 'gatsby-image'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'

export default class galerieImageView extends React.Component {
  constructor() {
    super()
    this.state = {
      showSlider: false,
      images: [],
      currentImage: 0,
    }
    this.closeSlider = this.closeSlider.bind(this)
    this.openSlider = this.openSlider.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  openSlider(event, obj) {
    console.log(event)
    console.log(obj)
    this.setState({
      currentImage: obj,
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
      console.log(`https://cdn.sanity.io/${bild.asset.path}`)
      this.setState(prevState => ({
        images: [...prevState.images, bild.asset._id],
      }))
    })
  }

  render() {
    console.log(this.props)

    const sanityConfig = { projectId: '74ftimmm', dataset: 'production' }

    return (
      <React.Fragment>
        {this.props.stuff.title && <h2>{this.props.stuff.title}</h2>}
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
        <div className={styles.galerieImageView}>
          {this.state.images.map((bild, index) => {
            const fluidProps = getFluidGatsbyImage(
              bild,
              { maxWidth: 1024 },
              sanityConfig
            )

            return (
              <div
                key={`image-${index}`}
                className={styles.imageItem}
                onClick={e => this.openSlider(e, index)}
              >
                <Img fluid={fluidProps} />
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
