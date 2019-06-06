import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TermineYear from '../termine-year/termineYear'

const groupDates = termine => {
  // erstelle eine neue Map
  const newTermine = new Map()
  // Grab dir den 1. Termin aus den Terminen und speicher das Jahr davon in currentYear
  let currentYear = undefined

  termine.edges.forEach(termin => {
    const { date } = termin.node
    // Wenn das FullYear des aktuellen termins = ist mit dem currentYear adde es zu dem key mit dem currentYear value (z.B: 2019)
    if (new Date(date).getFullYear() === currentYear) {
      newTermine.set(currentYear, [...newTermine.get(currentYear), termin])
    } else {
      /* Wenn das FullYear des aktuellen termins nicht gleich ist mit dem currentYear,
      update das currentYear mit dem fullYear des aktuellen Termins und adde den termin zu dem key currentYear (z.B. 2020) */
      currentYear = new Date(date).getFullYear()

      if (newTermine.has(currentYear)) {
        newTermine.set(currentYear, [...newTermine.get(currentYear), termin])
      }
      newTermine.set(currentYear, [termin])
    }
  })
  // mit .values() erhält man ein neues "Iterator Objekt" das man mit Array.from zu einem Array wandeln kann
  return Array.from(newTermine.values())
}

const Termine = (data, props) => {
  const [termine] = useState(groupDates(data.data.termine))
  return (
    <React.Fragment>
      {termine.map(year => (
        <TermineYear data={year} key={year[0].node.id} />
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
