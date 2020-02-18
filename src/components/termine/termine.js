import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import styles from './termine.module.scss'
import TermineYear from '../termine-year/termineYear'
import TermineFeatured from '../termin-featured/terminFeatured'

const getFeaturedTermine = termine => {
  return sortDates(filterDates(termine.filter(termin => termin.node.featured)))
}

const prepareDates = termine => {
  return groupDates(sortDates(filterDates(termine)))
}

const sortDates = termine => {
  return termine.sort((a, b) => {
    return new Date(a.node.date) - new Date(b.node.date)
  })
}

const filterDates = termine => {
  // filter out the dates that are older then 1 Week
  return termine.filter(termin => {
    const currentDate = new Date().getTime()
    const terminDate =
      new Date(`${termin.node.date}`).getTime() + 1000 * 60 * 60 * 24 * 7 // current Date + 1 Woche

    if (terminDate > currentDate) {
      return termin
    }
    return undefined
  })
}

const groupDates = termine => {
  // erstelle ein neues Map
  const newTermine = new Map()

  let currentYear = undefined
  termine.forEach(termin => {
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
      } else {
        newTermine.set(currentYear, [termin])
      }
    }
  })

  // mit .entries() erhält man ein neues "Iterator Objekt" das man mit Array.from zu einem Array wandeln kann
  // mit .sort() werden die Termine nach Jahr sortiert, das Jahr ist der 1 Eintrag des Arrays der 2. ist ein Array mit den Terminen
  return Array.from(newTermine.entries()).sort((a, b) => a[0] - b[0])
}

const Termine = (data, props) => {
  const [termine] = useState(prepareDates(data.data.termine.edges))
  const [featuredTermine] = useState(
    getFeaturedTermine(data.data.termine.edges)
  )
  console.log(featuredTermine)
  return (
    <React.Fragment>
      <section className={styles.featured}>
        {featuredTermine.map(termin => (
          <TermineFeatured
            key={termin.node.id}
            terminKey={termin.node.id}
            date={termin.node.date}
            dateText={termin.node.dateText}
            title={termin.node.title}
            image={termin.node.image}
            slug={termin.node.slug.current}
          />
        ))}
      </section>
      {termine.map(year => (
        <TermineYear data={year[1]} key={year[1][0].node.id} />
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
              featured
              dateText
              title
              slug {
                current
              }
              image {
                asset {
                  path
                  fluid(maxWidth: 2000) {
                    ...GatsbySanityImageFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Termine data={data} {...props} />}
  />
)
