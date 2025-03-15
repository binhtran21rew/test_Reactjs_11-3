import React from 'react'

import './gallery.scss';
import { gallery1, gallery2, gallery3, imageMain1, imageMain2 } from '../../constant';
import GalleryImage from '../../layouts/component/galleryImage/GalleryImage'
function Gallery() {
  return (
    <div className="Gallery">
      <div className="container">
        <GalleryImage 
          list={
            [
                {id: 1, text: 'all', images: [imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2,imageMain1, gallery1, gallery2, imageMain1, gallery1, gallery2]},
                {id: 2, text: 'the main house', images: [gallery1, gallery2, imageMain1, gallery1, gallery2]},
                {id: 3, text: 'the stables', images: [gallery3, imageMain2, gallery2, imageMain1, gallery1]},
                {id: 4, text: 'the property', images: [gallery2,imageMain1, gallery1, gallery2]},
                {id: 5, text: 'the beach', images: [imageMain1, gallery1, gallery2, imageMain1]},
            ]
          }
        />

      </div>
    </div>
  )
}

export default Gallery