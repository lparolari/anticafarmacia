import { useTranslation } from 'react-i18next'

import cenrtaleBathroom1 from '../assets/images/room-centrale-bathroom-1.jpg'
import cenrtaleBathroom2 from '../assets/images/room-centrale-bathroom-2.jpg'
import cenrtaleBathroom3 from '../assets/images/room-centrale-bathroom-3.jpg'
import cenrtaleBed1 from '../assets/images/room-centrale-bed-1.jpg'
import cenrtaleBed2 from '../assets/images/room-centrale-bed-2.jpg'
import cenrtaleBed3 from '../assets/images/room-centrale-bed-3.jpg'
import cenrtaleDetail1 from '../assets/images/room-centrale-detail-1.jpg'
import cenrtaleDetail2 from '../assets/images/room-centrale-detail-2.jpg'
import cenrtaleDetail3 from '../assets/images/room-centrale-detail-3.jpg'
import cenrtaleDetail4 from '../assets/images/room-centrale-detail-4.jpg'
import centraleLarge from '../assets/images/room-centrale-large.jpg'
import centraleLarge1 from '../assets/images/room-centrale-large-1.jpg'
import centraleLarge2 from '../assets/images/room-centrale-large-2.jpg'
import direttoreBathrooom1 from '../assets/images/room-direttore-bathroom-1.jpg'
import direttoreBathrooom2 from '../assets/images/room-direttore-bathroom-2.jpg'
import direttoreBed1 from '../assets/images/room-direttore-bed-1.jpg'
import direttoreBed2 from '../assets/images/room-direttore-bed-2.jpg'
import direttoreDetail1 from '../assets/images/room-direttore-detail-1.jpg'
import direttoreDetail2 from '../assets/images/room-direttore-detail-2.jpg'
import direttoreDetail3 from '../assets/images/room-direttore-detail-3.jpg'
import direttoreDetail4 from '../assets/images/room-direttore-detail-4.jpg'
import direttoreDetail5 from '../assets/images/room-direttore-detail-5.jpg'
import direttoreLarge from '../assets/images/room-direttore-large.jpg'
import latomammaBathroom1 from '../assets/images/room-latomamma-bathroom-1.jpg'
import latomammaBathroom2 from '../assets/images/room-latomamma-bathroom-2.jpg'
import latomammaBathroom3 from '../assets/images/room-latomamma-bathroom-3.jpg'
import latomammaBed1 from '../assets/images/room-latomamma-bed-1.jpg'
import latomammaBed2 from '../assets/images/room-latomamma-bed-2.jpg'
import latomammaBed3 from '../assets/images/room-latomamma-bed-3.jpg'
import latomammaDetail1 from '../assets/images/room-latomamma-detail-1.jpg'
import latomammaDetail2 from '../assets/images/room-latomamma-detail-2.jpg'
import latomammaDetail3 from '../assets/images/room-latomamma-detail-3.jpg'
import latomammaDetail4 from '../assets/images/room-latomamma-detail-4.jpg'
import latomammaDetail5 from '../assets/images/room-latomamma-detail-5.jpg'
import latomammaDetail6 from '../assets/images/room-latomamma-detail-6.jpg'
import latomammaLarge from '../assets/images/room-latomamma-large.jpg'
import latopiazzaBathroom from '../assets/images/room-latopiazza-bathroom.jpg'
import latopiazzaBed1 from '../assets/images/room-latopiazza-bed-1.jpg'
import latopiazzaBed2 from '../assets/images/room-latopiazza-bed-2.jpg'
import latopiazzaBed3 from '../assets/images/room-latopiazza-bed-3.jpg'
import latopiazzaBed4 from '../assets/images/room-latopiazza-bed-4.jpg'
import latopiazzaBed5 from '../assets/images/room-latopiazza-bed-5.jpg'
import latopiazzaBed6 from '../assets/images/room-latopiazza-bed-6.jpg'
import latopiazzaDetail1 from '../assets/images/room-latopiazza-detail-1.jpg'
import latopiazzaDetail2 from '../assets/images/room-latopiazza-detail-2.jpg'
import latopiazzaDetail3 from '../assets/images/room-latopiazza-detail-3.jpg'
import latopiazzaLarge from '../assets/images/room-latopiazza-large-1.jpg'
import latopiazzaLarge2 from '../assets/images/room-latopiazza-large-2.jpg'

