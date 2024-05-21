import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import {NavLink, Outlet, useNavigate} from "react-router-dom"
import './galleryNav.css'
const GalleryNav = () => {
    const navigate=useNavigate()
    // className={(isActive)=>isActive?"activeClass":""}
  return (
    <nav className='gallery-nav'>
        <NavLink to='/gallery/favourites'><FaHeart/></NavLink>
        <NavLink to='/gallery'><GrGallery/></NavLink>
        <NavLink to="/upload"><MdAddPhotoAlternate/></NavLink>
        </nav>
)
}

export default GalleryNav