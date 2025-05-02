import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">StyleGuide</h3>
                        <p className="footer-description">
                            Your ultimate fashion guide for staying stylish and confident with the latest trends and timeless classics.
                        </p>
                        <div className="social-icons">
                            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://pinterest.com" className="social-icon" aria-label="Pinterest">
                                <FaPinterest />
                            </a>
                            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/trends">Trends</Link>
                            </li>
                            <li>
                                <Link to="/style-tips">Style Tips</Link>
                            </li>
                            <li>
                                <Link to="/wardrobe-essentials">Wardrobe Essentials</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">More</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/lookbook">Lookbook</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Newsletter</h3>
                        <p className="footer-description">
                            Subscribe for exclusive style updates and tips.
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} StyleGuide. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 