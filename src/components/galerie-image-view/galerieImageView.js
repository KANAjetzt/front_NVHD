import React from 'react'
import styles from './galerieImageView.module.scss'

/******** 
  TODO:
  - Take the first image of a "galerie" as thump
  - link to a galerie with all the images
*/

export default class galerieImageView extends React.Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {this.props.stuff.title && <h2>{this.props.stuff.title}</h2>}
        <div className={styles.galerieImageView}>
          {this.props.stuff.galerie.bild.map(bild => (
            <img
              key={bild.asset._id}
              src={`https://cdn.sanity.io/${bild.asset.path}`}
            />
          ))}
        </div>
      </React.Fragment>
    )
  }
}
