import React from "react";
import './Navbar.css'
import netflixLogo from '../../assets/netflix_logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="main_div">
                <div>
                    <img className="logo" src={netflixLogo} alt="logo" />
                </div>
                    
                <div>
                    <img className="proifle" src="https://avatars.githubusercontent.com/u/6759280?v=4" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;