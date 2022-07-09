import '../../utils/imports'

import Footer from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import About from './About'
import Banner from './Banner'
import Cta from './Cta'
import { DiscoverUs } from './DiscoverUs'
import RoomType from './RoomType'

export const Home = () => (
  <>
    <Header />
    <Banner />
    <RoomType />
    <Cta />
    <About />
    <DiscoverUs />
    <Footer />
  </>
)
