import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import styles from './termine.module.scss'
import Termin from '../termin/termin'

class Termine extends React.Component {
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
    return props.data.termine.edges.filter(termin => {
      const currentDate = new Date()
      const terminDate = new Date(`${termin.node.date}`)
      if (terminDate > currentDate) {
        return termin
      }
      return undefined
    })
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        {this.state.termine[0] ? (
          <div className={styles.termine}>
            {this.state.termine.map(termin => (
              <Termin
                key={termin.node.id}
                terminKey={termin.node.id}
                date={termin.node.date}
                title={termin.node.title}
              />
            ))}
          </div>
        ) : (
          <p>
            Jemand hat vergessen hier die nächsten Termine ein zu tragen{' '}
            <span role="img" aria-label="running man emoji">
              🏃
            </span>
          </p>
        )}
      </React.Fragment>
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
