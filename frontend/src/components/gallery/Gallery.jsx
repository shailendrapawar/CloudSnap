import React from 'react'
import './gallery.css'
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";


const Gallery = () => {
  return (
    <main className='gallery-body'>
      <div className='gallery-block'>
     
        <nav className='gallery-nav'>
        <FaHeart />
        <GrGallery />
        <MdAddPhotoAlternate />
        </nav>
      </div>
    </main>

  )
}

export default Gallery