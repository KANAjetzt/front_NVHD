import React from 'react'
import styles from './galerieImageView.module.scss'
import GallerySlider from '../galeire-image-slide/galerieImageSlide'
import { throws } from 'assert'

/******** 
  TODO:
  - Take the first image of a "galerie" as thump
  - link to a galerie with all the images
*/

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
        images: [
          ...prevState.images,
          `https://cdn.sanity.io/${bild.asset.path}`,
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
          {this.props.stuff.galerie.bild.map((bild, index) => (
            <div key={bild.asset._id} className={styles.imageItem}>
              <img
                src={`https://cdn.sanity.io/${bild.asset.path}`}
                onClick={e => this.openSlider(e, index)}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
