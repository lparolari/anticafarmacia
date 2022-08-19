import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import bg from '../../assets/images/reception-large-3.jpg'
import { locations } from '../../utils/locations'

export const Breadcrumb = () => {
  const { t } = useTranslation()
  return (
    <section
      className="breadcrumb-area"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="breadcrumb-text">
          <span>{t('Available for any questions or needs')}</span>
          <h2 className="page-title">{t('Contacts')}</h2>
          <ul className="breadcrumb-nav">
            <li>
              <Link to={locations.home}>{t('Home')}</Link>
            </li>
            <li className="active">{t('Contacts')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
