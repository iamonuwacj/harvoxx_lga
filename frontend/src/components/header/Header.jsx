import React, { useState } from 'react'
import './header.css'
import { MdMenu } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { Outlet } from 'react-router-dom'

const Header = () => {

    const [navState, setNavState] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const [modalList, setModalList] = useState(false)

    

    return (
        <div className='header-container'>
            <div className='logo-container'>
                <h3><NavLink to={"/"}>Logo</NavLink></h3>
            </div>

            <ul className='nav-menu'>
                <li><NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "inactive")}>Home</NavLink></li>
                <li><NavLink  to={"/about"} className={({isActive}) => (isActive ? "active" : "inactive")}>About Us</NavLink></li>
                <li><NavLink to={"/projects"} >Projects</NavLink></li>
                <li>
                    <div className='drop-container'>
                        <div className='drop-down' onClick={() => setDropDown(!dropDown)}>
                            {/* <NavLink to={"/projects"}>Council</NavLink> */}
                            <p>Council</p>
                            <IoIosArrowDown size={20} color='white'/>
                        </div>

                        <ul className="modal-drop" style={{display: dropDown ? "flex" : "none"}}>
                            <li ><NavLink reloadDocument to={"/legislature"}>Legislature</NavLink></li>
                            <li ><NavLink reloadDocument to={"/executive"} >Executive</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li ><NavLink to={"/news"}>News</NavLink></li>
                <li ><NavLink to={"/contact"}>Contact us</NavLink></li>
            </ul>

            <ul className='modal-menu' style={{display: navState && "flex"}}>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About Us</NavLink></li>
                <li><NavLink to={"/projects"} >Projects</NavLink></li>
                <li onClick={() => setModalList(!modalList)} style={{color: "white", fontSize: "18px", fontWeight: "bold"}}> Council <span>+</span>
                    <ul className={modalList ? "nav-ex" : "modal-off"}>
                        <li><NavLink to={"/executive"}>Executive</NavLink></li>
                        <li><NavLink to={"/legislature"}>Legislature</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to={"/news"}>News</NavLink></li>
                <li><NavLink to={"/contact"}>Contact us</NavLink></li>
            </ul>

            <MdMenu className={"menu"} onClick={() => setNavState(!navState)}/>

            <Outlet />
        </div>
    )
}

export default Header