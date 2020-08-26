import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        
            <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/Courses">Courses</a>
                <a href="/review">Order</a>
                <a href="/manage">Contact Us</a>
            </nav>
        </div>
        
    );
};

export default Header;