/* eslint-disable react/no-array-index-key */
import i18next from 'i18next'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { locations } from '../../utils/locations'

const navigationmenu = [
  {
    id: 1,
    link: locations.home,
    linkText: i18next.t('Home'),
    child: false,
  },
  {
    id: 2,
    link: locations.rooms,
    linkText: i18next.t('Rooms'),
    child: false,
  },
  {
    id: 4,
    link: locations.contacts,
    linkText: i18next.t('Contacts'),
    child: false,
  },
]

class Canvas extends Component {
  render() {
    return (
      <>
        {/* Search Widget */}
        <div className="widget search-widget">
          <h5 className="widget-title">Search room</h5>
          <form>
            <input type="text" placeholder="Search your keyword..." />
            <button type="submit">
              <i className="far fa-search" />
            </button>
          </form>
        </div>
        {/* About Widget */}
        <div className="widget about-widget">
          <h5 className="widget-title">About us</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            reiciendis illo ipsa asperiores, perspiciatis corrupti veritatis
            assumenda architecto commodi provident quas necessitatibus
            consequatur praesentium magnam optio deserunt fugiat repellat culpa.
          </p>
        </div>
        {/* Nav Widget */}
        <div className="widget nav-widget">
          <h5 className="widget-title">Our pages</h5>
          <ul>
            {navigationmenu.length > 0
              ? navigationmenu.slice(4, 10).map((item, i) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                  <li
                    key={i}
                    className={`menu-item ${
                      item.child ? 'menu-item-has-children' : ''
                    } `}
                    onClick={this.triggerChild}
                  >
                    {item.child ? (
                      <Link onClick={(e) => e.preventDefault()} to="/">
                        {' '}
                        {item.linkText}{' '}
                      </Link>
                    ) : (
                      <Link to={item.link}> {item.linkText} </Link>
                    )}
                    {item.child ? (
                      <ul className="submenu" role="menu">
                        {item.submenu.map((subItem, j) => (
                          <li
                            key={j}
                            className={`menu-item ${
                              subItem.child ? 'menu-item-has-children' : ''
                            } `}
                          >
                            {subItem.child ? (
                              <Link onClick={(e) => e.preventDefault()} to="/">
                                {' '}
                                {subItem.linkText}{' '}
                              </Link>
                            ) : (
                              <Link to={subItem.link}>
                                {' '}
                                {subItem.linkText}{' '}
                              </Link>
                            )}
                            {subItem.submenu ? (
                              <ul className="submenu">
                                {subItem.submenu.map((thirdItem, k) => (
                                  <li className="menu-item" key={k}>
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
        {/* Social Link */}
        <div className="widget social-link">
          <h5 className="widget-title">Contact with us</h5>
          <ul>
            <li>
              <Link to="/">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-behance" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-linkedin" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fab fa-google" />
              </Link>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Canvas
