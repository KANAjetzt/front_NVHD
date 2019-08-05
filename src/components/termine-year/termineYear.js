import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styles from './termineYear.module.scss'
import Termin from '../termin/termin'

class TermineYear extends React.Component {
  render() {
    return (
      <div>
        {this.props.data[0] ? (
          <div className={styles.termine}>
            <h2>
              Termine <br />
              <span className={styles.h2Span}>
                {new Date(this.props.data[0].node.date).getFullYear()}
              </span>
            </h2>
            {this.props.data.map(termin => (
              <Termin
                key={termin.node.id}
                terminKey={termin.node.id}
                date={termin.node.date}
                dateText={termin.node.dateText}
                title={termin.node.title}
                slug={termin.node.slug.current}
              />
            ))}
          </div>
        ) : (
          <p />
        )}
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query termineYearComponentQuery {
        termine: allSanityTermin {
          edges {
            node {
              id
              date
              dateText
              title
              slug {
                current
              }
            }
          }
        }
      }
    `}
    render={data => <TermineYear data={data} {...props} />}
  />
)
