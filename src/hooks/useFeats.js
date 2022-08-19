import { useTranslation } from 'react-i18next'

export const useFeats = () => {
  const { t } = useTranslation()

  return [
    {
      id: 1,
      title: t('Relax and comfort'),
      icon: 'fas fa-couch',
      desc: t('home_feats_relax_desc'),
    },
    {
      id: 2,
      title: t('Zero-kilometer delicacies'),
      icon: 'fas fa-utensils',
      desc: t('home_feats_cuisine_desc'),
    },
    {
      id: 3,
      title: t('One step away from the CAI paths'),
      icon: 'fas fa-mountain',
      desc: t('home_feats_mountain_desc'),
    },
  ]
}
