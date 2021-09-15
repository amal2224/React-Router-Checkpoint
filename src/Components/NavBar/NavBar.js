import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div id="nav-bar">
            <p className="logoApp">Disney Movies</p>
            <Link className="navv" to='/'>
                <h3>Home</h3></Link>
            <Link className="navv" to='/movie'>
                <h3>Movies</h3></Link>
        </div>
    )
}

export default NavBar
