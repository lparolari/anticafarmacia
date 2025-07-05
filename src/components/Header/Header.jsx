/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import classNames from 'classnames'
import i18next from 'i18next'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import { useGlobal } from '../../hooks/useGlobal'
import { locations } from '../../utils/locations'
import Canvas from './Canvas'

// Mobile menu
const getNextSibling = (elem, selector) => {
  // Get the next sibling element
  let sibling = elem.nextElementSibling
  // If there's no selector, return the first sibling
  if (!selector) return sibling
  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.nextElementSibling
  }
}

const triggerChild = (e) => {
  let subMenu = ''
  subMenu =
    getNextSibling(e.target, '.submenu') !== undefined
      ? getNextSibling(e.target, '.submenu')
      : null
  if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
    subMenu.classList = subMenu.classList.contains('d-block')
      ? 'submenu'
      : 'submenu d-block'
  }
}

export const Header = ({
  settings: { alwaysStiky } = { alwaysStiky: true },
}) => {
  const { t } = useTranslation()
  const global = useGlobal()

  const navigationmenu = [
    {
      id: 1,
      link: locations.home,
      linkText: t('Home'),
      child: false,
    },
    {
      id: 6,
      link: locations.book,
      linkText: t('Book'),
      child: false,
    },
    {
      id: 5,
      link: locations.activities,
      linkText: t('Attractions'),
      child: false,
    },
    {
      id: 4,
      link: locations.contacts,
      linkText: t('Contacts'),
      child: false,
    },
  ]

  const [navMethod, setNavMethod] = React.useState(false)
  const [canvasMethod, setCanvasMethod] = React.useState(false)
  const [searchMethod, setSearchMethod] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const [isTop, setIsTop] = React.useState(false)

  const toggleNav = () => setNavMethod(!navMethod)
  const toggleCanvas = () => setCanvasMethod(!canvasMethod)
  const toggleSearch = () => setSearchMethod(!searchMethod)

  const stikyNav = (setIsMobile, setIsTop) => {
    if (window) setIsMobile(window.innerWidth < 992)
    if (window)
      window.addEventListener(
        'resize',
        // () => console.log("resize"),
        () => setIsMobile(window.innerWidth < 992),
        false
      )
    if (window)
      window.addEventListener(
        'load',
        // () => console.log("load"),
        () => setIsMobile(window.innerWidth < 992),
        false
      )
    if (window)
      window.addEventListener(
        'scroll',
        () => setIsTop(window.scrollY > 150),
        false
      )
  }

  React.useEffect(() => stikyNav(setIsMobile, setIsTop), [])

  const breakpoint = isMobile ? 'breakpoint-on' : ''
  const hideClass = isMobile ? 'd-none' : ''
  const stickyHeader = alwaysStiky || isTop ? 'sticky-active' : ''

  return (
    <>
      <header className={`header-absolute sticky-header ${stickyHeader}`}>
        <div className="container container-custom-one">
          <div
            className={`nav-container d-flex align-items-center justify-content-between ${breakpoint}`}
          >
            <div
              className={classNames('nav-menu d-lg-flex align-items-center', {
                'menu-on': navMethod,
              })}
            >
              <div className="navbar-close" onClick={toggleNav}>
                <div className="cross-wrap">
                  <span className="top" />
                  <span className="bottom" />
                </div>
              </div>
              {/* DISABLED */}
              {/*
              <div className="toggle" onClick={toggleCanvas}>
                <Link to="#" id="offCanvasBtn">
                  <i className="fal fa-bars" />
                </Link>
              </div>
              */}
              <div className="menu-items">
                <ul>
                  {navigationmenu.length > 0
                    ? navigationmenu.slice(0, 4).map((item, i) => (
                        <li
                          key={i}
                          className={`menu-item ${
                            item.child ? 'menu-item-has-children' : ''
                          } `}
                          onClick={triggerChild}
                        >
                          {item.child ? (
                            <Link onClick={(e) => e.preventDefault()} to="/">
                              {item.linkText}
                            </Link>
                          ) : (
                            <Link to={item.link}> {item.linkText} </Link>
                          )}
                          {item.child ? (
                            <ul className="submenu" role="menu">
                              {item.submenu.map((subItem, i) => (
                                <li
                                  key={i}
                                  className={`menu-item ${
                                    subItem.child
                                      ? 'menu-item-has-children'
                                      : ''
                                  } `}
                                >
                                  {subItem.child ? (
                                    <Link
                                      onClick={(e) => e.preventDefault()}
                                      to="/"
                                    >
                                      {subItem.linkText}
                                    </Link>
                                  ) : (
                                    <Link to={subItem.link}>
                                      {subItem.linkText}
                                    </Link>
                                  )}
                                  {subItem.submenu ? (
                                    <ul className="submenu">
                                      {subItem.submenu.map((thirdItem, i) => (
                                        <li className="menu-item" key={i}>
                                          <Link to={thirdItem.link}>
                                            {thirdItem.linkText}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
              <div className="nav-pushed-item">
                <SideInfo {...global.contacts} />
              </div>
              <div style={{ margin: '1rem', marginTop: '2rem' }}>
                {isMobile && <SelectLanguage />}
              </div>
            </div>
            <div className="site-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ padding: '0px' }}
                  width="100%"
                  height="80px"
                />
              </Link>
            </div>

            <div className={`nav-push-item ${hideClass}`}>
              <HeaderInfo />
            </div>
            <div
              className={classNames('navbar-toggler', {
                active: navMethod,
              })}
              onClick={toggleNav}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>

      <div
        className={classNames('offcanvas-wrapper', {
          'show-offcanvas': canvasMethod,
        })}
      >
        <div
          className={classNames('offcanvas-overly', {
            'show-overly': canvasMethod,
          })}
          onClick={toggleCanvas}
        />
        <div className="offcanvas-widget">
          <Link to="/" className="offcanvas-close" onClick={toggleCanvas}>
            <i className="fal fa-times" />
          </Link>
          <Canvas />
        </div>
      </div>
    </>
  )
}

const SelectLanguage = ({ vertical }) => (
  <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row' }}>
    <div style={vertical ? {} : { marginRight: '0.5rem' }}>
      <span
        style={{ cursor: 'pointer', padding: 0, fontSize: '18px' }}
        onClick={() => i18next.changeLanguage('it')}
      >
        🇮🇹
      </span>
    </div>
    <div style={vertical ? {} : { marginRight: '0.5rem' }}>
      <span
        style={{ cursor: 'pointer', padding: 0, fontSize: '18px' }}
        onClick={() => i18next.changeLanguage('en')}
      >
        🇬🇧
      </span>
    </div>
    <div>
      <span
        style={{ cursor: 'pointer', padding: 0, fontSize: '18px' }}
        onClick={() => i18next.changeLanguage('de')}
      >
        🇩🇪
      </span>
    </div>
  </div>
)

const HeaderInfo = () => (
  <div className="header-info d-lg-flex align-items-center">
    <div className="item">
      <a href={locations.contacts} className="main-btn bnt-border">
        {i18next.t('Contact us')}
      </a>
    </div>
    <div className="item">
      <SelectLanguage vertical />
    </div>
  </div>
)

const SideInfo = ({ mobile1, mobile2, whatsapp, email }) => {
  const { t } = useTranslation()
  const emailStr = (
    <>
      {email.displayValue.split('@')[0]} <br />
      at {email.displayValue.split('@')[1]}
    </>
  )
  return (
    <div className="header-info d-lg-flex align-items-center">
      <div className="item">
        <a href={whatsapp.href}>
          <i className="fab fa-whatsapp" />
          <span>{t('Whatsapp')}</span>
          <h5 className="title">{whatsapp.displayValue}</h5>
        </a>
      </div>
      <div className="item">
        <a href={mobile1.href}>
          <i className="fal fa-phone" />
          <span>{t('Primary phone')}</span>
          <h5 className="title">{mobile1.displayValue}</h5>
        </a>
      </div>
      <div className="item">
        <a href={mobile2.href}>
          <i className="fal fa-phone" />
          <span>{t('Secondary phone')}</span>
          <h5 className="title">{mobile2.displayValue}</h5>
        </a>
      </div>
      <div className="item">
        <a href={email.href}>
          <i className="fab fa-whatsapp" />
          <span>{t('Email')}</span>
          <h5 className="title">{emailStr}</h5>
        </a>
      </div>
    </div>
  )
}
