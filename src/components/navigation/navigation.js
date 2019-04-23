import { Link } from 'gatsby'
import propTypes from 'prop-types'
import React from 'react'
import headerStyles from './navigation-header.module.scss'
import footerStyles from './navigation-footer.module.scss'
import Heulicher from '../svg/heulicher'
import useOnClickOutside from '../../lib/useClickOutside'

class Navigation extends React.Component {
  checkStyle = styleClass => {
    if (this.props.type === 'header') {
      return headerStyles[styleClass]
    }
    return footerStyles[styleClass]
  }

  checkCurrentPath = currentElement => {
    // Wenn der aktuelle Path gleich ist wie das geklickte Element --> schließe die NAV
    if (currentElement.target.href === this.props.currentHref) {
      this.props.toggleMenu()
    }
  }

  render() {
    const ref = React.useRef(null)
    useOnClickOutside(ref, () => this.toggleMenu())

    return (
      <nav
        className={
          this.props.showMenu
            ? this.checkStyle('backgroundOnClick')
            : this.checkStyle('background')
        }
        ref={ref}
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
            <Link to="/" onClick={e => this.checkCurrentPath(e)}>
              Home
            </Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/figuren" onClick={e => this.checkCurrentPath(e)}>
              Figuren
            </Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/dorffasnet" onClick={e => this.checkCurrentPath(e)}>
              Dorffasnet
            </Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/termine" onClick={e => this.checkCurrentPath(e)}>
              Termine
            </Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/chronik" onClick={e => this.checkCurrentPath(e)}>
              Chronik
            </Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/galerie" onClick={e => this.checkCurrentPath(e)}>
              Galerie
            </Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/vorstand" onClick={e => this.checkCurrentPath(e)}>
              Vorstand
            </Link>
          </li>
          <li className={this.checkStyle('link')}>
            <Heulicher
              className={this.checkStyle('linkIcon')}
              fill={'#f0be2a'}
            />
            <Link to="/kontakt" onClick={e => this.checkCurrentPath(e)}>
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
