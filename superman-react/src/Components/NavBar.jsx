import React from 'react'
import '../Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logoNav from '../../src/Assets/logos/logo_blanc.png';


const NavBar = () => {
    return (
        <header>
            <nav class="container" id="navigateur">
                    <NavLink to="/"><img class="logo" src={logoNav} alt="logo"  style={{width:"100px"}}/> </NavLink>
                <ul>
                    <li className='nav-item'>
                        <NavLink to='/'>HOME</NavLink></li>
                    <li className='nav-item'>
                        <NavLink to='/game'>GAME</NavLink></li>
                    <li className='nav-item'>
                        <NavLink to="/eshop">ESHOP</NavLink></li>
                    <li className='nav-item'>
                        <NavLink to="/signup">MON COMPTE</NavLink></li>
                </ul>
            </nav>
           
        </header>
    )
}

export default NavBar