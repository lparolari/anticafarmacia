import { useTranslation } from 'react-i18next'

import { facilities } from '../../data/facilities'

const About = () => {
  const { t } = useTranslation()
  return (
    <section className="about-section pt-115 pb-115">
      <div className="container">
        <div className="section-title about-title text-center mb-20">
          <span className="title-tag">{t("And it's not over here!")}</span>
          <h2>{t('Antica Farmacia guesthouse is even more')}</h2>
        </div>
        <ul className="about-features masonry-layout">
          {facilities.map((item) => (
            <li key={item.id}>
              <div>
                <i className={item.icon} />
                <i className={`hover-icon ${item.icon}`} />
                <span className="title">{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
