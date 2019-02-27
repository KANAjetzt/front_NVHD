import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styles from './layout.module.scss'
import Header from './header/header'
import Footer from './footer/footer'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          siteTitle={this.props.data.site.siteMetadata.title}
          currentPath={this.props.currentPath}
        />
        <div className={styles.base}>{this.props.children}</div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
