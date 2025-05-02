import React from 'react';
import HeroBanner from '../components/HeroBanner';
import SectionTitle from '../components/SectionTitle';
import FeaturedCard from '../components/FeaturedCard';
import { placeholderImages, featuredContent } from '../assets/dummy';
import './StyleTipsPage.css';

const StyleTipsPage: React.FC = () => {
    return (
        <div className="style-tips-page">
            <HeroBanner
                title="Style Tips & Advice"
                subtitle="Learn how to elevate your personal style with expert advice for any occasion, body type, or season."
                backgroundImage={placeholderImages.styleTips1}
            />

            <section className="section style-principles">
                <div className="container">
                    <SectionTitle
                        title="Style Fundamentals"
                        subtitle="Master these core principles of great style to build a solid foundation for your fashion journey."
                        centered={true}
                    />

                    <div className="grid grid-3">
                        {featuredContent.styleTips.map(tip => (
                            <FeaturedCard
                                key={tip.id}
                                title={tip.title}
                                description={tip.description}
                                image={tip.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section body-types">
                <div className="container">
                    <SectionTitle
                        title="Dress for Your Body Shape"
                        subtitle="Learn how to highlight your favorite features and create balanced proportions for your unique body type."
                    />

                    <div className="body-types-grid">
                        <div className="body-type-card">
                            <div className="body-type-visual">
                                <img src={placeholderImages.styleTips1} alt="Hourglass Shape" />
                            </div>
                            <div className="body-type-content">
                                <h3>Hourglass</h3>
                                <ul className="style-tip-list">
                                    <li>Highlight your defined waist with belted styles and wrap dresses</li>
                                    <li>Choose fitted rather than loose clothing to show off your proportions</li>
                                    <li>V-necks and scoop necks complement your figure beautifully</li>
                                    <li>Balance your top and bottom with A-line skirts and straight-leg pants</li>
                                </ul>
                            </div>
                        </div>

                        <div className="body-type-card">
                            <div className="body-type-visual">
                                <img src={placeholderImages.styleTips2} alt="Pear/Triangle Shape" />
                            </div>
                            <div className="body-type-content">
                                <h3>Pear/Triangle</h3>
                                <ul className="style-tip-list">
                                    <li>Balance proportions with statement tops and structured shoulders</li>
                                    <li>A-line skirts and wide-leg pants flatter your lower half</li>
                                    <li>Dark colors on bottom and lighter colors on top create visual balance</li>
                                    <li>Boat necklines and off-the-shoulder tops draw attention upward</li>
                                </ul>
                            </div>
                        </div>

                        <div className="body-type-card">
                            <div className="body-type-visual">
                                <img src={placeholderImages.trends2} alt="Rectangle Shape" />
                            </div>
                            <div className="body-type-content">
                                <h3>Rectangle</h3>
                                <ul className="style-tip-list">
                                    <li>Create curves with peplum tops and jackets that cinch at the waist</li>
                                    <li>Add dimension with layers, ruffles, and textured fabrics</li>
                                    <li>Try tops with detailing at the bust and hips to add curves</li>
                                    <li>Belt dresses and tops to define your waistline</li>
                                </ul>
                            </div>
                        </div>

                        <div className="body-type-card">
                            <div className="body-type-visual">
                                <img src={placeholderImages.trends1} alt="Apple/Inverted Triangle Shape" />
                            </div>
                            <div className="body-type-content">
                                <h3>Apple/Inverted Triangle</h3>
                                <ul className="style-tip-list">
                                    <li>V-necks and open necklines elongate your upper body</li>
                                    <li>A-line dresses and tops that flow from the bust create balance</li>
                                    <li>Draw attention downward with statement pants and skirts</li>
                                    <li>Elongate with monochromatic looks and vertical details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section color-guide">
                <div className="container">
                    <SectionTitle
                        title="Color Coordination Guide"
                        subtitle="Master the art of combining colors to create harmonious and striking outfits."
                        centered={true}
                    />

                    <div className="color-guide-content">
                        <div className="color-wheel-container">
                            <div className="color-wheel">
                                <div className="color-wheel-placeholder">
                                    <img src={placeholderImages.styleTips2} alt="Color Wheel" />
                                </div>
                            </div>
                        </div>

                        <div className="color-guide-info">
                            <div className="color-combo">
                                <h3>Monochromatic</h3>
                                <p>Different shades and tints of the same color create a sophisticated, cohesive look.</p>
                                <div className="color-combo-example">
                                    <span className="color-swatch" style={{ backgroundColor: '#e4f1fe' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#89c4f4' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#2574a9' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#1a4e7e' }}></span>
                                </div>
                            </div>

                            <div className="color-combo">
                                <h3>Complementary</h3>
                                <p>Colors opposite each other on the color wheel create vibrant contrast.</p>
                                <div className="color-combo-example">
                                    <span className="color-swatch" style={{ backgroundColor: '#4d05e8' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#fee440' }}></span>
                                </div>
                            </div>

                            <div className="color-combo">
                                <h3>Analogous</h3>
                                <p>Colors that sit next to each other on the color wheel for a harmonious blend.</p>
                                <div className="color-combo-example">
                                    <span className="color-swatch" style={{ backgroundColor: '#ff9770' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#ff70a6' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#ffd670' }}></span>
                                </div>
                            </div>

                            <div className="color-combo">
                                <h3>Neutral + Accent</h3>
                                <p>A foundation of neutral tones with a pop of color for visual interest.</p>
                                <div className="color-combo-example">
                                    <span className="color-swatch" style={{ backgroundColor: '#f5f5f5' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#dcdcdc' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#555555' }}></span>
                                    <span className="color-swatch" style={{ backgroundColor: '#00bcd4' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section dress-codes">
                <div className="container">
                    <SectionTitle
                        title="Dress Codes Decoded"
                        subtitle="Navigate any invitation with confidence by understanding what different dress codes really mean."
                    />

                    <div className="dress-codes-grid">
                        <div className="dress-code-card">
                            <div className="dress-code-image">
                                <img src={placeholderImages.wardrobe1} alt="Casual Dress Code" />
                            </div>
                            <div className="dress-code-content">
                                <h3>Casual</h3>
                                <p>Relaxed and comfortable without sacrificing style. Think jeans, t-shirts, casual dresses, and sneakers or flats.</p>
                                <div className="dress-code-examples">
                                    <div className="dress-code-example">
                                        <h4>For Women</h4>
                                        <ul>
                                            <li>Jeans or casual pants</li>
                                            <li>Sundresses or casual skirts</li>
                                            <li>T-shirts, blouses, or sweaters</li>
                                            <li>Sneakers, flats, or sandals</li>
                                        </ul>
                                    </div>
                                    <div className="dress-code-example">
                                        <h4>For Men</h4>
                                        <ul>
                                            <li>Jeans or khakis</li>
                                            <li>T-shirts, polos, or casual button-downs</li>
                                            <li>Casual sweaters or light jackets</li>
                                            <li>Sneakers, loafers, or casual boots</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dress-code-card">
                            <div className="dress-code-image">
                                <img src={placeholderImages.lookbook1} alt="Business Casual Dress Code" />
                            </div>
                            <div className="dress-code-content">
                                <h3>Business Casual</h3>
                                <p>Polished but relaxed attire suitable for modern workplaces and semi-formal events.</p>
                                <div className="dress-code-examples">
                                    <div className="dress-code-example">
                                        <h4>For Women</h4>
                                        <ul>
                                            <li>Dress pants or skirts</li>
                                            <li>Blouses, button-downs, or sweaters</li>
                                            <li>Blazers or cardigans</li>
                                            <li>Flats, loafers, or low heels</li>
                                        </ul>
                                    </div>
                                    <div className="dress-code-example">
                                        <h4>For Men</h4>
                                        <ul>
                                            <li>Chinos or dress pants</li>
                                            <li>Button-down shirts or polos</li>
                                            <li>Optional blazer or sport coat</li>
                                            <li>Loafers or dress shoes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StyleTipsPage; 