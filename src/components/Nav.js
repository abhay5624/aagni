import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import './Nav.css';
const Nav = () => {
    console.log(logo);
    return (
        <nav>          
            <Link to= '/'>
                <div className="homelogo">
                <img src={logo} alt="ilogo not found" />&nbsp;&nbsp;&nbsp;
                <h1>Aagni</h1>
                </div>
            </Link>
            <ul className="nav-link">
                <Link to = '/'><li>Home</li></Link>
                <Link to = '/Aboutus'><li>About us</li></Link>
                <Link to = '/Story'><li>Our Story</li></Link>
                <Link to = '/gallery'><li>Gallery</li></Link>
                <Link to = '/contactus'><li>Contact us</li></Link>
            </ul>
        </nav> 
    )
}

export default Nav
