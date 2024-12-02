import React from 'react'
import './footer.css'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='logo-container'>
            <h2>Logo</h2>
        </div>

        <div className='quick-links'>
            <h3>QuickLink</h3>
            <ul>
                <li><NavLink reloadDocument className={"footer-link"} to={"/"}>Home</NavLink></li>
                <li><NavLink reloadDocument className={"footer-link"} to={"/about"}>About Us</NavLink></li>
                <li><NavLink reloadDocument className={"footer-link"} to={"/projects"} >Projects</NavLink></li>
                <li><NavLink reloadDocument className={"footer-link"} to={"/council"}>Council</NavLink></li>
                <li><NavLink reloadDocument className={"footer-link"} to={"/news"}>News</NavLink></li>
                <li><NavLink reloadDocument className={"footer-link"} to={"/contact"}>Contact us</NavLink></li>
            </ul>
        </div>

        <div className='council'>
            <h3>Council</h3>
            <ul>
                <li><NavLink className={"footer-link"}>Legislature</NavLink></li>
                <li><NavLink className={"footer-link"}>Executive</NavLink></li>
            </ul>
        </div>

        <form className='footer-news'>
            <div>
                <input type="email" placeholder='Enter Email'/>
                <button>Send</button>
            </div>
            <p>Subscribe to receive Newsletters</p>
        </form>
    </div>
  )
}

export default Footer