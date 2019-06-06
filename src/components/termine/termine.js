import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TermineYear from '../termine-year/termineYear'

const groupDates = termine => {
  let currentYear = new Date(termine.edges[0].node.date).getFullYear()
  let groupedTermine = []
  let filterdYears = []
  let lastFilterdOutYear
  //! filterdYears beinhaltet alle durchlaufen Jahre -> alle die currentYear waren.
  //! Ist das Jahr nicht in filterdYears -> wird es zu currentYear
  //! Ist es in filterdYears wird currentYear undefined (?)
  //! Ist currentYear undefined ist die loop beendet und alle Jahre sind Grupiert (?)

  const filterTermine = () => {
    console.log(`currentYear --> ${currentYear}`)
    console.log(`lastFilterdOutYear --> ${lastFilterdOutYear}`)
    console.log(filterdYears)
    console.log(termine)

    const filter = termine.edges.filter((termin, index, array) => {
      // Wenn das aktuelle Datums Jahr gleich ist wie das currentYear und wir nicht am ende des Arrays sind:
      if (
        new Date(termin.node.date).getFullYear() === currentYear &&
        index !== array.length - 1
      ) {
        // - adde es zum filter Array
        return true
      }

      // Wenn das aktuelle Datums Jahr gleich ist und wir beim letzten Eintrag sind:
      else if (
        new Date(termin.node.date).getFullYear() === currentYear &&
        index === array.length - 1
      ) {
        // - adde currentYear zum filterdYears Array
        filterdYears = [...filterdYears, currentYear]
        // - setzte lastFilterdOutYear zum CurrentYear, wenn lastFilterdOutYear nicht in filterdYears Array ist
        filterdYears.find(lastFilterdOutYear)
          ? (currentYear = undefined)
          : (currentYear = lastFilterdOutYear)
        // - adde es zum filter Array
        return true
      }

      // Ansonsten schau ob wir am ende sind und trage dann das volle Jahr des Elemts als currentYear ein, wenn dieses Jahr nicht in filterdYears Array ist
      else if (index === array.length - 1) {
        filterdYears.find(`${new Date(termin.node.date).getFullYear()}`)
          ? (currentYear = undefined)
          : (currentYear = new Date(termin.node.date).getFullYear())
        return false
      }

      lastFilterdOutYear = new Date(termin.node.date).getFullYear()
      return false
    })

    if (filter.length !== 0) {
      groupedTermine = [...groupedTermine, filter]
    } else {
      filterTermine()
    }
    return filter
  }

  filterTermine()
  return groupedTermine
}

const Termine = (data, props) => {
  const [termine] = useState(groupDates(data.data.termine))

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
