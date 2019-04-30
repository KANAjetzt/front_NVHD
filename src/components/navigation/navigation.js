import { Link } from 'gatsby'
import React, { useRef, useEffect, useState } from 'react'
import headerStyles from './navigation-header.module.scss'
import footerStyles from './navigation-footer.module.scss'
import Heulicher from '../svg/heulicher'
import useOnClickOutside from '../../lib/useClickOutside'

export default function navigation(props) {
  const [mounted, setMounted] = useState(false)

  const checkStyle = styleClass => {
    if (props.type === 'header') {
      return headerStyles[styleClass]
    }
    return footerStyles[styleClass]
  }

  const checkCurrentPath = currentElement => {
    // Wenn der aktuelle Path gleich ist wie das geklickte Element --> schließe die NAV
    if (currentElement.target.href === props.currentHref) {
      props.toggleMenu()
    }
    return
  }

  useEffect(() => {
    setMounted(!mounted)
  }, [])

  const ref = useRef()
  useOnClickOutside(ref, () => props.toggleMenu(), props.exceptionRef)

  return (
    <nav
      className={
        props.showMenu && props.closeAnimation && mounted
          ? checkStyle('backgroundOnClick')
          : checkStyle('background')
      }
      ref={props.type === 'header' ? ref : null}
    >
      <ul
        className={
          props.showMenu ? checkStyle('navOnClick') : checkStyle('nav')
        }
      >
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/" onClick={e => checkCurrentPath(e)}>
            Home
          </Link>
        </li>
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/figuren" onClick={e => checkCurrentPath(e)}>
            Figuren
          </Link>
        </li>
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/dorffasnet" onClick={e => checkCurrentPath(e)}>
            Dorffasnet
          </Link>
        </li>
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/termine" onClick={e => checkCurrentPath(e)}>
            Termine
          </Link>
        </li>
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/chronik" onClick={e => checkCurrentPath(e)}>
            Chronik
          </Link>
        </li>
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/galerie" onClick={e => checkCurrentPath(e)}>
            Galerie
          </Link>
        </li>
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/vorstand" onClick={e => checkCurrentPath(e)}>
            Vorstand
          </Link>
        </li>
        <li className={checkStyle('link')}>
          <Heulicher className={checkStyle('linkIcon')} fill={'#f0be2a'} />
          <Link to="/kontakt" onClick={e => checkCurrentPath(e)}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  )
}
