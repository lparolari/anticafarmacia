import '../../utils/imports'

import { useTranslation } from 'react-i18next'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Breadcrumb } from './Breadcrumb'

export const Activities = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="activities-part pt-115 pb-115">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <h1>
                <i className="fas fa-map-marker-alt" />{' '}
                {t('Towns and attractions')}
              </h1>
            </div>
            <div className="col-md-4 mb-4">
              <h2>Cedegolo</h2>
              <h4>
                <a
                  href="https://www.musilbrescia.it/it/sedi/musil-cedegolo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Musil - {t('Hydroelectric Energy Museum')}
                </a>
              </h4>
              <p>
                {t(
                  'A museum inside an old power plant, showcasing the history of hydroelectric energy with immersive and interactive exhibits.'
                )}
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h2>Sellero</h2>
              <h4>
                <a
                  href="http://www.postindustriale.it/patrimonio-industriale/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centro 3T - {t('Industrial Heritage')}
                </a>
              </h4>
              <p>
                {t(
                  'A cultural hub preserving the industrial memory of Valcamonica through industrial archaeology and post-industrial landscapes.'
                )}
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h2>Capo di Ponte</h2>
              <div className="mb-3">
                <h4>
                  <a
                    href="https://www.mupre.capodiponte.beniculturali.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('National Museum of Prehistory (MUPRE)')}
                  </a>
                </h4>
                <p>
                  {t(
                    'A journey through the ancient history of Valcamonica, featuring archaeological finds. Great for families and school groups.'
                  )}
                </p>
              </div>

              <div className="mb-3">
                <h4>
                  <a
                    href="http://www.parcoincisioni.capodiponte.beniculturali.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('National Park of Rock Engravings')}
                  </a>
                </h4>
                <p>
                  {t(
                    'An open-air park with thousands of UNESCO-listed petroglyphs. A blend of nature and culture.'
                  )}
                </p>
              </div>

              <div className="mb-3">
                <h4>
                  <a
                    href="https://www.visitbrescia.it/attivita/pieve-di-san-siro-e-monastero-di-san-salvatore/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('Pieve di San Siro and Monastery of San Salvatore')}
                  </a>
                </h4>
                <p>
                  {t(
                    'Two important religious buildings in the valley, known for their architecture and peaceful atmosphere.'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-12 mb-4">
              <h1>
                <i className="fas fa-hiking" /> {t('Walks and hikes')}
              </h1>
            </div>
            <div className="col-md-12">
              <h4>
                <a
                  href="https://www.visitvalsaviore.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Valsaviore
                </a>
              </h4>
              <p>
                {t(
                  'Trekking and scenic nature trails in the beautiful Val Saviore.'
                )}
              </p>

              <h4>
                <a
                  href="https://organizzazione.cai.it/sez-cedegolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAI Cedegolo
                </a>
              </h4>
              <p>
                {t(
                  'The local Alpine Club offers mountain routes for all levels.'
                )}
              </p>

              <h4>
                <a
                  href="https://sentiericamuni.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sentieri Camuni
                </a>
              </h4>
              <p>
                {t(
                  'A blog full of ideas and tips for excursions, with marked routes.'
                )}
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-12 mb-4">
              <h1>
                <i className="fas fa-running" /> {t('Outdoor sports')}
              </h1>
            </div>
            <div className="col-md-4 mb-4">
              <h2>{t('Winter sports')}</h2>
              <h4>
                <a
                  href="https://www.pontedilegnotonale.com/it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ponte di Legno - Tonale
                </a>
              </h4>
              <p>
                {t(
                  'Popular ski resort in the Alps with slopes for all levels.'
                )}
              </p>

              <h4>
                <a
                  href="https://www.apricaonline.com/it/montagna-inverno"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aprica
                </a>
              </h4>
              <p>{t('Historic ski area, ideal for families and beginners.')}</p>

              <h4>
                <a
                  href="https://bornoskiarea.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Borno Ski Area
                </a>
              </h4>
              <p>
                {t(
                  'A small and well-equipped resort, perfect for quiet snow days.'
                )}
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h2>{t('Cycling')}</h2>
              <h4>
                <a
                  href="https://www.mtbvalcamonica.it/ita/home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MTB Valcamonica
                </a>
              </h4>
              <p>
                {t(
                  'Mountain biking trails across the valley, from casual rides to technical downhill.'
                )}
              </p>

              <h4>
                <a
                  href="https://www.cinnamonvalleys.com/book-online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cinnamon Valleys
                </a>
              </h4>
              <p>
                {t(
                  'Bike rentals and guided tours, suitable for beginners too.'
                )}
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h2>{t('Motorcycling')}</h2>
              <h4>
                <a
                  href="https://www.motoitinerari.it/cerca/edolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Moto Itinerari – Edolo e dintorni
                </a>
              </h4>
              <p>
                {t(
                  'Spectacular routes for motorbike lovers, through mountain passes and picturesque villages.'
                )}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-4">
              <h1>
                <i className="fas fa-link" /> {t('Other links')}
              </h1>
            </div>
            <div className="col-md-12 mb-4">
              <h4>
                <a
                  href="https://www.visitbrescia.it/blog/luogo/valle-camonica/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Brescia - Valle Camonica
                </a>
              </h4>
              <p>
                {t(
                  'Official portal for events, news and itineraries in Valcamonica.'
                )}
              </p>

              <h4>
                <a
                  href="https://www.immersionerupestre.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Immersione Rupestre
                </a>
              </h4>
              <p>
                {t(
                  'A project enhancing rock art through guided tours and cultural events.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
