import React from 'react';
import './Navbar.css';
// import profileImg from '../../assets/Images/Profileimg.png';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-brand">
                <span>The</span>
                <span className="navbar-product">Product</span>
                <span>Platform</span>
            </div>

            <div className="navbar-menu">
                <span className="navbar-menu-item">
                    Learn
                    {downSvg()}
                </span>
                <span className="navbar-menu-item">
                    Practise
                    {downSvg()}
                </span>
                <img
                    // src={profileImg}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="navbar-profile-img"
                />
            </div>
        </div>
    )
}

export default Navbar;

function downSvg() {
    return (
        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.36975 2L10.0336 10L18 2" stroke="#FEFEFE" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />
        </svg>
    )
}
