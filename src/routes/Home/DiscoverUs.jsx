import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import dinnerRoom from '../../assets/images/dinner-room-2.jpg'

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
                <h2>
                  {t(
                    "Un luogo e un'atmosfera unica in cui concedersi il tempo di un'esperienza di benessere"
                  )}
                </h2>
                <ul className="mt-50">
                  <li>
                    <Link className="main-btn btn-filled" to="/rooms">
                      {t('Discover our rooms')}
                    </Link>
                  </li>
                  <li>
                    <Link className="main-btn btn-border" to="/contact">
                      {t('Contact us')}
                    </Link>
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
