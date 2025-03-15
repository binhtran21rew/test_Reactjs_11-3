import React from 'react'

import './gallery.scss';

import GalleryImage from '../../layouts/component/galleryImage/GalleryImage'
function Gallery() {
  return (
    <div className="Gallery">
      <div className="container">
        <GalleryImage />

      </div>
    </div>
  )
}

export default Gallery