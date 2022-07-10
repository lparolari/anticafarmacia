import i18n from 'i18next'

import direttoreLarge from '../assets/images/room-direttore-large.jpg'

export const getRooms = () => [
  {
    id: 1,
    title: i18n.t('Camera Direttore'),
    description: i18n.t(
      'Camera matrimoniale con bagno. Terrazzino. Pavimento in cementine originali primo ‘900, intonaci in grassello di malta, soffitto con travi in legno massiccio a vista, legni antichi, lampadario vintage originale, luci artigianali, ampio mobile guardaroba su misura, tavolo-scrivania di design.'
    ),
    price: 80,
    period: 'notte',
    amenities: [
      { id: 1, title: i18n.t('Double bed'), icon: 'fas fa-bed' },
      { id: 2, title: i18n.t('Shower'), icon: 'fas fa-shower' },
      { id: 3, title: i18n.t('Tv'), icon: 'fas fa-tv' },
      { id: 4, title: i18n.t('Safe'), icon: 'fas fa-fingerprint' },
      { id: 5, title: i18n.t('Tea set, coffee'), icon: 'fas fa-mug-hot' },
      { id: 6, title: i18n.t('Hairdryer'), icon: 'fas fa-hot-tub' },
      { id: 7, title: i18n.t('Courtesy set'), icon: 'fas fa-cookie' },
      { id: 8, title: i18n.t('Parking'), icon: 'fas fa-car' },
      { id: 9, title: i18n.t('WiFi'), icon: 'fas fa-wifi' },
    ],
    pricing:
      'A partire da €80 pernottamento per due persone. Contattaci per preventivo senza alcun impegno. Camere doppie, triple e quadruple. Con o senza colazione/cena. ',
    landingImage: direttoreLarge,
    gallery: [],
  },
  // {
  //   id: 2,
  //   title: i18n.t('Camera Lato Piazza'),
  // },
  // {
  //   id: 3,
  //   title: i18n.t('Camera Centrale'),
  // },
  // {
  //   id: 4,
  //   title: i18n.t('Camera Lato Mamma'),
  // },
]
