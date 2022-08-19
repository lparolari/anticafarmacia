import { useTranslation } from 'react-i18next'

import { useGlobal } from '../../hooks/useGlobal'

export const ContactInfo = () => {
  const global = useGlobal()
  const { t } = useTranslation()
  const { address, mobile1, mobile2, email } = global.contacts
  return (
    <div className="contact-info">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 col-10">
          <div className="info-box">
            <div className="icon">
              <i className="flaticon-home" />
            </div>
            <div className="desc">
              <h4>{t('Address')}</h4>
              <p>{address.displayValue}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-10">
          <div className="info-box">
            <div className="icon">
              <i className="flaticon-phone" />
            </div>
            <div className="desc">
              <h4>{t('Phone')}</h4>
              <p>
                {mobile1.displayValue} <br /> {mobile2.displayValue}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-10">
          <div className="info-box">
            <div className="icon">
              <i className="flaticon-message" />
            </div>
            <div className="desc">
              <h4>{t('Email')}</h4>
              <p>{email.displayValue.split('@').join(' @ ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
