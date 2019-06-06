import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TermineYear from '../termine-year/termineYear'

const groupDates = termine => {
  // erstelle ein neues Map
  const newTermine = new Map()

  let currentYear = undefined

  termine.edges.forEach(termin => {
    const { date } = termin.node

    // Wenn das FullYear des aktuellen termins gleich ist mit dem currentYear:
    if (new Date(date).getFullYear() === currentYear) {
      //adde es zu dem key mit dem currentYear value (z.B: 2019)
      newTermine.set(currentYear, [...newTermine.get(currentYear), termin])
    }
    // Wenn das FullYear des aktuellen termins nicht gleich ist wie das currentYear:
    else {
      // Update das currentYear mit dem fullYear des aktuellen Termins
      currentYear = new Date(date).getFullYear()

      // Adde den termin zu dem key currentYear (z.B. 2020)
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
