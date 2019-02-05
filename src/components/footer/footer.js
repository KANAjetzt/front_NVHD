import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './footer.module.scss'
import Navigation from '../navigation/navigation'
import NavigationSocial from '../navigation-social/navigationSocial'
import NavigationRechtliches from '../navigation-rechliches/navigationRechtliches'

class Header extends React.Component {
  state = {}

  render() {
    return (
      <footer className={styles.footer}>
        <Navigation style={'footer'} />
        <NavigationSocial />
        <NavigationRechtliches />
      </footer>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query footerComponentQuery {
        logo: allSanityEinstellungen {
          edges {
            node {
              id
              title
              logo {
                asset {
                  path
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)

Header.propTypes = {}

Header.defaultProps = {}
