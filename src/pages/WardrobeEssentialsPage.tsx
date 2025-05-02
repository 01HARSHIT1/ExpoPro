import React from 'react';
import HeroBanner from '../components/HeroBanner';
import SectionTitle from '../components/SectionTitle';
import FeaturedCard from '../components/FeaturedCard';
import { placeholderImages, featuredContent } from '../assets/dummy';
import './WardrobeEssentialsPage.css';

const WardrobeEssentialsPage: React.FC = () => {
    return (
        <div className="wardrobe-essentials-page">
            <HeroBanner
                title="Wardrobe Essentials"
                subtitle="Invest in timeless, versatile pieces that form the foundation of a functional wardrobe."
                backgroundImage={placeholderImages.wardrobe2}
            />

            <section className="section wardrobe-basics">
                <div className="container">
                    <SectionTitle
                        title="Building Blocks of a Great Wardrobe"
                        subtitle="These foundational pieces will serve you for years to come, mixing and matching for countless outfit combinations."
                        centered={true}
                    />

                    <div className="grid grid-3">
                        {featuredContent.wardrobe.map(item => (
                            <FeaturedCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section capsule-wardrobe">
                <div className="container">
                    <SectionTitle
                        title="Capsule Wardrobe Guide"
                        subtitle="Create a minimalist, mix-and-match wardrobe with these essential pieces for each season."
                    />

                    <div className="capsule-wardrobe-content">
                        <div className="capsule-intro">
                            <p>
                                A capsule wardrobe consists of a limited selection of versatile pieces that can be mixed and matched to create a wide variety of outfits. The goal is to own fewer, higher-quality items that you truly love and will wear frequently.
                            </p>
                        </div>

                        <div className="capsule-seasons">
                            <div className="season-tab active">Spring/Summer</div>
                            <div className="season-tab">Fall/Winter</div>
                        </div>

                        <div className="capsule-items">
                            <div className="capsule-category">
                                <h3>Tops</h3>
                                <div className="capsule-category-items">
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.wardrobe1} alt="White T-Shirt" />
                                        </div>
                                        <h4>White T-Shirt</h4>
                                    </div>
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.wardrobe2} alt="Button-Down Shirt" />
                                        </div>
                                        <h4>Button-Down Shirt</h4>
                                    </div>
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.trends1} alt="Lightweight Sweater" />
                                        </div>
                                        <h4>Lightweight Sweater</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="capsule-category">
                                <h3>Bottoms</h3>
                                <div className="capsule-category-items">
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.lookbook1} alt="Jeans" />
                                        </div>
                                        <h4>Well-Fitted Jeans</h4>
                                    </div>
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.trends3} alt="Tailored Pants" />
                                        </div>
                                        <h4>Tailored Pants</h4>
                                    </div>
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.lookbook2} alt="Versatile Skirt" />
                                        </div>
                                        <h4>Versatile Skirt</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="capsule-category">
                                <h3>Outer Layers</h3>
                                <div className="capsule-category-items">
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.lookbook1} alt="Blazer" />
                                        </div>
                                        <h4>Classic Blazer</h4>
                                    </div>
                                    <div className="capsule-item">
                                        <div className="capsule-item-image">
                                            <img src={placeholderImages.trends2} alt="Denim Jacket" />
                                        </div>
                                        <h4>Denim Jacket</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section sustainable-wardrobe">
                <div className="container">
                    <div className="sustainable-wardrobe-content">
                        <div className="sustainable-wardrobe-text">
                            <h2>Sustainable Wardrobe Building</h2>
                            <p>
                                Creating a wardrobe that lasts isn't just good for your style—it's better for the planet too. Investing in quality pieces rather than following fast fashion trends reduces waste and environmental impact.
                            </p>
                            <ul className="sustainable-tips">
                                <li>Choose quality over quantity—invest in well-made pieces that will last</li>
                                <li>Look for sustainable and ethical brands that prioritize environmental responsibility</li>
                                <li>Consider secondhand and vintage shopping for unique, pre-loved items</li>
                                <li>Learn basic mending and care techniques to extend the life of your clothes</li>
                                <li>Donate or recycle clothing you no longer wear rather than discarding it</li>
                            </ul>
                        </div>
                        <div className="sustainable-wardrobe-image">
                            <img src={placeholderImages.wardrobe1} alt="Sustainable Wardrobe" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WardrobeEssentialsPage; 