import React from "react";
import logo from '../../Images/logo.jpg';
import './data/Css/logo.css';


const Header = () => {
    return (
        <div>
            <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-2 shadow ">
                <div className="header_logo">
                   <img src={logo} alt="logo" /><span className='logo-span'>BNW</span>
                </div>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="px-3 text-white btn btn-dark" href="/">
                            Sign out
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
