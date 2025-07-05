import '../../utils/imports'

import BookingWidget from '../../components/BookingWidget'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Breadcrumb } from './Breadcrumb'

export const Book = () => (
  <>
    <Header />
    <Breadcrumb />
    <section className="contact-part pt-115 pb-115">
      <div className="container">
        <BookingWidget />
      </div>
    </section>
    <Footer />
  </>
)
