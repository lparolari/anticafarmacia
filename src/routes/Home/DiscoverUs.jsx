import React from 'react'

import dinnerRoom from '../../assets/images/dinner-room-2.jpg'

const discoverUs = () => {
  return (
    <div 
      className="room-bg"
      style={{backgroundImage: `url(${dinnerRoom})`}}
    >
      <section className="room-gallery-cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cta-text text-center">
                <span>{emph}</span>
                <h2>{title}</h2>
                <ul className="mt-50">
                  <li>
                    <Link className="main-btn btn-filled" to="/rooms">
                      {goldButton.label}
                    </Link>
                  </li>
                  <li>
                    <Link className="main-btn btn-border" to="/contact">
                      {whiteButton.label}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rotate-images">
          {/* <GatsbyImage
            image={img1.localFile.childImageSharp.gatsbyImageData}
            className="rotate-image-one"
            alt=""
          />
          <GatsbyImage
            image={img2.localFile.childImageSharp.gatsbyImageData}
            className="rotate-image-two"
            alt=""
          /> */}
          {/* <GatsbyImage
            image={img3.localFile.childImageSharp.gatsbyImageData}
            className="rotate-image-three"
            // style={{ width: "316px", height: "255px" }}
            alt=""
          /> */}
        </div>
      </section>
    </BgImage>
  )
}
