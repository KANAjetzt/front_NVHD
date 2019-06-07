import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styles from './termineYear.module.scss'
import Termin from '../termin/termin'

class TermineYear extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      termine: this.prepareDates(props),
    }
    this.prepareDates = this.prepareDates.bind(this)
  }

  prepareDates(props) {
    return this.sortDates(this.filterDates(props))
  }

  sortDates(termine) {
    return termine.sort((a, b) => {
      return new Date(a.node.date) - new Date(b.node.date)
    })
  }

  filterDates(props) {
    // filter out the dates that are older then today
    return props.data.filter(termin => {
      const currentDate = new Date()
      const terminDate = new Date(`${termin.node.date}`)
      if (terminDate > currentDate) {
        return termin
      }
      return undefined
    })
  }

  render() {
    return (
      <div className={styles.termine}>
        <h2>
          Termine <br />
          <span className={styles.h2Span}>
            {new Date(this.props.data[0].node.date).getFullYear()}
          </span>
        </h2>
        {this.state.termine[0] ? (
          <div>
            {this.state.termine.map(termin => (
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
