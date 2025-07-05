import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import bg from '../../assets/images/guesthouse-external-facade.jpg'
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
          <span>{t('Things to do nearby')}</span>
          <h2 className="page-title">{t('Attractions')}</h2>
          <ul className="breadcrumb-nav">
            <li>
              <Link to={locations.home}>{t('Home')}</Link>
            </li>
            <li className="active">{t('Attractions')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
