import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        
            <div className="header">
            <img src={logo} alt=""/>
            <nav className="font-weight-bold">
                <a href="/Courses">Courses</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
        
    );
};

export default Header;