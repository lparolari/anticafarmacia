/* eslint-disable import/extensions */
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import it from './it.json'

export const resources = {
  it: { translation: it },
  en: { translation: en },
}

const detectionOptions = {
  order: ['localStorage'],
  lookupLocalStorage: 'anticafarmacia:lng',
  caches: ['localStorage'],
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: detectionOptions,
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'it'],
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

// declare module 'react-i18next' {
//   type DefaultResources = typeof resources['en']
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface Resources extends DefaultResources {}
// }
