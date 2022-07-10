import i18n from 'i18next'

import centraleBed1 from '../assets/images/room-centrale-bed-1.jpg'
import centraleBed3 from '../assets/images/room-centrale-bed-3.jpg'
import centraleDetail from '../assets/images/room-centrale-detail-4.jpg'
import centraleLarge from '../assets/images/room-centrale-large.jpg'
import direttoreBathroom from '../assets/images/room-direttore-bathroom-2.jpg'
import direttoreDetail1 from '../assets/images/room-direttore-detail-1.jpg'
import direttoreDetail2 from '../assets/images/room-direttore-detail-2.jpg'
import direttoreDoubleBed from '../assets/images/room-direttore-doublebed-2.jpg'
import latomammaBathroom from '../assets/images/room-latomamma-bathroom-3.jpg'
import latomammaBed from '../assets/images/room-latomamma-bed-3.jpg'
import latomammaDetail2 from '../assets/images/room-latomamma-detail-2.jpg'
import latomammaDetail3 from '../assets/images/room-latomamma-detail-3.jpg'
import latopiazzaBathroom from '../assets/images/room-latopiazza-bathroom.jpg'
import latopiazzaBed from '../assets/images/room-latopiazza-bed-4.jpg'
import latopiazzaDetail from '../assets/images/room-latopiazza-detail-3.jpg'
import latopiazzaLarge from '../assets/images/room-latopiazza-large-1.jpg'
import { useRooms } from './useRooms'

export const useRoomTypes = () => {
  const { rooms } = useRooms()
  const roomTypes = [
    // direttore
    {
      id: 1,
      room: rooms[0],
      cardVertical: {
        caption: i18n.t('Bathroom'),
        icon: 'fas fa-bath',
        muted: i18n.t('With shower'),
        img: direttoreBathroom,
      },
      cardHorizontal: {
        caption: i18n.t('Double bed'),
        icon: 'fas fa-bed',
        muted: i18n.t('Large and comfortable'),
        img: direttoreDoubleBed,
      },
      cardSquare1: {
        caption: i18n.t('Relax zone'),
        icon: 'fas fa-tv',
        muted: i18n.t('With television'),
        img: direttoreDetail1,
      },
      cardSquare2: {
        caption: i18n.t('Curated details'),
        icon: 'fas fa-lightbulb',
        muted: i18n.t('Elegance and class'),
        img: direttoreDetail2,
      },
    },

    // lato piazza
    {
      id: 2,
      room: rooms[1],
      cardVertical: {
        caption: i18n.t('Bathroom'),
        icon: 'fas fa-sink',
        muted: i18n.t('Rustic look'),
        img: latopiazzaBathroom,
      },
      cardHorizontal: {
        caption: i18n.t('Living room'),
        icon: 'fas fa-couch',
        muted: i18n.t('Relax and comfort'),
        img: latopiazzaLarge,
      },
      cardSquare1: {
        caption: i18n.t('Dining room'),
        icon: 'fas fa-utensils',
        muted: i18n.t('Large and modern'),
        img: latopiazzaDetail,
      },
      cardSquare2: {
        caption: i18n.t('Room'),
        icon: 'fas fa-bed',
        muted: i18n.t('With bath'),
        img: latopiazzaBed,
      },
    },

    // centrale
    {
      id: 3,
      room: rooms[2],
      cardVertical: {
        caption: i18n.t('Living room'),
        icon: 'fa fas-couch',
        muted: i18n.t('Large and comfortable'),
        img: centraleLarge,
      },
      cardHorizontal: {
        caption: i18n.t('Kitchen'),
        icon: 'fas fa-utensils',
        muted: i18n.t('Large and well equipped'),
        img: centraleDetail,
      },
      cardSquare1: {
        caption: i18n.t('Room'),
        icon: 'fas fa-bed',
        muted: i18n.t('Single bed'),
        img: centraleBed3,
      },
      cardSquare2: {
        caption: i18n.t('Mezzanine'),
        icon: 'fas fa-bed',
        muted: i18n.t('Double bed'),
        img: centraleBed1,
      },
    },

    // centrale
    {
      id: 4,
      room: rooms[3],
      cardVertical: {
        caption: i18n.t('Curated details'),
        icon: 'fas fa-lightbulb',
        muted: i18n.t('Elegance and class'),
        img: latomammaDetail3,
      },
      cardHorizontal: {
        caption: i18n.t('Living room'),
        icon: 'fas fa-utensils',
        muted: i18n.t('With kitchen'),
        img: latomammaDetail2,
      },
      cardSquare1: {
        caption: i18n.t('Double bed'),
        icon: 'fas fa-bed',
        muted: i18n.t('Large and comfortable'),
        img: latomammaBed,
      },
      cardSquare2: {
        caption: i18n.t('Bagno'),
        icon: 'fas fa-bath',
        muted: i18n.t('With bath'),
        img: latomammaBathroom,
      },
    },
  ]

  return { roomTypes }
}
