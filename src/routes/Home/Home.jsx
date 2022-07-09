// Css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'magnific-popup/dist/magnific-popup.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/flaticon.css'
import '../../assets/css/default.css'
import '../../assets/scss/style.scss'

import { useTranslation } from 'react-i18next'

import { Header } from '../../components/Header/Header'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      {t('Foo')}
      <Header global={global} />
      {/* <Content />
    <Footer {...global} /> */}
    </>
  )
}
