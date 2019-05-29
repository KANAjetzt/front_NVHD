import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TermineYear from '../termine-year/termineYear'

const groupDates = termine => {
  let currentYear
  let groupedTermine = []
  let lastFilterdOutYear

  const filterTermine = () => {
    console.log(currentYear)
    console.log(termine)
    const filter = termine.edges.filter((termin, index, array) => {
      // Wenn das aktuelle Datums Jahr gleich ist wie das current Year adde es zum Array
      if (
        new Date(termin.node.date).getFullYear() === currentYear &&
        index !== array.length - 1
      ) {
        return true
        // Wenn das aktuelle Datums Jahr gleich und wir beim letzten Eintrag sind,
        // adde es zum Array und setzte currentYear
      } else if (
        new Date(termin.node.date).getFullYear() === currentYear &&
        index === array.length - 1
      ) {
        currentYear = lastFilterdOutYear
        return true
        // Ansonsten schau ob wir am ende sind und trage dann das volle Jahr als currentYear ein
      } else if (index === array.length - 1) {
        currentYear = new Date(termin.node.date).getFullYear()
        return false
      }

      lastFilterdOutYear = new Date(termin.node.date).getFullYear()
      return false
    })

    console.log(filter)
    if (filter.length !== 0) {
      groupedTermine = [...groupedTermine, filter]
    }

    return filter
  }

  console.log(filterTermine())

  if (filterTermine() === []) {
    filterTermine()
  } else {
    groupedTermine = [...groupedTermine, filterTermine()]
  }

  console.log(groupedTermine)
  return groupedTermine
}

const Termine = (data, props) => {
  console.log(data)
  const [termine] = useState(groupDates(data.data.termine))
  console.log(termine)

  return (
    <React.Fragment>
      {termine.map(year => (
        <TermineYear data={year} />
      ))}
    </React.Fragment>
  )
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
    render={data => <Termine data={data} {...props} />}
  />
)
