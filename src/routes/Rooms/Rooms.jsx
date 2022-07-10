import '../../utils/imports'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Breadcrumb } from './Breadcrumb'
import { RoomList } from './RoomList'

export const Rooms = () => (
  <>
    <Header />
    <Breadcrumb />
    <section className="room-section room-list-style pt-120 pb-120">
      <div className="container">
        <div className="room-list-loop">
          <RoomList />
        </div>
      </div>
    </section>
    <Footer />
  </>
)
