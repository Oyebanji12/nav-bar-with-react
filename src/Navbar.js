import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"



const Navbar = () => {
    const [isMobile, setIsMobile]= useState (false)

    const toggleButton=()=>{
        setIsMobile(!isMobile)
    }
  return (
    <div>
        <nav className='nav-bar'>
            <h3 className='logo'>logo</h3>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}  >

                
                <li className='list-item'>Home</li>
                <li className='list-item'>About</li>
                <li  className='list-item'>Contact</li>
                <li className='list-item'>Reach out</li>
                <li className='list-item'>Sign up</li>
                
            </ul>
            <button className='mobile-menu-icon' onClick={toggleButton} >
                {isMobile ? <FaTimes /> : <FaBars /> }

            </button>
        </nav>
    </div>
  )
}

export default Navbar


















