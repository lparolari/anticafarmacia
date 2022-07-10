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

  return [
    {
      id: 1,
      title: t('Camera Direttore'),
      description: t(
        "Camera matrimoniale con bagno. Terrazzino. Pavimento in cementine originali primo '900, intonaci in grassello di malta, soffitto con travi in legno massiccio a vista, legni antichi, lampadario vintage originale, luci artigianali, ampio mobile guardaroba su misura, tavolo-scrivania di design."
      ),
      price: 80,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 2, title: t('Shower'), icon: 'fas fa-shower' },
        { id: 3, title: t('Tv'), icon: 'fas fa-tv' },
        { id: 4, title: t('Safe'), icon: 'fas fa-fingerprint' },
        { id: 5, title: t('Tea set, coffee'), icon: 'fas fa-mug-hot' },
        { id: 6, title: t('Hairdryer'), icon: 'fas fa-hot-tub' },
        { id: 7, title: t('Courtesy set'), icon: 'fas fa-cookie' },
        { id: 8, title: t('Parking'), icon: 'fas fa-car' },
        { id: 9, title: t('WiFi'), icon: 'fas fa-wifi' },
      ],
      pricing: t(
        'A partire da €80 pernottamento per due persone. Contattaci per preventivo senza alcun impegno. Camere doppie, triple e quadruple. Con o senza colazione/cena.'
      ),
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
      title: t('Camera Lato Piazza'),
      description: t(
        'Camera su due livelli, ampia zona living e soppalco. Due letti singoli nel living, letto matrimoniale e bagno sul soppalco con vasca a vista. Zona cottura attrezzata e tavolo da pranzo. Parquet in larice, lucernari, pareti in sasso e in grassello di malta, legni antichi. Luci artigianali. Ampli mobili guardaroba con assi di recupero.'
      ),
      price: 100,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 2, title: t('Two single beds'), icon: 'fas fa-bed' },
        { id: 3, title: t('Bath'), icon: 'fas fa-bath' },
        { id: 4, title: t('TV'), icon: 'fas fa-tv' },
        { id: 5, title: t('Safe'), icon: 'fas fa-fingerprint' },
        { id: 6, title: t('Tea set, coffee'), icon: 'fas fa-mug-hot' },
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
      pricing: t(
        'A partire da €100 pernottamento e uso cucina per due persone, 120 per tre persone, 140 per quattro persone. Contattaci per preventivo senza alcun impegno. Camere doppie, triple e quadruple. Con o senza colazione/cena.'
      ),
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
      title: t('Camera Centrale'),
      description: t(
        'Camera su due livelli,zona living e soppalco. Un letto singolo nel living, letto matrimoniale e bagno sul soppalco con doccia. Zona cottura attrezzata e tavolo da pranzo. Pavimento in cotto originale, tetto a vista, lucernari, pareti in sasso e in grassello di malta, legni antichi. Tavolino scrittoio. Luci artigianali. Ampio mobile guardaroba su misura.'
      ),
      price: 100,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 2, title: t('Single bed'), icon: 'fas fa-bed' },
        { id: 3, title: t('Shower'), icon: 'fas fa-shower' },
        { id: 4, title: t('TV'), icon: 'fas fa-tv' },
        { id: 5, title: t('Safe'), icon: 'fas fa-fingerprint' },
        { id: 6, title: t('Tea set, coffee'), icon: 'fas fa-mug-hot' },
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
      pricing: t(
        'A partire da €100 pernottamento e uso cucina per due persone, 120 per tre persone. Contattaci per preventivo senza alcun impegno. Camere doppie, triple e quadruple. Con o senza colazione/cena.'
      ),
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
      title: t('Camera Lato Mamma'),
      description: t(
        'Camera su due livelli, zona living e soppalco. Un letto matrimoniale alla francese nel living, letto matrimoniale e bagno sul soppalco con vasca a vista. Zona cottura attrezzata e tavolo da pranzo. Pavimento in cotto originale, tetto a vista, lucernari, pareti in sasso e in grassello di malta, legni antichi. Luci artigianali. Ampli mobili guardaroba con assi di recupero.'
      ),
      price: 100,
      period: t('Night'),
      amenities: [
        { id: 1, title: t('Double bed'), icon: 'fas fa-bed' },
        { id: 3, title: t('Bath'), icon: 'fas fa-bath' },
        { id: 4, title: t('TV'), icon: 'fas fa-tv' },
        { id: 5, title: t('Safe'), icon: 'fas fa-fingerprint' },
        { id: 6, title: t('Tea set, coffee'), icon: 'fas fa-mug-hot' },
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
      pricing: t(
        'A partire da €100 pernottamento e uso cucina per due persone, 120 per tre persone. Contattaci per preventivo senza alcun impegno. Camere doppie, triple e quadruple. Con o senza colazione/cena.'
      ),
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
}
