import React, { useEffect, useRef, useState } from 'react'
import "./navbar.css"
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";
<CgMenuLeft />



const Navbar = () => {

  const naviagte = useNavigate()
  const [nav2, setNav2] = useState(false);
  const navbarRef = useRef()
  const [profileActive, setProfileActive] = useState(false)

  return (
    <nav className='nav-body z-20 flex justify-between pl-5 pr-5 items-center' ref={navbarRef}>
      <i onClick={() => naviagte("/")} className='logo-icon w-16 h-full cursor-pointer '></i>
      <nav className=' nav-items justify-evenly list-none flex h-full items-center cursor-pointer '>
        <NavLink to='/' >HOME</NavLink>
        <NavLink to='/gallery'>GALLERY</NavLink>
        <NavLink to='upload'>UPLOAD</NavLink>
      </nav>

      <nav style={nav2 ? { display: "flex" } : { display: "none" }} className='nav-2-body' id='nav-2-body'>
        <div className='nav-2-items' >
          <NavLink onClick={() => setNav2(!nav2)} to='/' >HOME</NavLink>
          <NavLink onClick={() => setNav2(!nav2)} to='/gallery'>GALLERY</NavLink>
          <NavLink onClick={() => setNav2(!nav2)} to='upload'>UPLOAD</NavLink>
          <NavLink onClick={() => setNav2(!nav2)} to='/userProfile'>PROFILE</NavLink>
        </div>
      </nav>
      <i onClick={() => {naviagte("/userProfile")}} className='profile-icon w-16 h-full p-3 cursor-pointer'><FaUserCircle className=' w-full h-full ' /></i>
      <i onClick={() => setNav2(!nav2)} style={nav2 ? { rotate: "-90deg" } : {}} className='menu-icon w-16 h-full p-3 cursor-pointer z-10'> <CgMenuLeft className=' w-full h-full' /> </i>
    </nav>
  )
}

export default Navbar