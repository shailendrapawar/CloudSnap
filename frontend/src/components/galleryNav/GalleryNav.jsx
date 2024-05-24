import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import {NavLink,useNavigate} from "react-router-dom"
import './galleryNav.css'
const GalleryNav = () => {

    const navigate=useNavigate()

  return (
    <nav className='gallery-nav bg-[#00334eb1] text-white absolute flex flex-col justify-evenly items-center '>
        <NavLink  className={({isActive})=>isActive?"activeClass":"none"} to='/gallery/favourites'><FaHeart/></NavLink>
        <NavLink className={({isActive})=>isActive?"activeClass":"none"} to='/gallery/'><GrGallery/></NavLink>
        <NavLink className={({isActive})=>isActive?"activeClass":"none"} to='/upload'><MdAddPhotoAlternate/></NavLink>

     </nav>
)
}

export default GalleryNav