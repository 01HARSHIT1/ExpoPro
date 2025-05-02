import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    StyleGuide
                </Link>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className={`navbar-toggle-icon ${isMenuOpen ? 'open' : ''}`}></span>
                </div>

                <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/trends" className="navbar-link">Trends</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/style-tips" className="navbar-link">Style Tips</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/wardrobe-essentials" className="navbar-link">Wardrobe Essentials</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/blog" className="navbar-link">Blog</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/lookbook" className="navbar-link">Lookbook</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/shop" className="navbar-link">Shop</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar; 