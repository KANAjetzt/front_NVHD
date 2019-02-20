import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styles from './termine.module.scss'
import Termin from '../termin/termin'

class Termine extends React.Component {
  render() {
    return (
      <div className={styles.termine}>
        {this.props.data.termine.edges.map(termin => (
          <Termin
            key={termin.node.id}
            terminKey={termin.node.id}
            date={termin.node.date}
            title={termin.node.title}
          />
        ))}
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query termineComponentQuery {
        termine: allSanityTermin {
          edges {
            node {
              id
              date
              title
            }
          }
        }
      }
    `}
    render={data => <Termine data={data} {...props} />}
  />
)
