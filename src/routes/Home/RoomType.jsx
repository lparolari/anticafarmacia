/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// import ReactMarkdown from 'react-markdown'
import bg01 from '../../assets/img/bg/01.jpg'
import { roomTypes } from '../../data/roomTypes'

const RoomTypePane = ({ roomType }) => (
  <Tab.Pane eventKey={roomType.id}>
    <div className="room-items">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <p
            style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#a08d69',
              textAlign: 'center',
              marginBottom: '30px',
            }}
          >
            {roomType.blurb}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div
                className="room-box"
                onClick={() => navigate(`/room-details/${roomType.room.id}`)}
              >
                <div
                  className="room-bg"
                  style={{
                    backgroundImage: `url(${roomType.cardSquare1.img})`,
                  }}
                />
                <div className="room-content">
                  <span className="room-count">
                    <i className={roomType.cardSquare1.icon} />
                    {roomType.cardSquare1.muted}
                  </span>
                  <h3>
                    <Link to={`/room-details/${roomType.room.id}`}>
                      {roomType.cardSquare1.caption}
                    </Link>
                  </h3>
                </div>
                <Link
                  to={`/room-details/${roomType.room.id}`}
                  className="room-link"
                >
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div
                className="room-box"
                onClick={() => navigate(`/room-details/${roomType.room.id}`)}
              >
                <div
                  className="room-bg"
                  style={{
                    backgroundImage: `url(${roomType.cardSquare2.img})`,
                  }}
                />
                <div className="room-content">
                  <span className="room-count">
                    <i className={roomType.cardSquare2.icon} />
                    {roomType.cardSquare2.muted}
                  </span>
                  <h3>
                    <Link to={`/room-details/${roomType.room.id}`}>
                      {roomType.cardSquare2.caption}
                    </Link>
                  </h3>
                </div>
                <Link
                  to={`/room-details/${roomType.room.id}`}
                  className="room-link"
                >
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div
                className="room-box extra-wide"
                onClick={() => navigate(`/room-details/${roomType.room.id}`)}
              >
                <div
                  className="room-bg"
                  style={{
                    backgroundImage: `url(${roomType.cardHorizontal.img})`,
                  }}
                />
                <div className="room-content">
                  <span className="room-count">
                    <i className={roomType.cardHorizontal.icon} />
                    {roomType.cardHorizontal.muted}
                  </span>
                  <h3>
                    <Link to={`/room-details/${roomType.room.id}`}>
                      {roomType.cardHorizontal.caption}
                    </Link>
                  </h3>
                </div>
                <Link
                  to={`/room-details/${roomType.room.id}`}
                  className="room-link"
                >
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="room-box extra-height"
            onClick={() => navigate(`/room-details/${roomType.room.id}`)}
          >
            <div
              className="room-bg"
              style={{
                backgroundImage: `url(${roomType.cardVertical.img})`,
              }}
            />
            <div className="room-content">
              <span className="room-count">
                <i className={roomType.cardVertical.icon} />
                {roomType.cardVertical.muted}
              </span>
              <h3>
                <Link to={`/room-details/${roomType.room.id}`}>
                  {roomType.cardVertical.caption}
                </Link>
              </h3>
            </div>
            <Link
              to={`/room-details/${roomType.room.id}`}
              className="room-link"
            >
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Tab.Pane>
)

const RoomType = () => {
  const { t } = useTranslation()
  const getRoomName = (roomType) => roomType.room.title

  return (
    <section
      className="room-type-section pt-115 pb-115"
      style={{ backgroundImage: bg01 }}
    >
      <Tab.Container defaultActiveKey={roomTypes[roomTypes.length - 1].id}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title text-lg-left text-center">
                <span className="title-tag">{t('Rooms')}</span>
                <h2>{t('Relaxing and refined accommodation')}</h2>
                <p>{t('A step back in time in a charming setting')}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Nav
                variant="pills"
                as="ul"
                className="room-filter nav nav-pills justify-content-center justify-content-lg-end"
              >
                {roomTypes.map((roomType) => (
                  <Nav.Item key={roomType.id} as="li">
                    <Nav.Link eventKey={roomType.id}>
                      {getRoomName(roomType)}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </div>
          <Tab.Content className="mt-65">
            {roomTypes.map((roomType) => (
              <RoomTypePane key={roomType.id} roomType={roomType} />
            ))}
          </Tab.Content>
        </div>
      </Tab.Container>
    </section>
  )
}

export default RoomType
