/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
export const Gallery = ({ images }) => (
  <section className="gallery-wrappper">
    <div className="container">
      <div className="gallery-loop">
        {images.map((image, i) => (
          <div key={i} className="single-gallery-image">
            <a rel="external" href={image} className="popup-image">
              <img src={image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)
