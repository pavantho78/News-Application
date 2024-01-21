import React from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
    const [mobile,setMobile]=useState(false)
    return(
        <div className='header'>
           <nav className='navbar'>
            <Link to="/" className='One'><h3 className='logo'>NewsZ</h3></Link>
            <ul className={mobile?'mobile-menu-link':'nav-link'} onClick={()=>setMobile(false)}>
                       <Link to="/" className='One'><li>Home</li></Link>
                       <Link to="/business" className='One'><li>Business</li></Link>
                       <Link to="/entertainment" className='One'><li>Entertainment</li></Link>
                       <Link to="/general" className='One'><li>General</li></Link>
                       <Link to="/health" className='One'><li>Health</li></Link>
                       <Link to="/science" className='One'><li>Science</li></Link>
                       <Link to="/sports" className='One'><li>Sports</li></Link>
                       <Link to="/technology" className='One'><li>Technology</li></Link>
                         
            </ul>
            <button  onClick={()=>setMobile(!mobile)} className='mobile-menu-icon'>{mobile?<ImCross/>:<FaBars/>}</button>
           </nav>
        </div>
    )
}
export default Navbar;

