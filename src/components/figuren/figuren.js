import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styles from './figuren.module.scss'
import Figur from '../figur/figur'

class Figuren extends React.Component {
  render() {
    return (
      <div className={styles.figuren}>
        {this.props.data.page.edges.map(figur => (
          <Figur
            key={figur.node.id}
            FigurKey={figur.node.id}
            img={`https://cdn.sanity.io/${figur.node.bild.asset.path}`}
            fluid={figur.node.bild.asset.fluid}
            heading={figur.node.name}
            text={figur.node.description}
          />
        ))}
      </div>
    )
  }
}

export default Figuren
