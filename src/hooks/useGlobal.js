import { useTranslation } from 'react-i18next'

import logo from '../assets/images/logo.png'

export const useGlobal = () => {
  const { t } = useTranslation()

  return {
    defaultSeo: {
      metaTitle: t('Foresteria Antica Farmacia'),
      metaDescription: t('anticafarmacia_desc'),
    },

    contacts: {
      mobile1: { displayValue: '+39 320 842 7019', href: 'tel:+393208427019' },
      mobile2: { displayValue: '+39 349 281 1023', href: 'tel:+393492811023' },
      whatsapp: {
        displayValue: '+39 320 842 7019',
        href: 'https://wa.me/+393208427019',
      },
      email: {
        displayValue: 'foresteria.anticafarmacia@gmail.com',
        href: 'mailto:foresteria.anticafarmacia@gmail.com',
      },
      address: {
        displayValue: 'Via Nazionale, 4, Cedegolo, 25051, Brescia, Italia',
        href: 'https://goo.gl/maps/qLUvXxSdz7go9Vt48',
      },
    },

    fiscal: {
      businessName: 'Foresteria Antica Farmacia',
      vatNumber: '1234567890',
      legalEmail: 'foresteria.anticafarmacia@gmail.com',
      legalAddress: 'Via Nazionale, 4, Cedegolo, 25051, Brescia, Italia',
    },

    logo,
  }
}
