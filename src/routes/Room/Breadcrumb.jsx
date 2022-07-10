import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { locations } from '../../utils/locations'

export const Breadcrumb = ({ title, emph, name, image }) => {
  const { t } = useTranslation()
  return (
    <section
      className="breadcrumb-area"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="breadcrumb-text">
          <span>{emph}</span>
          <h2 className="page-title">{title}</h2>
          <ul className="breadcrumb-nav">
            <li>
              <Link to={locations.home}>{t('Home')}</Link>
            </li>
            <li>
              <Link to={locations.rooms}>{t('Rooms')}</Link>
            </li>
            <li className="active">{name}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
