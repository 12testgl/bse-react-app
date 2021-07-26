import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavLink class='navbar-brand' to='/' style={{ color: 'black', fontWeight: 'bold' }}>
                HOME
            </NavLink>
        </div>
    )
}

export default Navbar
