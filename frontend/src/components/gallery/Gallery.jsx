import React from 'react'
import './gallery.css'

import { Outlet} from "react-router-dom"
import GalleryNav from '../galleryNav/GalleryNav'

const Gallery = () => {

  return (
    <main className='gallery-body'>
      <div className='gallery-block'>
        <GalleryNav />
        <Outlet />
      </div>
    </main>

  )
}

export default Gallery