import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
    <div className='navbar'>
        <h2>NavBar</h2>
        <div className='navLink'>
        <NavLink className='link' to='/'>Registration</NavLink><br></br>
        <NavLink className='link' to='/signin'>SignIn</NavLink>
        <NavLink className='link' to='/get'>Get</NavLink>
        <NavLink className='link' to='/post'>Post</NavLink>
        {/* <NavLink className='link' to='/logout'>Logout</NavLink> */}
        <NavLink className='link' to='/home'>Home</NavLink>
    </div>
    </div>
    </nav>
  )
}

export default NavBar;