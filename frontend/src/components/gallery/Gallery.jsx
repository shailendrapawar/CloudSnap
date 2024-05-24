import React from 'react'
import './gallery.css'

import { Outlet} from "react-router-dom"
import GalleryNav from '../galleryNav/GalleryNav'

const Gallery = () => {

  return (
    <main className='gallery-body flex justify-center items-center'>
      <div className='gallery-block bg-transparent relative'>
        <GalleryNav />
        <Outlet />
      </div>
    </main>

  )
}

export default Gallery