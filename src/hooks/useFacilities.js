import { useTranslation } from 'react-i18next'

export const useFacilities = () => {
  const { t } = useTranslation()

  return [
    { id: 1, title: t('Pet friendly'), icon: 'fas fa-paw' },
    { id: 2, title: t('Private parking'), icon: 'fas fa-car' },
    { id: 3, title: t('Breakfast'), icon: 'fas fa-coffee' },
    { id: 4, title: t('Local cuisine'), icon: 'fas fa-utensils' },
    { id: 5, title: t('Large relax areas'), icon: 'fas fa-book-reader' },
  ]
}
