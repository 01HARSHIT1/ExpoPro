import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import TrendsPage from './pages/TrendsPage';
import StyleTipsPage from './pages/StyleTipsPage';
import WardrobeEssentialsPage from './pages/WardrobeEssentialsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';
import LookbookPage from './pages/LookbookPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/trends" element={<TrendsPage />} />
                        <Route path="/style-tips" element={<StyleTipsPage />} />
                        <Route path="/wardrobe-essentials" element={<WardrobeEssentialsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/lookbook" element={<LookbookPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App; 