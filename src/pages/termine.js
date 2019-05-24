import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Termine from '../components/termine/termine'
import styles from './termine.module.scss'
import { useSpring, animated } from 'react-spring'

export const query = graphql`
  query terminePageQuery {
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
`

// Gruppiert Termine dem jeweiligen Jahr zu
// const groupDates = termine => {
//   console.log(termine)
//   let currentYear
//   const groupedTermine = []
//   let groupedTermineIndexCounter = 0

//   // Check termine.edges[x].node.date --> Year === let currentYear
//   termine.edges.forEach(termin => {
//     // If Year === currentYear --> put it in the same Array
//     if( new Date(termin.node.date).getFullYear === currentYear) {
//       groupedTermine =
//     }
//     // else --> put it in a new Array and set currentYear to the Year of this Elemnt
//     currentYear = new Date(termin.node.date).getFullYear
//     groupedTermineIndexCounter ++
//   })
// }

const groupDates = termine => {
  let currentYear
  let groupedTermine = []
  let lastFilterdOutYear

  const filterTermine = () => {
    console.log(currentYear)
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

const terminePage = ({ data, ...props }) => {
  const spring = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(100%)' },
  })
  return (
    <section className={styles.sectionTermine}>
      <Layout currentHref={props.location.href}>
        <SEO title="Termine" keywords={[`Termine`, `Fasnet 2019`, `2019`]} />
        <animated.section className={styles.content} style={spring}>
          <div className={styles.termine}>
            {termine.map(year => (
              <Termine data={year} />
            ))}
          </div>
        </animated.section>
      </Layout>
    </section>
  )
}

export default terminePage
