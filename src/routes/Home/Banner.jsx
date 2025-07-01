/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'

import dinnerRoom1 from '../../assets/images/dinner-room-1.jpg'
import guesthouseExternalFacade from '../../assets/images/guesthouse-external-facade.jpg'
import BookingWidget from '../../components/BookingWidget'

const Banner = () => {
  const { t } = useTranslation()

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  }

  const carousel = [guesthouseExternalFacade, dinnerRoom1]

  return (
    <section className="banner-area banner-style-one">
      <div className="container container-custom-two">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="banner-content">
              <span className="promo-tag">
                {t('Overnight stay and local breakfast')}
              </span>
              <h1 className="title">
                {t('A unique experience in the Italian Alps')}
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="banner-thumb">
              <Slider className="hero-slider-one" {...sliderSettings}>
                {carousel.map((img, i) => (
                  <div key={i} className="single-thumb">
                    <img src={img} alt="image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 pt-50">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
