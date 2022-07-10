import '../../utils/imports'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { AddressInfo } from './AddressInfo'
import { Breadcrumb } from './Breadcrumb'
import { ContactInfo } from './ContactInfo'

export const Contacts = () => (
  <>
    <Header />
    <Breadcrumb />
    <section className="contact-part pt-115 pb-115">
      <div className="container">
        <ContactInfo />
        <AddressInfo />
        {/* <ContactForm /> */}
        {/* <AddressInfo google={google} /> */}
      </div>
    </section>
    <Footer />
  </>
)