export const useRooms = () => {
  const { t } = useTranslation()

  const rooms = [
    {
      id: 1,
      name: 'Direttore',
      title: t('Direttore Room'),
      blurb: t('Intimate and welcoming'),
      description: t('rooms_direttore_desc'),
      price: 100,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 2, title: t('Shower'), icon: 'fas fa-shower' },
        { id: 3, title: t('TV set'), icon: 'fas fa-tv' },
        { id: 4, title: t('Safe'), icon: 'fas fa-fingerprint' },
        {
          id: 5,
          title: t('Kettle, herbal teas, coffee'),
          icon: 'fas fa-mug-hot',
        },
        { id: 6, title: t('Hairdryer'), icon: 'fas fa-hot-tub' },
        { id: 7, title: t('Courtesy set'), icon: 'fas fa-cookie' },
        { id: 8, title: t('Parking'), icon: 'fas fa-car' },
        { id: 9, title: t('WiFi'), icon: 'fas fa-wifi' },
      ],
      pricing: t('rooms_pricing_direttore'),
      landingImage: direttoreLarge,
      gallery: [
        direttoreBed1,
        direttoreBed2,
        direttoreBathrooom1,
        direttoreBathrooom2,
        direttoreDetail1,
        direttoreDetail2,
        direttoreDetail3,
        direttoreDetail4,
        direttoreDetail5,
      ],
    },

    {
      id: 2,
      name: 'Lato Piazza',
      title: t('Lato Piazza Room'),
      blurb: t('Elegant suite'),
      description: t('rooms_latopiazza_desc'),
      price: 130,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 2, title: t('Two single beds'), icon: 'fas fa-bed' },
        { id: 3, title: t('Bath'), icon: 'fas fa-bath' },
        { id: 4, title: t('TV set'), icon: 'fas fa-tv' },
        { id: 5, title: t('Safe'), icon: 'fas fa-fingerprint' },
        {
          id: 6,
          title: t('Kettle, herbal teas, coffee'),
          icon: 'fas fa-mug-hot',
        },
        { id: 7, title: t('Hairdryer'), icon: 'fas fa-hot-tub' },
        { id: 8, title: t('Courtesy set'), icon: 'fas fa-cookie' },
        { id: 9, title: t('Parking'), icon: 'fas fa-car' },
        { id: 10, title: t('Air conditioner'), icon: 'fas fa-wind' },
        {
          id: 11,
          title: t('Kitchen with induction hob, sink, crockery, fridge'),
          icon: 'fas fa-utensils',
        },
        { id: 12, title: t('WiFi'), icon: 'fas fa-wifi' },
      ],
      pricing: t('rooms_pricing_general'),
      landingImage: latopiazzaLarge,
      gallery: [
        latopiazzaLarge2,
        latopiazzaBed1,
        latopiazzaBed2,
        latopiazzaBed3,
        latopiazzaBed4,
        latopiazzaBed5,
        latopiazzaBed6,
        latopiazzaBathroom,
        latopiazzaDetail1,
        latopiazzaDetail2,
        latopiazzaDetail3,
      ],
    },

    {
      id: 3,
      name: 'Centrale',
      title: t('Centrale Room'),
      blurb: t('Poetic suite'),
      description: t('rooms_centrale_desc'),
      price: 130,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 2, title: t('Single bed'), icon: 'fas fa-bed' },
        { id: 3, title: t('Shower'), icon: 'fas fa-shower' },
        { id: 4, title: t('TV set'), icon: 'fas fa-tv' },
        { id: 5, title: t('Safe'), icon: 'fas fa-fingerprint' },
        {
          id: 6,
          title: t('Kettle, herbal teas, coffee'),
          icon: 'fas fa-mug-hot',
        },
        { id: 7, title: t('Hairdryer'), icon: 'fas fa-hot-tub' },
        { id: 8, title: t('Courtesy set'), icon: 'fas fa-cookie' },
        { id: 9, title: t('Parking'), icon: 'fas fa-car' },
        { id: 10, title: t('Air conditioner'), icon: 'fas fa-wind' },
        {
          id: 11,
          title: t('Kitchen with induction hob, sink, crockery, fridge'),
          icon: 'fas fa-utensils',
        },
        { id: 12, title: t('WiFi'), icon: 'fas fa-wifi' },
      ],
      pricing: t('rooms_pricing_general'),
      landingImage: centraleLarge1,
      gallery: [
        centraleLarge,
        centraleLarge2,
        cenrtaleBed1,
        cenrtaleBed2,
        cenrtaleBed3,
        cenrtaleBathroom1,
        cenrtaleBathroom2,
        cenrtaleBathroom3,
        cenrtaleDetail1,
        cenrtaleDetail2,
        cenrtaleDetail3,
        cenrtaleDetail4,
      ],
    },

    {
      id: 4,
      name: 'Lato Mamma',
      title: t('Lato Mamma Room'),
      blurb: t('Romantic suite'),
      description: t('rooms_latomamma_desc'),
      price: 130,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 3, title: t('Bath'), icon: 'fas fa-bath' },
        { id: 4, title: t('TV set'), icon: 'fas fa-tv' },
        { id: 5, title: t('Safe'), icon: 'fas fa-fingerprint' },
        {
          id: 6,
          title: t('Kettle, herbal teas, coffee'),
          icon: 'fas fa-mug-hot',
        },
        { id: 7, title: t('Hairdryer'), icon: 'fas fa-hot-tub' },
        { id: 8, title: t('Courtesy set'), icon: 'fas fa-cookie' },
        { id: 9, title: t('Parking'), icon: 'fas fa-car' },
        { id: 10, title: t('Air conditioner'), icon: 'fas fa-wind' },
        {
          id: 11,
          title: t('Kitchen with induction hob, sink, crockery, fridge'),
          icon: 'fas fa-utensils',
        },
        { id: 12, title: t('WiFi'), icon: 'fas fa-wifi' },
      ],
      pricing: t('rooms_pricing_general'),
      landingImage: latomammaLarge,
      gallery: [
        latomammaDetail1,
        latomammaDetail2,
        latomammaDetail3,
        latomammaDetail4,
        latomammaDetail6,
        latomammaDetail5,
        latomammaBed1,
        latomammaBed2,
        latomammaBed3,
        latomammaBathroom1,
        latomammaBathroom2,
        latomammaBathroom3,
      ],
    },
  ]

  const getById = (id) => rooms.find((room) => room.id === id)

  return { rooms, getById }
}
