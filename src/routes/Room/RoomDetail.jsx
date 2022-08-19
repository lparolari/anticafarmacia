/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useTranslation } from 'react-i18next'

import { FilledBtnLink } from '../../components/Button/Button'
import { Gallery } from './Gallery'

export const RoomDetail = ({
  title,
  blurb,
  price,
  period,
  amenities,
  description,
  pricing,
  landingImage,
  gallery,
}) => {
  const { t } = useTranslation()
  return (
    <section className="room-details pt-120 pb-90">
      <div className="container">
        <div className="row">
          {/* details */}
          <div className="col-lg-12">
            <div className="deatils-box">
              <div className="title-wrap">
                <div className="row">
                  <div className="col-sm-12">
                    <p className="mb-30">{blurb}</p>
                  </div>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="title">
                          <h2>{title}</h2>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="price text-right">
                          € {new Intl.NumberFormat().format(price)}
                          <span>/{period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumb">
                <img
                  src={landingImage}
                  className="w-100"
                  alt=""
                  style={{
                    objectFit: 'cover',
                    maxHeight: '600px',
                  }}
                />
                {/* <img
                  src={process.env.PUBLIC_URL + "/" + item.sliderimage}
                  className="w-100"
                  alt={item.title}
                /> */}
              </div>
              <div className="room-fearures clearfix mt-60 mb-60">
                <h3 className="subtitle">{t('Facilities')}</h3>
                <ul className="room-fearures-list">
                  {amenities.map((item, i) => (
                    <li key={i}>
                      <i className={item.icon} />
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="room-fearures clearfix mt-60 mb-60">
                <h3 className="subtitle">{t('Description')}</h3>
                <p>{description}</p>
              </div>

              {/* <div className="testimonials mt-60 mb-20">
                <div className="row">
                  {item.authors.slice(0, 2).map((author) =>
                    authors
                      .filter((item) => {
                        return item.id === author;
                      })
                      .map((author, i) => (
                        <div key={i} className="col-lg-6 col-sm-6">
                          <div className="testimonial-box">
                            <div className="client-img">
                              <img
                                src={process.env.PUBLIC_URL + "/" + author.img}
                                alt={author.name}
                              />
                              <span className="check">
                                <i className="fal fa-check" />
                              </span>
                            </div>
                            <h3>{author.name}</h3>
                            <span className="clinet-post">
                              {author.designation}
                            </span>
                            <p>{author.shotdesc}</p>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </div> */}
              {/* <div className="room-rules clearfix mb-60">
                <h3 className="subtitle">House Rules</h3>
                <ul className="room-rules-list">
                  {item.rules.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div> */}

              <div className="cancellation-box clearfix mb-60">
                <h3 className="subtitle">{t('Prices')}</h3>
                <p>{pricing}</p>
              </div>

              <FilledBtnLink
                label={t('Contact us and book now')}
                muted={`${t(
                  "It's always a good moment to dedicate yourself some time"
                )}: ${t('Take a break from the city chaos')}`}
                to="/"
                className="mb-60 w-100 text-center"
              />

              <div className="room-fearures clearfix mb-60">
                <h3 className="subtitle">{t('Gallery')}</h3>
                <Gallery images={gallery} />
              </div>
              {/* <div className="room-map mb-60 position-relative" id="roomMap">
                <Map
                  google={props.google}
                  zoom={12}
                  initialCenter={item.location}
                >
                  <Marker position={item.location} />
                </Map>
              </div> */}
              {/* <div className="related-room">
                <h3 className="subtitle">Related Rooms</h3>
                <div className="row room-gird-loop">
                  {rooms
                    .filter((post) => {
                      return (
                        parseInt(post.id) !== parseInt(roomId) &&
                        post.category.some((r) => item.category.includes(r))
                      );
                    })
                    .slice(0, 2)
                    .map((data, i) => (
                      <div key={i} className="col-lg-6 col-sm-6">
                        <div className="room-box mb-30">
                          <div className="room-img-wrap">
                            <div
                              className="room-img"
                              style={{
                                backgroundImage:
                                  "url(" +
                                  process.env.PUBLIC_URL +
                                  "/" +
                                  data.gridimage +
                                  ")",
                              }}
                            />
                          </div>
                          <div className="room-desc">
                            <ul className="icons">
                              {data.amenities.slice(0, 7).map((data, i) => (
                                <li key={i}>
                                  <i className={data.icon} />
                                </li>
                              ))}
                            </ul>
                            <h4 className="title">
                              <Link to={"/room-details/" + data.id}>
                                {data.title}
                              </Link>
                            </h4>
                            <p>{data.text.slice(0, 75)}...</p>
                            <span className="price">
                              ${new Intl.NumberFormat().format(data.price)}/
                              {data.period}
                            </span>
                            <Link
                              to={"/room-details/" + data.id}
                              className="book-btn"
                            >
                              Booking Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div> */}
            </div>
          </div>
          {/* form */}
          {/* <div className="col-lg-4">
            <Sidebar />
          </div> */}
        </div>
      </div>
    </section>
  )
}
