/* eslint-disable react/jsx-props-no-spreading */
import { useParams } from 'react-router-dom'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { useRooms } from '../../hooks/useRooms'
import { Breadcrumb } from './Breadcrumb'
import { RoomDetail } from './RoomDetail'

export const Room = () => {
  const { roomId } = useParams()
  const { getById } = useRooms()

  const room = getById(Number(roomId))

  return room ? (
    <>
      <Header />
      <Breadcrumb
        title={room.title}
        emph={room.blurb}
        name={room.name}
        image={room.landingImage}
      />
      <RoomDetail {...room} />
      <Footer />
    </>
  ) : null
}
