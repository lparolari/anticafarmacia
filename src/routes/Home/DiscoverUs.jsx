import React from 'react'
import { useTranslation } from 'react-i18next'

import dinnerRoom from '../../assets/images/dinner-room-2.jpg'
import { BorderBtnLink, FilledBtnLink } from '../../components/Button/Button'
import { locations } from '../../utils/locations'

export const DiscoverUs = () => {
  const { t } = useTranslation()
  return (
    <div
      className="room-bg"
      style={{
        backgroundImage: `url(${dinnerRoom})`,
        backgroundAttachment: ' fixed',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
      }}
    >
      <section className="room-gallery-cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cta-text text-center">
                <span>{t('Dedicate yourself some time')}</span>
                <h2>{t('home_parallax_cta_title')}</h2>
                <ul className="mt-50">
                  <li>
                    <FilledBtnLink
                      to={locations.booking}
                      label={t('Book now')}
                    />
                  </li>
                  <li>
                    <BorderBtnLink
                      to={locations.contact}
                      label={t('Contact us')}
                      external
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rotate-images">
          {/* <GatsbyImage
            image={img1.localFile.childImageSharp.gatsbyImageData}
            className="rotate-image-one"
            alt=""
          />
          <GatsbyImage
            image={img2.localFile.childImageSharp.gatsbyImageData}
            className="rotate-image-two"
            alt=""
          /> */}
          {/* <GatsbyImage
            image={img3.localFile.childImageSharp.gatsbyImageData}
            className="rotate-image-three"
            // style={{ width: "316px", height: "255px" }}
            alt=""
          /> */}
        </div>
      </section>
    </div>
  )
}
