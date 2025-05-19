import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useGlobal } from '../../hooks/useGlobal'
import { locations } from '../../utils/locations'
import { Backtotop } from './Backtotop'

export const Footer = () => {
  const { defaultSeo, fiscal } = useGlobal()
  const { t } = useTranslation()
  return (
    <>
      <Backtotop />
      <footer>
        <div className="copyright-area pt-50 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <p className="copyright-text mb-20">{defaultSeo.metaTitle}</p>
                <p>{defaultSeo.metaDescription}</p>
              </div>
              <div className="col-md-1" />
              <div className="col-md-3">
                <p className="copyright-text mb-20">{t('Links')}</p>
                <p>
                  <Link to={locations.home}>{t('Home')}</Link>
                </p>
                <p>
                  <Link to={locations.contacts}>{t('Contacts')}</Link>
                </p>
                {/* <p>
                  <Link to="#" onClick={() => window.open("/privacy-policy.pdf")}>Privacy Policy</Link>
                </p> */}
              </div>
              <div className="col-md-3">
                <div className="">
                  <p className="copyright-text">{t('Legal info')}</p>
                  <p className="text-muted fiscal">
                    <i className="fas fa-stamp" /> {fiscal.businessName}
                  </p>
                  <p className="text-muted fiscal">
                    <i className="fas fa-envelope" /> {fiscal.legalEmail}
                  </p>
                  <p className="text-muted fiscal">
                    <i className="fas fa-map-marker-alt" />{' '}
                    {fiscal.legalAddress}
                  </p>
                  {/* <p className="text-muted fiscal">
                    <i className="fas fa-landmark" /> {fiscal.vatNumber}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
