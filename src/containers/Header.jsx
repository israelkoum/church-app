import React from 'react'
import MainMenu from '../components/MainMenu'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <div className="header-wrapper">
        <div className="header">
            <div className="header-inner">
                <div className="container">
                    <a href="index.html" className="header-logo">
                        <img src={logo} alt="iChurch" />
                    </a>
                    <MainMenu />
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>            
                </div>              
            </div>
        </div>
    </div>
    )
}

export default Header 