import { Link } from 'gatsby'
import propTypes from 'prop-types'
import React from 'react'
import headerStyles from './navigation-header.module.scss'
import footerStyles from './navigation-footer.module.scss'
import Heulicher from '../svg/heulicher'

class Navigation extends React.Component {
  checkStyle = styleClass => {
    if (this.props.type === 'header') {
      return headerStyles[styleClass]
    }
    return footerStyles[styleClass]
  }

  render() {
    return (
      <nav
        className={
          this.props.showMenu
            ? this.checkStyle('backgroundOnClick')
            : this.checkStyle('background')
        }
      >
        <ul
          className={
            this.props.showMenu
              ? this.checkStyle('navOnClick')
              : this.checkStyle('nav')
          }
        >
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/">Home</Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/figuren">Figuren</Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/dorffasnet">Dorffasnet</Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/termine">Termine</Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/chronik">Chronik</Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/galerie">Galerie</Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/vorstand">Vorstand</Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/kontakt" activeClassName={this.checkStyle('active')}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

Navigation.propTypes = {
  type: propTypes.string,
}

export default Navigation