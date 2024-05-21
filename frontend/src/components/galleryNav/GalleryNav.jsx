import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import {NavLink, Outlet, useNavigate} from "react-router-dom"
import './galleryNav.css'
const GalleryNav = () => {

    const navigate=useNavigate()

  return (
    <nav className='gallery-nav'>
        <NavLink className={({isActive})=>isActive?"activeClass":""} to='/gallery/favourites'><FaHeart/></NavLink>
        <NavLink className={({isActive})=>isActive?"activeClass":""} to='/gallery/'><GrGallery/></NavLink>
        <NavLink className={({isActive})=>isActive?"activeClass":""} to="/upload"><MdAddPhotoAlternate/></NavLink>

     </nav>
)
}

export default GalleryNav