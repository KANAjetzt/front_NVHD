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
  state = {
    showSlider: false,
    images: [],
  }

  toggleSlider = () => {
    console.log('this works fine!' + this.state.showSlider)
    this.setState({
      showSlider: !this.state.showSlider,
    })
  }

  prepareImages = () => {
    console.log(this.state.images)
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
        {this.state.showSlider && <GallerySlider images={this.state.images} />}
        <div className={styles.galerieImageView}>
          {this.props.stuff.galerie.bild.map(bild => (
            <div
              key={bild.asset._id}
              className={styles.imageItem}
              onClick={this.toggleSlider}
            >
              <img src={`https://cdn.sanity.io/${bild.asset.path}`} />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
