/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import { useRooms } from '../../hooks/useRooms'
import { locations } from '../../utils/locations'

const ReadMoreParagraph = ({ text }) => {
  const { t } = useTranslation()
  const [showText, setShowText] = React.useState(
    text ? `${text.substring(0, 140)}...` : ''
  )
  return (
    <p>
      {showText}{' '}
      {text && text.length !== showText.length && (
        <span className="read-more" onClick={() => setShowText(text)}>
          {t('Read more')}
        </span>
      )}
    </p>
  )
}

const RoomCard = (room) => {
  const {
    id,
    title,
    description,
    price,
    period,
    amenities,
    pricing,
    landingImage,
  } = room

  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="room-box mb-30">
      <div className="row no-gutters justify-content-center">
        <div className="col-lg-5 col-md-10">
          <div className="room-img-wrap">
            <div
              className="room-img"
              style={{
                backgroundImage: `url(${landingImage})`,
                cursor: 'pointer',
              }}
              onClick={() => navigate(locations.room(id))}
            />
          </div>
        </div>
        <div className="col-lg-7 col-md-10">
          <div className="room-desc">
            <div className="row align-items-center">
              <div className="col-sm-7">
                <ul className="icons">
                  {amenities.map((item) => (
                    <li key={item.id}>
                      <i className={item.icon} title={item.title} />
                    </li>
                  ))}
                </ul>
                <h4 className="title">
                  <Link to={locations.room(id)}>{title}</Link>
                </h4>
                <ReadMoreParagraph text={description} />
                <br />
                <p>
                  <b>{t('Pricing')}</b> {pricing}
                </p>
              </div>
              <div className="col-sm-5">
                <div className="text-sm-center">
                  <span className="price">
                    €{new Intl.NumberFormat().format(price)}
                    <span>/{period.toLowerCase()}</span>
                  </span>
                  <Link
                    to={locations.room(id)}
                    className="main-btn btn-filled mt-20"
                    style={{ padding: '12px 22px' }}
                  >
                    {t('See more')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const RoomList = () => {
  const { rooms } = useRooms()

  if (!rooms || rooms.length === 0)
    return <p>We are sorry, there are no available rooms</p>

  return (
    <>
      {rooms.map((room) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <RoomCard key={room.id} {...room} />
      ))}
    </>
  )
}
