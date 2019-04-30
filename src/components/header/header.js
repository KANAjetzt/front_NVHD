import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'
import Navigation from '../navigation/navigation'
import Delay from 'react-delayed'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.btnRef = React.createRef()
  }
  state = {
    showMenu: false,
    closeAnimation: false,
  }

  toggleMenu = () => {
    this.setState({
      closeAnimation: !this.state.closeAnimation,
    })

    setTimeout(() => {
      this.setState({
        showMenu: !this.state.showMenu,
      })
    }, 200)
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              <img
                key={`${this.props.data.logo.edges[0].node.id}-image`}
                className={styles.logo}
                src={`https://cdn.sanity.io/${
                  this.props.data.logo.edges[0].node.logo.asset.path
                }`}
                alt={this.props.siteTitle}
              />
            </Link>
          </h1>
        </div>

        <button
          className={styles.burgerNavIconBox}
          onClick={this.toggleMenu}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          ref={this.btnRef}
        >
          <span
            className={
              this.state.showMenu
                ? styles.burgerNavIconOpen
                : styles.burgerNavIconClosed
            }
          />
        </button>

        {this.state.showMenu && (
          <Navigation
            showMenu={this.state.showMenu}
            closeAnimation={this.state.closeAnimation}
            toggleMenu={this.toggleMenu}
            currentHref={this.props.currentHref}
            type={'header'}
            exceptionRef={this.btnRef}
          />
        )}
      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query headerComponentQuery {
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
