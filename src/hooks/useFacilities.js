import { useTranslation } from 'react-i18next'

export const useFacilities = () => {
  const { t } = useTranslation()

  return [
    { id: 1, title: t('Pet friendly'), icon: 'fas fa-paw' },
    { id: 2, title: t('Private parking'), icon: 'fas fa-car' },
    { id: 3, title: t('Breakfast'), icon: 'fas fa-coffee' },
    { id: 4, title: t('Common areas'), icon: 'fas fa-couch' },
    { id: 5, title: t('Relax areas'), icon: 'fas fa-book-reader' },
  ]
}
