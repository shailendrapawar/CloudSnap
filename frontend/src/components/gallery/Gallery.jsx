import React from 'react'
import './gallery.css'
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import {Outlet, useNavigate} from "react-router-dom"



const Gallery = () => {

  const navigate=useNavigate()
  return (
    <main className='gallery-body'>
      <div className='gallery-block'>
     
        <nav className='gallery-nav'>
        <FaHeart />
        <GrGallery />
        <MdAddPhotoAlternate onClick={()=>navigate("/upload")}  />
        </nav>
        <Outlet/>
      </div>
    </main>

  )
}

export default Gallery