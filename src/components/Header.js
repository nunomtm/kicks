import React from 'react';
import logo from '../assets/logo.png'

function Header() {
    return (
        <header>
            <div className="navContainer wrapper">
                <div className="logoContainer">
                    <img className="logo" src={logo} alt="Logo"/>
                    <h1>Kicks</h1>
                </div>

                <nav>
                    <ul className="navLinks">
                        <li>Home</li>
                        <li>Up Coming</li>
                        <li>New Releases</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
